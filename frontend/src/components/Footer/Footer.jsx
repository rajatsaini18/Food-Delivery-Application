import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <footer className='footer'>

      <div className='footer-container'>
        <div className='footer-section'>
         
         <img className='img'  src={assets.logo}></img>
         
          <p>We are dedicated to bringing you the best dishes from top restaurants in your area. Our mission is to provide a convenient and delightful food delivery experience.</p>
        </div>
        <div className='footer-section'>
          <h4>Quick Links</h4>
          <ul>
            <li><a href='/home'>Home</a></li>
            <li><a href='/menu'>Menu</a></li>
            <li><a href='/about'>About</a></li>
            <li><a href='/contact'>Contact</a></li>
            <li><a href='/faq'>FAQ</a></li>
          </ul>
        </div>
        <div className='footer-section'>
          <h4>Contact Us</h4>
          <p>support@foodelivery.com</p>
          <p>9996941442</p>
          <p>123 Food Street, Gourmet City, Foodland</p>
        </div>
        <div className='footer-section'>
          <h4>Follow Us</h4>
          <div className='social-icons'>
            <a href='https://www.facebook.com'><img src={assets.facebook_icon} alt='Facebook' /></a>
            <a href='https://www.twitter.com'><img src={assets.twitter_icon} alt='Twitter' /></a>
            <a href='https://www.linkedin.com'><img src={assets.linkedin_icon} alt='LinkedIn' /></a>
          </div>
        </div>
      </div>
      <hr></hr>

      <div className='footer-bottom'>
        <p>&copy; 2024 Foodelivery. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
