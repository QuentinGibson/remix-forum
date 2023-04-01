import { Outlet } from "@remix-run/react";

export default function MessageRoute() {
  return (
<main id="tt-pageContent" className="tt-offset-small">
  <div className="container">
    <div className="tt-messages-layout">
      <div className="row no-gutters">
        <div className="col-md-4 tt-aside" id="js-aside">
          <a href="#" className="tt-title-aside">
            <h2 className="tt-title">Messages</h2>
            <i className="tt-icon">
              <svg className="icon">
                <use xlinkHref="#icon-pencil" />
              </svg>
            </i>
          </a>
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
              </a>
              <a href="#" className="tt-btn-icon">
                <svg className="icon">
                  <use xlinkHref="#icon-filter" />
                </svg>
              </a>
            </div>
            <div
              className="tt-list-avatar"
              style={{overflow: "initial", overflowX: "scroll"}}
            >
              <a href="#" className="tt-item">
                <div className="tt-col-avatar">
                  <svg className="tt-icon">
                    <use xlinkHref="#icon-ava-t" />
                  </svg>
                </div>
                <div className="tt-col-description">
                  <h4 className="tt-title">
                    <span>Taylor</span> <span className="time">Feb 03</span>
                  </h4>
                  <div className="tt-message tt-select">
                    Taylor: need to see that
                  </div>
                </div>
              </a>
              <a href="#" className="tt-item">
                <div className="tt-col-avatar">
                  <svg className="tt-icon">
                    <use xlinkHref="#icon-ava-g" />
                  </svg>
                </div>
                <div className="tt-col-description">
                  <h4 className="tt-title">
                    <span>Green</span> <span className="time">Feb 02</span>
                  </h4>
                  <div className="tt-message tt-select">You: Alright ttyl</div>
                </div>
              </a>
              <a href="#" className="tt-item">
                <div className="tt-col-avatar">
                  <svg className="tt-icon">
                    <use xlinkHref="#icon-ava-k" />
                  </svg>
                </div>
                <div className="tt-col-description">
                  <h4 className="tt-title">
                    <span>Kevin</span> <span className="time">Jan 27</span>
                  </h4>
                  <div className="tt-message">
                    You: Business is good, but going a bit..
                  </div>
                </div>
              </a>
              <a href="#" className="tt-item">
                <div className="tt-col-avatar">
                  <svg className="tt-icon">
                    <use xlinkHref="#icon-ava-d" />
                  </svg>
                </div>
                <div className="tt-col-description">
                  <h4 className="tt-title">
                    <span>Dylan</span> <span className="time">Jan 24</span>
                  </h4>
                  <div className="tt-message">Dylan: modding fo skyrim</div>
                </div>
              </a>
              <a href="#" className="tt-item">
                <div className="tt-col-avatar">
                  <svg className="tt-icon">
                    <use xlinkHref="#icon-ava-p" />
                  </svg>
                </div>
                <div className="tt-col-description">
                  <h4 className="tt-title">
                    <span>Peterson</span> <span className="time">Jan 21</span>
                  </h4>
                  <div className="tt-message">You: Sent you that email</div>
                </div>
              </a>
              <a href="#" className="tt-item">
                <div className="tt-col-avatar">
                  <svg className="tt-icon">
                    <use xlinkHref="#icon-ava-s" />
                  </svg>
                </div>
                <div className="tt-col-description">
                  <h4 className="tt-title">
                    <span>Smith</span> <span className="time">Jan 20</span>
                  </h4>
                  <div className="tt-message">You: Let me know about that</div>
                </div>
              </a>
              <a href="#" className="tt-item">
                <div className="tt-col-avatar">
                  <svg className="tt-icon">
                    <use xlinkHref="#icon-ava-u" />
                  </svg>
                </div>
                <div className="tt-col-description">
                  <h4 className="tt-title">
                    <span>Usain</span> <span className="time">Jan 18</span>
                  </h4>
                  <div className="tt-message">
                    Usain: Will be online after 2pm
                  </div>
                </div>
              </a>
              <a href="#" className="tt-item">
                <div className="tt-col-avatar">
                  <svg className="tt-icon">
                    <use xlinkHref="#icon-ava-l" />
                  </svg>
                </div>
                <div className="tt-col-description">
                  <h4 className="tt-title">
                    <span>Larry</span> <span className="time">Jan 16</span>
                  </h4>
                  <div className="tt-message">Larry: :D</div>
                </div>
              </a>
              <a href="#" className="tt-item">
                <div className="tt-col-avatar">
                  <svg className="tt-icon">
                    <use xlinkHref="#icon-ava-j" />
                  </svg>
                </div>
                <div className="tt-col-description">
                  <h4 className="tt-title">
                    <span>Jordan</span> <span className="time">Jan 16</span>
                  </h4>
                  <div className="tt-message">You: Lets catch up later</div>
                </div>
              </a>
              <a href="#" className="tt-item">
                <div className="tt-col-avatar">
                  <svg className="tt-icon">
                    <use xlinkHref="#icon-ava-c" />
                  </svg>
                </div>
                <div className="tt-col-description">
                  <h4 className="tt-title">
                    <span>Clive</span> <span className="time">Jan 12</span>
                  </h4>
                  <div className="tt-message">
                    Clive: Happy New Yero brother :)
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-8"><Outlet/></div>
      </div>
    </div>
  </div>
</main>
    
  )
}