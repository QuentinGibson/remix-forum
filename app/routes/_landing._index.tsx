import {
  useRouteError,
  isRouteErrorResponse,
  useLoaderData,
  Link,
} from "@remix-run/react";
import { json, LoaderArgs } from "@remix-run/server-runtime";
import { BsLockFill, BsPinFill } from "react-icons/bs";
import Avatar from "react-avatar"

type LoaderData = {
  threads: Awaited<ReturnType<typeof loader>>
}

type Thread = {
  id: number,
  icon: string,
  title: string,
  tags: string[],
  category: {
    id: number,
    name: string
  },
  likes: number,
  replies: number,
  activity: string,
  views: number,
  isSelected: boolean,
  isPinned: boolean,
  isLocked: boolean
}

export const loader = async ({request}: LoaderArgs) => {
const data = [
  {
    id: 1234,
    icon: "🎃",
    title: "Spooky Halloween Costume 2022",
    tags: [
      "holidays",
      "fashion"
    ],
    category: {id:4, name: "entertainment"},
    likes: 42,
    replies: 17,
    views: 5021,
    activity: "2h",
    isSelected: true,
    isPinned: true,
    isLocked: false
  },
  {
    id: 90453,
    icon: "🦸‍♀️",
    title: "Superhero Costume Contest 2023",
    tags: [
      "comics",
      "cosplay"
    ],
    category: {id:4, name: "entertainment"},
    likes: 27,
    replies: 33,
    views: 7345,
    activity: "3h",
    isSelected: true,
    isPinned: false,
    isLocked: true,
  },
  {
    id: 452,
    icon: "👑",
    title: "Royal Ball Costume Party 2024",
    tags: [
      "history",
      "fashion"
    ],
    category: {id: 10, name: "culture"},
    likes: 10,
    replies: 21,
    views: 1889,
    activity: "1h",
    isSelected: true,
    isPinned: false,
    isLock: false
  },
  {
    id: 121,
    icon: "🎭",
    title: "Theater Costume Design Competition 2022",
    tags: [
      "performing arts",
      "design"
    ],
    category: { id: 3, name:"arts"},
    likes: 63,
    replies: 41,
    views: 10689,
    activity: "5h",
    isSelected: false,
    isPinned: true,
    isLocked: true,
  },
  {
    id:54,
    icon: "🏆",
    title: "World Cup Football Fan Costume Contest 2023",
    tags: [],
    category: {id: 4, name:"entertainment"},
    likes: 94,
    replies: 52,
    views: 18921,
    activity: "6h",
    isSelected: true,
    isPinned: true,
    isLocked: true,
  },
  {
    id: 141234,
    icon: "🎉",
    title: "New Year's Eve Masquerade Ball 2024",
    tags: [
      "holidays",
      "celebration"
    ],
    category: {id: 4, name:"entertainment"},
    likes: 16,
    replies: 7,
    views: 1945,
    activity: "1h",
    isSelected: false,
    isPinned: true,
    isLocked: true,
  }
];
return json({threads: data})
   
}

function popupElement()  {
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

function ThreadElement({ thread }: { thread: Thread}) {
  return (
    <div className={`tt-item ${thread.isSelected ? "tt-itemselect" : ""}`}>
      <div className="tt-col-avatar">
<div className="tt-icon">
                <Avatar size="40" value={ thread.icon} />
              </div>
      </div>
      <div className="tt-col-description">
        <h6 className="tt-title">
          <Link className="flex items-center" to={`/thread/${thread.id}`}>
            {thread.isPinned && <svg className="tt-icon">
              <BsPinFill />
            </svg>}
            {thread.isLocked && <svg className="tt-icon">
              <BsLockFill />
            </svg>}

            {thread.title}
          </Link>
        </h6>
        <div className="row align-items-center no-gutters">
          <div className="col-11">
            <ul className="tt-list-badge">
              <li className="show-mobile">
                <Link to={`/categories/${thread.category.id}`}>
                  <span className="tt-color01 tt-badge">{thread.category.name}</span>
                </Link>
              </li>
              {thread.tags.map(((tag: any, index: number) => (
                <li key={index}>
                    <span style={{cursor: "initial"}} className="tt-badge">{tag}</span>
                </li>
              )))}
            </ul>
          </div>
          <div className="col-1 ml-auto show-mobile">
            <div className="tt-value">{thread.activity}</div>
          </div>
        </div>
      </div>
      <div className="tt-col-category">
                <Link to={`/categories/${thread.category.id}`}>
        <span className="tt-color01 tt-badge">{thread.category.name}</span>
        </Link>
      </div>
      <div className="tt-col-value hide-mobile">{thread.likes}</div>
      <div className="tt-col-value tt-color-select hide-mobile">{thread.replies}</div>
      <div className="tt-col-value hide-mobile">{thread.views}</div>
      <div className="tt-col-value hide-mobile">{thread.activity}</div>
    </div>
  )
}

// TODO: Paginate Threads
export default function IndexRoute() {
  const {threads} = useLoaderData<typeof loader>()
  const threadFeed = threads.map(thread => <ThreadElement key={thread.id} thread={thread} />)
  return (
    <main id="tt-pageContent" className="tt-offset-small">
  <div className="container">
    <div className="tt-topic-list">
      <div className="tt-list-header">
        <div className="tt-col-topic">Topic</div>
        <div className="tt-col-category">Category</div>
        <div className="tt-col-value hide-mobile">Likes</div>
        <div className="tt-col-value hide-mobile">Replies</div>
        <div className="tt-col-value hide-mobile">Views</div>
        <div className="tt-col-value">Activity</div>
      </div>

      {threadFeed}

      {/* Start with this */}

      {/* <div className="tt-row-btn">
        <button type="button" className="btn-icon js-topiclist-showmore">
          <svg className="tt-icon">
            <use xlinkHref="#icon-load_lore_icon" />
          </svg>
        </button>
      </div> */}

    </div>
  </div>
</main>

  )
}
export const ErrorBoundary = () => {
  const error = useRouteError()
  if (isRouteErrorResponse(error)) {
    return (
      <main id="tt-pageContent">
        <div className="container">
          <div className="tt-layout-404">
            <span className="tt-icon">
              <svg className="icon">
                <use xlinkHref="#icon-error_404" />
              </svg>
            </span>
            <h6 className="tt-title">ERROR 404</h6>
            <p>
              Sorry we can’t find what you are looking for, here’s some
              <br />
              <a href="index.html" className="tt-color-dark tt-underline-02">
                suggested topics
              </a>{" "}
              for you.
            </p>
          </div>
          <div className="tt-topic-list tt-offset-top-30">
            <div className="tt-list-search">
              <div className="tt-title">Suggested Topics</div>
              {/* tt-search */}
              <div className="tt-search">
                <form className="search-wrapper">
                  <div className="search-form">
                    <input
                      type="text"
                      className="tt-search__input"
                      placeholder="Search for topics"
                    />
                    <button className="tt-search__btn" type="submit">
                      <svg className="tt-icon">
                        <use xlinkHref="#icon-search" />
                      </svg>
                    </button>
                    <button className="tt-search__close">
                      <svg className="tt-icon">
                        <use xlinkHref="#icon-cancel" />
                      </svg>
                    </button>
                  </div>
                </form>
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
            <div className="tt-item">
              <div className="tt-col-avatar">
                <svg className="tt-icon">
                  <use xlinkHref="#icon-ava-n" />
                </svg>
              </div>
              <div className="tt-col-description">
                <h6 className="tt-title">
                  <a href="#">
                    Does Envato act against the authors of Envato markets?
                  </a>
                </h6>
                <div className="row align-items-center no-gutters hide-desktope">
                  <div className="col-auto">
                    <ul className="tt-list-badge">
                      <li className="show-mobile">
                        <a href="#">
                          <span className="tt-color05 tt-badge">music</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-auto ml-auto show-mobile">
                    <div className="tt-value">1d</div>
                  </div>
                </div>
              </div>
              <div className="tt-col-category">
                <span className="tt-color05 tt-badge">music</span>
              </div>
              <div className="tt-col-value hide-mobile">358</div>
              <div className="tt-col-value tt-color-select hide-mobile">68</div>
              <div className="tt-col-value hide-mobile">8.3k</div>
              <div className="tt-col-value hide-mobile">1d</div>
            </div>
            <div className="tt-item">
              <div className="tt-col-avatar">
                <svg className="tt-icon">
                  <use xlinkHref="#icon-ava-h" />
                </svg>
              </div>
              <div className="tt-col-description">
                <h6 className="tt-title">
                  <a href="#">
                    <svg className="tt-icon">
                      <use xlinkHref="#icon-locked" />
                    </svg>
                    We Want to Hear From You! What Would You Like?
                  </a>
                </h6>
                <div className="row align-items-center no-gutters hide-desktope">
                  <div className="col-auto">
                    <ul className="tt-list-badge">
                      <li className="show-mobile">
                        <a href="#">
                          <span className="tt-color06 tt-badge">movies</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-auto ml-auto show-mobile">
                    <div className="tt-value">2d</div>
                  </div>
                </div>
              </div>
              <div className="tt-col-category">
                <span className="tt-color06 tt-badge">movies</span>
              </div>
              <div className="tt-col-value hide-mobile">671</div>
              <div className="tt-col-value tt-color-select  hide-mobile">29</div>
              <div className="tt-col-value hide-mobile">1.3k</div>
              <div className="tt-col-value hide-mobile">2d</div>
            </div>
            <div className="tt-item">
              <div className="tt-col-avatar">
                <svg className="tt-icon">
                  <use xlinkHref="#icon-ava-j" />
                </svg>
              </div>
              <div className="tt-col-description">
                <h6 className="tt-title">
                  <a href="#">Seeking partner backend developer</a>
                </h6>
                <div className="row align-items-center no-gutters">
                  <div className="col-auto">
                    <ul className="tt-list-badge">
                      <li className="show-mobile">
                        <a href="#">
                          <span className="tt-color03 tt-badge">exchange</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="tt-badge">themeforest</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="tt-badge">elements</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-auto ml-auto show-mobile">
                    <div className="tt-value">2d</div>
                  </div>
                </div>
              </div>
              <div className="tt-col-category">
                <span className="tt-color13 tt-badge">movies</span>
              </div>
              <div className="tt-col-value hide-mobile">278</div>
              <div className="tt-col-value tt-color-select  hide-mobile">27</div>
              <div className="tt-col-value hide-mobile">1.4k</div>
              <div className="tt-col-value hide-mobile">2d</div>
            </div>
            <div className="tt-item">
              <div className="tt-col-avatar">
                <svg className="tt-icon">
                  <use xlinkHref="#icon-ava-t" />
                </svg>
              </div>
              <div className="tt-col-description">
                <h6 className="tt-title">
                  <a href="#">Cannot customize my intro</a>
                </h6>
                <div className="row align-items-center no-gutters">
                  <div className="col-auto">
                    <ul className="tt-list-badge">
                      <li className="show-mobile">
                        <a href="#">
                          <span className="tt-color07 tt-badge">video games</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="tt-badge">videohive</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="tt-badge">photodune</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-auto ml-auto show-mobile">
                    <div className="tt-value">2d</div>
                  </div>
                </div>
              </div>
              <div className="tt-col-category">
                <span className="tt-color07 tt-badge">video games</span>
              </div>
              <div className="tt-col-value hide-mobile">364</div>
              <div className="tt-col-value tt-color-select  hide-mobile">36</div>
              <div className="tt-col-value  hide-mobile">982</div>
              <div className="tt-col-value hide-mobile">2d</div>
            </div>
            <div className="tt-item">
              <div className="tt-col-avatar">
                <svg className="tt-icon">
                  <use xlinkHref="#icon-ava-k" />
                </svg>
              </div>
              <div className="tt-col-description">
                <h6 className="tt-title">
                  <a href="#">
                    <svg className="tt-icon">
                      <use xlinkHref="#icon-verified" />
                    </svg>
                    Microsoft Word and Power Point
                  </a>
                </h6>
                <div className="row align-items-center no-gutters hide-desktope">
                  <div className="col-auto">
                    <ul className="tt-list-badge">
                      <li className="show-mobile">
                        <a href="#">
                          <span className="tt-color08 tt-badge">youtube</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-auto ml-auto show-mobile">
                    <div className="tt-value">3d</div>
                  </div>
                </div>
              </div>
              <div className="tt-col-category">
                <span className="tt-color08 tt-badge">youtube</span>
              </div>
              <div className="tt-col-value  hide-mobile">698</div>
              <div className="tt-col-value tt-color-select  hide-mobile">78</div>
              <div className="tt-col-value  hide-mobile">2.1k</div>
              <div className="tt-col-value hide-mobile">3d</div>
            </div>
          </div>
        </div>
      </main>
    )
  }
}