import React from 'react'
// import Navbar from './Components/Common/Navbar'
import Footer from './Components/Common/Footer'

import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Services from './Components/Pages/Services';
import Events from './Components/Pages/Events';
import Contact from './Components/Pages/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Common/Navbar';
import VisitGallery from './Components/Home/SchGallery';
import Login from './Components/Pages/Login';
import Login1 from './Components/Login/Login1';
import CartDrawer from './Components/Services/CartDrawer';





const App = () => {
  return (

    <div>

      <BrowserRouter>

      <Navbar/>


        

        <Routes>

          <Route path="/" element={<Home/>} />

            {/* Nested Route */}

            <Route path='/visitschool' element={<VisitGallery/>}/>


          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/events" element={<Events/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/login" element={<Login/>} />

          {/* Nested Route */}
          <Route path="/login1" element={<Login1/>} />


        </Routes>

        <CartDrawer/>

        <Footer/>

      </BrowserRouter>


    </div>

  )
}

export default App



