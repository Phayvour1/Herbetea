import React from 'react';
import './Footer.css';
export default function Footer() {
  return (
    <footer>
       <div className='footer'>
       <div className='footer1'>
      <div className='herbetea-footer'>
        <h1>
        Herbetea
        </h1>
        <h6>
        Each sip of our perfectly blended tea<br /> offers a harmonious balance of organic<br /> ingredients, promoting relaxation, <br />vitality and overall wellness. 
        </h6>
        <h6 className='shop-here'>
        Shop here 
        </h6>
      </div>


      <div className='footer-middle'>
        <div>
          <ul>
            <li className='sitemap'>
            Sitemap
            </li>
            <li>Home</li>
            <li>Products</li>
    
          </ul>

        </div>

        <div> 
          <ul>
            <li className='sitemap'>Socials</li>
            <li>Facebook</li>
            <li>LinkedIn</li>
            <li>Instagram</li>
            <li>Twitter</li>
          </ul>

        </div>
        <div> 
          <ul>
            <li className='sitemap'>Info</li>
            <li>Return policy</li>
            <li>Legal notice</li>
            <li>Cookie policy</li>
            <li>Terms and conditions</li>
          </ul>
        </div>
        
      </div>
      </div>
      

      <div className="subscribe-container">
      <div className="input-wrapper">
          <input
            type="email"
            placeholder="Enter your email"
          />
          <button type="submit">Subscribe</button>
        </div>
      </div>
      </div>


      <p className='copy'>Copyright 2024. Florence</p>
    </footer>
  );
}
