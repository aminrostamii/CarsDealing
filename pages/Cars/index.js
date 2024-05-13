import carsData from "@/Data/carsData";
import SearchCars from "@/components/SearchCars";
import AllFilters from "@/components/modules/AllFilters";
import Cars from "@/components/template/Cars";

import { useState } from "react";

const Index = () => {

    const [searchedCars, setSearchedCars] = useState([]);
    console.log(searchedCars);

    return (
        <div className="bg-black">
            <AllFilters/>
            <SearchCars searchedCars={searchedCars} setSearchedCars={setSearchedCars}/>
            {searchedCars.length > 0 ? <Cars data={searchedCars}/> : <Cars data={carsData}/>}
        </div>
    );
}
export default Index;
