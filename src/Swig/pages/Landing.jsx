import React from 'react'
import Navbar from '../components/Navbar'
import Items from '../components/Items'
import Chains from '../components/Chains'
import FirmColl from '../components/FirmColl'
import Footer from '../components/Footer'
import BestPlaces from '../components/BestPlaces'
import BestCuisines from '../components/BestCuisines'
import PopularDish from '../components/PopularDish'
import ProductMenu from '../components/ProductMenu'

const Landing = () => {
  return (
    <div>
      <Navbar />
      <div className="landingSection">
        <Items />
        <Chains />
        <FirmColl/>
       </div>
      <BestPlaces/>
      <BestCuisines/>
      <PopularDish/>
      <Footer/>
    </div>
  )
}

export default Landing
