import { useSearchParams } from "react-router-dom"

const SortOptions = () => {

    const [searchParms, setSearchParms] = useSearchParams();

    const handleSortChange = (e) => {
        const sortBy= e.target.value;
        searchParms.set("sortBy", sortBy);
        setSearchParms(searchParms);
    }

    return (
        <div className='mb-4 flex items-center justify-end'>
            <select
                id="sort"
                onChange={handleSortChange}
                value={searchParms.get("sortBy") || ""}
                className="border p-1 rounded-md focus:outline-none text-center"
            >
                <option value="">Default</option>
                <option value="priceAsc">Price: Low to High</option>
                <option value="priceDesc">Price: High to Low</option>
                <option value="popularity">Popularity</option>
            </select>

        </div>
    )
}

export default SortOptions