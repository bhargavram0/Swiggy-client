import React, { useState } from 'react';
import  Navbar  from './Navbar';

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
              required
            />
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
          <h3>Our Office</h3>
          <p>Swiggy HQ<br />Hyderabad, India</p>
          <h4>Email:</h4>
          <p>support@swiggyclone.com</p>
          <h4>Phone:</h4>
          <p>+91 00705 00210</p>
        </div>
      </div>

      {submitted && <p className="success-msg">Thank you for contacting us!</p>}
    </div>
  );
};

export default ContactUs;
