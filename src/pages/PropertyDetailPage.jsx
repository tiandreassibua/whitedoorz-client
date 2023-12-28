import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import RoomItem from "../components/RoomItem";
import { Rate } from "antd";
import ReviewList from "../components/ReviewList";
import { axiosClient } from "../axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa6";
import { addWishlist } from "../functions";
import { Image } from "@chakra-ui/react";

const PropertyDetailPage = () => {
    const [property, setProperty] = useState({});
    const { slug } = useParams();
    const navigate = useNavigate();

    const rooms = property?.rooms;

    const handleWishlist = (propertyId) => async () => {
        const res = await addWishlist(propertyId);
        if (res?.data) {
            toast.success("Berhasil ditambahkan ke wishlist");
        }
    };
    useEffect(() => {
        const fetchProperty = async () => {
            try {
                const response = await axiosClient.get(`/properties/${slug}`);

                setProperty(response.data.data);
            } catch (error) {
                toast.error(error.response.data.errors);
                navigate("/");
            }
        };

        fetchProperty();

        document.title = "WhiteDoorz | " + property?.name;
    }, [slug, navigate, property?.name]);

    return (
        <>
            <div className="mt-10 flex rounded-xl overflow-hidden gap-3 h-[400px]">
                <img
                    src={property.image}
                    alt={property.name}
                    className="w-full h-full object-cover"
                />
                <iframe
                    title={property.id}
                    src={property.location}
                    width="100%"
                />
            </div>
            <div>
                <div className="mt-5 w-full flex flex-col lg:flex-row gap-x-5">
                    {rooms?.length > 0 &&
                        rooms.map((room) => (
                            <div
                                key={room.id}
                                className="flex flex-col gap-y-2"
                            >
                                <Image boxSize='100px' src={room.image} className="rounded" />
                            </div>
                        ))}
                </div>
            </div>
            <div className="mt-10">
                <div className="w-full">
                    <div className="flex flex-col lg:flex-row gap-y-5 justify-between">
                        <div>
                            <div className="flex gap-8">
                                <h1 className="flex items-center text-3xl font-semibold font-inter">
                                    {property.name}
                                </h1>
                                <div className="flex items-center gap-x-2">
                                    <FaStar
                                        className="text-yellow-700"
                                        size={25}
                                    />
                                    <span className="text-xl">
                                        {property.rating}/5
                                    </span>
                                </div>
                            </div>
                            <p className="mt-2 text-sm text-gray-600">
                                {property.address}
                            </p>
                        </div>

                        <div className="flex gap-x-2">
                            <button
                                onClick={handleWishlist(property.id)}
                                className="flex items-center bg-gray-200 py-3 px-4 rounded group"
                            >
                                <FaHeart
                                    className="group-hover:text-red-500 text-gray-400 duration-150"
                                    size={30}
                                />
                            </button>
                            <button
                                onClick={() =>
                                    document
                                        .getElementById("rooms")
                                        .scrollIntoView({
                                            behavior: "smooth",
                                        })
                                }
                                className="bg-blue-500 text-white font-bold py-3 px-4 rounded"
                            >
                                Pilih kamar
                            </button>
                        </div>
                    </div>
                    <div className="mt-10 w-full">
                        <h2 className="text-2xl font-bold">
                            Tentang {property.name}
                        </h2>
                        <p className="mt-2 text-base text-gray-800">
                            {property.description}
                        </p>
                    </div>
                </div>
            </div>
            <hr className="mt-10" />
            <div className="my-10" id="rooms">
                <h2 className="text-2xl">
                    {rooms?.length > 0
                        ? "Tipe kamar yang tersedia"
                        : "Tidak ada kamar yang tersedia saat ini"}
                </h2>
                <div className="mt-10 grid md:grid-cols-2 gap-5">
                    {rooms?.length > 0 &&
                        rooms.map((room) => (
                            <RoomItem
                                key={room.id}
                                room={room}
                                propertyId={property.id}
                                slug={property.slug}
                            />
                        ))}
                </div>
            </div>
            <hr className="mt-10" />
            <div className="my-10">
                <h2 className="text-2xl">
                    Penilaian dan Ulasan ({property.review?.length})
                </h2>
                <div className="mt-5 w-[200px] p-5 border rounded text-center">
                    <Rate value={property.rating} allowHalf disabled />
                    <h3 className="mt-2 text-xl font-semibold">
                        {parseFloat(property.rating).toFixed(1)} / 5
                    </h3>
                </div>

                <div className="mt-5">
                    <ReviewList reviews={property.review} />
                </div>
            </div>
        </>
    );
};

export default PropertyDetailPage;
