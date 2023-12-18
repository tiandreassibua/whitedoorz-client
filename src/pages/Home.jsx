import { Button } from "@material-tailwind/react";
import banner from "../asset/banner.png";
import PropertyList from "../components/PropertyList";
import { useEffect, useState } from "react";
import { axiosClient } from "../axios";

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
  }, []);

  return (
    <>
      <div className="flex justify-center my-10">
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
      <div>
        <form className="flex justify-between gap-5">
          <div className="w-full flex justify-around border border-gray-600 rounded-lg">
            <input
              type="text"
              className="mx-1 text-center border-r border-gray-600 outline-none w-full placeholder:text-gray-500 font-semibold"
              placeholder="Destinasi"
            />
            <input
              type="text"
              className="mx-1 text-center border-r border-gray-600 outline-none w-full placeholder:text-gray-500 font-semibold"
              placeholder="Check-in"
            />
            <input
              type="text"
              className="mx-1 text-center border-r border-gray-600 outline-none w-full placeholder:text-gray-500 font-semibold"
              placeholder="Check-out"
            />
            <input
              type="text"
              className="mx-1 text-center outline-none w-full placeholder:text-gray-500 font-semibold"
              placeholder="Tamu dan Kamar"
            />
          </div>
          <Button type="submit" variant="outlined" color="gray" size="lg">
            Cari
          </Button>
        </form>
      </div>
      <div className="my-10">
        {/* <SwiperComp properties={properties} /> */}
        <img src={banner} alt="img" className="w-full object-cover" />
      </div>
      <div className="mt-20">
        <h1 className="text-3xl font-semibold">Rekomendasi Kami</h1>
        <div className="my-5">
          <PropertyList properties={properties} category={category} />
        </div>
      </div>
    </>
  );
}

export default Home;
