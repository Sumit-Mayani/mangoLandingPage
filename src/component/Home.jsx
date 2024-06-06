import React from 'react'
import HeroSect from './sections/HeroSect'
import CustomerReviews from './sections/CustomerReviews'
import About from './About'
import Dairy from './sections/Dairy'

const Home = () => {
    return (
        <>
            <HeroSect />
            <About />
            <CustomerReviews />
            <Dairy/>
        </>
    )
}

export default Home
