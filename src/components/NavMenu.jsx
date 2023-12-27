import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
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

const NavMenu = () => {
    const [search, setSearch] = useState("");
    const [openNav, setOpenNav] = useState(false);
    const navigate = useNavigate();
    const user = getUserAuth();
    const handleLogout = async (e) => {
        e.preventDefault();
        logout();
        navigate("/");
    };

    const handleWindowResize = () =>
        window.innerWidth >= 960 && setOpenNav(false);

    useEffect(() => {
        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        if (search === "") return;
        setSearch("");

        navigate(`/search/${search}`);
    };

    return (
        <div className="w-full font-poppins">
            <Navbar className="mx-auto max-w-full rounded-none px-6 py-3 ">
                <div className="grid grid-cols-2 md:flex md:justify-center lg:grid lg:grid-cols-3 py-3 items-center justify-between text-blue-gray-900">
                    <div className="flex flex-row items-center">
                        <Link to="/">
                            <img src={Logo} alt={Logo} className="h-12" />
                        </Link>
                    </div>

                    <div className="hidden md:w-full md:flex md:justify-center">
                        <form onSubmit={handleSearch}>
                            <input
                                className="w-72 border px-4 py-2 rounded border-gray-200 outline-none"
                                type="text"
                                placeholder="Cari kota, hotel..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </form>
                    </div>

                    <div className="hidden lg:block">
                        {/* <NavList /> */}
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
                                    to="/S&K"
                                    className="text-lg font-semibold text-neutral-800 hover:text-blue-600 duration-200"
                                >
                                    Syarat & Ketentuan
                                </Link>
                            </Typography>

                            {user && (
                                <>
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
                                                            <Link
                                                                to="/order"
                                                                className="text-lg font-semibold text-neutral-800 hover:text-blue-600 duration-200"
                                                            >
                                                                Pesanan
                                                            </Link>
                                                        ),
                                                    },
                                                    {
                                                        key: 2,
                                                        label: (
                                                            <Link
                                                                to="/history"
                                                                className="text-lg font-semibold text-neutral-800 hover:text-blue-600 duration-200"
                                                            >
                                                                History
                                                            </Link>
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
                                        variant="h5"
                                        color="blue-gray"
                                        className="p-1 font-medium"
                                    >
                                        <Link
                                            to="/wishlists"
                                            className="text-lg font-semibold text-neutral-800 hover:text-blue-600 duration-200"
                                        >
                                            Wishlists
                                        </Link>
                                    </Typography>
                                </>
                            )}

                            <Typography
                                as="li"
                                color="blue-gray"
                                variant="h5"
                                className="p-1 font-medium"
                            >
                                {user ? (
                                    <Dropdown
                                        className="hover:cursor-pointer"
                                        menu={{
                                            items: [
                                                {
                                                    key: 1,
                                                    label: (
                                                        <Link
                                                            to="/profile"
                                                            className="text-lg font-semibold text-neutral-800 hover:text-blue-600 duration-200"
                                                        >
                                                            Profile
                                                        </Link>
                                                    ),
                                                },
                                                {
                                                    key: 2,
                                                    label: (
                                                        <span
                                                            onClick={
                                                                handleLogout
                                                            }
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
                                            <img
                                                src={
                                                    user.image
                                                        ? user.image
                                                        : "https://t4.ftcdn.net/jpg/01/07/43/45/360_F_107434505_fRHwF9TpuagNggbH3Gn7FP972jsKI9Vn.jpg"
                                                }
                                                alt={user.image}
                                                className="rounded-full h-8 w-8"
                                            />
                                            <span className="text-blue-500">
                                                {user.firstName}
                                            </span>
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
                                to="/S&K"
                                className="text-lg font-semibold text-neutral-800 hover:text-blue-600 duration-200"
                            >
                                Syarat & Ketentuan
                            </Link>
                        </Typography>

                        {user && (
                            <>
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
                                                        <Link
                                                            to="/order"
                                                            className="text-lg font-semibold text-neutral-800 hover:text-blue-600 duration-200"
                                                        >
                                                            Pesanan
                                                        </Link>
                                                    ),
                                                },
                                                {
                                                    key: 2,
                                                    label: (
                                                        <Link
                                                            to="/history"
                                                            className="text-lg font-semibold text-neutral-800 hover:text-blue-600 duration-200"
                                                        >
                                                            History
                                                        </Link>
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
                                    variant="h5"
                                    color="blue-gray"
                                    className="p-1 font-medium"
                                >
                                    <Link
                                        to="/wishlists"
                                        className="text-lg font-semibold text-neutral-800 hover:text-blue-600 duration-200"
                                    >
                                        Wishlists
                                    </Link>
                                </Typography>
                            </>
                        )}

                        <Typography
                            as="li"
                            color="blue-gray"
                            variant="h5"
                            className="p-1 font-medium"
                        >
                            {user ? (
                                <Dropdown
                                    className="hover:cursor-pointer"
                                    menu={{
                                        items: [
                                            {
                                                key: 1,
                                                label: (
                                                    <Link
                                                        to="/profile"
                                                        className="text-lg font-semibold text-neutral-800 hover:text-blue-600 duration-200"
                                                    >
                                                        Profile
                                                    </Link>
                                                ),
                                            },
                                            {
                                                key: 2,
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
                                        <img
                                            src={
                                                user.image
                                                    ? user.image
                                                    : "https://t4.ftcdn.net/jpg/01/07/43/45/360_F_107434505_fRHwF9TpuagNggbH3Gn7FP972jsKI9Vn.jpg"
                                            }
                                            alt={user.image}
                                            className="rounded-full h-8 w-8"
                                        />
                                        <span className="text-blue-500">
                                            {user.firstName}
                                        </span>
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
                </Collapse>
            </Navbar>
        </div>
    );
};

export default NavMenu;
