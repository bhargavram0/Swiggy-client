import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { FaMoneyBillWave, FaCreditCard } from 'react-icons/fa';
import { SiGooglepay, SiPhonepe } from 'react-icons/si';

const PaymentsPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [paymentStatus, setPaymentStatus] = useState('');

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);

    const subtotal = savedCart.reduce((total, item) => total + item.price * item.quantity, 0);
    const gst = subtotal * 0.18;
    setTotalPrice((subtotal + gst).toFixed(2));
  }, []);

  const handlePayment = () => {
    if (!paymentMethod) {
      alert("Please select a payment method.");
      return;
    }

    setPaymentStatus(`Processing ${paymentMethod} payment...`);
    setTimeout(() => {
      setPaymentStatus(`Payment successful with ${paymentMethod}! 🎉`);
      localStorage.removeItem('cart');
    }, 1500);
  };

  const paymentOptions = [
    { label: 'Cash on Delivery', icon: <FaMoneyBillWave className="payIcon" /> },
    { label: 'Credit/Debit Card', icon: <FaCreditCard className="payIcon" /> },
    { label: 'GPay', icon: <SiGooglepay className="payIcon" /> },
    { label: 'PhonePe', icon: <SiPhonepe className="payIcon" /> },
  ];

  return (
    <div className="paymentsPage">
      <Navbar />
      <div className="paymentContainer">
        <h2 className="paymentHeading">Checkout</h2>

        <div className="paymentSummary">
          <p><strong>Total Amount to Pay:</strong> ₹{totalPrice}</p>
        </div>

        <div className="paymentMethods">
          <h3>Select Payment Method:</h3>

          {paymentOptions.map((option) => (
            <label key={option.label} className="radioLabel">
              <input
                type="radio"
                value={option.label}
                checked={paymentMethod === option.label}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="radioInput"
              />
              {option.icon}
              <span className="methodText">{option.label}</span>
            </label>
          ))}
        </div>

        <button className="confirmPaymentBtn" onClick={handlePayment}>
          Confirm Payment
        </button>

        {paymentStatus && <p className="paymentStatus">{paymentStatus}</p>}
      </div>
    </div>
  );
};

export default PaymentsPage;
