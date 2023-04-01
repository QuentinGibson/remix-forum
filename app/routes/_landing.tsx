import { Outlet } from "@remix-run/react";
import Header from "./header";

export default function LandingRoute() {
return (
  <>
    <Header />
    <Outlet/>
  </>
 )
}