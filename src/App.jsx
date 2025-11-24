import React from 'react'
import Navbar from './components/navbar/Navbar.jsx'
import Footer from './components/footer/Footer.jsx'
import Home from './pages/home/Home.jsx'
import User from './pages/user/User.jsx'
import Register from './pages/register/Register.jsx'
import Users from './pages/user/Users.jsx'
import AddUser from './pages/user/AddUser.jsx'
import { Route, Routes } from 'react-router-dom'


export default function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='users' element={<Users />} />
      <Route path='users/:id' element={<User />} />
      <Route path='users/addUser' element={<AddUser />} />
      <Route path='register' element={<Register />} />
    </Routes>
    <Footer /> 
    </>
  )
}
