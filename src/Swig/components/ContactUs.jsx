import React, { useState } from 'react';
import  Navbar  from './Navbar';
import { Phone, Mail, MapPin, Clock } from "lucide-react";


const ContactUs = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', form);
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container">
    <Navbar/>
      <h1>Contact Us</h1>
      <p>Have questions or feedback? Reach out and we’ll get back to you!</p>

      <div className="contact-form-wrapper">
        <form onSubmit={handleSubmit} className="contact-form animated">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder='Your Name'
              required
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder='your.email@example.com'
              required
            />
          </label>

          <label>
            Phone:
            <input
              type="tel"
              name="phone"
              value={form.phone || ''}
              onChange={handleChange}
              placeholder='+91'/>
          </label>

          <label>
            Message:
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
          </label>

          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <MapPin className="h-6 w-6 text-orange-500" />
          <h3>Our Office</h3>
          </div>
          <p style={{marginTop:'-10px',marginBottom:'0px'}}>
              Swiggy Bangalore<br />
              #55/A-10, Indiqube ETA<br />
              New Airport Road, Bangalore - 560087
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Mail className="h-6 w-6 text-orange-500" />
            <h4 style={{fontSize:'20px'}}>Email:</h4>
          </div>
          <p style={{marginTop:'-15px',marginBottom:'0px'}}>support@swiggyclone.in</p>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
             <Phone className="h-6 w-6 text-orange-500" />
            <h4 style={{fontSize:'20px'}}>Phone:</h4>
          </div>
          <div style={{marginTop:'-20px'}}>
              <p style={{marginTop:'-15px',marginBottom:'0px'}}>+91 00705 00210</p>
            </div>
            
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Clock className="h-6 w-6 text-orange-500" />
                <h3 className="font-semibold">Support Hours:</h3>
            </div>
            <p style={{marginTop:'-5px'}}>24/7 Customer Support</p>
        </div>
      </div>

      {submitted && <p className="success-msg">Thank you for contacting us!</p>}
    </div>
  );
};

export default ContactUs;
