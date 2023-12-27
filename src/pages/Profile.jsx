import { useEffect, useState } from "react";

import { Button } from "@material-tailwind/react";
import { FaEdit } from "react-icons/fa";
import { storage } from "../firebase";
import { getUserAuth, setUser, updateProfile } from "../functions";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const user = getUserAuth();

  const navigate = useNavigate();
  const [imageUpload, setImageUpload] = useState(null);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [phone, setPhone] = useState(user.phone);
  const [image, setImage] = useState(user.image);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  const uploadImage = (e) => {
    if (e.target.files[0]) {
      setImageUpload(e.target.files[0]);
    }

    const imageRef = ref(storage, `${firstName + lastName}-${Date.now()}`);

    uploadBytes(imageRef, e.target.files[0])
      .then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setImage(url);
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      firstName,
      lastName,
      phone,
      image,
      email,
    };

    if (password) {
      if (password.length < 8) {
        toast.warning("Password harus lebih dari 8 karakter");
        return;
      }

      if (password !== confPassword) {
        toast.warning("Password dan konfirmasi password tidak cocok");
        return;
      }

      data.password = password;
    }

    const updateUser = async () => {
      const res = await updateProfile(data);
      if (res.data) {
        setUser(res.data);
        toast.success("Profil berhasil diperbarui");
        navigate("/profile");
      }
    };

    updateUser();
  };

  useEffect(() => {
    document.title = "WhiteDoorz | Profile";
  }, [image]);

  return (
    <>
      <div className="w-full p-10 my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center">
          <div className="flex justify-center">
            <div className="rounded-full relative group bg-red-50">
              <img
                className="h-96 w-96 rounded-full object-cover object-center"
                src={
                  image
                    ? image
                    : imageUpload
                    ? URL.createObjectURL(imageUpload)
                    : "https://t4.ftcdn.net/jpg/01/07/43/45/360_F_107434505_fRHwF9TpuagNggbH3Gn7FP972jsKI9Vn.jpg"
                }
                alt="profile"
              />

              <label
                htmlFor="image"
                className="cursor-pointer hidden justify-center items-center absolute group-hover:flex duration-200 h-96 w-96 bg-black/50 top-0 rounded-full"
              >
                <FaEdit size={40} className="text-white" />
              </label>
              <input
                type="file"
                className="hidden"
                id="image"
                onChange={uploadImage}
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-full px-16">
              <h1 className="text-3xl font-bold">Profil Saya</h1>
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
                      className="w-full p-2 outline-none rounded border"
                      placeholder="Enter your first name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
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
                      className="w-full p-2 outline-none rounded border"
                      placeholder="Enter your last name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="mb-5">
                  <label htmlFor="email" className="block font-medium mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full p-2 outline-none rounded border"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-5">
                  <label htmlFor="phone" className="block font-medium mb-2">
                    Phone number
                  </label>
                  <input
                    id="phone"
                    type="text"
                    className="w-full p-2 outline-none rounded border"
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-5">
                  <label htmlFor="password" className="block font-medium mb-2">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    className="w-full p-2 outline-none rounded border"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="mb-10">
                  <label
                    htmlFor="confPassword"
                    className="block font-medium mb-2"
                  >
                    Confirmation Password
                  </label>
                  <input
                    id="confPassword"
                    type="password"
                    className="w-full p-2 outline-none rounded border"
                    placeholder="Enter confirmation password"
                    value={confPassword}
                    onChange={(e) => setConfPassword(e.target.value)}
                  />
                </div>
                <Button type="submit" size="lg" fullWidth>
                  Update
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
