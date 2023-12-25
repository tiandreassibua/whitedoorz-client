import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import RoomItem from "../components/RoomItem";
import { Rate } from "antd";
import ReviewList from "../components/ReviewList";
import { axiosClient } from "../axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const PropertyDetailPage = () => {
    const [property, setProperty] = useState({});
    const { slug } = useParams();
    const navigate = useNavigate();

    const rooms = property?.rooms;
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
            <div className="mt-10">
                <div className="w-full">
                    <div className="flex gap-8">
                        <h1 className="flex items-center text-3xl font-semibold font-inter">
                            {property.name}
                        </h1>
                        <div className="flex items-center gap-x-2">
                            <FaStar className="text-yellow-700" size={25} />
                            <span className="text-xl">{property.rating}/5</span>
                        </div>
                    </div>
                    <p className="mt-2 text-sm text-gray-600">
                        {property.address}
                    </p>
                    <div className="flex gap-10">
                        <div className="w-3/4">
                            <p className="mt-2 text-base text-gray-800">
                                {property.description}
                            </p>
                        </div>
                        <div className="w-1/3 flex">
                            <button
                                onClick={() =>
                                    document
                                        .getElementById("rooms")
                                        .scrollIntoView({ behavior: "smooth" })
                                }
                                className="w-full h-14 bg-blue-500 text-white font-bold py-2 px-4 rounded "
                            >
                                pilih kamar
                            </button>
                        </div>
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
                <div className="mt-10 grid grid-cols-2 gap-5">
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
