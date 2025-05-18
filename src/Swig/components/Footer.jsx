import React from 'react';
import { Dropdown } from 'rsuite';
import img from "./images/google.jpg"
import { FaInstagram, FaPinterest } from "react-icons/fa6";
import { FaLinkedin, FaFacebookF, FaTwitter   } from "react-icons/fa";



const Footer = () => {
  return (
    <div className="footer-container">

      <div className='forBox'>
        <div className='swigImg'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/a/a0/Swiggy_Logo_2024.webp' style={{width:"170px", height:"50px"}}/>
        <p className='pot'>© 2025 Swiggy Limited</p>
        </div>

      <div className='cont' style={{display: 'flex', justifyContent: 'space-around', padding: '2rem'}}>
        

        <div className="company">
        <h2>Company</h2>
        <p>About Us</p>
        <p>Swiggy Corporate</p>
        <p>Careers</p>
        <p>Team</p>
        <p>Swiggy One</p>
        <p>Swiggy Instamart</p>
        <p>Swiggy Genie</p>
        <p>Minis</p>
        <p>Pyng</p>
        </div>

        <div className="contact">
        <h2>Contact us</h2>
        <p>Help & Support</p>
        <p>Partner with us</p>
        <p>Ride with us</p>
        </div>

        <div className="legal">
        <h2>Legal</h2>
        <p>Terms & Conditions</p>
        <p>Cookie Policy</p>
        <p>Privacy Policy</p>
        <p>Investor Relations</p>
        </div>

        <div className="available">
        <h2>Available in:</h2>
        <p>Bangalore</p>
        <p>Gurgaon</p>
        <p>Hyderabad</p>
        <p>Delhi</p>
        <p>Mumbai</p>
        <p>Pune</p>
        <p>Khammam</p>
        <p>Chennai</p>

        <div style={{ marginTop: '1rem' }}>
          <Dropdown title="600+ Cities">
            <Dropdown.Item>Monday</Dropdown.Item>
            <Dropdown.Item>Tuesday</Dropdown.Item>
            <Dropdown.Item>Wednesday</Dropdown.Item>
            <Dropdown.Item>Thursday</Dropdown.Item>
            <Dropdown.Item>Friday</Dropdown.Item>
            <Dropdown.Item>Saturday</Dropdown.Item>
            <Dropdown.Item>Sunday</Dropdown.Item>
          </Dropdown>
        </div>
        </div>

        <div className="contact">
        <h2>Life at Swiggy</h2>
        <p>Explore with Swiggy</p>
        <p>Swiggy News</p>
        <p>Snackabless</p>
        </div>

        <div className='socialLink'>
          <h2>Social Links</h2>
          <FaInstagram />
          <FaLinkedin />
          <FaFacebookF />
          <FaPinterest />
          <FaTwitter />
        </div>

      </div>
      </div>

       <div className='downBox'>
        <div>
          <h2 className='h2Tag'>For better experience,download the Swiggy app now</h2>
        </div>
        <div>
          <img src={img} className='imgBel'/>

        </div>        
      </div>

    </div>
  );
};

export default Footer;
