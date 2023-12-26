import { Button } from "@material-tailwind/react";

import wdAuth from "../asset/wd-auth.png";

const Profile = () => {
  return (
    <>
      <div className="min-h-screen w-full p-6 my-5 shadow-lg font-inter">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center">
          <img src={wdAuth} alt="auth" className="w-full h-full object-cover" />
          <div className="flex items-center justify-center">
            <div className="w-full px-16">
              <h1 className="text-3xl font-bold">Your Profile</h1>
              <form onSubmit className="my-5">
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
                      //   onChange={handleChange}
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
                      //   onChange={handleChange}
                      className="w-full p-2 outline-none rounded border"
                      placeholder="Enter your last name"
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
                    // onChange={handleChange}
                    className="w-full p-2 outline-none rounded border"
                    placeholder="Enter your email"
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
                    // onChange={handleChange}
                    className="w-full p-2 outline-none rounded border"
                    placeholder="Enter your phone number"
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
                    // onChange={handleChange}
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
                    // onChange={handleChange}
                    className="w-full p-2 outline-none rounded border"
                    placeholder="Enter confirmation password"
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Submit
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
