import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Search from './Search'
import beach from '../images/caymanLandingImg.jpg'


const LandingCard = () =>{
    return(
        <Card className="bg-dark text-white">
            <Card.Img src={beach} alt="Cayman Islands Beach" className='darken-image' />
            <Card.ImgOverlay>
                {/* <Card.Title className='text-center'></Card.Title> */}
                <Card.Text>
                    <Search />
                </Card.Text>
                <Card.Text className='text-center'>
                    <Link className='mr-3 text-white'>Restaurants</Link>
                    <Link className='mr-3 text-white'>Bars</Link>
                    <Link className='mr-3 text-white'>Musicians</Link>
                    <Link className='mr-3 text-white text-nowrap'>And More...</Link>
                </Card.Text>
            </Card.ImgOverlay>
        </Card>
        
    )
}

export default LandingCard;