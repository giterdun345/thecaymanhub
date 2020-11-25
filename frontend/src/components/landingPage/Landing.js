import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Featurettes from './Featurettes'
import Featured from './Featured'
import LandingCard from './LandingCard'
import NavBarD from '../../hocs/NavBarD'
import Footer from '../../hocs/Footer'

// import axios from 'axios'
const Landing = ()=>{

    return(
        <div>
            <NavBarD />
            <LandingCard />
            <div className='mt-5'>
                <Featured />
            </div>
            <Featurettes />
            <div className='bg-light'>
                <Footer />
            </div>
        </div>
    )
}

export default Landing;