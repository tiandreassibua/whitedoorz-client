import { Carousel,Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function CarouselComp({ properties }) {
    return (
        <Carousel className="rounded-xl bg-red-50">
            {properties?.map((item) => (
                <div key={item.id} className="relative h-[300px] md:h-[600px] w-full">
                    <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                        <div className="w-3/4 text-center md:w-2/4">
                            <Typography
                                variant="h1"
                                color="white"
                                className="mb-4 p-2 text-lg md:text-2xl lg:text-4xl"
                            >
                                {item.name}
                            </Typography>
                            <div className="flex justify-center gap-2">
                                <Link
                                    to={`/${item.slug}`}
                                    className="px-4 py-2 md:py-3 text-sm md:px-6 bg-white font-bold rounded uppercase"
                                >
                                    Lihat Sekarang
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </Carousel>
    );
}
