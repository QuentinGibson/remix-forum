import { Link } from "@remix-run/react";
import { useState } from "react";
import { BsList, BsSearch, BsXCircle } from "react-icons/bs";

export default function Header() {
  const [mobileNav, setMobileNav] = useState(false)
  return (
    <>
      <nav className={`panel-menu ${ mobileNav ? "mmitemopen" : ""}`} id="mobile-menu" style={{}}>
        <div className="mmpanels">
          <div className="mmpanel mmopened mmcurrent" id="mm0">
            <ul>
              <li className="mm-close-parent" onClick={ () => setMobileNav(false)}>
                <button style={{width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center"  }} className="mm-close">
                  <p style={{margin: 0}}>Close</p>
                  <BsXCircle />
                </button>
              </li>
              <li>
                <Link to="/categories">
                  <span>Categories</span>
                </Link>
              </li>
              <li>
                <Link to="/site">
                  <span>Browse</span>
                </Link>
              </li>
              <li>
                <Link to="/create_topic">
                  <span>New</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header id="tt-header">
        <div className="container">
          <div className="row tt-row no-gutters">
            <div className="col-auto">
              <button className="toggle-mobile-menu" onClick={() => setMobileNav(prevState => !prevState)}>
                <BsList style={{ fontSize: 30 }} />
              </button>
              <div className="tt-logo">
                <Link to="/"><img src="/images/logo.png" alt="" /></Link>
              </div>
              <div className="tt-desktop-menu">
                <nav>
                  <ul>
                    <li><Link to="/categories"><span>Categories</span></Link></li>
                    <li><Link to="/site"><span>Browse</span></Link></li>
                    <li>
                      <Link to="/create_topic"><span>New</span></Link>
                      <ul>
                        <li>
                          <Link to="/create_topic"><span>New Topic</span></Link>
                        </li>

                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="tt-search">
                <button className="tt-search-toggle" data-toggle="modal" data-target="#modalAdvancedSearch">
                  <svg className="tt-icon">
                    <use xlinkHref="#icon-search"></use>
                  </svg>
                </button>
                <form className="search-wrapper">
                  <div className="search-form">
                    <input type="text" className="tt-search__input" placeholder="Search"></input>
                    <button style={{ display: "flex", alignItems: "center", height: "100%" }} className="tt-search__btn" type="submit">
                      <BsSearch />
                    </button>
                    <button className="tt-search__close">
                      <svg className="tt-icon">
                        <use xlinkHref="#cancel"></use>
                      </svg>
                    </button>
                  </div>
                  <div className="search-results">
                    <div className="tt-search-scroll">
                      <ul>
                        <li>
                          <a href="page-single-topic.html">
                            <h6 className="tt-title">Rdr2 secret easter eggs</h6>
                            <div className="tt-description">
                              Here’s what I’ve found in Red Dead Redem..
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="page-single-topic.html">
                            <h6 className="tt-title">Top 10 easter eggs in Red Dead Rede..</h6>
                            <div className="tt-description">
                              You can find these easter eggs in Red Dea..
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="page-single-topic.html">
                            <h6 className="tt-title">Red Dead Redemtion: Arthur Morgan..</h6>
                            <div className="tt-description">
                              Here’s what I’ve found in Red Dead Redem..
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="page-single-topic.html">
                            <h6 className="tt-title">Rdr2 secret easter eggs</h6>
                            <div className="tt-description">
                              Here’s what I’ve found in Red Dead Redem..
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="page-single-topic.html">
                            <h6 className="tt-title">Top 10 easter eggs in Red Dead Rede..</h6>
                            <div className="tt-description">
                              You can find these easter eggs in Red Dea..
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="page-single-topic.html">
                            <h6 className="tt-title">Red Dead Redemtion: Arthur Morgan..</h6>
                            <div className="tt-description">
                              Here’s what I’ve found in Red Dead Redem..
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <button type="button" className="tt-view-all" data-toggle="modal" data-target="#modalAdvancedSearch">Advanced Search</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-auto ml-auto">
              <div className="tt-account-btn">
                <Link to="/login" className="btn btn-primary">Log in</Link>
                <Link to="/join" className="btn btn-secondary">Sign up</Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}