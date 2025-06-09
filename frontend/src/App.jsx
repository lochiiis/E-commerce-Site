
// import { connect } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserLayout from './components/layout/UserLayout';
import Home from './pages/Home'
import { Toaster, toast } from 'sonner'
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import CollectionPage from './pages/CollectionPage';
import ProductDetails from './components/products/ProductDetails';
import Checkout from './components/cart/Checkout';
import OrderConfirmation from './pages/OrderConfirmation';
import OrderDetails from './pages/OrderDetails';
import MyOrdersPage from './pages/MyOrdersPage';
import AdminLayout from './components/admin/AdminLayout';
import AdminHomePage from './pages/AdminHomePage';

const App = () => {
  return (

    <BrowserRouter>
      <Toaster position="top-right" />

      <Routes>
        {/* user layout */}
        <Route path='/' element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="profile" element={<Profile />} />
          <Route path="collections/:collection" element={<CollectionPage />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="order-confirmation" element={<OrderConfirmation />} />
          <Route path="my-orders" element={<MyOrdersPage />} />
          <Route path="order/:id" element={<OrderDetails />} />

        </Route>


        {/* admin layout */}
        <Route path="/admin" element={<AdminLayout />} >
        <Route index element={<AdminHomePage />} />

        
        
        
        </Route>


      </Routes>


    </BrowserRouter>


  )
}

export default App;