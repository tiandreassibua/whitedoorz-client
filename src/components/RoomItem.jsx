import {
    Card,
    CardHeader,
    CardBody,
} from "@material-tailwind/react";
import { IoIosPeople } from "react-icons/io";
import { IoBedOutline } from "react-icons/io5";
import { useCart } from "react-use-cart";
import { getUserAuth } from "../functions";
import { toast } from "react-toastify";

export default function RoomItem({ room, propertyId, slug }) {
    const { addItem, inCart } = useCart();

    let IDR = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "IDR",
    });

    const handleAddItem = (room) => {
        if (getUserAuth() === null) {
            toast.error("Anda harus login terlebih dahulu");
            return;
        } else if (inCart(room.id)) {
            toast.info("Sudah ada di pesanan");
            return;
        }

        addItem(room);
        toast.success("Berhasil ditambahkan ke pesanan");
    };

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
                <h2 className="mb-5 font-bold text-lg">
                    {room.name}
                </h2>
                <div className="w-full mb-2 grid grid-cols-2 lg:grid-cols-3 items-center">
                    <p
                        variant="h5"
                        color="gray"
                        className="font-semibold flex items-center"
                    >
                        <IoBedOutline
                            size={30}
                            className="mr-2 text-green-700"
                        />
                        {room.bedQty}
                    </p>
                    <p
                        variant="h5"
                        color="gray"
                        className="font-semibold flex items-center"
                    >
                        <IoIosPeople
                            size={30}
                            className="mr-2 text-green-700"
                        />
                        {room.maxPeople}
                    </p>
                    <p className="col-span-2 mt-2 lg:col-span-1 lg:text-sm">{IDR.format(room.price)}</p>
                </div>
                <button
                    disabled={!room.available}
                    className="mt-5 w-full px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded disabled:cursor-not-allowed disabled:bg-blue-200"
                    onClick={() => handleAddItem({ ...room, propertyId, slug })}
                >
                    Pesan
                </button>
            </CardBody>
        </Card>
    );
}
