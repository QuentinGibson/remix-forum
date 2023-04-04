import { Link } from "@remix-run/react";

export default function LoginRoute() {
  return (
    <main id="tt-pageContent" className="tt-offset-none">
      <div className="container">
        <div className="tt-loginpages-wrapper">
          <div className="tt-loginpages">
            <a href="index.html" className="tt-block-title">
              <img src="images/logo.png" alt="" />
              <div className="tt-title">Welcome to Forum19</div>
              <div className="tt-description">
                Log into your account to unlock true power of community.
              </div>
            </a>
            <form className="form-default">
              <div className="form-group">
                <label htmlFor="loginUserName">Username</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="loginUserName"
                  placeholder="azyrusmax"
                />
              </div>
              <div className="form-group">
                <label htmlFor="loginUserPassword">Password</label>
                <input
                  type="password"
                  name="name"
                  className="form-control"
                  id="loginUserPassword"
                  placeholder="************"
                />
              </div>
              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <div className="checkbox-group">
                      <input
                        type="checkbox"
                        id="settingsCheckBox01"
                        name="checkbox"
                      />
                      <label htmlFor="settingsCheckBox01">
                        <span className="check" />
                        <span className="box" />
                        <span className="tt-text">Remember me</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <a href="#" className="btn btn-secondary btn-block">
                  Log in
                </a>
              </div>

              <p>
                Don’t have an account?
                <Link to="/join" className="tt-underline">
                  Signup here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
