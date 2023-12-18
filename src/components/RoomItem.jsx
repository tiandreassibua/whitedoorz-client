import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { IoIosPeople } from "react-icons/io";
import { IoBedOutline } from "react-icons/io5";

export default function RoomItem({ room }) {
  let IDR = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "IDR",
  });

  return (
    <Card className="w-full max-w-[48rem] flex-row">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
      >
        <img
          src={room.image}
          alt="card"
          className="w-full h-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {room.name}
        </Typography>
        <div className="w-full grid grid-cols-3 items-center">
          <p
            variant="h5"
            color="gray"
            className="font-semibold flex items-center"
          >
            <IoBedOutline size={30} className="mr-2 text-green-700" />
            {room.bedQty}
          </p>
          <p
            variant="h5"
            color="gray"
            className="font-semibold flex items-center"
          >
            <IoIosPeople size={30} className="mr-2 text-green-700" />
            {room.maxPeople}
          </p>
          <p>{IDR.format(room.price)}</p>
        </div>
        <button className="mt-5 w-full px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded">
          Pesan
        </button>
      </CardBody>
    </Card>
  );
}
