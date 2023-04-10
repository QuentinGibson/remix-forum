import { useLoaderData } from "@remix-run/react";
import { LoaderArgs, json } from "@remix-run/server-runtime";
import { useState } from "react";
import Avatar from "react-avatar";
import { BsX } from "react-icons/bs";

interface User {
  id: number;
  name: string;
  username: string;
}
export const loader = async ({ request, params }: LoaderArgs) => {

  const data: User[] = [
    {
      id: 1,
      name: "Taylor",
      username: "@tails23",
    },
    {
      id: 2,
      name: "Kevin",
      username: "@kevin27",
    },
    {
      id: 3,
      name: "Green",
      username: "@green63",
    },
    {
      id: 4,
      name: "Dylan",
      username: "@dylan89",
    },
    {
      id: 5,
      name: "Smith",
      username: "@smith45",
    },
    {
      id: 6,
      name: "Morgan",
      username: "@morgan56",
    },
    {
      id: 7,
      name: "Jordan",
      username: "@jordan12",
    },
    {
      id: 8,
      name: "Alex",
      username: "@alex34",
    },
    {
      id: 9,
      name: "Riley",
      username: "@riley76",
    },
    {
      id: 10,
      name: "Casey",
      username: "@casey11",
    },
    {
      id: 11,
      name: "Jesse",
      username: "@jesse52",
    },
    {
      id: 12,
      name: "Pat",
      username: "@pat19",
    },
    {
      id: 13,
      name: "Jamie",
      username: "@jamie23",
    },
    {
      id: 14,
      name: "Cameron",
      username: "@cameron65",
    },
    {
      id: 15,
      name: "Sam",
      username: "@sam90",
    },
  ];

  return json({ friendList: data })

};





export default function NewMessageRoute() {
  const { friendList } = useLoaderData<typeof loader>();
  const [visibleFriends, setVisibleFriends] = useState<User[]>(friendList);
  const [friends, setFriends] = useState<User[]>([]);
  function handleFriendSearch(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    const searchedFriends = friendList.filter((friend) => {
      return friend.name.toLowerCase().includes(value.toLowerCase());
    })
    setVisibleFriends(searchedFriends)
  }
  function handleFriendClick(_e: any, friendId: number) {
    const friend = friendList.find((friend) => friend.id === friendId);
    if (friend) {
      setFriends([...friends, friend]);
      setVisibleFriends(visibleFriends.filter((friend) => friend.id !== friendId));
    }
  }
  function handleFriendRemove(friendId: number) {
    setFriends(prevState => prevState.filter((friend) => friend.id !== friendId));
    setVisibleFriends(prevState => [...prevState, friendList.find((friend) => friend.id === friendId) as User]);
  }
  return (
    <>
      <div className="tt-title-content">
        <h2 className="tt-title">New message</h2>
      </div>
      <div className="tt-search-compose">
        <div className="tt-input flex items-center">
          <div className="flex">
            {friends.map((friend) => (
              <div className="tt-item flex mx-2 items-center">
                <Avatar className="mr-2" name={friend.name} size="30" round={true} />
                <span className="tt-name">{friend.name}</span>
                <BsX onClick={() => handleFriendRemove(friend.id)} className="h-full font-bold" />
              </div>
            ))}
          </div>
          <input
            type="text"
            className="tt-search-input"
            placeholder="Type a name or multiple names"
            onChange={handleFriendSearch}
          />
        </div>
        <div
          className="flex flex-col items-start h-80 overflow-y-scroll"
        >
          {visibleFriends.map((friend) => (
            <Friend friend={friend} handleFriendClick={handleFriendClick} />
          ))}
        </div>
      </div>
      <div className="tt-wrapper-inner">
        <div className="pt-editor form-default">
          <div className="form-group">
            <textarea
              name="message"
              className="form-control"
              rows={5}
              placeholder="Write your message here"
              defaultValue={""}
            />
          </div>
          <div className="pt-row">
            <div className="col-auto ml-auto">
              <a href="#" className="btn btn-secondary btn-custom">
                Send
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
function Friend({ friend, handleFriendClick }: { friend: User, handleFriendClick: (e: any, friendId: number) => void }) {
  return (
    <button key={friend.id} onClick={(e) => handleFriendClick(e, friend.id)} className="flex mx-4 my-3">
      <div className="tt-col-avatar">
        <Avatar className="tt-icon mr-2" name={friend.name} size="40" round={true} maxInitials={1} />
      </div>
      <div className="tt-col-description">
        <h4 className="tt-title">
          <span>{friend.name}</span>
        </h4>
        <div className="tt-value">{friend.username}</div>
      </div>
    </button>
  );
}