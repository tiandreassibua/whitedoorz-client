import { Link } from "react-router-dom";

const NotFound = () => {
    document.title = "404 | Page not found";

    return (
        <div className="min-h-screen flex flex-col justify-center items-center gap-y-4">
            <h1 className="text-3xl text-slate-600 font-bold uppercase">
                404 | Page not found
            </h1>
            <Link to="/" className="underline">
                Go home
            </Link>
        </div>
    );
};

export default NotFound;
