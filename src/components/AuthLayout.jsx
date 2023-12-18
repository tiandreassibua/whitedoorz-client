import { Outlet } from "react-router-dom";
import wdAuth from "../asset/wd-auth.png";

const AuthLayout = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto mt-20 shadow-lg font-inter">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center">
          <img src={wdAuth} alt="auth" className="w-full h-full object-cover" />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
