import HeroSection from "../components/layout/HeroSection"
import FeaturedCollection from "../components/products/FeaturedCollection"
import GenderCollectionSection from "../components/products/GenderCollectionSection"
import NewArrivals from "../components/products/NewArrivals"
import ProductDetails from "../components/products/ProductDetails"
import ProductGrid from "../components/products/ProductGrid"

const placeholderProducts = [
    {
        _id: 1,
        name: "Casual Shirt",
        price: 50,
        images: [
            {url: "https://picsum.photos/500/500?random=3"}
        ],
    },
    {
        _id: 2,
        name: "Denim Jeans",
        price: 80,
        images: [
            {url: "https://picsum.photos/500/500?random=4"}
        ],
    },
    {
        _id: 3,
        name: "Sneakers",
        price: 90,
        images: [
            {url: "https://picsum.photos/500/500?random=5"}
        ],
    },
    {
        _id: 4,
        name: "Leather Boots",
        price: 110,
        images: [
            {url: "https://picsum.photos/500/500?random=6"}
        ],
    },
    {
        _id: 5,
        name: "Summer Dress",
        price: 70,
        images: [
            {url: "https://picsum.photos/500/500?random=7"}
        ],
    },
    {
        _id: 6,
        name: "Winter Jacket",
        price: 150,
        images: [
            {url: "https://picsum.photos/500/500?random=8"}
        ],
    },
    {
        _id: 7,
        name: "Formal Suit",
        price: 200,
        images: [
            {url: "https://picsum.photos/500/500?random=9"}
        ],
    },
    {
        _id: 8,
        name: "Sportswear Set",
        price: 120,
        images: [
            {url: "https://picsum.photos/500/500?random=10"}
        ],
    }
]

const Home = () => {
  return (
    <div className="h-2000">
      <HeroSection />
      <GenderCollectionSection />
      <NewArrivals />
      
      {/* best sellers */}
      <h2 className="text-3xl text-center font-bold mb-4">Best Sellers</h2>
      <ProductDetails />

      <div className="container mx-auto px-8 py-8">
        <h2 className="text-3xl text-center font-bold mb-4">
          Top Wears for Women
        </h2>
        <div></div>
        <ProductGrid products={placeholderProducts}/>
      </div>

      <FeaturedCollection/>

    </div>
  )
}

export default Home