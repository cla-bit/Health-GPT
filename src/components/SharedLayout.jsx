import {Outlet} from "react-router-dom"
import Header from "./Header"

const SharedLayout = () => {
  return (
    <>
    <Header header="Sign in"/>
    <Outlet/>
    </>
  );
}

export default SharedLayout;
