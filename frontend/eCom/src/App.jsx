
// import { connect } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserLayout from './components/layout/UserLayout';
import Home from './pages/Home'
import { Toaster, toast } from 'sonner'
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';

const App = () => {
  return (

    <BrowserRouter>
    <Toaster position="top-right"/>

      <Routes>
        {/* user layout */}
        <Route path='/' element={<UserLayout />}>
        <Route index element={<Home />} />    
        <Route path="login" element={<Login/>} />  
        <Route path="register" element={<Register/>} /> 
        <Route path="profile" element={<Profile/>} />


        
        </Route>

        {/* admin layout */}


      </Routes>


    </BrowserRouter>


  )
}

export default App;