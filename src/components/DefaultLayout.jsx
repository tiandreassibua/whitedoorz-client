import { Outlet } from "react-router-dom";

import NavMenu from "./NavMenu";
import Footer from "./Footer";

const DefaultLayout = () => {
  return (
    <>
      <NavMenu />
      <div className=" mx-10  justify-center font-roboto max-w-7xl lg:mx-auto  ">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default DefaultLayout;
