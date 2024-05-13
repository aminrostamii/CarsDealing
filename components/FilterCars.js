import Link from "next/link";
import Location from "./icons/Location";

const FilterCars = ({data}) => {
    return (
        <Link href={`/Cars/${data.id}`}>
         <div className=" w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl p-4">
                <img src={data.image}
                    alt="Product" className="h-44 w-72 object-cover rounded-xl bg-cover object-center" />
                <div className="px-4 py-3 w-72">
                    <span className="text-gray-400 mr-3 uppercase text-xs font-bold">{data.name}</span>
                    <div className="flex flex-row items-center justify-between pr-4">
                    <p className="text-lg text-black truncate block capitalize font-medium p-1">{data.model}</p>
                    <span className="text-gray-500">{data.distance} km</span>
                    </div>
                    <div className="flex items-center">
                    <div className="flex flex-row justify-between w-full">
                            <p className="text-sm text-gray-600 cursor-auto p-1">{data.price} $</p>
                            <div className="flex flex-row items-center pr-2">
                            <span className="p-1">{data.location}</span>
                            <Location />
                            </div>
                    </div>
                        <div className="ml-auto">
                        </div>
                    </div>
                </div>
        </div>
        </Link>
    );
}

export default FilterCars;
