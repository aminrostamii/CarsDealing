import Link from "next/link";
import Sedan from "./icons/Sedan";
import Suv from "./icons/Suv";
import Hatchback from "./icons/Hatchback";
import Sport from "./icons/Sport";

const Categories = () => {
    return (
        <div className="flex flex-row bg-white rounded-lg">
            <Link href='/Categories/Sedan' className="flex flex-col p-2 rounded-md bg-gray-200 m-2 w-24 cursor-pointer font-medium hover:bg-gray-300 items-center justify-center">
                <Sedan/>
                <span>Sedan</span>
            </Link>
            <Link href="/Categories/Suv" className="flex flex-col p-4 rounded-md bg-gray-200 m-2 w-24 cursor-pointer font-medium hover:bg-gray-300 items-center justify-center">
                <Suv/>
                <span>SUV</span>
            </Link>
            <Link href="/Categories/Hatchback" className="flex flex-col p-4 rounded-md bg-gray-200 m-2 w-24 cursor-pointer font-medium hover:bg-gray-300 items-center justify-center">
                <Hatchback/>
                <span>Hatchback</span>
            </Link>
            <Link href="/Categories/Sport" className="flex flex-col p-4 rounded-md bg-gray-200 m-2 w-24 cursor-pointer font-medium hover:bg-gray-300 items-center justify-center">
                <Sport/>
                <span>Sport</span>
            </Link>
        </div>
    );
}

export default Categories;
