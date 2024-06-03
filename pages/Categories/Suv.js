import carsData from '@/Data/carsData';
import FilterCars from '@/components/FilterCars';

const Suv = () => {

  const SUVs=carsData.filter(Car=>Car.category==="suv")

    return (
        <div className="bg-black w-full min-h-screen mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 pt-10 pb-10 ">
            {SUVs.map(SuvCar=><FilterCars key={SuvCar.id} data={SuvCar}/>)}
        </div>
    );
}

export default Suv;