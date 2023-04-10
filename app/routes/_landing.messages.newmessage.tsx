import { useLoaderData } from "@remix-run/react";
import { LoaderArgs, json } from "@remix-run/server-runtime";
import { useState } from "react";
import Avatar from "react-avatar";

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
  ];

  return json({ friendList: data })

};





export default function NewMessageRoute() {
  const { friendList } = useLoaderData<typeof loader>();
  const [visibleFriends, setVisibleFriends] = useState<User[]>(friendList);
  const [friends, setFriends] = useState<User[]>([]);
  function handleFriendSearch(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setVisibleFriends(friendList.filter((friend) => {
      return friend.name.toLowerCase().includes(value.toLowerCase());
    }))
  }
  function handleFriendClick(_e: any, friendId: number) {
    const friend = friendList.find((friend) => friend.id === friendId);
    if (friend) {
      setFriends([...friends, friend]);
    }
  }
  return (
    <>
      <div className="tt-title-content">
        <h2 className="tt-title">New message</h2>
      </div>
      <div className="tt-search-compose">
        <div>
          {friends.map((friend) => (
            <div className="tt-item">
              <Avatar name={friend.name} size="30" round={true} />
              <span className="tt-name">{friend.name}</span>
            </div>
          ))}
        </div>
        <div className="tt-input">
          <input
            type="text"
            className="tt-search-input"
            placeholder="Type a name or multiple names"
            onChange={handleFriendSearch}
          />
        </div>
        <div
          className="tt-search-results ps-container ps-theme-default ps-active-y"
          data-ps-id="fddd637f-fee1-46e3-9942-25514b97d18b"
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
    <button onClick={(e) => handleFriendClick(e, friend.id)} className="tt-item">
      <div className="tt-col-avatar">
        <Avatar className="tt-icon" name={friend.name} size="40" round={true} maxInitials={1} />
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