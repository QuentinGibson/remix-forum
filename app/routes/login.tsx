export default function LoginRoute() {
return (<main id="tt-pageContent" className="tt-offset-none">
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
            <div className="col ml-auto text-right">
              <a href="#" className="tt-underline">
                Forgot Password
              </a>
            </div>
          </div>
          <div className="form-group">
            <a href="#" className="btn btn-secondary btn-block">
              Log in
            </a>
          </div>
          <p>Or login with social network</p>
          <div className="row">
            <div className="col">
              <div className="form-group">
                <a href="#" className="btn btn-color01 btn-secondary btn-block">
                  <i>
                    <svg className="icon">
                      <use xlinkHref="#facebook-f-brands" />
                    </svg>
                  </i>
                  Facebook
                </a>
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <a href="#" className="btn btn-color02 btn-block">
                  <i>
                    <svg className="icon">
                      <use xlinkHref="#twitter-brands" />
                    </svg>
                  </i>
                  Twitter
                </a>
              </div>
            </div>
          </div>
          <p>
            Don’t have an account?{" "}
            <a href="#" className="tt-underline">
              Signup here
            </a>
          </p>
          <div className="tt-notes">
            By Logging in, signing in or continuing, I agree to Forum19’s{" "}
            <a href="#" className="tt-underline">
              Terms of Use
            </a>{" "}
            and{" "}
            <a href="#" className="tt-underline">
              Privacy Policy.
            </a>
          </div>
        </form>
      </div>
    </div>
  </div>
</main>
 )
}