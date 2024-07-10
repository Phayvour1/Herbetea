import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';



export default function Home() {
  return (
    <div className='moble-nav'>
      <div className='herbal-tea'>
        
        <div className="womens-herbal-tea">
            <h1>
            Women’s Herbal Tea
            </h1>
            <h5>
            Nurture your wellness with our Women’s Herbal Tea.  Discover the perfect blend of nature’s finest herbs at Herbetea
            </h5>
            <Link to="/products" > <button className='Explore-Products'>
            Explore Products
            </button></Link>
        </div>
        <div className="womens-herbal-tea-img">
            <img src="Right side.png" alt="womens-herbal-tea-image" />
        </div>
      </div>
      <div className='explore-Categories'>
        <div className="explore-Categories-upper-line"></div>
        <h2>Explore Categories </h2>
        <div className="explore-Categories-lower-line"></div>
      </div>
     <div className="slimming-tea">
     <div className="Slimming-tea-text">
            <h1>
            Slimming Tea
            </h1>
            <h5>
            Our Specially crafted slimming herbal tea blends are designed to support women’s health and well-being.
            </h5>
              <button className='Buy-now-Slimming-tea'>
            Buy Now
            </button>
        </div>
        <div className="Slimming-tea-img">
            <img src="Rectangle 60.png" alt="Slimming-tea-image" />
        </div>
      </div> 
     <div className="cleasing-tea">
     <div className="Cleansing-tea-text">
            <h1>
            Cleansing Tea
            </h1>
            <h5>
            Our Specially crafted slimming herbal tea blends are designed to support women’s health and well-being.
            </h5>
              <button className='Buy-now-cleasing-tea'>
            Buy Now
            </button>
        </div>
        <div className="Cleansing-tea-img">
            <img src="Rectangle 74.png" alt="Cleansing-tea-image" />
        </div>
     </div>
     <div className="english-tea">
     <div className="English-tea-text">
            <h1>
            English Tea
            </h1>
            <h5>
            Our Specially crafted slimming herbal tea blends are designed to support women’s health and well-being. 
            </h5>
              <button className='Buy-now-englsh-tea'>
            Buy Now
            </button>
        </div>
        <div className="englsh-tea-img">
            <img src="Rectangle 74 (1).png" alt="English-tea-image" />
        </div>
     </div>
     <div className='payment-options'>
        <div className="payment-options-upper-line"></div>
        <h2>Payment Options </h2>
        <div className="payment-options-lower-line"></div>
      </div>
      <div className="various-payment-options">
        <div><img src="Group 21.png" alt="" /></div>
        <div><img src="Group 22.png" alt="" /></div>
        <div><img src="Frame 14.png" alt="" /></div>
        <div><img src="Frame 15.png" alt="" /></div>
      </div>
    </div>
  );
}
