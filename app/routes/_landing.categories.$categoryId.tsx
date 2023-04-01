import { Link } from "@remix-run/react";

export default function CategoryRoute() {
return (
  <main id="tt-pageContent">
  <div className="container">
    <div className="tt-catSingle-title">
      <div className="tt-innerwrapper tt-row">
        <div className="tt-col-left">
          <ul className="tt-list-badge">
            <li>
              <Link to="/">
                <span className="tt-color01 tt-badge">politics</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="ml-left tt-col-right">
          <div className="tt-col-item">
            <h2 className="tt-value">Threads - 1,245</h2>
          </div>
          <div className="tt-col-item">
            <a href="#" className="tt-btn-icon">
              <i className="tt-icon">
                <svg>
                  <use xlinkHref="#icon-favorite" />
                </svg>
              </i>
            </a>
          </div>
          <div className="tt-col-item">
            <div className="tt-search">
              <button
                className="tt-search-toggle"
                data-toggle="modal"
                data-target="#modalAdvancedSearch"
              >
                <svg className="tt-icon">
                  <use xlinkHref="#icon-search" />
                </svg>
              </button>
              <form className="search-wrapper">
                <div className="search-form">
                  <input
                    type="text"
                    className="tt-search__input"
                    placeholder="Search in politics"
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
        </div>
      </div>
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
        </ul>
      </div>
    </div>
    <div className="tt-topic-list">
      <div className="tt-list-header">
        <div className="tt-col-topic">Topic</div>
        <div className="tt-col-category">Category</div>
        <div className="tt-col-value hide-mobile">Likes</div>
        <div className="tt-col-value hide-mobile">Replies</div>
        <div className="tt-col-value hide-mobile">Views</div>
        <div className="tt-col-value">Activity</div>
      </div>
      <div className="tt-item tt-itemselect">
        <div className="tt-col-avatar">
          <svg className="tt-icon">
            <use xlinkHref="#icon-ava-k" />
          </svg>
        </div>
        <div className="tt-col-description">
          <h6 className="tt-title">
            <a href="#">
              <svg className="tt-icon">
                <use xlinkHref="#icon-pinned" />
              </svg>
              Halloween Costume Contest 2018
            </a>
          </h6>
          <div className="row align-items-center no-gutters">
            <div className="col-11">
              <ul className="tt-list-badge">
                <li className="show-mobile">
                  <a href="#">
                    <span className="tt-color01 tt-badge">politics</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="tt-badge">contests</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="tt-badge">authors</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-1 ml-auto show-mobile">
              <div className="tt-value">1h</div>
            </div>
          </div>
        </div>
        <div className="tt-col-category">
          <span className="tt-color01 tt-badge">politics</span>
        </div>
        <div className="tt-col-value hide-mobile">985</div>
        <div className="tt-col-value tt-color-select hide-mobile">502</div>
        <div className="tt-col-value hide-mobile">15.1k</div>
        <div className="tt-col-value hide-mobile">1h</div>
      </div>
      <div className="tt-item tt-itemselect">
        <div className="tt-col-avatar">
          <svg className="tt-icon">
            <use xlinkHref="#icon-ava-l" />
          </svg>
        </div>
        <div className="tt-col-description">
          <h6 className="tt-title">
            <a href="#">
              <svg className="tt-icon">
                <use xlinkHref="#icon-locked" />
              </svg>
              We’re removing Envato Credits from Market
            </a>
          </h6>
          <div className="row align-items-center no-gutters hide-desktope">
            <div className="col-11">
              <ul className="tt-list-badge">
                <li className="show-mobile">
                  <a href="#">
                    <span className="tt-color01 tt-badge">politics</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-1 ml-auto show-mobile">
              <div className="tt-value">2h</div>
            </div>
          </div>
        </div>
        <div className="tt-col-category">
          <span className="tt-color01 tt-badge">politics</span>
        </div>
        <div className="tt-col-value hide-mobile">584</div>
        <div className="tt-col-value tt-color-select  hide-mobile">35</div>
        <div className="tt-col-value hide-mobile">1.3k</div>
        <div className="tt-col-value hide-mobile">2h</div>
      </div>
      <div className="tt-item tt-itemselect">
        <div className="tt-col-avatar">
          <svg className="tt-icon">
            <use xlinkHref="#icon-ava-d" />
          </svg>
        </div>
        <div className="tt-col-description">
          <h6 className="tt-title">
            <a href="#">Web Hosting Packages for ThemeForest WordPress</a>
          </h6>
          <div className="row align-items-center no-gutters">
            <div className="col-11">
              <ul className="tt-list-badge">
                <li className="show-mobile">
                  <a href="#">
                    <span className="tt-color01 tt-badge">politics</span>
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
            <div className="col-1 ml-auto show-mobile">
              <div className="tt-value">2h</div>
            </div>
          </div>
        </div>
        <div className="tt-col-category">
          <span className="tt-color01 tt-badge">politics</span>
        </div>
        <div className="tt-col-value  hide-mobile">401</div>
        <div className="tt-col-value tt-color-select  hide-mobile">975</div>
        <div className="tt-col-value  hide-mobile">12.6k</div>
        <div className="tt-col-value hide-mobile">2h</div>
      </div>
      <div className="tt-item">
        <div className="tt-col-avatar">
          <svg className="tt-icon">
            <use xlinkHref="#icon-ava-c" />
          </svg>
        </div>
        <div className="tt-col-description">
          <h6 className="tt-title">
            <a href="#">Review Queue Changes for VideoHive &amp; PhotoDune</a>
          </h6>
          <div className="row align-items-center no-gutters">
            <div className="col-11">
              <ul className="tt-list-badge">
                <li className="show-mobile">
                  <a href="#">
                    <span className="tt-color01 tt-badge">politics</span>
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
            <div className="col-1 ml-auto show-mobile">
              <div className="tt-value">1d</div>
            </div>
          </div>
        </div>
        <div className="tt-col-category">
          <span className="tt-color01 tt-badge">politics</span>
        </div>
        <div className="tt-col-value  hide-mobile">308</div>
        <div className="tt-col-value tt-color-select  hide-mobile">660</div>
        <div className="tt-col-value  hide-mobile">8.3k</div>
        <div className="tt-col-value hide-mobile">1d</div>
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
            <div className="col-11">
              <ul className="tt-list-badge">
                <li className="show-mobile">
                  <a href="#">
                    <span className="tt-color01 tt-badge">politics</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-1 ml-auto show-mobile">
              <div className="tt-value">1d</div>
            </div>
          </div>
        </div>
        <div className="tt-col-category">
          <span className="tt-color01 tt-badge">politics</span>
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
            <div className="col-11">
              <ul className="tt-list-badge">
                <li className="show-mobile">
                  <a href="#">
                    <span className="tt-color01 tt-badge">politics</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-1 ml-auto show-mobile">
              <div className="tt-value">2d</div>
            </div>
          </div>
        </div>
        <div className="tt-col-category">
          <span className="tt-color01 tt-badge">politics</span>
        </div>
        <div className="tt-col-value hide-mobile">671</div>
        <div className="tt-col-value tt-color-select  hide-mobile">29</div>
        <div className="tt-col-value hide-mobile">1.3k</div>
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
            <div className="col-11">
              <ul className="tt-list-badge">
                <li className="show-mobile">
                  <a href="#">
                    <span className="tt-color01 tt-badge">politics</span>
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
            <div className="col-1 ml-auto show-mobile">
              <div className="tt-value">2d</div>
            </div>
          </div>
        </div>
        <div className="tt-col-category">
          <span className="tt-color01 tt-badge">politics</span>
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
            <div className="col-11">
              <ul className="tt-list-badge">
                <li className="show-mobile">
                  <a href="#">
                    <span className="tt-color01 tt-badge">politics</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-1 ml-auto show-mobile">
              <div className="tt-value">3d</div>
            </div>
          </div>
        </div>
        <div className="tt-col-category">
          <span className="tt-color01 tt-badge">politics</span>
        </div>
        <div className="tt-col-value  hide-mobile">698</div>
        <div className="tt-col-value tt-color-select  hide-mobile">78</div>
        <div className="tt-col-value  hide-mobile">2.1k</div>
        <div className="tt-col-value hide-mobile">3d</div>
      </div>
      <div className="tt-item">
        <div className="tt-col-avatar">
          <svg className="tt-icon">
            <use xlinkHref="#icon-ava-v" />
          </svg>
        </div>
        <div className="tt-col-description">
          <h6 className="tt-title">
            <a href="#">First website template got rejected.</a>
          </h6>
          <div className="row align-items-center no-gutters hide-desktope">
            <div className="col-11">
              <ul className="tt-list-badge">
                <li className="show-mobile">
                  <a href="#">
                    <span className="tt-color01 tt-badge">politics</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-1 ml-auto show-mobile">
              <div className="tt-value">3d</div>
            </div>
          </div>
        </div>
        <div className="tt-col-category">
          <span className="tt-color01 tt-badge">politics</span>
        </div>
        <div className="tt-col-value  hide-mobile">12</div>
        <div className="tt-col-value tt-color-select  hide-mobile">3</div>
        <div className="tt-col-value  hide-mobile">268</div>
        <div className="tt-col-value hide-mobile">3d</div>
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
                <use xlinkHref="#icon-pinned" />
              </svg>
              Proform or looking for contacting billing department
            </a>
          </h6>
          <div className="row align-items-center no-gutters">
            <div className="col-11">
              <ul className="tt-list-badge">
                <li className="show-mobile">
                  <a href="#">
                    <span className="tt-color01 tt-badge">politics</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="tt-badge">contests</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="tt-badge">authors</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-1 ml-auto show-mobile">
              <div className="tt-value">3d</div>
            </div>
          </div>
        </div>
        <div className="tt-col-category">
          <span className="tt-color01 tt-badge">politics</span>
        </div>
        <div className="tt-col-value hide-mobile">274</div>
        <div className="tt-col-value tt-color-select hide-mobile">114</div>
        <div className="tt-col-value  hide-mobile">2.3k</div>
        <div className="tt-col-value hide-mobile">3d</div>
      </div>
      <div className="tt-item">
        <div className="tt-col-avatar">
          <svg className="tt-icon">
            <use xlinkHref="#icon-ava-y" />
          </svg>
        </div>
        <div className="tt-col-description">
          <h6 className="tt-title">
            <a href="#">
              <svg className="tt-icon">
                <use xlinkHref="#icon-locked" />
              </svg>
              Refund for wrongly purchase HTML template
            </a>
          </h6>
          <div className="row align-items-center no-gutters hide-desktope">
            <div className="col-11">
              <ul className="tt-list-badge">
                <li className="show-mobile">
                  <a href="#">
                    <span className="tt-color01 tt-badge">politics</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-1 ml-auto show-mobile">
              <div className="tt-value">3d</div>
            </div>
          </div>
        </div>
        <div className="tt-col-category">
          <span className="tt-color01 tt-badge">politics</span>
        </div>
        <div className="tt-col-value hide-mobile">657</div>
        <div className="tt-col-value tt-color-select hide-mobile">177</div>
        <div className="tt-col-value hide-mobile">2.6k</div>
        <div className="tt-col-value hide-mobile">3d</div>
      </div>
      <div className="tt-item">
        <div className="tt-col-avatar">
          <svg className="tt-icon">
            <use xlinkHref="#icon-ava-s" />
          </svg>
        </div>
        <div className="tt-col-description">
          <h6 className="tt-title">
            <a href="#">Why all my affiliate balance is pending?</a>
          </h6>
          <div className="row align-items-center no-gutters">
            <div className="col-11">
              <ul className="tt-list-badge">
                <li className="show-mobile">
                  <a href="#">
                    <span className="tt-color01 tt-badge">politics</span>
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
            <div className="col-1 ml-auto show-mobile">
              <div className="tt-value">4d</div>
            </div>
          </div>
        </div>
        <div className="tt-col-category">
          <span className="tt-color01 tt-badge">politics</span>
        </div>
        <div className="tt-col-value hide-mobile">37</div>
        <div className="tt-col-value tt-color-select hide-mobile">31</div>
        <div className="tt-col-value hide-mobile">257</div>
        <div className="tt-col-value hide-mobile">4d</div>
      </div>
      <div className="tt-item">
        <div className="tt-col-avatar">
          <svg className="tt-icon">
            <use xlinkHref="#icon-ava-l" />
          </svg>
        </div>
        <div className="tt-col-description">
          <h6 className="tt-title">
            <a href="#">Google snippets wordpress plugin</a>
          </h6>
          <div className="row align-items-center no-gutters">
            <div className="col-11">
              <ul className="tt-list-badge">
                <li className="show-mobile">
                  <a href="#">
                    <span className="tt-color01 tt-badge">politics</span>
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
            <div className="col-1 ml-auto show-mobile">
              <div className="tt-value">4d</div>
            </div>
          </div>
        </div>
        <div className="tt-col-category">
          <span className="tt-color01 tt-badge">politics</span>
        </div>
        <div className="tt-col-value hide-mobile">987</div>
        <div className="tt-col-value tt-color-select hide-mobile">271</div>
        <div className="tt-col-value hide-mobile">3.8k</div>
        <div className="tt-col-value hide-mobile">4d</div>
      </div>
      <div className="tt-item">
        <div className="tt-col-avatar">
          <svg className="tt-icon">
            <use xlinkHref="#icon-ava-n" />
          </svg>
        </div>
        <div className="tt-col-description">
          <h6 className="tt-title">
            <a href="#">How to use Team Listing?</a>
          </h6>
          <div className="row align-items-center no-gutters hide-desktope">
            <div className="col-11">
              <ul className="tt-list-badge">
                <li className="show-mobile">
                  <a href="#">
                    <span className="tt-color01 tt-badge">politics</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-1 ml-auto show-mobile">
              <div className="tt-value">5d</div>
            </div>
          </div>
        </div>
        <div className="tt-col-category">
          <span className="tt-color01 tt-badge">politics</span>
        </div>
        <div className="tt-col-value hide-mobile">324</div>
        <div className="tt-col-value tt-color-select hide-mobile">163</div>
        <div className="tt-col-value hide-mobile">2.3k</div>
        <div className="tt-col-value hide-mobile">5d</div>
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
 )
}