import { useRouter } from "next/router";
import carsData from "@/Data/carsData";
import Company from "@/components/icons/Company";
import Location from "@/components/icons/Location";
import Road from "@/components/icons/Road";
import Money from "@/components/icons/Money";

const CarId = () => {
    const router = useRouter();
    const { carId } = router.query;

    const carDetails = carsData.find(car => car.id === parseInt(carId));

    if (!carDetails) {
        return (
            <h3 className="flex items-center justify-center text-3xl bg-black w-full h-[649px] text-white">
                Car not found!
            </h3>
        );
    }

    const { name, year, distance, price, image, model, category, description, location } = carDetails;

    return (
        <div className="w-full h-full bg-black">
            <div className="container mx-auto p-4 bg-black max-w-[1100px] min-h-[649px]">
                <div className="bg-white flex xl:flex-row flex-col rounded-lg shadow-lg items-center overflow-hidden lg:flex">
                    <img
                        src={image}
                        alt={`Image of ${name}`}
                        className="w-full h-full max-w-[600px] mx-2 rounded-lg m-auto object-cover"
                    />
                    <div className="p-6">
                        <div className="flex flex-row items-center">
                            <Company />
                            <h2 className="text-2xl font-bold mb-2 pl-2 pt-3">{name}</h2>
                        </div>
                        <p className="text-gray-600 mb-4">{model} - {year}</p>
                        <p className="text-gray-800 font-medium text-sm">{description}</p>
                        <div className="flex items-center mt-4">
                            <div className="flex flex-row">
                                <Money />
                                <span className="text-gray-800 font-bold pt-1 pl-2">{price} $</span>
                                <span className="text-gray-600 ml-2 pt-1">({category})</span>
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="flex flex-row items-center">
                                <Location />
                                <p className="text-gray-700 font-semibold pl-1">{location}</p>
                            </div>
                            <div className="flex flex-row items-center mt-2">
                                <Road />
                                <p className="text-gray-700 font-semibold pl-1">{distance} Km</p>
                            </div>
                        </div>
                        <div className="mb-4 items-end flex justify-end">
                            <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
                                Contact Seller
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarId;
