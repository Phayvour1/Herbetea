import React from 'react';
import { useParams } from 'react-router-dom';
import imageSrc from '../assets/Rectangle 601.png';
import imageSrc2 from '../assets/Rectangle 63.png';
import imageSrc3 from '../assets/Ratings.png';


import './Productdetail.css'



const products = [
  { id: 1, name: 'Blossom Harmony Tea', price: 3500, img: 'src/assets/Rectangle 63.png', rating: 58, desc: 'A perfect blend of nature’s finest herbs.', },
  { id: 2, name: 'Blossom Harmony Tea', price: 3500, img: 'src/assets/Rectangle 63 (1).png', rating: 45, desc: 'A perfect blend of nature’s finest herbs.', },
  { id: 3, name: 'Blossom Harmony Tea', price: 3500, img: 'src/assets/Rectangle 63 (2).png', rating: 50, desc: 'A perfect blend of nature’s finest herbs.', },
]; 

const Productdetail = () => {
  const { productId } = useParams();


  

  return (
    <div>
      <div>
      <div className='img-and-text'>
        <div>
          <img src={imageSrc} alt="Blossom Harmony Tea" />
        </div>
        <div className='other-half'>
          <h1>Blossom Harmony Tea</h1>
          <div>
            <h4>Our Specially crafted slimming herbal tea blends are designed to support women’s health and well-being. Each sip offers an harmonious perfect blend of organic ingredients, promoting relaxation, vitality, and overall wellness.</h4>
            <ul>
              <li>Detoxifies and cleanses the liver</li>
              <li>Replenishes the body’s vitality</li>
              <li>Strengthen the immune system</li>
              <li>Balances the hormones</li>
            </ul>
          </div>
          <div className='count-buy'>
            <div className='count'>
              <button className="minus-button1">-</button>
              <button className="quantity-num1">1</button>
              <button className="plus-button1">+</button>
            </div>
            <div>
              <button className="buy-now">Buy Now</button>
            </div>
          </div>
          <div className='accordion'>
          
          </div>
        </div>
        </div>



        <div className='reviews'>
          <h1>Reviews</h1>
          <div>
            <div className="review1"></div>
            <div className="review2"></div>
            <div className="review3"></div>
          </div>
          <div className="similar-pdt">
            <h1>Similar Products</h1>
            <div>  
            
            <div className='grid-row1'>
        {products.map((product) => (
          <div className='card1' key={product.id}>
           <a href="/productdetail/:productId">
 <img src={imageSrc2} alt={product.name} /></a>
            <div>
              <div className='card1-name'>
                <h4>{product.name}</h4>
                <h5>₦{product.price}</h5>
              </div>
              <div className='desc-and-btn'>
                <div>
                  <h6>A perfect blend of nature</h6>
                  <div className='rating'>
                    <img src={imageSrc3} alt="rating" /> 
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productdetail;
