export default function ConversationRoute() {
return (
  <>
  <div className="tt-title-content">
    <a href="#" className="tt-toggle-aside">
      <i className="tt-icon">
        <svg className="icon">
          <use xlinkHref="#icon-arrow_left" />
        </svg>
      </i>
    </a>
    <h2 className="tt-title">Kevin</h2>
    <div className="tt-description">Last seen 3h ago</div>
    <a href="#" className="tt-icon-link">
      <i className="tt-icon">
        <svg className="icon">
          <use xlinkHref="#notification" />
        </svg>
      </i>
    </a>
  </div>
  <div className="tt-list-time-topic">
    <div className="tt-item-title">
      <span>12/26/2017</span>
    </div>
    <div className="tt-item">
      <div className="tt-col-avatar">
        <svg className="tt-icon">
          <use xlinkHref="#icon-ava-k" />
        </svg>
      </div>
      <div className="tt-col-description">
        <h4 className="tt-title">
          <a href="#">Kevin</a> <span className="time">3:12 AM</span>
        </h4>
        <p>
          How is it going man? Did you see my new forum{" "}
          <a href="#" className="tt-underline-02">
            post?
          </a>
        </p>
      </div>
    </div>
    <div className="tt-item">
      <div className="tt-col-avatar">
        <svg className="tt-icon">
          <use xlinkHref="#icon-ava-a" />
        </svg>
      </div>
      <div className="tt-col-description">
        <h4 className="tt-title">
          <a href="#">azyrusmax</a> <span className="time">3:16 AM</span>
        </h4>
        <p>
          Hey, going good, what about you? yes I saw your post, great stuff man{" "}
          <a href="#" className="tt-underline-02">
            post?
          </a>
        </p>
      </div>
    </div>
    <div className="tt-item-title">
      <span>12/27/2017</span>
    </div>
    <div className="tt-item">
      <div className="tt-col-avatar">
        <svg className="tt-icon">
          <use xlinkHref="#icon-ava-k" />
        </svg>
      </div>
      <div className="tt-col-description">
        <h4 className="tt-title">
          <a href="#">Kevin</a> <span className="time">10:49 AM</span>
        </h4>
        <p>I’m doing good too, how’s business going?</p>
      </div>
    </div>
    <div className="tt-item">
      <div className="tt-col-avatar">
        <svg className="tt-icon">
          <use xlinkHref="#icon-ava-a" />
        </svg>
      </div>
      <div className="tt-col-description">
        <h4 className="tt-title">
          <a href="#">Kevin</a> <span className="time">10:49 AM</span>
        </h4>
        <p>Business is good, but going a bit slow than usual.</p>
      </div>
    </div>
    <div className="tt-item">
      <div className="tt-col-avatar">
        <svg className="tt-icon">
          <use xlinkHref="#icon-ava-k" />
        </svg>
      </div>
      <div className="tt-col-description">
        <h4 className="tt-title">
          <a href="#">Kevin</a> <span className="time">10:49 AM</span>
        </h4>
        <p>that happens during december, it will be fixed soon..</p>
      </div>
    </div>
  </div>
  <div className="tt-wrapper-inner">
    <div className="pt-editor form-default">
      <div className="pt-row">
        <div className="col-left">
          <ul className="pt-edit-btn">
            <li>
              <button type="button" className="btn-icon">
                <svg className="tt-icon">
                  <use xlinkHref="#icon-quote" />
                </svg>
              </button>
            </li>
            <li>
              <button type="button" className="btn-icon">
                <svg className="tt-icon">
                  <use xlinkHref="#icon-bold" />
                </svg>
              </button>
            </li>
            <li>
              <button type="button" className="btn-icon">
                <svg className="tt-icon">
                  <use xlinkHref="#icon-italic" />
                </svg>
              </button>
            </li>
            <li>
              <button type="button" className="btn-icon">
                <svg className="tt-icon">
                  <use xlinkHref="#icon-share_topic" />
                </svg>
              </button>
            </li>
            <li>
              <button type="button" className="btn-icon">
                <svg className="tt-icon">
                  <use xlinkHref="#icon-blockquote" />
                </svg>
              </button>
            </li>
            <li>
              <button type="button" className="btn-icon">
                <svg className="tt-icon">
                  <use xlinkHref="#icon-performatted" />
                </svg>
              </button>
            </li>
            <li className="hr" />
            <li>
              <button type="button" className="btn-icon">
                <svg className="tt-icon">
                  <use xlinkHref="#icon-upload_files" />
                </svg>
              </button>
            </li>
            <li>
              <button type="button" className="btn-icon">
                <svg className="tt-icon">
                  <use xlinkHref="#icon-bullet_list" />
                </svg>
              </button>
            </li>
            <li>
              <button type="button" className="btn-icon">
                <svg className="tt-icon">
                  <use xlinkHref="#icon-heading" />
                </svg>
              </button>
            </li>
            <li>
              <button type="button" className="btn-icon">
                <svg className="tt-icon">
                  <use xlinkHref="#icon-horizontal_line" />
                </svg>
              </button>
            </li>
            <li>
              <button type="button" className="btn-icon">
                <svg className="tt-icon">
                  <use xlinkHref="#icon-emoticon" />
                </svg>
              </button>
            </li>
            <li>
              <button type="button" className="btn-icon">
                <svg className="tt-icon">
                  <use xlinkHref="#icon-settings" />
                </svg>
              </button>
            </li>
            <li>
              <button type="button" className="btn-icon">
                <svg className="tt-icon">
                  <use xlinkHref="#icon-color_picker" />
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </div>
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