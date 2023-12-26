import { Button } from "@material-tailwind/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { axiosClient } from "../axios";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        e.preventDefault();
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confPassword) {
            toast.error("Passwords do not match");
        }

        const { confPassword, ...data } = formData;

        try {
            const res = await axiosClient.post("/auth/register", data);
            if (res.status === 201) {
                toast.success("Account created successfully, please login!");
                navigate("/login");
            }
        } catch (e) {
            console.log(e);
            toast.error("Something went wrong");
        }
    };

    return (
        <div className="flex items-center justify-center">
            <div className="w-full px-16">
                <h1 className="text-3xl font-bold">Sign Up</h1>
                <form onSubmit={handleSubmit} className="my-5">
                    <div className="grid grid-cols-2 gap-5 mb-5">
                        <div>
                            <label
                                htmlFor="firstName"
                                className="block font-medium mb-2"
                            >
                                Firstname
                            </label>
                            <input
                                id="firstName"
                                type="text"
                                onChange={handleChange}
                                className="w-full p-2 outline-none rounded border"
                                placeholder="Enter your first name"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="lastName"
                                className="block font-medium mb-2"
                            >
                                Lastname
                            </label>
                            <input
                                id="lastName"
                                type="text"
                                onChange={handleChange}
                                className="w-full p-2 outline-none rounded border"
                                placeholder="Enter your last name"
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="email"
                            className="block font-medium mb-2"
                        >
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            onChange={handleChange}
                            className="w-full p-2 outline-none rounded border"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="phone"
                            className="block font-medium mb-2"
                        >
                            Phone number
                        </label>
                        <input
                            id="phone"
                            type="text"
                            onChange={handleChange}
                            className="w-full p-2 outline-none rounded border"
                            placeholder="Enter your phone number"
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="password"
                            className="block font-medium mb-2"
                        >
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            onChange={handleChange}
                            className="w-full p-2 outline-none rounded border"
                            placeholder="Enter password"
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="confPassword"
                            className="block font-medium mb-2"
                        >
                            Confirmation Password
                        </label>
                        <input
                            id="confPassword"
                            type="password"
                            onChange={handleChange}
                            className="w-full p-2 outline-none rounded border"
                            placeholder="Enter confirmation password"
                            required
                        />
                    </div>
                    <Button type="submit" className="w-full">
                        Sign Up
                    </Button>
                </form>
                <p>
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-600">
                        Sign In
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default RegisterPage;
