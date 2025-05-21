import { Link } from "react-router-dom"
import mensCollection from "../../assets/mens.jpg"
import womensCollection from "../../assets/womens.jpg"

const GenderCollectionSection = () => {
    return (
        <section className="py-20 px-4 lg:px-0">
            <div className="container mx-auto flex flex-col md:flex-row gap-18">
                <div className="relative flex-1">
                    <img src={mensCollection} alt="mens" className="w-full h-[400px] object-cover"/>
                    <div className="absolute bottom-8 left-8 bg-gray-100 bg-opacity-90 p-4 rounded-md">
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">Mens Collection</h2>
                        <Link to="/collection/all?gender=Men" className="text-blue-900 font-medium">Shop Now</Link>
                    </div>
                </div>
                <div className="relative flex-1">
                    <img src={womensCollection} alt="mens" className="w-full h-[400px] object-cover"/>
                    <div className="absolute bottom-8 left-8 bg-gray-100 bg-opacity-90 p-4 rounded-md" >
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">Womens Collection</h2>
                        <Link to="/collection/all?gender=Women" className="text-blue-900 font-medium">Shop Now</Link>
                    </div>
                </div>

                

            </div>

        </section >
    )
}

export default GenderCollectionSection