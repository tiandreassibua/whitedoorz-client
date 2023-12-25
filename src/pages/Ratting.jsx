import {
  Typography,
  Card,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";
import { Rate } from "antd";

import { BiSolidDoorOpen } from "react-icons/bi";
import { getUserAuth } from "../functions";
import { IoIosPeople } from "react-icons/io";
import { IoBedOutline } from "react-icons/io5";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Ratting = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!getUserAuth()) {
      navigate("/login");
    }
  });
  return (
    <>
      <div className="min-h-screen">
        <div className="border shadow-md rounded-xl border-black h-auto my-10 px-5 py-4">
          <div className="flex">
            <h1 className=" text-3xl font-semibold font-inter">Nama Hotel</h1>
          </div>
          <div className="flex my-2">
            <Typography variant="h6">Alamat Hotel</Typography>
          </div>
          <hr className="mt-5  border-black" />
          <div className="mt-10 flex justify-between mx-auto w-full">
            <Card className="w-full flex-row shadow-none ">
              <CardHeader
                shadow={false}
                floated={false}
                className="m-0 w-2/5 shrink-0 rounded-r-none"
              >
                <img
                  // src={lkecil}
                  alt="card"
                  className="w-full h-full object-cover"
                />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  NAMA ROOM
                </Typography>
                <div className="w-full lg:grid grid-cols-3 items-center">
                  <p
                    variant="h5"
                    color="gray"
                    className="font-semibold flex items-center mr-3"
                  >
                    <IoBedOutline size={30} className="mr-3 text-green-700" />4
                    Ranjang
                  </p>
                  <p
                    variant="h5"
                    color="gray"
                    className="font-semibold flex items-center"
                  >
                    <IoIosPeople size={30} className="mr-2 text-green-700" />5
                    Tamu
                  </p>
                </div>
                <div className="w-full flex mt-5 gap-1">
                  <p
                    variant="h5"
                    color="gray"
                    className="font-semibold flex items-center"
                  >
                    <BiSolidDoorOpen size={40} />5 Kamar
                  </p>
                </div>
              </CardBody>
            </Card>
          </div>
          <hr className="mt-5  border-black" />
          <div className="mt-5 mx-3">
            <h1 className=" text-3xl font-semibold font-inter ">
              Penilaian dan Ulasan
            </h1>
            <div className="mt-5 w-[200px] p-5 border rounded text-center">
              <Rate value="5" allowHalf disabled />
              <h3 className="mt-2 text-xl font-semibold">/ 5</h3>
            </div>
            <div className="mt-3">
              <textarea
                type="text"
                className="w-full p-5 border border-black rounded-3xl h-52"
                placeholder="Masukan Ulasan"
              />
            </div>
          </div>

          <div className="text-right">
            <button className="mt-5 w-64 h-16 py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ratting;
