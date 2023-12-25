import { Carousel, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function CarouselComp({ properties }) {
    return (
        <Carousel className="rounded-xl">
            {properties?.map((item) => (
                <div key={item.id} className="relative h-[600px] w-full">
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
                                className="mb-4 text-xl md:text-2xl lg:text-4xl"
                            >
                                {item.name}
                            </Typography>
                            <Typography
                                variant="lead"
                                className="mb-12 opacity-80 text-base text-white/90"
                            >
                                {item.description}
                            </Typography>
                            <div className="flex justify-center gap-2">
                                <Link
                                    to={`/${item.slug}`}
                                    className="py-3 px-6 bg-white font-bold rounded uppercase"
                                >
                                    Lihat Sekarang
                                </Link>
                                {/* <Button size="lg" color="white" variant="text">
                                    Gallery
                                </Button> */}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </Carousel>
    );
}
