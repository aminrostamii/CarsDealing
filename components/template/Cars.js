import Card from "../Card";
import { useState } from "react";

const Cars = ({data}) => {

    return (
        <div>
            <div className="bg-black w-fit mx-auto min-h-screen grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 pt-10 pb-10 ">
                {data.map(car => (
                    <Card key={car.id} {...car} />
                ))}
            </div>
        </div>
    );
}
export default Cars;