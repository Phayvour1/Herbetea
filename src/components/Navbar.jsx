import React from 'react';
import { Link } from 'react-router-dom';
import {ShoppingCart} from 'phosphor-react';
import './Navbar.css';
import Search from './Search';


export default function Navbar({cart}) {
  return (
    <nav>
      <div className='uppernav'>
      <Link to="/" className="herbetea" ><h1 className='herbetea'>Herbetea</h1></Link>
        <Search/>
        <div className='navlink'>
      < Link to="/cart" className="icon-link-cart"><ShoppingCart  size={30}/> <span className="icon-link-cart-num">{cart.length}</span></Link>
        </div>
      </div>
      <div className='navline'></div>
      <div > 
      <ul className="lowernav" > 
        <li><Link to="/" className="home-link" >Home</Link></li>
        <li><Link to="/products" className="product-link">Products</Link></li>
        
      </ul>
      </div>
    </nav>
  );
} 
