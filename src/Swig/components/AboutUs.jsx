import React from 'react';
import Navbar  from './Navbar';

const AboutUs = () => {
  return (
    <div className="about-container">
        <Navbar/>
      <div className="about-hero">
        <h1>About Us</h1>
        <p>Delivering food happiness across India, one order at a time.</p>
        <img src="https://img.freepik.com/premium-vector/food-delivery-online-concept-vector_1162942-1594.jpg" alt="Food delivery" className="hero-image" />
      </div>

      <div className="about-section">
        <h2>Who We Are</h2>
        <p>
          Swiggy is India’s leading on-demand delivery platform. From local favorites to national brands, we bring food fast, fresh, and reliably to your doorstep.
        </p>
        <img src="https://static.vecteezy.com/system/resources/previews/035/636/826/non_2x/effective-team-working-teamwork-projects-teamwork-skills-teamwork-solutions-effective-collaboration-startup-work-success-goal-achievement-concept-flat-modern-illustration-vector.jpg" alt="Teamwork" className="section-image" />
      </div>

      <div className="about-section">
        <h2>Our Mission</h2>
        <p>
          To revolutionize food delivery in India with world-class technology and seamless service while supporting restaurants and delivery partners.
        </p>
      </div>

      <div className="about-section">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>⚡ Superfast delivery</li>
          <li>🍴 Huge selection of restaurants</li>
          <li>📍 Live order tracking</li>
          <li>🤝 Support for local businesses</li>
        </ul>
      </div>

      <div className="about-section careers">
        <h2>Careers at Swiggy</h2>
        <p>
          Join a team that's passionate about redefining the way India eats. We're always looking for talented people to help us grow.
        </p>

        <div className="career-cards">
          <div className="career-card">
            <img src="https://20207335.fs1.hubspotusercontent-na1.net/hubfs/20207335/Cover%20Image-Apr-26-2024-04-58-03-9665-PM.jpg" alt="Developer" />
            <h3>Frontend Developer</h3>
            <p>Build fast, scalable web experiences that delight users.</p>
          </div>
          <div className="career-card">
            <img src="https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/marketing-pillar-page-marketing-overview_0.png" alt="Marketing" />
            <h3>Marketing Manager</h3>
            <p>Drive campaigns that connect customers to their cravings.</p>
          </div>
          <div className="career-card">
            <img src="https://www.inboundlogistics.com/wp-content/uploads/urban-logistics-scaled.jpg" alt="Logistics" />
            <h3>Logistics Lead</h3>
            <p>Optimize delivery networks for speed and efficiency.</p>
          </div>
        </div>
      </div>

      <div className="about-footer">
        <p>© {new Date().getFullYear()} Swiggy Clone. All rights reserved.</p>
      </div>
    </div>
  );
};

export default AboutUs;
