import React from 'react'
import HeroSect from './sections/HeroSect'
import CustomerReviews from './sections/CustomerReviews'
import About from './About'
import Dairy from './sections/Dairy'
import Plants from './sections/Plants'

const Home = () => {
    return (
        <>
            <HeroSect />
            <About />
            <CustomerReviews />
            <Dairy/>
            <Plants/>
        </>
    )
}

export default Home
