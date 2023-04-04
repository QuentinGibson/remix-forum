import { Link } from "@remix-run/react";
import Avatar from "react-avatar";
import { BsLockFill, BsPinFill } from "react-icons/bs";

type Thread = {
  id: number;
  icon: string;
  title: string;
  tags: string[];
  category: {
    id: number;
    name: string;
  };
  likes: number;
  replies: number;
  activity: string;
  views: number;
  isSelected: boolean;
  isPinned: boolean;
  isLocked: boolean;
};

export default function ThreadItem({ thread }: { thread: Thread }) {
  return (
    <div className={`tt-item ${thread.isSelected ? "tt-itemselect" : ""}`}>
      <div className="tt-col-avatar">
        <div className="tt-icon">
          <Avatar round size="40" value={thread.icon} />
        </div>
      </div>
      <div className="tt-col-description">
        <h6 className="tt-title">
          <Link className="flex items-center" to={`/thread/${thread.id}`}>
            {thread.isPinned && (
              <svg className="tt-icon">
                <BsPinFill />
              </svg>
            )}
            {thread.isLocked && (
              <svg className="tt-icon">
                <BsLockFill />
              </svg>
            )}

            {thread.title}
          </Link>
        </h6>
        <div className="row align-items-center no-gutters">
          <div className="col-11">
            <ul className="tt-list-badge">
              <li className="show-mobile">
                <Link to={`/feeds/${thread.category.id}`}>
                  <span className="tt-color01 tt-badge">
                    {thread.category.name}
                  </span>
                </Link>
              </li>
              {thread.tags.map((tag: any, index: number) => (
                <li key={index}>
                  <span style={{ cursor: "initial" }} className="tt-badge">
                    {tag}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-1 ml-auto show-mobile">
            <div className="tt-value">{thread.activity}</div>
          </div>
        </div>
      </div>
      <div className="tt-col-category">
        <Link to={`/feeds/${thread.category.id}`}>
          <span className="tt-color01 tt-badge">{thread.category.name}</span>
        </Link>
      </div>
      <div className="tt-col-value hide-mobile">{thread.likes}</div>
      <div className="tt-col-value tt-color-select hide-mobile">
        {thread.replies}
      </div>
      <div className="tt-col-value hide-mobile">{thread.views}</div>
      <div className="tt-col-value hide-mobile">{thread.activity}</div>
    </div>
  );
}
