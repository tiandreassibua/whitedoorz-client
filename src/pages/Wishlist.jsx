import React from "react";
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
import { getUserAuth } from "../functions";

const Wishlist = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  useEffect(() => {
    if (!getUserAuth()) {
      navigate("/login");
    }
  }, [navigate]);
  return (
    <>
      <div className="h-screen my-10 py-10">
        <div className="mb-5">
          <Card className="w-full shadow-xl flex-row flex">
            <CardHeader
              shadow={false}
              floated={false}
              className="m-0 w-2/6 shrink-0 rounded-r-none"
            >
              <img alt="test" className="h-full w-full object-cover" />
            </CardHeader>
            <CardBody>
              <div className="flex items-center">
                <Typography variant="h3" className="mr-3">
                  Nama Hotel
                </Typography>
                <IoTrashBinSharp
                  onClick={onOpen}
                  size={25}
                  className="text-red-500 hover:cursor-pointer"
                />
                <ModalComp
                  // removeItem={removeItem}
                  // onClose={onClose}
                  // isOpen={isOpen}
                  // id={item.id}
                  text="Yakin ingin menghapus item ini?"
                />
              </div>

              <Typography className="mb-2">Alamat Hotel</Typography>
              <Typography className="mb-5">Rating</Typography>

              <button className="mt-5 w-48 h-14 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl">
                Detail
              </button>
            </CardBody>
          </Card>
        </div>
        <div className="mb-5">
          <Card className="w-full shadow-xl flex-row flex">
            <CardHeader
              shadow={false}
              floated={false}
              className="m-0 w-2/6 shrink-0 rounded-r-none"
            >
              <img alt="test" className="h-full w-full object-cover" />
            </CardHeader>
            <CardBody>
              <div className="flex items-center">
                <Typography variant="h3" className="mr-3">
                  Nama Hotel
                </Typography>
                <IoTrashBinSharp
                  onClick={onOpen}
                  size={25}
                  className="text-red-500 hover:cursor-pointer"
                />
                <ModalComp
                  // removeItem={removeItem}
                  // onClose={onClose}
                  // isOpen={isOpen}
                  // id={item.id}
                  text="Yakin ingin menghapus item ini?"
                />
              </div>

              <Typography className="mb-2">Alamat Hotel</Typography>
              <Typography className="mb-5">Rating</Typography>

              <button className="mt-5 w-48 h-14 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl">
                Detail
              </button>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
