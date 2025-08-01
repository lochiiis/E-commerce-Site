
import Header from '../common/Header'
import Footer from '../common/Footer'
import { Outlet } from 'react-router-dom'


const UserLayout = () => {
  return (
    <>
      <Header />

      {/* main content */}
      <main>
        <Outlet />
      </main>

      <Footer />

    </>
  )
}

export default UserLayout