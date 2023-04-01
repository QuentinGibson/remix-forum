import { NavLink, Outlet, useMatches } from "@remix-run/react";
import { Link } from "@remix-run/react";

export default function About() {
    const matches = useMatches();
const {pathname} = matches[matches.length - 1];
const isActive = (path: string) => path === pathname ? "active" : ""
  return (
<main id="tt-pageContent" className="tt-offset-small">
    <div className="container">
        <div className="tt-tab-wrapper">
            <div className="tt-wrapper-inner">
                <ul className="nav nav-tabs pt-tabs-default" role="tablist">
                    <li className="nav-item">
                        <NavLink className={`nav-link`} data-toggle="tab" to="/site/about" role="tab"><span>About</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={`nav-link`} data-toggle="tab" to="/site/guidelines" role="tab"><span>Guidelines</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={`nav-link`} data-toggle="tab" to="/site/faq" role="tab"><span>FAQ</span></NavLink>
                    </li>
                    <li className="nav-item tt-hide-xs">
                        <NavLink className={`nav-link`} data-toggle="tab" to="/site/terms" role="tab"><span>Terms of Service</span></NavLink>
                    </li>
                    <li className="nav-item tt-hide-md">
                        <NavLink className={`nav-link`} data-toggle="tab" to="/site/privacy" role="tab"><span>Privacy</span></NavLink>
                    </li>
                </ul>
            </div>
            <div className="tab-content">
        <Outlet/>
            </div>
        </div>
    </div>
</main>
  )
}