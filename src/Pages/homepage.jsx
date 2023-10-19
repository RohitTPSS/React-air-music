import React from 'react'
import ContactForm from '../components/ContactForm/contactForm'
import HeroSection from '../components/HeroSection/heroSection'
import MultiImages from '../components/MultiImages/multiImages'
import Specification from '../components/Specification/specification'

function Homepage() {
    return (
        <>
            <HeroSection />
            <Specification />
            <MultiImages />
            <ContactForm />
        </>
    )
}

export default Homepage
