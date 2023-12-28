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
import Wishlist from "./pages/Wishlist";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Rating from "./pages/Rating";
import Success from "./pages/Success";
import Error from "./pages/Error";

function App() {
    return (
        <div className="font-poppins">
            <BrowserRouter>
                <ToastContainer />
                <Routes>
                    <Route path="*" element={<NotFound />} />
                    <Route path="/" element={<DefaultLayout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/:slug" element={<PropertyDetailPage />} />
                        <Route
                            path="/success"
                            element={<Success />}
                        />
                        <Route
                            path="/error"
                            element={<Error />}
                        />
                        <Route path="/order" element={<Order />} />
                        <Route path="/history" element={<History />} />
                        <Route
                            path="/rating/:transactionId"
                            element={<Rating />}
                        />
                        <Route path="/S&K" element={<SAK />} />
                        <Route path="/wishlists" element={<Wishlist />} />
                        <Route path="/search/:keyword" element={<Search />} />
                        <Route path="/profile" element={<Profile />} />
                    </Route>
                    <Route path="/" element={<AuthLayout />}>
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="/login" element={<LoginPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
