import React from 'react'
import HeroSect from './sections/HeroSect'
import CustomerReviews from './sections/CustomerReviews'
import Dairy from './sections/Dairy'
import Plants from './sections/Plants'
import Benefits from './Benefits'
import AboutUs from './sections/AboutUs'

const Home = () => {
    return (
        <>
            <HeroSect />
            <AboutUs />
            <Benefits />
            <CustomerReviews />
            <Dairy />
            <Plants />
        </>
    )
}

export default Home
