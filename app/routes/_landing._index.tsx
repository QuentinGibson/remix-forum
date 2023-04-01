import {
  useRouteError,
  isRouteErrorResponse,
} from "@remix-run/react";
export default function IndexRoute() {
  return (
    <><main id="tt-pageContent">
  <div className="tt-custom-mobile-indent container">
    <div className="tt-categories-title">
      <div className="tt-title">Categories</div>
      <div className="tt-search">
        <form className="search-wrapper">
          <div className="search-form">
            <input
              type="text"
              className="tt-search__input"
              placeholder="Search Categories"
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
    </div>
    <div className="tt-categories-list">
      <div className="row">
        <div className="col-md-6 col-lg-4">
          <div className="tt-item">
            <div className="tt-item-header">
              <ul className="tt-list-badge">
                <li>
                  <a href="#">
                    <span className="tt-color01 tt-badge">politics</span>
                  </a>
                </li>
              </ul>
              <h6 className="tt-title">
                <a href="page-categories-single.html">Threads - 1,245</a>
              </h6>
            </div>
            <div className="tt-item-layout">
              <div className="innerwrapper">
                Lets discuss about whats happening around the world politics.
              </div>
              <div className="innerwrapper">
                <h6 className="tt-title">Similar TAGS</h6>
                <ul className="tt-list-badge">
                  <li>
                    <a href="#">
                      <span className="tt-badge">world politics</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="tt-badge">human rights</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="tt-badge">trump</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="tt-badge">climate change</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="tt-badge">foreign policy</span>
                    </a>
                  </li>
                </ul>
              </div>
              <a href="#" className="tt-btn-icon">
                <i className="tt-icon">
                  <svg>
                    <use xlinkHref="#icon-favorite" />
                  </svg>
                </i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="tt-item">
            <div className="tt-item-header">
              <ul className="tt-list-badge">
                <li>
                  <a href="#">
                    <span className="tt-color02 tt-badge">video</span>
                  </a>
                </li>
              </ul>
              <h6 className="tt-title">
                <a href="page-categories-single.html">Threads - 368</a>
              </h6>
            </div>
            <div className="tt-item-layout">
              <div className="tt-innerwrapper">
                Lets discuss about whats happening around the world politics.
              </div>
              <div className="tt-innerwrapper">
                <h6 className="tt-title">Similar TAGS</h6>
                <ul className="tt-list-badge">
                  <li>
                    <a href="#">
                      <span className="tt-badge">movies</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="tt-badge">new movies</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="tt-badge">marvel movies</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="tt-badge">climate change</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="tt-badge">netflix</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="tt-badge">prime</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="tt-innerwrapper">
                <a href="#" className="tt-btn-icon">
                  <i className="tt-icon">
                    <svg>
                      <use xlinkHref="#icon-favorite" />
                    </svg>
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="tt-item">
            <div className="tt-item-header">
              <ul className="tt-list-badge">
                <li>
                  <a href="#">
                    <span className="tt-color03 tt-badge">exchange</span>
                  </a>
                </li>
              </ul>
              <h6 className="tt-title">
                <a href="page-categories-single.html">Threads - 381</a>
              </h6>
            </div>
            <div className="tt-item-layout">
              <div className="tt-innerwrapper">
                Lets discuss about whats happening around the world politics.
              </div>
              <div className="tt-innerwrapper">
                <h6 className="tt-title">Similar TAGS</h6>
                <ul className="tt-list-badge">
                  <li>
                    <a href="#">
                      <span className="tt-badge">world politics</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="tt-badge">human rights</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="tt-badge">trump</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="tt-badge">climate change</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="tt-badge">foreign policy</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="tt-innerwrapper">
                <a href="#" className="tt-btn-icon">
                  <i className="tt-icon">
                    <svg>
                      <use xlinkHref="#icon-favorite" />
                    </svg>
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="tt-item">
            <div className="tt-item-header">
              <ul className="tt-list-badge">
                <li>
                  <a href="#">
                    <span className="tt-color04 tt-badge">pets</span>
                  </a>
                </li>
              </ul>
              <h6 className="tt-title">
                <a href="page-categories-single.html">Threads - 98</a>
              </h6>
            </div>
            <div className="tt-item-layout">
              <div className="tt-innerwrapper">
                Lets discuss about whats happening around the world politics.
              </div>
              <div className="tt-innerwrapper">
                <h6 className="tt-title">Similar TAGS</h6>
                <ul className="tt-list-badge">
                  <li>
                    <a href="#">
                      <span className="tt-badge">world politics</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="tt-badge">human rights</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="tt-badge">trump</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="tt-badge">climate change</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="tt-badge">foreign policy</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="tt-innerwrapper">
                <a href="#" className="tt-btn-icon">
                  <i className="tt-icon">
                    <svg>
                      <use xlinkHref="#icon-favorite" />
                    </svg>
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="tt-item">
            <div className="tt-item-header">
              <ul className="tt-list-badge">
                <li>
                  <a href="#">
                    <span className="tt-color05 tt-badge">music</span>
                  </a>
                </li>
              </ul>
              <h6 className="tt-title">
                <a href="page-categories-single.html">Threads - 28</a>
              </h6>
            </div>
            <div className="tt-item-layout">
              <div className="tt-innerwrapper">
                Lets discuss about whats happening around the world politics.
              </div>
              <div className="tt-innerwrapper">
                <h6 className="tt-title">Similar TAGS</h6>
                <ul className="tt-list-badge">
                  <li>
                    <a href="#">
                      <span className="tt-badge">world politics</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="tt-badge">human rights</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="tt-badge">trump</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="tt-badge">climate change</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="tt-badge">foreign policy</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="tt-innerwrapper">
                <a href="#" className="tt-btn-icon">
                  <i className="tt-icon">
                    <svg>
                      <use xlinkHref="#icon-favorite" />
                    </svg>
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="tt-item">
            <div className="tt-item-header">
              <ul className="tt-list-badge">
                <li>
                  <a href="#">
                    <span className="tt-color06 tt-badge">movies</span>
                  </a>
                </li>
              </ul>
              <h6 className="tt-title">
                <a href="page-categories-single.html">Threads - 74</a>
              </h6>
            </div>
            <div className="tt-item-layout">
              <div className="tt-innerwrapper">
                Lets discuss about whats happening around the world politics.
              </div>
              <div className="tt-innerwrapper">
                <h6 className="tt-title">Similar TAGS</h6>
                <ul className="tt-list-badge">
                  <li>
                    <a href="#">
                      <span className="tt-badge">world politics</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="tt-badge">human rights</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="tt-badge">trump</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="tt-badge">climate change</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="tt-badge">foreign policy</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="tt-innerwrapper">
                <a href="#" className="tt-btn-icon">
                  <i className="tt-icon">
                    <svg>
                      <use xlinkHref="#icon-favorite" />
                    </svg>
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="tt-item">
            <div className="tt-item-header">
              <ul className="tt-list-badge">
                <li>
                  <a href="#">
                    <span className="tt-color15 tt-badge">nature</span>
                  </a>
                </li>
              </ul>
              <h6 className="tt-title">
                <a href="page-categories-single.html">Threads - 1,245</a>
              </h6>
            </div>
            <div className="tt-item-layout">
              <div className="tt-innerwrapper">
                Lets discuss about whats happening around the world politics.
              </div>
              <div className="tt-innerwrapper">
                <h6 className="tt-title">Similar TAGS</h6>
                <ul className="tt-list-badge">
                  <li>
                    <a href="#">
                      <span className="tt-badge">world politics</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="tt-badge">human rights</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="tt-badge">trump</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="tt-badge">climate change</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="tt-badge">foreign policy</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="tt-innerwrapper">
                <a href="#" className="tt-btn-icon">
                  <i className="tt-icon">
                    <svg>
                      <use xlinkHref="#icon-favorite" />
                    </svg>
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="tt-item">
            <div className="tt-item-header">
              <ul className="tt-list-badge">
                <li>
                  <a href="#">
                    <span className="tt-color07 tt-badge">video games</span>
                  </a>
                </li>
              </ul>
              <h6 className="tt-title">
                <a href="page-categories-single.html">Threads - 1,245</a>
              </h6>
            </div>
            <div className="tt-item-layout">
              <div className="tt-innerwrapper">
                Lets discuss about whats happening around the world politics.
              </div>
              <div className="tt-innerwrapper">
                <h6 className="tt-title">Similar TAGS</h6>
                <ul className="tt-list-badge">
                  <li>
                    <a href="#">
                      <span className="tt-badge">world politics</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="tt-badge">human rights</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="tt-badge">trump</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="tt-badge">climate change</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="tt-badge">foreign policy</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="tt-innerwrapper">
                <a href="#" className="tt-btn-icon">
                  <i className="tt-icon">
                    <svg>
                      <use xlinkHref="#icon-favorite" />
                    </svg>
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="tt-item">
            <div className="tt-item-header">
              <ul className="tt-list-badge">
                <li>
                  <a href="#">
                    <span className="tt-color08 tt-badge">youtube</span>
                  </a>
                </li>
              </ul>
              <h6 className="tt-title">
                <a href="page-categories-single.html">Threads - 1,245</a>
              </h6>
            </div>
            <div className="tt-item-layout">
              <div className="tt-innerwrapper">
                Lets discuss about whats happening around the world politics.
              </div>
              <div className="tt-innerwrapper">
                <h6 className="tt-title">Similar TAGS</h6>
                <ul className="tt-list-badge">
                  <li>
                    <a href="#">
                      <span className="tt-badge">world politics</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="tt-badge">human rights</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="tt-badge">trump</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="tt-badge">climate change</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="tt-badge">foreign policy</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="tt-innerwrapper">
                <a href="#" className="tt-btn-icon">
                  <i className="tt-icon">
                    <svg>
                      <use xlinkHref="#icon-favorite" />
                    </svg>
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="tt-item">
            <div className="tt-item-header">
              <ul className="tt-list-badge">
                <li>
                  <a href="#">
                    <span className="tt-color09 tt-badge">social</span>
                  </a>
                </li>
              </ul>
              <h6 className="tt-title">
                <a href="page-categories-single.html">Threads - 1,245</a>
              </h6>
            </div>
            <div className="tt-item-layout">
              <div className="tt-innerwrapper">
                Lets discuss about whats happening around the world politics.
              </div>
              <div className="tt-innerwrapper">
                <h6 className="tt-title">Similar TAGS</h6>
                <ul className="tt-list-badge">
                  <li>
                    <a href="#">
                      <span className="tt-badge">world politics</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="tt-badge">human rights</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="tt-badge">trump</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="tt-badge">climate change</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="tt-badge">foreign policy</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="tt-innerwrapper">
                <a href="#" className="tt-btn-icon">
                  <i className="tt-icon">
                    <svg>
                      <use xlinkHref="#icon-favorite" />
                    </svg>
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="tt-item">
            <div className="tt-item-header">
              <ul className="tt-list-badge">
                <li>
                  <a href="#">
                    <span className="tt-color10 tt-badge">science</span>
                  </a>
                </li>
              </ul>
              <h6 className="tt-title">
                <a href="page-categories-single.html">Threads - 1,245</a>
              </h6>
            </div>
            <div className="tt-item-layout">
              <div className="tt-innerwrapper">
                Lets discuss about whats happening around the world politics.
              </div>
              <div className="tt-innerwrapper">
                <h6 className="tt-title">Similar TAGS</h6>
                <ul className="tt-list-badge">
                  <li>
                    <a href="#">
                      <span className="tt-badge">world politics</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="tt-badge">human rights</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="tt-badge">trump</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="tt-badge">climate change</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="tt-badge">foreign policy</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="tt-innerwrapper">
                <a href="#" className="tt-btn-icon">
                  <i className="tt-icon">
                    <svg>
                      <use xlinkHref="#icon-favorite" />
                    </svg>
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="tt-item">
            <div className="tt-item-header">
              <ul className="tt-list-badge">
                <li>
                  <a href="#">
                    <span className="tt-color11 tt-badge">entertainment</span>
                  </a>
                </li>
              </ul>
              <h6 className="tt-title">
                <a href="page-categories-single.html">Threads - 1,245</a>
              </h6>
            </div>
            <div className="tt-item-layout">
              <div className="tt-innerwrapper">
                Lets discuss about whats happening around the world politics.
              </div>
              <div className="tt-innerwrapper">
                <h6 className="tt-title">Similar TAGS</h6>
                <ul className="tt-list-badge">
                  <li>
                    <a href="#">
                      <span className="tt-badge">world politics</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="tt-badge">human rights</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="tt-badge">trump</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="tt-badge">climate change</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="tt-badge">foreign policy</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="tt-innerwrapper">
                <a href="#" className="tt-btn-icon">
                  <i className="tt-icon">
                    <svg>
                      <use xlinkHref="#icon-favorite" />
                    </svg>
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="tt-item">
            <div className="tt-item-header">
              <ul className="tt-list-badge">
                <li>
                  <a href="#">
                    <span className="tt-color04 tt-badge">pets</span>
                  </a>
                </li>
              </ul>
              <h6 className="tt-title">
                <a href="page-categories-single.html">Threads - 1,245</a>
              </h6>
            </div>
            <div className="tt-item-layout">
              <div className="tt-innerwrapper">
                Lets discuss about whats happening around the world politics.
              </div>
              <div className="tt-innerwrapper">
                <h6 className="tt-title">Similar TAGS</h6>
                <ul className="tt-list-badge">
                  <li>
                    <a href="#">
                      <span className="tt-badge">world politics</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="tt-badge">human rights</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="tt-badge">trump</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="tt-badge">climate change</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="tt-badge">foreign policy</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="tt-innerwrapper">
                <a href="#" className="tt-btn-icon">
                  <i className="tt-icon">
                    <svg>
                      <use xlinkHref="#icon-favorite" />
                    </svg>
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="tt-item">
            <div className="tt-item-header">
              <ul className="tt-list-badge">
                <li>
                  <a href="#">
                    <span className="tt-color05 tt-badge">music</span>
                  </a>
                </li>
              </ul>
              <h6 className="tt-title">
                <a href="page-categories-single.html">Threads - 1,245</a>
              </h6>
            </div>
            <div className="tt-item-layout">
              <div className="tt-innerwrapper">
                Lets discuss about whats happening around the world politics.
              </div>
              <div className="tt-innerwrapper">
                <h6 className="tt-title">Similar TAGS</h6>
                <ul className="tt-list-badge">
                  <li>
                    <a href="#">
                      <span className="tt-badge">world politics</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="tt-badge">human rights</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="tt-badge">trump</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="tt-badge">climate change</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="tt-badge">foreign policy</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="tt-innerwrapper">
                <a href="#" className="tt-btn-icon">
                  <i className="tt-icon">
                    <svg>
                      <use xlinkHref="#icon-favorite" />
                    </svg>
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="tt-item">
            <div className="tt-item-header">
              <ul className="tt-list-badge">
                <li>
                  <a href="#">
                    <span className="tt-color06 tt-badge">movies</span>
                  </a>
                </li>
              </ul>
              <h6 className="tt-title">
                <a href="page-categories-single.html">Threads - 1,245</a>
              </h6>
            </div>
            <div className="tt-item-layout">
              <div className="tt-innerwrapper">
                Lets discuss about whats happening around the world politics.
              </div>
              <div className="tt-innerwrapper">
                <h6 className="tt-title">Similar TAGS</h6>
                <ul className="tt-list-badge">
                  <li>
                    <a href="#">
                      <span className="tt-badge">world politics</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="tt-badge">human rights</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="tt-badge">trump</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="tt-badge">climate change</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="tt-badge">foreign policy</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="tt-innerwrapper">
                <a href="#" className="tt-btn-icon">
                  <i className="tt-icon">
                    <svg>
                      <use xlinkHref="#icon-favorite" />
                    </svg>
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="tt-row-btn">
            <button type="button" className="btn-icon js-topiclist-showmore">
              <svg className="tt-icon">
                <use xlinkHref="#icon-load_lore_icon" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
    </>
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