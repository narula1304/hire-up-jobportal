import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Joblisting from '../Components/Joblisting'
import Appdownload from '../Components/Appdownload'
import Footer from '../Components/Footer'
function Home() {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <Joblisting/>
            <Appdownload/>
            <Footer/>
        </div>
    )
}

export default Home
