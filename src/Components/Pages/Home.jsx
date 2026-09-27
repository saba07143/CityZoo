import React from 'react'
import Hero from '../Home/Hero'
import VisitZoo from '../Home/VisitZoo'
import OurFacilities from '../Home/OurFacilit'
import Visit from '../Home/Visit'
import SchoolExperiences from '../Home/SchExperience'
import VisitGallery from '../Home/SchGallery'
import AnimalGallery from '../Home/AniGallery'
import Testimonials from '../Home/Testinomial'
import FAQSection from '../Home/FAQ'

const Home = () => {
  return (
    <div>

      <Hero/>
      <VisitZoo/>
      <OurFacilities/>
      <Visit/>
      <SchoolExperiences/>
      <AnimalGallery/>
      <Testimonials/>
      <FAQSection/>
      
    </div>
  )
}

export default Home
