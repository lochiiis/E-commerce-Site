import React from 'react'
// import { connect } from 'react-redux'
import {BrowserRouter ,Route,Routes } from 'react-router-dom'
import UserLayout from './components/layout/UserLayout';

const App = () => {
  return (
    
    <BrowserRouter>

    <Routes>
      {/* user layout */}
      <Route path='/' element={<UserLayout/>} />


      {/* admin layout */}
      
      
    </Routes>


    </BrowserRouter>
    

  )
}

export default App;