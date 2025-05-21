import HeroSection from "../components/layout/HeroSection"
import GenderCollectionSection from "../components/products/GenderCollectionSection"
import NewArrivals from "../components/products/NewArrivals"


const Home = () => {
  return (
    <div className="h-1000">
      <HeroSection />
      <GenderCollectionSection />
      <NewArrivals />
    </div>
  )
}

export default Home