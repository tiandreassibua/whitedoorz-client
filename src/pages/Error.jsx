import {
    Card,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";

import { BsXCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="my-10">
                <Card className="my-10 shadow-none">
                    <CardBody>
                        <BsXCircle className="text-red-500 text-[200px] text-center w-full my-10" />
                        <Typography
                            variant="h2"
                            color="blue-gray"
                            className="mb-2 text-center"
                        >
                            Pembayaran Gagal
                        </Typography>
                        <Typography className="text-center text-gray-500">
                            Silahkan cek halaman history untuk melihat status
                            pesanan anda.
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-5 flex justify-center">
                        <Link
                            className="py-3 px-6 rounded-md font-semibold bg-gray-900 hover:shadow-lg active:bg-gray-800 text-white transition-all duration-100"
                            to={"/history"}
                        >
                            History
                        </Link>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
};

export default Error;
