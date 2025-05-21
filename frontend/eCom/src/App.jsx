
// import { connect } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserLayout from './components/layout/UserLayout';
import Home from './pages/Home'

const App = () => {
  return (

    <BrowserRouter>

      <Routes>
        {/* user layout */}
        <Route path='/' element={<UserLayout />}>
        <Route index element={<Home />} />        
        </Route>

        {/* admin layout */}


      </Routes>


    </BrowserRouter>


  )
}

export default App;