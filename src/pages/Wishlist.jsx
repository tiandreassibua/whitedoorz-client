import React, { useState } from "react";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";
import { IoTrashBinSharp } from "react-icons/io5";
import { useDisclosure } from "@chakra-ui/react";
import ModalComp from "../components/ModalComp";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUserAuth, getWishlists } from "../functions";
import WishlistItem from "../components/WishlistItem";

const Wishlist = () => {
    const [wishlists, setWishlists] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (!getUserAuth()) {
            navigate("/login");
        }

        const fetchData = async () => {
            const res = await getWishlists();
            setWishlists(res?.data);
        };

        fetchData();
    }, [navigate, wishlists]);

    return (
        <>
            <div className="min-h-screen my-10 py-10">
                <h1 className="mb-8 font-bold text-3xl">Wishlists saya</h1>
                <div className="grid grid-cols-4 gap-5">
                    {wishlists.map((item) => (
                        <WishlistItem
                            key={item.id}
                            property={item.property}
                            id={item.id}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Wishlist;
