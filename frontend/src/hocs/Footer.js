import React from 'react'
import logo from '../components/images/hublogotempate.png'
const Footer = ()=>{
    return(
        <footer class="container py-5 ">
        <div class="row">
            <div class="col-12 col-md">
                <img src={logo} alt='logo of my business' height="100" width="100"/>
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="d-block mb-2" role="img" viewBox="0 0 24 24" focusable="false"><title>Product</title><circle cx="12" cy="12" r="10"/><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"/></svg> */}
            <small class="d-block mb-3 text-muted">&copy; 2020</small>
            </div>
            <div class="col-6 col-md">
            <h5>About The Cayman Hub&copy; </h5>
            <ul class="list-unstyled text-small">
                <li><a class="text-muted" href="about">About Us</a></li>
                {/* <li><a class="text-muted" href="press">Press</a></li> */}
                <li><a class="text-muted" href="terms">Terms</a></li>
                {/* <li><a class="text-muted" href="careers">Careers</a></li> */}
                <li><a class="text-muted" href="invest">Investor Relations</a></li>
                <li><a class="text-muted" href="integritypolicy">Integrity Policy</a></li>
            </ul>
            </div>
            {/* <div class="col-6 col-md">
            <h5>Resources</h5>
            <ul class="list-unstyled text-small">
                <li><a class="text-muted" href="#">Resource</a></li>
                <li><a class="text-muted" href="#">Resource name</a></li>
                <li><a class="text-muted" href="#">Another resource</a></li>
                <li><a class="text-muted" href="#">Final resource</a></li>
            </ul>
            </div> */}
            <div class="col-6 col-md">
            <h5>Explore</h5>
            <ul class="list-unstyled text-small">
                <li><a class="text-muted" href="writereview">Write A Review</a></li>
                <li><a class="text-muted" href="requestaddition">Request an Addition</a></li>
                <li><a class="text-muted" href="makedonation">Donate to The Cayman Hub</a></li>
                <li><a class="text-muted" href="help">Help Center</a></li>
            </ul>
            </div>
            <div class="col-6 col-md">
            <h5>Mobile Application</h5>
            <ul class="list-unstyled text-small">
                <li><a class="text-muted" href="mobileapp">Do you want a mobile App?</a></li>
                {/* <li><a class="text-muted" href="#">Locations</a></li>
                <li><a class="text-muted" href="#">Privacy</a></li>
                <li><a class="text-muted" href="#">Terms</a></li> */}
            </ul>
            </div>
        </div>
        </footer>
    )
}

export default Footer;