import { Typography } from "@material-tailwind/react";

import { getUserAuth } from "../functions";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Ratting = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!getUserAuth()) {
      navigate("/login");
    }
  });
  return (
    <>
      <div className=" xl:min-h-screen rounded my-20 ">
        <div className=" border border-black rounded-xl p-5 text-center ">
          <Typography variant="h1">Syarat Dan Ketentuan</Typography>
        </div>
        <div className=" border border-black rounded-xl p-5 mt-5 ">
          <Typography variant="lead">
            Syarat dan Ketentuan : Selamat datang di WhiteDoorz.com! Syarat dan
            ketentuan berikut menjelaskan peraturan dan ketentuan penggunaan
            Website WhiteDoorz dengan alamat https://www.whitedoorz.com/id-id.
            Dengan mengakses website ini, kami menganggap Anda telah menyetujui
            syarat dan ketentuan ini. Jangan lanjutkan penggunaan WhiteDoorz.com
            jika Anda menolak untuk menyetujui semua syarat dan ketentuan yang
            tercantum di halaman ini. Cookie: Website ini menggunakan cookie
            untuk mempersonalisasi pengalaman online Anda. Dengan mengakses
            WhiteDoorz.com, Anda menyetujui penggunaan cookie yang diperlukan.
            Cookie merupakan file teks yang ditempatkan pada hard disk Anda oleh
            server halaman web. Cookie tidak dapat digunakan untuk menjalankan
            program atau mengirimkan virus ke komputer Anda. Cookie yang
            diberikan telah disesuaikan untuk Anda dan hanya dapat dibaca oleh
            web server pada domain yang mengirimkan cookie tersebut kepada Anda.
          </Typography>
        </div>
      </div>
    </>
  );
};

export default Ratting;
