import React from 'react'
import AnimalShop from '../Services/AniCollection'
import HeroSection from '../Services/ServicesHero'
import AnimalCollection from '../Services/AniCollection'
import CartDrawer from '../Services/CartDrawer'

const Services = () => {
  return (
    <div>
      
      <HeroSection/>
      <AnimalCollection/>
      <CartDrawer/>
    </div>
  )
}

export default Services
