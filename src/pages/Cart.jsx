import React, { useState, useEffect } from 'react';
import './Cart.css';

export default function Cart({ cart, setCart, removeFromCart, updateQuantity }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Calculate total price whenever cart changes
    let totalPrice = 0;
    cart.forEach(item => {
      totalPrice += item.price * item.quantity;
    });
    setTotal(totalPrice);
  }, [cart]);

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <h4 className='emptycart'>Your cart is empty</h4>
      ) : (
        <div className="shoppingcart-and-shippinginfo">
          <div className="shoppingcart">
            <h1>Shopping Cart</h1>
            {cart.map(item => (
              <div key={item.id} className="cart-item">
                <div>
                  <img src={item.img} alt={item.name} />
                </div>
                <div>
                  <div className="name-and-price">
                    <h4>{item.name}</h4>
                    <p>₦{item.price}</p>
                  </div>
                  <div className="desc-remove">
                    <h6>{item.desc}</h6>
                    <h4 onClick={() => removeFromCart(item.id)}>Remove</h4>
                  </div>
                  <div className="button-add">
                    <button className="plus-button" onClick={() => updateQuantity(item.id, true)}>+</button>
                    <p className="quantity-num">{item.quantity}</p>
                    <button className="minus-button" onClick={() => updateQuantity(item.id, false)}>-</button>
                  </div>
                </div>
              </div>
            ))}
            <h1>Order Summary</h1>
            <h2>Subtotal:&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ₦{total}</h2>
            <h2>Shipping fee:&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ₦3000</h2>
            <h2>Total: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;₦{total + 3000}</h2>
          </div>
          <div className="vertical-line"></div>
          <div className="shippinginfo">
            <h1>Shipping information</h1>
            <div className="email">
              <input type="email" placeholder="Email: johndoe@gmail.com" />
            </div>
            <div className="address">
              <input type="text" className="input1" placeholder="Address: Apt no Street" />
              <input type="text" className="input2" placeholder="City" />
              <input type="text" className="input3" placeholder="Country" />
            </div>
            <div className="payment">
              <h1>Payment Information</h1>
              <input type="number" placeholder="Card number: XXXX XXXX XXXX XXXX" />
              <input type="number" className="exp" placeholder="Expiry date: MM/YYYY" />
              <button type="button">Place Order</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
