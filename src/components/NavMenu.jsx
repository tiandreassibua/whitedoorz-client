import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../asset/logo.png";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { Dropdown } from "antd";
import { getUserAuth, logout } from "../functions";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";

function NavList() {
  const navigate = useNavigate();
  const user = getUserAuth();
  const handleLogout = async (e) => {
    e.preventDefault();
    logout();
    navigate("/");
  };

  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="h5"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          to="/"
          className="text-lg font-semibold text-neutral-800 hover:text-blue-600 duration-200"
        >
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="h5"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          to="/"
          className="text-lg font-semibold text-neutral-800 hover:text-blue-600 duration-200"
        >
          Syarat & Ketentuan
        </Link>
      </Typography>
      <Typography
        as="li"
        color="blue-gray"
        variant="h5"
        className="p-1 font-medium"
      >
        <Dropdown
          className="hover:cursor-pointer"
          menu={{
            items: [
              {
                key: 1,
                label: (
                  <span
                    onClick={() => alert("profile")}
                    className="text-lg font-semibold text-neutral-800 hover:text-blue-600 duration-200"
                  >
                    Pesanan
                  </span>
                ),
              },
              {
                key: 1,
                label: (
                  <span
                    onClick={handleLogout}
                    className="text-lg font-semibold text-neutral-800 hover:text-blue-600 duration-200"
                  >
                    History
                  </span>
                ),
              },
            ],
          }}
        >
          <span className="text-lg font-semibold  text-neutral-800 hover:text-blue-600 duration-200">
            Pesanan
          </span>
        </Dropdown>
      </Typography>
      <Typography
        as="li"
        color="blue-gray"
        variant="h5"
        className="p-1 font-medium"
      >
        {localStorage.getItem("access_token") ? (
          <Dropdown
            className="hover:cursor-pointer"
            menu={{
              items: [
                {
                  key: 1,
                  label: (
                    <span
                      onClick={() => alert("profile")}
                      className="text-lg font-semibold text-neutral-800 hover:text-blue-600 duration-200"
                    >
                      Profile
                    </span>
                  ),
                },
                {
                  key: 1,
                  label: (
                    <span
                      onClick={handleLogout}
                      className="text-lg font-semibold text-neutral-800 hover:text-blue-600 duration-200"
                    >
                      Logout
                    </span>
                  ),
                },
              ],
            }}
          >
            <span className="text-lg font-semibold text-neutral-800 flex items-center gap-x-2">
              <FaRegUserCircle size={25} />
              <span className="text-blue-500">{user.firstName}</span>
            </span>
          </Dropdown>
        ) : (
          <Link
            to="/login"
            className="text-lg font-semibold text-neutral-800 hover:text-blue-600 duration-200"
          >
            Login
          </Link>
        )}
      </Typography>
    </ul>
  );
}

const NavMenu = () => {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="w-full">
      <Navbar className="mx-auto max-w-full rounded-none px-6 py-3 ">
        <div className="flex py-3  items-center justify-between text-blue-gray-900">
          <div className="flex flex-row items-center">
            <Link to="/">
              <img src={Logo} alt={Logo} className="h-12" />
            </Link>
          </div>

          <div className="hidden lg:block">
            <NavList />
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <IoClose className="h-6 w-6" strokeWidth={2} />
            ) : (
              <FaBars className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavMenu;