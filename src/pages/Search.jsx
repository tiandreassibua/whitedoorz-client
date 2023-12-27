import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { search } from "../functions";
import PropertyItem from "../components/PropertyItem";

const Search = () => {
    const [properties, setProperties] = useState([]);
    const { keyword } = useParams();

    useEffect(() => {
        const fetchSearch = async () => {
            const res = await search(keyword);
            setProperties(res.data);
        };

        keyword && fetchSearch();
    }, [keyword]);
    return (
        <>
            <div className="h-screen my-10 py-10">
                <h1 className="text-2xl mb-10">
                    <span className="font-poppins font-bold">
                        Pencarian anda:
                    </span>{" "}
                    {keyword}
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-5 justify-between">
                    {properties.length > 0 &&
                        properties?.map((property) => (
                            <PropertyItem
                                property={property}
                                key={property.id}
                            />
                        ))}
                </div>
            </div>
        </>
    );
};

export default Search;
