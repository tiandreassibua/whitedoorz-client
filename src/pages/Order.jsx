import {
    Typography,
    Card,
    CardHeader,
    CardBody,
} from "@material-tailwind/react";
import { createTransaction, getProperty, getUserAuth } from "../functions";
import { IoIosPeople } from "react-icons/io";
import { IoBedOutline, IoTrashBinSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";
import { useDisclosure } from "@chakra-ui/react";
import ModalComp from "../components/ModalComp";
import { toast } from "react-toastify";
import moment from "moment";

const Order = () => {
    const { items, cartTotal, isEmpty, removeItem, emptyCart } = useCart();
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [totalPrice, setTotalPrice] = useState(cartTotal);

    const [prop, setProp] = useState({});
    const navigate = useNavigate();

    let IDR = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "IDR",
    });

    const slug = items[0]?.slug;

    const getProp = async (slug) => {
        try {
            const res = await getProperty(slug);
            setProp(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (!getUserAuth()) {
            navigate("/login");
        }

        getProp(slug);

        const countTotal = (checkIn, checkOut) => {
            const cekOut = moment(checkOut)
            const cekIn = moment(checkIn)
            const nights = cekOut.diff(cekIn, "days");
            
            setTotalPrice(cartTotal * nights);
        };

        if (checkIn !== "" && checkOut !== "") {
            countTotal(checkIn, checkOut);
        }
    }, [slug, checkIn, checkOut, totalPrice, cartTotal, navigate]);

    const handleTransaction = async (e) => {
        e.preventDefault();

        const data = {
            transaction: {
                propertyId: prop.id,
                checkIn: new Date(checkIn).toISOString(),
                checkOut: new Date(checkOut).toISOString(),
                totalPrice,
            },
            transactionRooms: items.map((item) => ({
                roomId: item.id,
            })),
        };

        await createTransaction(data);
        toast.success("Transaksi berhasil dibuat");
        emptyCart();
        navigate("/history");
    };

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <div className="min-h-screen">
                {isEmpty ? (
                    <h1 className="mt-10 text-3xl text-center font-bold">
                        Belum ada data!
                    </h1>
                ) : (
                    <div className="border shadow-md rounded-xl  border-black h-auto my-10 px-5 py-4">
                        <div className="flex">
                            <h1 className=" text-3xl font-semibold font-inter">
                                {prop?.name}
                            </h1>
                        </div>
                        <div className="flex my-2">
                            <h2 className="text-gray-600 font-semibold">
                                {prop?.address}
                            </h2>
                        </div>
                        <hr className="mt-5  border-black" />

                        {items.map((item, idx) => (
                            <div key={idx}>
                                <div className="mt-10 flex justify-between mx-auto w-full">
                                    <Card className="w-full flex-row shadow-none ">
                                        <CardHeader
                                            shadow={false}
                                            floated={false}
                                            className="m-0 w-2/5 shrink-0 rounded-r-none"
                                        >
                                            <img
                                                src={item.image}
                                                alt="card"
                                                className="w-full h-full object-cover"
                                            />
                                        </CardHeader>
                                        <CardBody>
                                            <Typography
                                                variant="h2"
                                                color="blue-gray"
                                                className="mb-2 flex items-center"
                                            >
                                                {item.name}
                                                <IoTrashBinSharp
                                                    onClick={onOpen}
                                                    size={25}
                                                    className="ml-3 text-red-500 hover:cursor-pointer"
                                                />
                                                <ModalComp
                                                    removeItem={removeItem}
                                                    onClose={onClose}
                                                    isOpen={isOpen}
                                                    id={item.id}
                                                    text="Yakin ingin menghapus item ini?"
                                                />
                                            </Typography>
                                            <p className="mb-5 font-bold text-lg">
                                                {IDR.format(item.price)}
                                            </p>
                                            <div className="w-full flex gap-x-5 items-center">
                                                {/* <div className="w-full grid grid-cols-3 items-center"> */}
                                                <p
                                                    variant="h5"
                                                    color="gray"
                                                    className="font-semibold flex items-center mr-3"
                                                >
                                                    <IoBedOutline
                                                        size={30}
                                                        className="mr-3 text-green-700"
                                                    />
                                                    {item.bedQty} Ranjang
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
                                                    {item.maxPeople} Tamu
                                                </p>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </div>
                                <hr className="mt-5  border-black" />
                            </div>
                        ))}

                        <div className="w-full flex items-center justify-between mx-auto my-5">
                            <div className="w-full flex gap-x-10">
                                <div>
                                    <label htmlFor="checkIn" className="block">
                                        Check-in
                                    </label>
                                    <input
                                        type="date"
                                        className="border"
                                        onChange={(e) =>
                                            setCheckIn(e.target.value)
                                        }
                                    />
                                </div>
                                <div>
                                    <label htmlFor="checkOut" className="block">
                                        Check-out
                                    </label>
                                    <input
                                        type="date"
                                        className="border"
                                        onChange={(e) =>
                                            setCheckOut(e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                            <div>
                                <h1 className=" text-3xl font-semibold font-inter ">
                                    {IDR.format(totalPrice)}
                                </h1>
                                <button
                                    onClick={handleTransaction}
                                    className="mt-5 w-64 h-16 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
                                >
                                    Pesan
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Order;
