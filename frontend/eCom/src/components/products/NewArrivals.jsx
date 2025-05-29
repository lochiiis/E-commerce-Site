import { ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"

const NewArrivals = () => {

    const scrollRef = useRef(null);
    const [scrollLeft, setScrollLeft] = useState(false);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const NewArrivals = [
        {
            _id: 1,
            name: "Stylish Jacket",
            price: 120,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=1",
                    altText: "Stylish Jacket",
                }
            ],
        },
        {
            _id: 2,
            name: "Casual Shirt",
            price: 80,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=2",
                    altText: "Casual Shirt",
                }
            ],
        },
        {
            _id: 3,
            name: "Trendy Sneakers",
            price: 150,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=3",
                    altText: "Trendy Sneakers",
                }
            ],
        },
        {
            _id: 4,
            name: "Classic Watch",
            price: 200,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=4",
                    altText: "Classic Watch",
                }
            ],
        },
        {
            _id: 5,
            name: "Leather Wallet",
            price: 50,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=5",
                    altText: "Leather Wallet",
                }
            ],
        },
        {
            _id: 6,
            name: "Stylish Sunglasses",
            price: 60,
            images: [
                {
                    url: "https://picsum.photos/500/500?random=6",
                    altText: "Stylish Sunglasses",
                }
            ],
        }
    ]


    const scroll = (direction) => {
        const scrollAmount = direction === "left" ? -300 : 300;
        scrollRef.current.scrollBy({
            left: scrollAmount,
            behavior: "smooth"
        })
    }


    // update scroll buttons
    const updateScrollButtons = () => {
        const container = scrollRef.current;

        if (container) {
            const leftScroll = container.scrollLeft;
            const rightScrollable = container.scrollWidth > leftScroll + container.clientWidth;

            setCanScrollLeft(leftScroll > 0);
            setCanScrollRight(rightScrollable);
        }
    }

    useEffect(() => {
        const container = scrollRef.current;
        if (container) {
            container.addEventListener("scroll", updateScrollButtons);
            updateScrollButtons();

            return () => container.removeEventListener("scroll", updateScrollButtons);
        }
    }, []);


    return (
        <section className="bg-gray-100 py-20 mb-15">
            <div className="container mx-auto text-center mb-10 relative">
                <h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>
                <p className="text-lg text-gray-600 mb-8">Discover the latest styles freshly added to keep your wordrobe on the cutting edge of fashion </p>

                {/* scroll button */}
                <div className="absolute right-0 bottom-[-30px] flex space-x-2 ">
                    <button
                        onClick={() => scroll("left")}
                        disabled={!canScrollLeft}
                        className={`px-2 rounded border 
                                ${canScrollLeft
                                ? "bg-gray-950 text-pink-100"
                                : "bg-gray-300 text-gray-800 cursor-not-allowed"
                            }`}
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                        onClick={() => scroll("right")}
                        disabled={!canScrollRight}
                        className={`px-2 rounded border 
                                ${canScrollRight
                                ? "bg-gray-950 text-pink-100"
                                : "bg-gray-300 text-gray-800 cursor-not-allowed"
                            }`}

                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* srollable content */}
            <div
                ref={scrollRef}
                className="container mx-auto overflow-x-scroll flex space-x-6 relative scroll-hidden"
            >
                {NewArrivals.map((product) => (
                    <div key={product._id} className="min-w-[100%] sm:min-w-[50%] lg:min-w-[20%] relative">
                        <img
                            src={product.images[0]?.url}
                            className="w-full h-68 object-cover rounded-lg"
                            alt={product.images[0]?.altText || product.name} />

                        <div className="absolute bottom-0 left-0 right-0 backdrop-blur-md text-white p-4 rounded-b-lg">
                            <Link to={`/product/${product._id}`} className="block">
                                <h4 className="font-medium">{product.name}</h4>
                                <p className="mt-1">${product.price}</p>
                            </Link>
                        </div>

                    </div>
                ))}
            </div>




        </section>
    )
}

export default NewArrivals