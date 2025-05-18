import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../api'
import Navbar from './Navbar';


const CartPage = () => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);
  
  const calculateTotalPrice = () => {
    const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const gst = subtotal * 0.18; 
    const totalPrice = subtotal + gst;
    return { subtotal, gst, totalPrice };
  };

  const { subtotal, gst, totalPrice } = calculateTotalPrice();

  const handleRemoveItem = (itemId) => {
    const updatedCart = cart.filter((item) => item._id !== itemId);
    setCart(updatedCart);
    // localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const updateQuantity = (itemId, delta) => {
  const updatedCart = cart.flatMap((item) => {
    if (item._id === itemId) {
      const newQuantity = item.quantity + delta;

      if (newQuantity <= 0) {
        const confirmDelete = window.confirm("Are you sure you want to remove this item?");
        if (confirmDelete) {
          return []; 
        } else {
          return [item]; 
        }
      }

      return [{ ...item, quantity: newQuantity }];
    }
    return [item];
  });

  setCart(updatedCart);
  localStorage.setItem("cart", JSON.stringify(updatedCart));
};


const handleCheckout = () => {
   if (cart.length === 0) {
    alert("Please add something to the cart.");
    return;
  }
  navigate('/payments'); 
};


  return (
    <div className="cartPage">
      <Navbar/>
      <h2>Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cartItems">
          {cart.map((item) => (
            <div className="cartItem" key={item._id}>
              <img src={`${API_URL}/uploads/${item.image}`} alt={item.productName} />
              <div className="itemDetails">
                <div className="itemName">{item.productName}</div>
                <div className="itemPrice">₹{item.price}</div>
                <div className="itemQuantity">
                  <button onClick={() => updateQuantity(item._id, -1)} className="qtyBtn">-</button>
                  <span className="qtyValue">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item._id, 1)} className="qtyBtn">+</button>
                </div>
              </div>
              <div className="removeButton" onClick={() => handleRemoveItem(item._id)}>
                Remove
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="cartSummary">
        <div className="summaryRow">
          <span>Subtotal:</span>
          <span>₹{subtotal.toFixed(2)}</span>
        </div>
        <div className="summaryRow">
          <span>GST (18%):</span>
          <span>₹{gst.toFixed(2)}</span>
        </div>
        <div className="summaryRow totalPrice">
          <span>To pay:</span>
          <span>₹{totalPrice.toFixed(2)}</span>
        </div>
      </div>

      <button className="checkoutButton" onClick={handleCheckout}>Proceed to Checkout</button>
    </div>
  );
};

export default CartPage;
