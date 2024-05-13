import Categories from "../Categories";
import FilterPrice from "../FilterPrice";

const AllFilters = () => {
    return (
        <div className="bg-black rounded-lg max-w-[850px] mx-auto flex lg:flex-row flex-col items-center justify-between h-30">
            <Categories/>
            <FilterPrice />
                    </div>
    );
}

export default AllFilters;