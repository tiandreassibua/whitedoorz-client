import {
    Typography,
    Card,
    CardHeader,
    CardBody,
} from "@material-tailwind/react";
import { Rate } from "antd";

import { createReview, getTransaction, getUserAuth } from "../functions";
import { IoIosPeople } from "react-icons/io";
import { IoBedOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Rating = () => {
    const [rating, setRating] = useState(0);
    const [body, setBody] = useState("");
    const [transaction, setTransaction] = useState({});
    const navigate = useNavigate();
    const { transactionId } = useParams();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await createReview({ transactionId, rating, body });
        if (res) {
            toast.info("Review berhasil di submit");
        }

        navigate("/history");
    };

    useEffect(() => {
        if (!getUserAuth()) {
            navigate("/login");
        }

        const getTransactionData = async (transactionId) => {
            const res = await getTransaction(transactionId);
            setTransaction(res.data);
        };

        getTransactionData(transactionId);
    }, [navigate, rating, transactionId]);

    return (
        <>
            <div className="min-h-screen">
                <div className="border shadow-md rounded-xl border-black h-auto my-10 px-5 py-4">
                    <div className="flex">
                        <h1 className="font-bold text-3xl">
                            {transaction?.property?.name}
                        </h1>
                    </div>
                    <div className="flex my-2">
                        <h1 className="font-bold text-lg">
                            {transaction?.property?.address}
                        </h1>
                    </div>
                    <hr className="mt-5  border-black" />
                    {transaction?.transactionRooms?.map((item, idx) => (
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
                                        <div className="w-full lg:grid grid-cols-3 items-center">
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
                    <form onSubmit={handleSubmit}>
                        <div className="mt-5 mx-3">
                            <h1 className=" text-3xl font-semibold font-inter ">
                                Penilaian dan Ulasan
                            </h1>
                            <div className="mt-5 w-[200px] p-5 border rounded text-center">
                                <Rate
                                    defaultValue={0}
                                    value={rating}
                                    onChange={(e) => setRating(e)}
                                />
                                <h3 className="mt-2 text-xl font-semibold">
                                    {rating} / 5
                                </h3>
                            </div>
                            <div className="mt-3">
                                <textarea
                                    type="text"
                                    className="w-full p-5 border border-black rounded-3xl h-52"
                                    placeholder="Masukan Ulasan"
                                    value={body}
                                    onChange={(e) => setBody(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="text-right">
                            <button className="mt-5 w-64 h-16 py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Rating;
