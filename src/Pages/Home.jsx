import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Joblisting from '../Components/Joblisting'
import Appdownload from '../Components/Appdownload'
function Home() {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <Joblisting/>
            <Appdownload/>
        </div>
    )
}

export default Home
