import { useRouter } from "next/router";
import carsData from "@/Data/carsData";
import FilterCars from "@/components/FilterCars";

const FilteredByPrice = () => {

    const router=useRouter()
    const [min,max]=router.query.slug || []

   const FilteredCars=carsData.filter(item=>item.price>min && item.price<max)

   console.log(FilteredCars);
 
     if(!FilteredCars.length) return <h3>Not Found !</h3>

    return(
        <div className="bg-black w-full min-h-screen mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 pt-10 pb-10 ">
               {FilteredCars.map(cars=><FilterCars key={cars.id} data={cars}/>)}
        </div>
    )
}

export default FilteredByPrice;
