import type { LoaderArgs, DataFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node"
import { Link, NavLink, useFetcher, useLoaderData, useParams, useSearchParams } from "@remix-run/react"
import Avatar from "react-avatar"
import { BsBookmark, BsBookmarkFill, BsClock, BsEyeFill, BsFlagFill, BsHandThumbsDown, BsHandThumbsDownFill, BsHandThumbsUp, BsHandThumbsUpFill, BsReply, BsReplyFill, BsSearch, BsSearch, BsShareFill, BsX } from "react-icons/bs"
import { Markdown } from "~/components/markdown";
import {markdown} from "~/markdown.server"


export const loader = async ({ request }: LoaderArgs) => {
  const url = new URL(request.url)
  const search = new URLSearchParams(url.search);
  const searchParam = search.get("search") ?? ""
  const thread = {
    title: "Web Hosting Packages for ThemeForest WordPress",
    content: markdown(`# Get ready for Movember!
It’s time to channel your inner Magnum P.I., Ron Swanson or Hercule Poroit! It’s the time that all guys (or gals) love and all our partners hate It’s Movember!

Throughout November we will be inviting all community members to help raise awareness and funds for the lives of men affected by cancer and mental health problems via the Movember Foundation 10.

# How Does it Work?
Authors and customers with facial hair unite! Simply grow, groom, and share your facial hair during November! Even females can enter if they desire (be creative, ladies!). Be inspired by checking out last year’s highlights 28
      `),
    user: {
      id: "30jq9f09eq4jfei",
      name: "dylan89"
    },
    tags: [
      {
        id: 2,
        name: "exchange"
      },
      {
        id: 10,
        name: "themeforest"
      },
      {
        id: 15,
        name: "elements"
      }
    ],
    likes: 671,
    dislikes: 39,
    saves: 12,
    replies: 283,
    views: 10529,
    shares: 32,
    posts: [
      {
        content: markdown(`Finally!
Are there any special recommendations for design or an updated guide that includes new preview sizes, including retina displays?`),
        user: {
          name: "telsa02",
          id: "03j2qj9qf9034j"
        },
        isBestAnswer: false,
        isFlagged: false,
        likes: 19,
        dislikes: 19,
      }
    ]
  }

  const relatedTopics = [{
      id: "0293j4jf43",
    title: "Does Envato act against the authors of Envato markets?",
    category: { color: "orange", name: "category" },
    user: {
      id: "0293j4jf43",
      name: "Fyer"
    },
    likes: 358,
    replies: 68,
    views: 8301,
    activity: "1d"
  },
  {
      id: "0293j4jf43",
    title: "We Want to Hear From You! What Would You Like?",
    category: { color: "gray", name: "movies" },
    user: {
      id: "0293j4jf43",
      name: "Fyer"
    },
    likes: 358,
    replies: 68,
    views: 8301,
    activity: "1d"
  }, {
      id: "0293j4jf43",
    title: "Seeking partner backend developer",
    category: { color: "orange", name: "movies" },
    user: {
      id: "0293j4jf43",
      name: "Fyer"
    },
    likes: 358,
    replies: 68,
    views: 3331,
    activity: "1d"
  }, {
      id: "0293j4jf43",
    title: "Cannot customize my intro",
    category: { color: "blue", name: "video games" },
    user: {
      id: "0293j4jf43",
      name: "Fyer"
    },
    likes: 858,
    replies: 20,
    views: 3301,
    activity: "2d"
  }]

  const filteredRelatedTopics = relatedTopics.filter(topic => topic.title.includes(searchParam))
  console.log(filteredRelatedTopics)
  return json({ thread, related: filteredRelatedTopics })
}

function ThreadHeaderElment({ thread }) {
  return (
    <div className="tt-item">
      <div className="tt-single-topic">
        <div className="tt-item-header">
          <div className="tt-item-info info-top">
            <div className="tt-avatar-icon">
              <i className="tt-icon">
                <Avatar round size="40" name={thread.user.name} maxInitials={1} />
              </i>
            </div>
            <div className="tt-avatar-title">
              <Link to={`/user/${thread.user.id}`}>{thread.user.name}</Link>
            </div>
            <span style={{ display: "flex", alignItems: "center" }} className="tt-info-time">
              <i className="tt-icon">
                <BsClock />
              </i>
              6 Jan,2019
            </span>
          </div>
          <h3 className="tt-item-title">
            <span>{thread.title}</span>
          </h3>
          <div className="tt-item-tag">
            <ul className="tt-list-badge">
              <li>
                <span>
                  <span className="tt-color03 tt-badge">exchange</span>
                </span>
              </li>
              <li>
                <span>
                  <span className="tt-badge">themeforest</span>
                </span>
              </li>
              <li>
                <span>
                  <span className="tt-badge">elements</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="tt-item-description"><Markdown content={thread.content}/></div>
        <div className="tt-item-info info-bottom">
          <button style={{ display: "flex", flexDirection: "column" }} className="tt-icon-btn">
            <i className="tt-icon">
              <BsHandThumbsUpFill />
            </i>
            <span style={{ margin: 0 }} className="tt-text">
              {thread.likes}
            </span>
          </button>
          <button style={{ display: "flex", flexDirection: "column" }} className="tt-icon-btn">
            <i className="tt-icon">
              <BsHandThumbsDownFill />
            </i>
            <span style={{ margin: 0 }} className="tt-text">
              {thread.dislikes}

            </span>
          </button>
          <button style={{ display: "flex", flexDirection: "column" }} className="tt-icon-btn">
            <i className="tt-icon">
              <BsBookmark />
            </i>
            <span style={{ margin: 0 }} className="tt-text">
              {thread.saves}
            </span>
          </button>
          <div className="col-separator" />
          <button className="tt-icon-btn tt-hover-02 tt-small-indent">
            <i className="tt-icon">
              <BsShareFill />
            </i>
          </button>
          <button className="tt-icon-btn tt-hover-02 tt-small-indent">
            <i className="tt-icon">
              <BsFlagFill />
            </i>
          </button>
          <button className="tt-icon-btn tt-hover-02 tt-small-indent">
            <i className="tt-icon">
              <BsReplyFill />
            </i>
          </button>
        </div>
      </div>
    </div>
  )
}

function ThreadBodyElement({ thread }) {
  return (
    <article className={`tt-item ${thread.isBestAnswer ? "tt-wrapper-success" : ""} ${thread.isFlagged ? "tt-wrapper-danger" : ""}`} >
      <div className="tt-single-topic">
        <div className="tt-item-header pt-noborder">
          <div className="tt-item-info info-top">
            <div className="tt-avatar-icon">
              <i className="tt-icon">
                <Avatar size="40" round name={thread.user.name} maxInitials={1} />

              </i>
            </div>
            <div className="tt-avatar-title">
              <Link to={`/user/${thread.user.id}`}>{thread.user.name}</Link>
            </div>
            <span style={{ display: "flex", alignItems: "center" }} className="tt-info-time">
              <i className="tt-icon">
                <BsClock />
              </i>
              6 Jan,2019
            </span>
          </div>
        </div>
        <div className="tt-item-description"><Markdown content={thread.content} /></div>
        <div className="tt-item-info info-bottom">
          <button style={{ display: "flex", flexDirection: "column" }} className="tt-icon-btn">
            <i className="tt-icon">
              <BsHandThumbsUp />
            </i>
            <span style={{ margin: 0 }} className="tt-text">{thread.likes}</span>
          </button>
          <button style={{ display: "flex", flexDirection: "column" }} className="tt-icon-btn">
            <i className="tt-icon">
              <BsHandThumbsDown />
            </i>
            <span style={{ margin: 0 }} className="tt-text">{thread.dislikes}</span>
          </button>
          <div className="col-separator" />
          <button style={{ display: "flex", flexDirection: "column" }} className="tt-icon-btn tt-hover-02 tt-small-indent">
            <i className="tt-icon">
              <BsShareFill />
            </i>
          </button>
          <button style={{ display: "flex", flexDirection: "column" }} className="tt-icon-btn tt-hover-02 tt-small-indent">
            <i className="tt-icon">
              <BsFlagFill />
            </i>
          </button>
          <button style={{ display: "flex", flexDirection: "column" }} className="tt-icon-btn tt-hover-02 tt-small-indent">
            <i className="tt-icon">
              <BsReplyFill />
            </i>
          </button>
        </div>
      </div>
    </article>
  )
}

function RelatedThread({thread}) {
  const color = thread.category.color
  const colorKey = {
    orange: "tt-color05",
    blue: "tt-color03",
    gray: "tt-color04",
  }
  return (
    <div className="tt-item">
      <div className="tt-col-avatar">
          <Avatar size="40" round name={thread.user.name} maxInitials={1} />
      </div>
      <div className="tt-col-description">
        <h6 className="tt-title">
          <Link to={`/thread/${thread.id}`}>{thread.title}</Link>
        </h6>
        <div className="row align-items-center no-gutters hide-desktope">
          <div className="col-11">
            <ul className="tt-list-badge">
              <li className="show-mobile">
                <span className={`tt-color-04 tt-badge`}>{thread.category.name}</span>
              </li>
            </ul>
          </div>
          <div className="col-1 ml-auto show-mobile">
            <div className="tt-value">{thread.activity}</div>
          </div>
        </div>
      </div>
      <div className="tt-col-category">
        <span className={`${colorKey[color]} tt-badge`}>{thread.category.name}</span>
      </div>
      <div className="tt-col-value hide-mobile">{thread.likes}</div>
      <div className="tt-col-value tt-color-select hide-mobile">{thread.replies}</div>
      <div className="tt-col-value hide-mobile">{thread.views}</div>
      <div className="tt-col-value hide-mobile">{thread.activity}</div>
    </div>
  )
}

function newUserPopup() {
  return (
    <div className="tt-item tt-item-popup">
      <div className="tt-col-avatar">
        <svg className="tt-icon">
          <use xlinkHref="#icon-ava-f" />
        </svg>
      </div>
      <div className="tt-col-message">
        Looks like you are new here. Register for free, learn and contribute.
      </div>
      <div className="tt-col-btn">
        <button type="button" className="btn btn-primary">
          Log in
        </button>
        <button type="button" className="btn btn-secondary">
          Sign up
        </button>
        <button type="button" className="btn-icon">
          <svg className="tt-icon">
            <use xlinkHref="#icon-cancel" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default function SingleTreadRoute() {
  const { thread, related } = useLoaderData<typeof loader>()
  const users = [...thread.posts.map(post => post.user), thread.user]
  const postFetcher = useFetcher()
  const searchFetcher = useFetcher()
  const [params, setParams] = useSearchParams()
  const repliesParam = params.get("replies")
  const searchParam = params.get("search") || ""

  let optimisticRelated = [...related]

  if (searchFetcher.state === "loading") {
    optimisticRelated = optimisticRelated.filter((relatedThread) => relatedThread.title.toLowerCase().includes(searchParam))
  }
  const RelatedElements = optimisticRelated.map((relatedThread, key) => <RelatedThread thread={relatedThread} key={key} />)
  return (
    <main id="tt-pageContent">
      <div className="container">
        <div className="tt-single-topic-list">
          <ThreadHeaderElment thread={thread} />
          {/* InfoBOX */}
          <div className="tt-item">
            <div className="tt-info-box">
              <h6 className="tt-title">Thread Status</h6>
              <div className="tt-row-icon">
                <div className="tt-item">
                  <span style={{ display: "flex", flexDirection: "column" }} className="tt-icon-btn tt-position-bottom">
                    <i className="tt-icon">
                      <BsReplyFill />

                    </i>
                    <span className="tt-text">{thread.replies}</span>
                  </span>
                </div>
                <div className="tt-item">
                  <span style={{ display: "flex", flexDirection: "column" }} className="tt-icon-btn tt-position-bottom">
                    <i className="tt-icon">
                      <BsEyeFill />
                    </i>
                    <span className="tt-text">{thread.views}</span>
                  </span>
                </div>
                <div className="tt-item">
                  <span style={{ display: "flex", flexDirection: "column" }} className="tt-icon-btn tt-position-bottom">
                    <i className="tt-icon">
                      <BsHandThumbsUpFill />
                    </i>
                    <span className="tt-text">{thread.likes}</span>
                  </span>
                </div>
                <div className="tt-item">
                  <span style={{ display: "flex", flexDirection: "column" }} className="tt-icon-btn tt-position-bottom">
                    <i className="tt-icon">
                      <BsBookmarkFill />
                    </i>
                    <span className="tt-text">{thread.saves}</span>
                  </span>
                </div>
                <div className="tt-item">
                  <span className="tt-icon-btn tt-position-bottom">
                    <i className="tt-icon">
                      <BsShareFill />
                    </i>
                    <span className="tt-text">{thread.shares}</span>
                  </span>
                </div>
              </div>
              <hr />
              <h6 className="tt-title">Frequent Posters</h6>

              <div className="tt-row-icon">
                {users.map((user, key) => {
                  return (
                    <div key={key} className="tt-item">
                      <Link to={`/user/${user.id}`} className=" tt-icon-avatar">
                        <Avatar size="40" round maxInitials={1} name={user.name} />
                      </Link>
                    </div>
                  )
                })}
              </div>
              <hr />
              <div className="row-object-inline form-default">
                <h6 className="tt-title">Sort replies by:</h6>
                <ul className="tt-list-badge tt-size-lg">
                  <li>
                    <Link preventScrollReset to={{search: "?replies=recent"}}>
                      <span className={`${repliesParam === "recent" ? "tt-color02" : ""} tt-badge`}>Recent</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={`?replies=mostliked`} preventScrollReset>
                      <span className={`${repliesParam === "mostliked" ? "tt-color02" : ""} tt-badge`}>Most Liked</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={`?replies=longest`} preventScrollReset>
                      <span className={`${repliesParam === "longest" ? "tt-color02" : ""} tt-badge`}>Longest</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={`?replies=shortest`} preventScrollReset>
                      <span className={`${repliesParam === "shortest" ? "tt-color02" : ""} tt-badge`}>Shortest</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={`?replies=acceptedanswers`} preventScrollReset>
                      <span className={`${repliesParam === "acceptedanswers" ? "tt-color02" : ""} tt-badge`}>Accepted Answers</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {thread.posts.map((post, index) =>
            <ThreadBodyElement key={index} thread={post} />
          )}
        </div>
        <div className="tt-wrapper-inner">
          <h4 className="tt-title-separator">
            <span>You’ve reached the end of replies</span>
          </h4>
        </div>
        <div className="tt-topic-list">

        </div>
        <div className="tt-wrapper-inner">
          <postFetcher.Form method="post">
            <div className="pt-editor form-default">
              <h6 className="pt-title">Post Your Reply</h6>
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
                {/* Make a preview feature */}
                <div className="col-right tt-hidden-mobile">
                  <button className="btn btn-primary">
                    Preview
                  </button>
                </div>
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  className="form-control"
                  rows={5}
                  placeholder="Enter your reply here..."
                  defaultValue={""}
                />
              </div>
              <div className="pt-row">
                <div className="col-auto">
                  <div className="checkbox-group">
                    <input
                      type="checkbox"
                      id="checkBox21"
                      name="subscribe"
                      defaultChecked={false}
                    />
                    <label htmlFor="checkBox21">
                      <span className="check" />
                      <span className="box" />
                      <span className="tt-text">Subscribe to this topic.</span>
                    </label>
                  </div>
                </div>
                <div className="col-auto">
                  <button className="btn btn-secondary btn-width-lg" type="submit">
                    Reply
                  </button>
                </div>
              </div>
            </div>
          </postFetcher.Form>
        </div>
        <div className="tt-topic-list tt-ofset-30">
          <div className="tt-list-search">
            <div className="tt-title">Suggested Topics</div>
            {/* tt-search */}
            <div className="tt-search">
              <searchFetcher.Form className="search-wrapper">
                <div className="search-form">
                  <input
                    type="text"
                    className="tt-search__input"
                    name="search"
                    placeholder="Search for topics"
                  />
                  <button style={{ height: "100%" }} className="tt-search__btn" type="submit">
                    <BsSearch />
                  </button>
                </div>
              </searchFetcher.Form>
            </div>
            {/* /tt-search */}
          </div>
          <div className="tt-list-header tt-border-bottom">
            <div className="tt-col-topic">Topic</div>
            <div className="tt-col-category">Category</div>
            <div className="tt-col-value hide-mobile">Likes</div>
            <div className="tt-col-value hide-mobile">Replies</div>
            <div className="tt-col-value hide-mobile">Views</div>
            <div className="tt-col-value">Activity</div>
          </div>

          {RelatedElements}
          <div className="tt-row-btn">
            <button type="button" className="btn-icon js-topiclist-showmore">
              <svg className="tt-icon">

                <use xlinkHref="#icon-load_lore_icon" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </main>


  )
}

export const action = async ({request}: DataActionArgs) => {
  
}