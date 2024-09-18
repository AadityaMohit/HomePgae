import React from 'react';
import './MainContent.css';

const MainContent = () => {
  return (
    <div className="main-content">
      <h1>Welcome to the Homepage</h1>
      <p>This is the main content area where you can find the latest updates and features.</p>

      {/* Section 1: Introduction */}
      <section className="intro-section">
        <h2>About Us</h2>
        <p>
          We are a leading company in providing high-quality products and services. Our mission is to ensure customer satisfaction and to provide top-notch solutions for all your needs.
        </p>
        <img src="https://via.placeholder.com/600x200" alt="Placeholder" className="intro-image" />
      </section>

      {/* Section 2: Features */}
      <section className="features-section">
        <h2>Our Features</h2>
        <div className="grid-layout">
          <div className="grid-item">
            <h3>Feature 1</h3>
            <p>Our first feature offers outstanding performance and reliability.</p>
            <button className="learn-more-btn">Learn More</button>
          </div>
          <div className="grid-item">
            <h3>Feature 2</h3>
            <p>With feature 2, you can enhance productivity and efficiency in no time.</p>
            <button className="learn-more-btn">Learn More</button>
          </div>
          <div className="grid-item">
            <h3>Feature 3</h3>
            <p>Enjoy seamless integration and easy-to-use tools with this amazing feature.</p>
            <button className="learn-more-btn">Learn More</button>
          </div>
        </div>
      </section>

      {/* Section 3: Services */}
      <section className="services-section">
        <h2>Our Services</h2>
        <ul className="services-list">
          <li>Service 1: Providing top-quality customer support.</li>
          <li>Service 2: Custom solutions tailored to your needs.</li>
          <li>Service 3: Reliable and fast delivery of products and services.</li>
        </ul>
      </section>

      {/* Section 4: Testimonials */}
      <section className="testimonials-section">
        <h2>What Our Clients Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-item">
            <p>"This company changed the way we handle business. Their services are exceptional!"</p>
            <span>- John Doe</span>
          </div>
          <div className="testimonial-item">
            <p>"The best customer service experience I've ever had. Highly recommended!"</p>
            <span>- Jane Smith</span>
          </div>
          <div className="testimonial-item">
            <p>"Their product quality is top-notch and exceeded our expectations!"</p>
            <span>- Mark Wilson</span>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Get Started with Us!</h2>
        <p>Contact us today to learn more about our offerings and how we can help you succeed.</p>
        <button className="cta-button">Contact Us</button>
      </section>
    </div>
  );
};

export default MainContent;
