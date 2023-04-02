import { Link, NavLink, Outlet } from "@remix-run/react"
import Avatar from "react-avatar"

export default function SingleUserRoute() {
  return (
    <main id="tt-pageContent" className="tt-offset-small">
      <div className="tt-wrapper-section">
        <div className="container">
          <div className="tt-user-header">
            <div className="tt-col-avatar">
              <div className="tt-icon">
                <Avatar size="40" round name="Dylan89" maxInitials={1} />
              </div>
            </div>
            <div className="tt-col-title">
              <div className="tt-title">
                <a href="#">Dylan89</a>
              </div>
              <ul className="tt-list-badge">
                <li>
                  <a href="#">
                    <span className="tt-color14 tt-badge">LVL : 26</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="tt-col-btn" id="js-settings-btn">
              <div className="tt-list-btn">
                {/* TODO: Set up user in recipient field */}
                <Link to={`/messages/newmessage`} className="btn btn-primary">
                  Message
                </Link>
                {/* TODO: Set up path for new follows */}
                <Link to={"#"} className="btn btn-secondary">
                  Follow
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="tt-tab-wrapper">
          <div className="tt-wrapper-inner">
            <ul className="nav nav-tabs pt-tabs-default" role="tablist">
              <li className="nav-item show">
                <NavLink
                  className="nav-link"
                  data-toggle="tab"
                  to={{ pathname: "/user/fakuserid23/activity" }}
                  role="tab"
                >
                  <span>Activity</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  data-toggle="tab"
                  to={{ pathname: "/user/fakuserid23/threads"}}
                  role="tab"
                >
                  <span>Threads</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  data-toggle="tab"
                  to={{ pathname: "/user/fakuserid23/replies"}}
                  role="tab"
                >
                  <span>Replies</span>
                </NavLink>
              </li>
              <li className="nav-item tt-hide-xs">
                <NavLink
                  className="nav-link"
                  data-toggle="tab"
                  to={{ pathname: "/user/fakuserid23/followers"}}
                  role="tab"
                >
                  <span>526 Followers</span>
                </NavLink>
              </li>
              <li className="nav-item tt-hide-md">
                <NavLink
                  className="nav-link"
                  data-toggle="tab"
                  to={"/user/fakuserid23/following"}
                  role="tab"
                >
                  <span>489 Following</span>
                </NavLink>
              </li>
              <li className="nav-item tt-hide-md">
                <NavLink
                  className="nav-link"
                  data-toggle="tab"
                  to={"/user/fakuserid23/categories"}
                  role="tab"
                >
                  <span>Categories</span>
                </NavLink>
              </li>
            </ul>
          </div>
          <Outlet />
        </div>
      </div>
    </main>
  )
}