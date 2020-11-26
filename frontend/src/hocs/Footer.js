import React from 'react'
import logo from '../components/images/logotrans2.png'
const Footer = ()=>{
    return(
        <footer class="container py-5 ">
        <div class="row">
            <div class="col-12 col-sm mr-5 pull-right">
            <img src={logo} alt='logo of my business'/>
            <small class="d-block mb-3 text-muted">&nbsp; &nbsp; &nbsp; &copy; 2020</small>
            </div>

            <div class="col-6 col-md ml-5">
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