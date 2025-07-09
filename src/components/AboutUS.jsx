import React from "react";
import "./AboutUs.css"

const AboutUs = () => {
  return (
    <>
      <div className="about-container">
        <div className="about-header">
          <h2>About Us</h2>
          <p>
            We provide innovative electrical solutions with a focus on safety,
            reliability, and sustainability.
          </p>
          <p className="breadcrumb">Home &gt; About Us</p>
        </div>

        <div className="about-cards">
          <div className="about-card">
            <i className="fas fa-lightbulb"></i>
            <h4>OUR VISION</h4>
            <p>
              To be the most trusted and preferred electrical solutions provider
              across industries.
            </p>
          </div>

          <div className="about-card">
            <i className="fas fa-users"></i>
            <h4>OUR TEAM</h4>
            <p>
              Our skilled and dedicated team works collaboratively to deliver
              the highest quality service.
            </p>
          </div>

          <div className="about-card">
            <i className="fas fa-cogs"></i>
            <h4>OUR SERVICES</h4>
            <p>
              From residential wiring to industrial automation, we offer a wide
              range of electrical services.
            </p>
          </div>
        </div>

        <div className="about-story-section">
          <h5>GET TO KNOW US</h5>
          <h2>Our Story</h2>
          <p>
            Started in 2019, our company has grown from a small electrical
            contractor to a major player in the electrical industry. We take
            pride in our customer-first approach and innovative solutions.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
