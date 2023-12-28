import PropertyList from "../components/PropertyList";
import { useEffect, useState } from "react";
import { axiosClient } from "../axios";
import CarouselComp from "../components/CarouselComp";
import { Spinner } from "@chakra-ui/react";

function Home() {
    const [category, setCategory] = useState("hotel");
    const [properties, setProperties] = useState([]);

    const fetchProperties = async () => {
        const response = await axiosClient.get("/properties");
        setProperties(response.data.data);
    };

    const handleType = (category) => {
        setCategory(category);
    };

    useEffect(() => {
        fetchProperties();

        document.title = "WhiteDoorz | Home";
    }, []);

    return (
        <>
            <div className="my-10">
                <CarouselComp properties={properties} />
            </div>
            <div className="flex justify-center mt-20">
                <div className="flex gap-5 uppercase">
                    <span
                        onClick={() => handleType("hotel")}
                        className={`${
                            category === "hotel"
                                ? "border-b-2 border-blue-700 text-blue-700"
                                : ""
                        } hover:cursor-pointer hover:text-blue-700 font-semibold hover:border-b-blue-700`}
                    >
                        Hotel
                    </span>
                    |
                    <span
                        onClick={() => handleType("apartment")}
                        className={`${
                            category === "apartment"
                                ? "border-b-2 border-blue-700 text-blue-700"
                                : ""
                        } hover:cursor-pointer hover:text-blue-700 font-semibold hover:border-b-blue-700`}
                    >
                        Apartment
                    </span>
                </div>
            </div>
            <div className="mt-10">
                <div className="my-5">
                    {properties.length === 0 ? (
                        <div className="flex justify-center items-center my-10 gap-x-2 animate-pulse">
                            <Spinner size="lg" thickness="4px" speed="0.8s" />
                            <p className="text-xl text-gray-800 font-bold">Loading...</p>
                        </div>
                    ) : (
                        <PropertyList
                            properties={properties}
                            category={category}
                        />
                    )}
                </div>
            </div>
        </>
    );
}

export default Home;
