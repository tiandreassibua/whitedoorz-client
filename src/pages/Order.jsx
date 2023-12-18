import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  Button,
} from "@material-tailwind/react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { BiSolidDoorOpen } from "react-icons/bi";

import { IoIosPeople } from "react-icons/io";
import { IoBedOutline } from "react-icons/io5";

const Order = () => {
  return (
    <>
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
              <div className="w-full grid grid-cols-3 items-center">
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
                <BiSolidDoorOpen size={40} />
                <Button variant="text" size="sm">
                  <FaMinus />
                </Button>
                <input
                  type="number"
                  className="border  border-black p-1 text-center w-10"
                />
                <Button variant="text" size="sm">
                  <FaPlus />
                </Button>
              </div>
            </CardBody>
          </Card>
        </div>
        <hr className="mt-5  border-black" />
        <div className="text-right mt-5 mx-3">
          <h1 className=" text-3xl font-semibold font-inter ">TOTAL HARGA</h1>
          <button className="mt-5 w-64 h-16 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded">
            Pesan
          </button>
        </div>
      </div>
    </>
  );
};

export default Order;
