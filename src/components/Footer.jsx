import React from 'react'
import { BiBuildingHouse } from "react-icons/bi";
import { AiFillFacebook, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai"

function Footer(props) {
  return (
    <footer className={`footer section ${props.darkMode ? "dark-theme" : "none"}`}>
        <div className="footer-container container">
            <div>
                <a href="#" className='footer-logo'>
                    Holux <BiBuildingHouse className='footer-icon' />
                </a>

                <p className="footer-details">
                    Our vision is to make all people <br /> 
                    the best place to live for them.
                </p>
            </div>

            <div className="footer-content">

                <div>
                    <h3 className="footer-title">About</h3>
                    <ul className="footer-links">
                        <li className="footer-link">About Us</li>
                        <li className="footer-link">Features</li>
                        <li className="footer-link">News & Blog</li>
                    </ul>
                </div>

                <div>
                    <h3 className="footer-title">Company</h3>
                    <ul className="footer-links">
                        <li className="footer-link">How We Work</li>
                        <li className="footer-link">Security</li>
                        <li className="footer-link">Capital</li>
                    </ul>
                </div>

                <div>
                    <h3 className="footer-title">Support</h3>
                    <ul className="footer-links">
                        <li className="footer-link">FAQs</li>
                        <li className="footer-link">Support Center</li>
                        <li className="footer-link">Contact Us</li>
                    </ul>
                </div>

                <div>
                    <h3 className="footer-title">Follow Us</h3>
                    <ul className="footer-links social-media">
                        <li className="footer-link "><AiFillFacebook className='social-media-icon' /></li>
                        <li className="footer-link"><AiOutlineTwitter className='social-media-icon' /></li>
                        <li className="footer-link"><AiFillInstagram className='social-media-icon' /></li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="footer-info container">
            <h3>&#169; Marvin Kwame All rights reserved</h3>

            <div className="footer-privacy">
                <a href="#">Terms & Agreements</a>
                <a href="#">Privacy Policy</a>
            </div>
        </div>
    </footer>
  )
}

export default Footer