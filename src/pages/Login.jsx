import { Button } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { axiosClient } from "../axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  useEffect(() => {
    document.title = "WhiteDoorz | Login";
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosClient.post("/auth/login", formData);
      if (res.data.token) {
        localStorage.setItem("access_token", JSON.stringify(res.data.token));
        localStorage.setItem("user", JSON.stringify(res.data.data));
        toast.success("Login successful");
        navigate("/");
      }
    } catch (e) {
      console.log(e);
      toast.error(e.response.data.errors);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-full px-16">
        <h1 className="text-3xl font-bold">Sign In</h1>
        <form onSubmit={handleSubmit} className="my-5">
          <div className="mb-5">
            <label htmlFor="email" className="block font-medium mb-2">
              Email
            </label>
            <input
              id="email"
              type="text"
              onChange={handleChange}
              className="w-full p-2 outline-none rounded border"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="password" className="block font-medium mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              onChange={handleChange}
              className="w-full p-2 outline-none rounded border"
              placeholder="Enter your last name"
            />
          </div>
          <Button type="submit" className="w-full">
            Sign In
          </Button>
        </form>
        <p>
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-600">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
