import carsData from '@/Data/carsData';
import FilterCars from '@/components/FilterCars';

const Sedan = () => {

    const Sedans=carsData.filter(Car=>Car.category==="sedan")

    return (
        <>
        <div className="bg-black w-full min-h-screen mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 pt-10 pb-10 ">
            {Sedans.map(sedanCar=><FilterCars key={sedanCar.id} data={sedanCar}/>)}
        </div>
        </>
    );
}

export default Sedan;