import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

const Search = () => {
  return (
    <>
      <div className="h-screen my-10 py-10">
        <div className="mb-16">
          <form className="flex justify-between gap-5">
            <div className="w-full flex justify-around border border-gray-600 rounded-lg">
              <input
                type="text"
                className="mx-1 text-center border-r border-gray-600 outline-none w-full placeholder:text-gray-500 font-semibold"
                placeholder="Destinasi"
              />
              <input
                type="text"
                className="mx-1 text-center border-r border-gray-600 outline-none w-full placeholder:text-gray-500 font-semibold"
                placeholder="Check-in"
              />
              <input
                type="text"
                className="mx-1 text-center border-r border-gray-600 outline-none w-full placeholder:text-gray-500 font-semibold"
                placeholder="Check-out"
              />
              <input
                type="text"
                className="mx-1 text-center outline-none w-full placeholder:text-gray-500 font-semibold"
                placeholder="Tamu dan Kamar"
              />
            </div>
            <Button type="submit" variant="outlined" color="gray" size="lg">
              Cari
            </Button>
          </form>
        </div>
        <div className="mb-5">
          <Card className="w-full shadow-xl flex-row flex">
            <CardHeader
              shadow={false}
              floated={false}
              className="m-0 w-2/6 shrink-0 rounded-r-none"
            >
              <img alt="test" className="h-full w-full object-cover" />
            </CardHeader>
            <CardBody>
              <div className="flex items-center">
                <Typography variant="h3" className="mr-3">
                  Nama Hotel
                </Typography>
              </div>

              <Typography className="mb-2">Alamat Hotel</Typography>
              <Typography className="mb-5">Rating</Typography>

              <button className="mt-5 w-48 h-14 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl">
                Detail
              </button>
            </CardBody>
          </Card>
        </div>
        <div className="mb-5 mt-10  justify-between mx-auto w-full">
          <Card className="w-full shadow-xl flex-row flex">
            <CardHeader
              shadow={false}
              floated={false}
              className="m-0 w-2/6 shrink-0 rounded-r-none"
            >
              <img alt="test" className="h-full w-full object-cover" />
            </CardHeader>
            <CardBody>
              <div className="flex items-center">
                <Typography variant="h3" className="mr-3">
                  Nama Hotel
                </Typography>
              </div>

              <Typography className="mb-2">Alamat Hotel</Typography>
              <Typography className="mb-5">Rating</Typography>

              <button className="  mt-5 w-48 h-14 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl">
                Detail
              </button>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Search;
