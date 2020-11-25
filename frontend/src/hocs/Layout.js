import React from "react"
import NavbarL from './NavbarL'
import Footer from './Footer'

const Layout = (props) => {
    return(
        <div>
            <NavbarL />
            {props.children}
            <Footer />
        </div>
    )
    }

export default Layout