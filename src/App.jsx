import React from 'react'
import Courses from './Pages/Courses'
import About from './Pages/About'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Saver from './Components/Saver'
import Cart from './Components/Cart'

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Courses' element={<Courses/>}/>
      <Route path='/aboutus' element={<About/>}/>
      <Route path='/Contactus' element={<Contact/>}/>
      <Route path='/Cart' element={<Cart/>}/>
      <Route path="Courses-details/:id" element={<Saver/>}/>
    </Routes>
    <Footer/>
    </>
  )
   
}

export default App