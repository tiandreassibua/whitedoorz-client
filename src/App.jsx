import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/404";
import DefaultLayout from "./components/DefaultLayout";
import PropertyDetailPage from "./pages/PropertyDetailPage";
import AuthLayout from "./components/AuthLayout";
import RegisterPage from "./pages/Register";
import LoginPage from "./pages/Login";
import Order from "./pages/Order";
import History from "./pages/History";
import SAK from "./pages/S&K";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Rating from "./pages/Rating";

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/:slug" element={<PropertyDetailPage />} />
            <Route path="/order" element={<Order />} />
            <Route path="/history" element={<History />} />
            <Route path="/rating/:transactionId" element={<Rating />} />
            <Route path="/S&K" element={<SAK />} />
          </Route>
          <Route path="/" element={<AuthLayout />}>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
