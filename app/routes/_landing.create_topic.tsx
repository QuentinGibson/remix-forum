import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/server-runtime";
import { BsSearch } from "react-icons/bs";
export const loader = async ({ request, params }: LoaderArgs) => {
  const categories = [
    { name: "entertainment", id: "4" },
    { name: "arts", id: "1" },
    { name: "sports", id: "3" },
  ];
  return json({ categories });
};
export default function CreateTopicRoute() {
  const { categories } = useLoaderData();
  const categoriesOptions = categories.map((category) => (
    <option value={category.id}>{category.name}</option>
  ));
  return (
    <main id="tt-pageContent">
      <div className="container">
        <div className="tt-wrapper-inner">
          <h1 className="tt-title-border">Create New Topic</h1>
          <form className="form-default form-create-topic">
            <div className="form-group">
              <label htmlFor="inputTopicTitle">Topic Title</label>
              <div className="tt-value-wrapper">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="inputTopicTitle"
                  placeholder="Subject of your topic"
                />
                <span className="tt-value-input">99</span>
              </div>
              <div className="tt-note">
                Describe your topic well, while keeping the subject as short as
                possible.
              </div>
            </div>
            <div className="pt-editor">
              <h6 className="pt-title">Topic Body</h6>
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
                  placeholder="Lets get started"
                  defaultValue={""}
                />
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group">
                    <label htmlFor="inputTopicTitle">Category</label>
                    <select className="form-control">
                      {categoriesOptions}
                    </select>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="form-group">
                    <label htmlFor="inputTopicTags">Tags</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="inputTopicTags"
                      placeholder="Use comma to separate tags"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-auto ml-md-auto">
                  <a href="#" className="btn btn-secondary btn-width-lg">
                    Create Post
                  </a>
                </div>
              </div>
            </div>
          </form>
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
                  <button
                    style={{ height: "100%" }}
                    className="tt-search__btn"
                    type="submit"
                  >
                    <BsSearch />
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
            <div className="tt-col-value hide-mobile">674</div>
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
  );
}
