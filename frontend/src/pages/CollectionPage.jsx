import { Filter } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import FilterSidebar from "../components/products/FilterSidebar";
import SortOptions from "../components/products/SortOptions";
import ProductGrid from "../components/products/ProductGrid";


const CollectionPage = () => {

    const [products, setProducts] = useState([]);
    const sidebarRef = useRef(null);
    const [IsSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!IsSidebarOpen);
    }

    const handleClickOutside = (e) => {
        // close sidebar if clicked outside
        if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
            setIsSidebarOpen(false);
        }
    }

    useEffect(() => {
        // add event listner for clicks
        document.addEventListener("mousedown", handleClickOutside);

        //clean event listener
        return () =>{
            document.removeEventListener("mousedown", handleClickOutside);
        }
        
    },[]);

    useEffect(() => {
        setTimeout(() => {
            const fetchProducts =
                [
                    {
                        _id: 1,
                        name: "Casual Shirt",
                        price: 50,
                        images: [
                            { url: "https://picsum.photos/500/500?random=3" }
                        ],
                    },
                    {
                        _id: 2,
                        name: "Denim Jeans",
                        price: 80,
                        images: [
                            { url: "https://picsum.photos/500/500?random=4" }
                        ],
                    },
                    {
                        _id: 3,
                        name: "Sneakers",
                        price: 90,
                        images: [
                            { url: "https://picsum.photos/500/500?random=5" }
                        ],
                    },
                    {
                        _id: 4,
                        name: "Leather Boots",
                        price: 110,
                        images: [
                            { url: "https://picsum.photos/500/500?random=6" }
                        ],
                    },
                    {
                        _id: 5,
                        name: "Summer Dress",
                        price: 70,
                        images: [
                            { url: "https://picsum.photos/500/500?random=7" }
                        ],
                    },
                    {
                        _id: 6,
                        name: "Winter Jacket",
                        price: 150,
                        images: [
                            { url: "https://picsum.photos/500/500?random=8" }
                        ],
                    },
                    {
                        _id: 7,
                        name: "Formal Suit",
                        price: 200,
                        images: [
                            { url: "https://picsum.photos/500/500?random=9" }
                        ],
                    },
                    {
                        _id: 8,
                        name: "Sportswear Set",
                        price: 120,
                        images: [
                            { url: "https://picsum.photos/500/500?random=10" }
                        ],
                    }
                ]
            setProducts(fetchProducts);
        }, 1000);

    }, []);


    return (
        <div className="flex flex-col lg:flex-row">
            {/* Mobile filter button */}
            <button
                className="lg:hidden border p-2 flex justify-center items-center"
                onClick={toggleSidebar}
            >
                <Filter className="mr-2" />Filters
            </button>


            {/* Filter sidebar */}
            <div
                ref={sidebarRef}
                className={`${IsSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
            fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0`}>
                <FilterSidebar />

            </div>

            <div className="flex-grow p-4">
                    <h2 className="text-2xl uppercase mb-4">All Collection</h2>

                    {/* Sort options */}
                    <SortOptions />

                    {/* Products grid */}
                    <ProductGrid products={products}/>

            </div>






        </div>
    )
}

export default CollectionPage