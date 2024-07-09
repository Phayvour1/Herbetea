import React from 'react';
import './Products.css';
import Productdetail from './Productdetail';

const products = [
  { id: 1, name: 'Blossom Harmony Tea', price: 3500, img: 'Rectangle 63.png', rating: 58, desc: 'A perfect blend of nature’s finest herbs.', },
  { id: 2, name: 'Blossom Harmony Tea', price: 3500, img: 'Rectangle 63 (1).png', rating: 45, desc: 'A perfect blend of nature’s finest herbs.', },
  { id: 3, name: 'Blossom Harmony Tea', price: 3500, img: 'Rectangle 63 (2).png', rating: 50, desc: 'A perfect blend of nature’s finest herbs.', },
  { id: 4, name: 'Blossom Harmony Tea', price: 3500, img: 'Rectangle 63 (3).png', rating: 40, desc: 'A perfect blend of nature’s finest herbs.', },
  { id: 5, name: 'Blossom Harmony Tea', price: 3500, img: 'Rectangle 63 (4).png', rating: 60, desc: 'A perfect blend of nature’s finest herbs.', },
  { id: 6, name: 'Blossom Harmony Tea', price: 3500, img: 'Rectangle 63 (5).png', rating: 55, desc: 'A perfect blend of nature’s finest herbs.', },
  { id: 7, name: 'Blossom Harmony Tea', price: 3500, img: 'Rectangle 63 (6).png', rating: 62, desc: 'A perfect blend of nature’s finest herbs.', },
  { id: 8, name: 'Blossom Harmony Tea', price: 3500, img: 'Rectangle 63 (7).png', rating: 48, desc: 'A perfect blend of nature’s finest herbs.', },
  { id: 9, name: 'Blossom Harmonye Tea', price: 3500, img: 'Rectangle 63 (8).png', rating: 53, desc: 'A perfect blend of nature’s finest herbs.', },
  { id: 10, name: 'Blossom Harmony Tea', price: 3500, img: 'Rectangle 63 (9).png', rating: 65, desc: 'A perfect blend of nature’s finest herbs.', },
  { id: 11, name: 'Blossom Harmony Tea', price: 3500, img: 'Rectangle 63 (10).png', rating: 58, desc: 'A perfect blend of nature’s finest herbs.', },
  { id: 12, name: 'Blossom Harmony Tea', price: 3500, img: 'Rectangle 63 (11).png', rating: 70, desc: 'A perfect blend of nature’s finest herbs.', },
  { id: 13, name: 'Blossom Harmony Tea', price: 3500, img: 'Rectangle 63 (12).png', rating: 57, desc: 'A perfect blend of nature’s finest herbs.', },
  { id: 14, name: 'Blossom Harmony Tea', price: 3500, img: 'Rectangle 63 (13).png', rating: 50, desc: 'A perfect blend of nature’s finest herbs.', },
  { id: 15, name: 'Blossom Harmony Tea', price: 3500, img: 'Rectangle 63 (14).png', rating: 54, desc: 'A perfect blend of nature’s finest herbs.', },
  { id: 16, name: 'Blossom Harmonyi Tea', price: 3500, img: 'Rectangle 63 (15).png', rating: 68, desc: 'A perfect blend of nature’s finest herbs.', },
  { id: 17, name: 'Blossom Harmony Tea', price: 3500, img: 'Rectangle 63 (16).png', rating: 63, desc: 'A perfect blend of nature’s finest herbs.', },
  { id: 18, name: 'Blossom Harmony Tea', price: 3500, img: 'Rectangle 63 (17).png', rating: 61, desc: 'A perfect blend of nature’s finest herbs.', },
];

export default function Products({ addToCart }) {
  return (
    <div>
      <h1>All Products</h1>
      <div className='grid-row1'>
        {products.map((product) => (
          <div className='card1' key={product.id}>
           <a href="/productdetail/:productId">
 <img src={product.img} alt={product.name} /></a>
            <div>
              <div className='card1-name'>
                <h4>{product.name}</h4>
                <h5>₦{product.price}</h5>
              </div>
              <div className='desc-and-btn'>
                <div>
                  <h6>A perfect blend of nature</h6>
                  <div className='rating'>
                    <img src="src/assets/Ratings.png" alt="rating" /> 
                    <h6>({product.rating})</h6>
                  </div>
                </div>
                <button onClick={() => addToCart(product)}>Add to cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
