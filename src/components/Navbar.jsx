import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react'; 
import './Navbar.css';
import Search from './Search';

export default function Navbar({ cart }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="uppernav">
        <Link to="/" className="herbetea">
<img src="Group 18.png" alt="" />
        </Link>
        <Search />
        <div className="nav-icons">
          <div className="hamburger-icon" onClick={toggleMenu}>
            <div className={`bar1 ${isOpen ? 'change' : ''}`}></div>
            <div className={`bar2 ${isOpen ? 'change' : ''}`}></div>
            <div className={`bar3 ${isOpen ? 'change' : ''}`}></div>
          </div>
          <div className="cart">
          <Link to="/cart" className="icon-link-cart">
            {cart.length === 0 ? (
              < ShoppingCart size={30} />
            ) : (
              <img src='Group 15.png' alt='Filled Cart' className='filled-cart-icon' />
            )}
          
          </Link>
          </div>
        </div>
      </div>
      <div className="navline"></div>
      <div>
        <ul className={`lowernav ${isOpen ? 'nav-open' : ''}`}>
          <li><Link to="/" className="home-link">Home</Link></li>
          <li><Link to="/products" className="product-link">Products</Link></li>
        </ul>
      </div>
    </nav>
  );
}
