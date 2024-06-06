import React from 'react'
import HeroSect from './sections/HeroSect'
import CustomerReviews from './sections/CustomerReviews'
import About from './About'

const Home = () => {
    return (
        <>
            <HeroSect />
            <About />
            <CustomerReviews />
        </>
    )
}

export default Home
