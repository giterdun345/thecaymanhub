import React, { useState, useEffect } from 'react'
import { Navbar, NavDropdown, Nav, Button } from 'react-bootstrap'
import logo from '../components/images/hublogotempate.png'

const NavBarL = (props) =>{
    return(
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Brand className='mr-3' href="/">
                <img className='mr-3' src={logo} width="75" height="75"/>
                The Cayman Hub
                </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto font-weight-bold ">
                    <Nav.Link className='ml-5 ' href="/events">What's Happening Now</Nav.Link>
                    <Nav.Link className='ml-5 ' href="/writereview">Write a Review</Nav.Link>
                    <Nav.Link className='ml-5 ' href="/gossip">Gossip</Nav.Link>
                    <Nav.Link className='ml-5 ' href="/requestaddition">Request an Addition</Nav.Link>
                        <NavDropdown 
                            className='ml-5 text-light' 
                            title= {<span className=" my-auto">Categories</span>} 
                            id="collasible-nav-dropdown"
                        >
                            <NavDropdown.Item href="fooddrink">Food &amp; Drink</NavDropdown.Item>
                            <NavDropdown.Item href="entertainment">Entertainment</NavDropdown.Item>
                            <NavDropdown.Item href="education">Education</NavDropdown.Item>
                            <NavDropdown.Item href="health">Health &amp; Medicine</NavDropdown.Item>
                            <NavDropdown.Item href="realestate">Real Estate</NavDropdown.Item>
                            {/* <NavDropdown.Item href="transportation">Transportation</NavDropdown.Item> */}
                            <NavDropdown.Item href="religious">Religious</NavDropdown.Item>
                            <NavDropdown.Item href="homeservice">Home Services</NavDropdown.Item>
                            <NavDropdown.Item href="beauty">Beauty</NavDropdown.Item>
                            <NavDropdown.Item href="Automotive">Transportation</NavDropdown.Item>
                            <NavDropdown.Item href="shopping">Shopping</NavDropdown.Item>
                            <NavDropdown.Item href="professional">Professional Services</NavDropdown.Item>

                            <NavDropdown.Divider />
                            <NavDropdown.Item href="allCategories">All Categories</NavDropdown.Item>
                        </NavDropdown>
                </Nav>
                <Nav>
                    <Button className='' variant = 'outline-light' href="signin">Log in</Button>
                    {/* <Nav.Link className= '' eventKey={2} href="signup">Sign Up</Nav.Link> */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBarL;