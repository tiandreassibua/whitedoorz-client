import {
    Typography,
    Card,
    CardHeader,
    CardBody,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosPeople } from "react-icons/io";
import { IoBedOutline } from "react-icons/io5";
import { getToken, getTransactionList, getUserAuth } from "../functions";
import moment from "moment";
import { axiosClient } from "../axios";
import { FaCheckCircle } from "react-icons/fa";
import { MdOutlinePendingActions } from "react-icons/md";
import { toast } from "react-toastify";

const History = () => {
    let IDR = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "IDR",
    });

    const [transactions, setTransactions] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (!getUserAuth()) {
            toast.warning("Silahkan login terlebih dahulu");
            navigate("/login");
            return;
        }

        const getTransactions = async () => {
            const res = await getTransactionList();
            setTransactions(res.data);
        };

        getTransactions();
    }, [navigate]);

    const createPayment = async (transactionId) => {
        try {
            const res = await axiosClient.post(
                "/payments",
                { transactionId },
                {
                    headers: {
                        Authorization: `Bearer ${getToken()}`,
                    },
                }
            );

            const data = res.data.data;
            window.open(data.redirect_url);
        } catch (error) {
            console.log(error.response);
        }
    };

    return (
        <div className="min-h-screen">
            {transactions.length > 0 ? (
                transactions?.map((transaction, idx) => (
                    <div
                        key={idx}
                        className="border shadow-md rounded-xl border-black h-auto my-10 px-5 py-4"
                    >
                        <div className="flex justify-between items-center">
                            <div>
                                <h1 className="text-3xl font-semibold font-inter mb-3">
                                    {transaction.property.name}
                                </h1>
                                <Typography variant="h6">
                                    {transaction.property.address}
                                </Typography>
                            </div>
                            <div className=" flex gap-2 border-black w-28  h-8">
                                {transaction.status === "success" ||
                                transaction.status === "challenge" ? (
                                    <FaCheckCircle
                                        className="text-green-500"
                                        size={25}
                                    />
                                ) : transaction.status === "pending" ? (
                                    <MdOutlinePendingActions
                                        className="text-yellow-800"
                                        size={25}
                                    />
                                ) : (
                                    ""
                                )}
                                <Typography
                                    variant="h6"
                                    className={`uppercase`}
                                >
                                    {transaction.status}
                                </Typography>
                            </div>
                        </div>

                        <hr className="mt-5  border-black" />

                        {transaction.transactionRooms.map((item, idx) => (
                            <div key={idx}>
                                <div className="mt-10 flex justify-between mx-auto w-full">
                                    <Card className="w-full flex-row shadow-none ">
                                        <CardHeader
                                            shadow={false}
                                            floated={false}
                                            className="m-0 w-2/5 shrink-0 rounded-r-none"
                                        >
                                            <img
                                                src={item.roomImg}
                                                alt="card"
                                                className="w-full h-full object-cover"
                                            />
                                        </CardHeader>
                                        <CardBody>
                                            <Typography
                                                variant="h2"
                                                color="blue-gray"
                                                className="mb-2"
                                            >
                                                {item.roomName}
                                            </Typography>
                                            <p className="mb-5 font-semibold text-lg">
                                                {IDR.format(item.roomPrice)}
                                            </p>
                                            <div className="w-full grid grid-cols-3 items-center">
                                                <p
                                                    variant="h5"
                                                    color="gray"
                                                    className="font-semibold flex items-center mr-3"
                                                >
                                                    <IoBedOutline
                                                        size={30}
                                                        className="mr-3 text-green-700"
                                                    />
                                                    {item.roomBedQty} Ranjang
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
                                                    {item.roomMaxPeople} Tamu
                                                </p>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </div>
                                <hr className="mt-5  border-black" />
                            </div>
                        ))}
                        <div className="flex items-center justify-between py-5 px-3">
                            <div className="flex flex-col">
                                <strong>
                                    Check-In:{" "}
                                    {moment(transaction.checkIn).format(
                                        "MMMM Do YYYY"
                                    )}
                                </strong>
                                <strong>
                                    Check-Out:{" "}
                                    {moment(transaction.checkOut).format(
                                        "MMMM Do YYYY"
                                    )}
                                </strong>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h1 className="text-3xl font-semibold font-inter">
                                    {IDR.format(transaction.totalPrice)}
                                </h1>
                                {new Date(transaction.checkOut) < new Date() ? (
                                    <Link
                                        className="py-4 text-center text-lg font-semibold bg-red-600 hover:bg-red-700 text-white rounded"
                                        to="/"
                                    >
                                        Beri penilaian
                                    </Link>
                                ) : transaction.redirect_url &&
                                  transaction.status !== "success" ? (
                                    <Link
                                        className="py-4 text-center text-lg font-semibold disabled:bg-blue-200 disabled:cursor-not-allowed bg-blue-600 hover:bg-blue-700 text-white rounded"
                                        to={transaction.redirect_url}
                                        disabled={
                                            transaction.status === "success"
                                        }
                                        target="_blank"
                                    >
                                        Bayar Sekarang
                                    </Link>
                                ) : (
                                    <button
                                        onClick={() =>
                                            createPayment(transaction.id)
                                        }
                                        className="py-4 text-center text-lg font-semibold disabled:bg-blue-200 disabled:cursor-not-allowed bg-blue-600 hover:bg-blue-700 text-white rounded"
                                        disabled={
                                            transaction.status === "success"
                                        }
                                    >
                                        Bayar Sekarang
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <h1 className="mt-10 text-3xl text-center font-bold">
                    Belum ada data transaksi
                </h1>
            )}
        </div>
    );
};

export default History;
