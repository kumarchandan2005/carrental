import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/home'
import CarDetails from './pages/CarDetails'
import Cars from './pages/Cars'
import MyBooking from './pages/MyBooking'
import Footer from './components/Footer'
import Layout from './pages/owner/Layout'
import Dashboard from './pages/owner/Dashboard'
import ManageBookings from './pages/owner/ManageBookings'
import Addcar from './pages/owner/Addcar'
import ManageCars from './pages/owner/ManageCars'
import Login from './components/Login'
import { Toaster } from 'react-hot-toast'
import { useAppContext } from './context/AppContext'

const App = () => {
  const {showLogin} = useAppContext()
  const isOwnerpath = useLocation().pathname.startsWith('/owner')
  return (
    <>
    <Toaster />
      {showLogin &&  <Login/> }
     
      {!isOwnerpath && <Navbar/>}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/car-details/:id' element={<CarDetails/>}/>
        <Route path='/cars' element={<Cars/>}/>
        <Route path='/My-bookings' element={<MyBooking/>}/>

        <Route path='/owner' element={<Layout/>}>
        <Route index element ={<Dashboard/>}/>
        <Route path='add-car' element={<Addcar/>}/>
        <Route path='manage-cars' element={<ManageCars/>}/>
        <Route path='manage-bookings' element={<ManageBookings/>}/>
        </Route>
      </Routes>

      {!isOwnerpath && <Footer/>}
    </>
  )
}

export default App