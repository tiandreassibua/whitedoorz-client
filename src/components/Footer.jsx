import React from "react";
import { Typography } from "@material-tailwind/react";
import logo from "../asset/logo-footer.png";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter,
    FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { getUserAuth } from "../functions";

const Footer = () => {
    const user = getUserAuth();

    return (
        <footer className="w-full font-roboto bg-[#0A2052] text-white p-8">
            <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12  text-center md:justify-between">
                <Link to="/">
                    <img
                        src={logo}
                        alt={logo}
                        className="h-10 hover:scale-105 duration-200"
                    />
                </Link>
                <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                    <li>
                        <Link
                            to="/"
                            className="text-base font-semibold text-neutral-800 hover:text-white/50 hover:scale-x-110 duration-200"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/S&K"
                            className="text-base font-semibold text-neutral-800 hover:text-white/50 hover:scale-x-110 duration-200"
                        >
                            Syarat & Ketentuan
                        </Link>
                    </li>
                    {!user && (
                        <li>
                            <Link
                                to="/login"
                                className="text-base font-semibold text-neutral-800 hover:text-white/50 hover:scale-x-110 duration-200"
                            >
                                Login
                            </Link>
                        </li>
                    )}
                </ul>
                <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                    <li>
                        <Link
                            to="/"
                            className="text-base font-semibold text-neutral-800 hover:text-white/50 hover:scale-x-110 duration-200"
                        >
                            <FaYoutube />
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/"
                            className="text-base font-semibold text-neutral-800 hover:text-white/50 hover:scale-x-110 duration-200"
                        >
                            <FaFacebookF />
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/"
                            className="text-base font-semibold text-neutral-800 hover:text-white/50 hover:scale-x-110 duration-200"
                        >
                            <FaTwitter />
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/"
                            className="text-base font-semibold text-neutral-800 hover:text-white/50 hover:scale-x-110 duration-200"
                        >
                            <FaInstagram />
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/"
                            className="text-base font-semibold text-neutral-800 hover:text-white/50 hover:scale-x-110 duration-200"
                        >
                            <FaLinkedinIn />
                        </Link>
                    </li>
                </ul>
            </div>
            <hr className="my-8 border-white" />
            <Typography className="text-sm text-center text-white">
                WhiteDoorz @ {new Date().getFullYear()}. All rights reserved.
            </Typography>
        </footer>
    );
};

export default Footer;
