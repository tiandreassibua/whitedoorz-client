import React, { useState } from "react";

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

    document.title = "WhiteDoorz | Wishlist";

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
            <WishlistItem key={item.id} property={item.property} id={item.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Wishlist;
