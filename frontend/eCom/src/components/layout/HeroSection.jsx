
import { Link } from 'react-router-dom'
import heroImg from '../../assets/heroImg.jpg'

const HeroSection = () => {
  return (
    <section className='relative'>
      <img src={heroImg} alt="he" className='w-full h-[400px] md:h-[600px] lg:h-[750px] object-cover' />

      <div className='absolute inset-0 flex items-center justify-center '>
        <div className='text-center text-white'>
          <h1 className='text-4xl md:text-9xl font-bold tracking-tighter uppercase mb-4'>
            Vaction <br /> ready
          </h1>
          <p className='text-sm tracking-tighter md:text-lg mb-6 '>Explore our vaction-ready outfits with fast worldwide shipping.</p>
          <Link to="#" className='bg-white text-gray-950 px-6 py-2 rounded-sm text-lg'>Explore Now</Link>
        </div>
      </div>














    </section>

  )
}

export default HeroSection