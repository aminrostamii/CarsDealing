import Link from 'next/link';
import Image from 'next/image';
import Location from './icons/Location';

const Card = (props) => {
    return (
        <Link href={`/Cars/${props.id}`}>
            <a>
                <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl p-4">
                    <Image 
                        src={props.image}
                        alt="Product"
                        width={288} // example width, adjust as needed
                        height={176} // example height, adjust as needed
                        className="object-cover rounded-xl bg-cover object-center"
                    />
                    <div className="px-4 py-3 w-72">
                        <span className="text-gray-400 mr-3 uppercase text-xs font-bold">{props.name}</span>
                        <div className="flex flex-row items-center justify-between pr-4">
                            <p className="text-lg text-black truncate block capitalize font-medium p-1">{props.model}</p>
                            <span className="text-gray-500">{props.distance} km</span>
                        </div>
                        <div className="flex items-center">
                            <div className="flex flex-row justify-between w-full">
                                <p className="text-sm text-gray-600 cursor-auto p-1">{props.price} $</p>
                                <div className="flex flex-row items-center pr-2">
                                    <span className="p-1">{props.location}</span>
                                    <Location />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    );
}

export default Card;
