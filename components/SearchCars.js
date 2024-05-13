import { useState } from "react";
import carCompanies from "@/Data/CarsCompany";
import carsData from "@/Data/carsData";
import { useRouter } from "next/router";

const SearchCars = ({searchedCars,setSearchedCars}) => {

    const router=useRouter()

    const [selectedCompany, setSelectedCompany] = useState("");
    const [model, setModel] = useState("");
   
    console.log(carsData);

    const handleSearch = () => {
            console.log(selectedCompany);
        if (selectedCompany === "All" || selectedCompany === "Company" ) {
            setSearchedCars(carsData);
            return;
        }
        const filteredCars = carsData.filter(car => {
            const isCompanyMatch = selectedCompany === "" || car.name === selectedCompany;
            const isModelMatch = model === "" || car.model.toLowerCase().includes(model.toLowerCase());
            return isCompanyMatch && isModelMatch;
        });

        if (filteredCars.length === 0) {
                router.push('/NotFound')
        } else {
            setSearchedCars(filteredCars);
        }
    };

    return (
        <div className="w-full bg-black p-6">
        <div className="flex flex-row rounded-lg max-w-[500px] bg-white m-auto p-1">
            <select className="rounded-lg h-10 border-gray-400 border-2 p-1 w-48"  
                value={selectedCompany}
                onChange={(e) => setSelectedCompany(e.target.value)}>
            {carCompanies.map(companies=><option key={companies} value={companies}>{companies}</option>)}
            </select>
            <input type="text" placeholder="Model:" className="rounded-lg border-2 border-gray-400 ml-2 pl-2"  
             value={model}
             onChange={(e) => setModel(e.target.value)}/>

            <button className="rounded-md w-20 h-10 bg-black text-white ml-1" onClick={handleSearch}>Search</button>
        </div>
        </div>
    );
}

export default SearchCars;
