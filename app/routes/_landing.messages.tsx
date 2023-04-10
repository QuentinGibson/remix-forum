import { LoaderArgs, json } from "@remix-run/node";
import { Link } from '@remix-run/react'
import { Outlet, useLoaderData } from "@remix-run/react";
import { BsFilter, BsPencil, BsSearch } from "react-icons/bs";
import Avatar from "react-avatar";

export const loader = async ({ request }: LoaderArgs) => {
  const data = [
    {
      id: '1',
      createdBy: new Date("2022-11-24").toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
      }),
      recipient: "Taylor",
      message: {
        user: {
          name: "Taylor",
        },
        content: "need to see that",
      },
      isRead: false,
    },
    {
      id: '2',
      createdBy: new Date("2022-11-28").toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
      }),
      recipient: "Greg",
      message: {
        user: {
          name: "Admin",
        },
        content:
          "great I will check it out. Don't wait too long in the future. Peace! I will miss you brother!",
      },
      isRead: true,
    },
    {
      id: '3',
      createdBy: new Date("2022-11-25").toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
      }),
      recipient: "Sasha",
      message: {
        user: {
          name: "Sasha",
        },
        content: "see you there! :) :P",
      },
      isRead: true,
    },
    {
      id: '4',
      createdBy: new Date("2022-11-15").toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
      }),
      recipient: "Marshall",
      message: {
        user: {
          name: "Marshall",
        },
        content: "I just saw it too. That was crazy!",
      },
      isRead: false,
    },
    {
      id: '5',
      createdBy: new Date("2022-12-02").toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
      }),
      recipient: "Ciara",
      message: {
        user: {
          name: "Ciara",
        },
        content: "He did not say that! No way!",
      },
      isRead: false,
    },
    {
      id: '6',
      createdBy: new Date("2022-11-22").toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
      }),
      recipient: "Max",
      message: {
        user: {
          name: "Max",
        },
        content: "I can't believe it either!",
      },
      isRead: false,
    },
    {
      id: '7',
      createdBy: new Date("2022-11-18").toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
      }),
      recipient: "Lila",
      message: {
        user: {
          name: "Lila",
        },
        content: "Are you going to the event tonight?",
      },
      isRead: true,
    },
    {
      id: '8',
      createdBy: new Date("2022-11-19").toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
      }),
      recipient: "Jordan",
      message: {
        user: {
          name: "Jordan",
        },
        content: "Let's catch up soon, it's been a while!",
      },
      isRead: true,
    },
    {
      id: '9',
      createdBy: new Date("2022-11-14").toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
      }),
      recipient: "Avery",
      message: {
        user: {
          name: "Avery",
        },
        content: "Did you finish the assignment yet?",
      },
      isRead: false,
    },
    {
      id: '10',
      createdBy: new Date("2022-11-30").toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
      }),
      recipient: "Dylan",
      message: {
        user: {
          name: "Dylan",
        },
        content: "Happy birthday! 🎉",
      },
      isRead: false,
    },
    {
      id: '11',
      createdBy: new Date("2022-11-26").toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
      }),
      recipient: "Mason",
      message: {
        user: {
          name: "Mason",
        },
        content: "I'll be there in 10 minutes.",
      },
      isRead: true,
    },
  ];
  return json({ chat: data });
};

function ConversationCard({ data }: any) {
  return (
    <Link to={`/messages/${data.id}`} className="tt-item">
      <div className="tt-col-avatar">
        <Avatar className="tt-icon" round size="40" name={data.message.user.name} maxInitials={1} />
      </div>
      <div className="tt-col-description">
        <h4 className="tt-title">
          <span>{data.message.user.name}</span> <span className="time">{data.createdBy}</span>
        </h4>
        <div className={`tt-message ${data.isRead ? "tt-select" : ""} `}>{data.message.user.name}: {data.message.content}</div>
      </div>
    </Link>
  )
}

export default function MessageRoute() {
  const { chat } = useLoaderData<typeof loader>();
  return (
    <main id="tt-pageContent" className="tt-offset-small">
      <div className="container">
        <div className="tt-messages-layout">
          <div className="row no-gutters">
            <div className="col-md-4 tt-aside" id="js-aside">
              <p className="tt-title-aside" style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignContent: "center" }}>
                <h2 className="tt-title">Messages</h2>
                <Link to={"/messages/newmessage"}>
                  <BsPencil className="icon" />
                </Link>
              </p>
              <div className="tt-all-avatar">
                <div className="tt-box-search">
                  <input
                    className="tt-input"
                    type="text"
                    placeholder="Search messages"
                  />
                  <a href="#" className="tt-btn-input">
                    <svg>
                      <use xlinkHref="#icon-search" />
                    </svg>
                    <BsSearch />
                  </a>
                  <a href="#" className="tt-btn-icon">
                    <svg className="icon">
                      <use xlinkHref="#icon-filter" />
                    </svg>
                    <BsFilter />
                  </a>
                </div>
                <div
                  className="tt-list-avatar"
                  style={{ overflow: "initial", overflowX: "scroll" }}
                >
                  {chat.map(conversation => (<ConversationCard key={conversation.id} data={conversation} />))}
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
