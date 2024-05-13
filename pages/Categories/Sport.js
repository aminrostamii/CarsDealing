import carsData from '@/Data/carsData';
import FilterCars from '@/components/FilterCars';

const Sport = () => {

  const Sports=carsData.filter(Car=>Car.category==="sport")
  const Search=Sports.filter(Car=>Car.model==="Ghibli")
  console.log(Search);

    return (
        <div className="bg-black w-full min-h-screen mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 pt-10 pb-10 ">
            {Sports.map(sportCar=><FilterCars data={sportCar}/>)}
        </div>
    );
}

export default Sport;
