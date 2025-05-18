import React, {useState} from 'react'
import Landing from './Swig/pages/Landing'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import ProductMenu from './Swig/components/ProductMenu'
import CartPage from './Swig/components/CartPage'
import HelpPage from './Swig/components/HelpPage'
import AboutUs from './Swig/components/AboutUs'
import ContactUs from './Swig/components/ContactUs'
import AuthPage from './Swig/components/AuthPage'
import PaymentsPage from './Swig/components/PaymentsPage'


const App = () => {
  return (
    <div>
      
       <Routes>
        <Route path='/' element = {<Landing />}/>
        <Route path='/products/:firmId/:firmName' element = {<ProductMenu/>}/>
        <Route path='/cart' element = {<CartPage/>}/>
        <Route path='/help' element = {<HelpPage/>}/>
        <Route path='/about' element = {<AboutUs/>}/>
        <Route path='/contact' element = {<ContactUs/>}/>
        <Route path='/login' element = {<AuthPage/>}/>
        <Route path='/payments' element = {<PaymentsPage/>}/>
       </Routes>
    </div>
  )
}

export default App

