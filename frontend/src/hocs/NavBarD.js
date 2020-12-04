import React, { useState, useEffect } from 'react'
import { Navbar, NavDropdown, Nav, Button } from 'react-bootstrap'
import logo from '../components/images/logobg2.jpg'
import Home from '../components/Home'
const NavBarD = (props) =>{
     return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand className='mr-3' href="/">
            <img className='mr-3' src={logo} style={{borderRadius:"30%"}}/>
            {/* The Cayman Hub */}
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto font-weight-bold ">
                <Nav.Link className='ml-5 text-white' href="/events">What's Happening Now</Nav.Link>
                <Nav.Link className='ml-5 text-white' href="/writereview">Write a Review</Nav.Link>
                <Nav.Link className='ml-5 text-white' href="/gossip">Gossip</Nav.Link>
                <Nav.Link className='ml-5 text-white' href="/requestaddition">Request an Addition</Nav.Link>
                    <NavDropdown 
                        className='ml-5 text-light' 
                        title= {<span className="text-white my-auto">Categories</span>} 
                        id="collasible-nav-dropdown"
                    >
                        <NavDropdown.Item href="food and drink">Food &amp; Drink</NavDropdown.Item>
                        <NavDropdown.Item href="entertainment">Entertainment</NavDropdown.Item>
                        <NavDropdown.Item href="shopping">Shopping</NavDropdown.Item>
                        <NavDropdown.Item href="education">Education</NavDropdown.Item>
                        <NavDropdown.Item href="professional services">Professional Services</NavDropdown.Item>
                        <NavDropdown.Item href="health and medicine">Health &amp; Medicine</NavDropdown.Item>
                        <NavDropdown.Item href="real estate">Real Estate</NavDropdown.Item>
                        <NavDropdown.Item href="beauty">Beauty</NavDropdown.Item>
                        <NavDropdown.Item href="transportation">Transport</NavDropdown.Item>
                        <NavDropdown.Item href="religion">Religion</NavDropdown.Item>
                        <NavDropdown.Item href="technology">Technology</NavDropdown.Item>
                        <NavDropdown.Item href="animals">Animals</NavDropdown.Item>
                        {/* <NavDropdown.Item href="other businesses">And More</NavDropdown.Item> */}

                        <NavDropdown.Divider />
                        <NavDropdown.Item href="allCategories">All Categories</NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                  <Nav>
                      <Button className='text-white' variant = 'outline-light' href="signin">Log in</Button>
                      {/* <Nav.Link className= 'text-white' eventKey={2} href="signup">Sign Up</Nav.Link> */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBarD;