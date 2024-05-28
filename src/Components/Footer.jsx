import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="footer-links">
                <div className="footer-column">
                    <h3>Product</h3>
                    <ul>
                        <li><a href="#">Benefits</a></li>
                        <li><a href="#">Where To Use</a></li>
                        <li><a href="#">API</a></li>
                        <li><a href="#">Affiliate Program</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Information</h3>
                    <ul>
                        <li><a href="#">Payment & Content</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">GDPR</a></li>
                        <li><a href="#">TrustPilot Reviews</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Legal</h3>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Account & Payment</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Support</h3>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Instructions</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Help Center</a></li>
                    </ul>
                </div>
            </div>
        <div className="foot-right">    <div className="footer-newsletter">
                <h3>Contact Us</h3>
                <form>
                    <input type="email" placeholder="Enter your email" />
                    <button type="submit">Subscribe</button>
                </form>
            </div>
            </div>
        </footer>
    );
};

export default Footer;
