
import React from "react";
import "./GetStarted.css";

const GetStarted = () => {

    const clickMe = () => {
        console.log("welcome getStarte");
    }
    return (
      <>
        <div className="get-started-container">
          <section className="intro">
            <h2 className="sec-heading">Welcome to Kokde Electrical</h2>
            <p>
              Let’s help you get started with our electrical solutions quickly
              and easily.
            </p>
          </section>

          <section className="how-we-work">
            <h3 className="sec-heading">How We Work</h3>
            <ul>
              <li>Initial Consultation</li>
              <li>Site Visit and Requirement Gathering</li>
              <li>Customized Proposal</li>
              <li>Execution & Support</li>
            </ul>
          </section>

          <section className="requirements">
            <h3 className="sec-heading">What You’ll Need</h3>
            <p>
              Before we begin, make sure you have your site details, project
              budget (if known), and timelines ready.
            </p>
          </section>

          <section className="services">
            <h3 className="sec-heading">Choose Your Service</h3>
            <p>
              We offer a wide range of services — from residential installations
              to industrial automation. Head over to our{" "}
              <strong>Services</strong> page or talk to an expert to select what
              suits you.
            </p>
          </section>

          <section className="quote-or-call">
            <h3 className="sec-heading">Get a Quote or Schedule a Call</h3>
            <button>Get a Free Quote</button>
            <button>Schedule Meeting</button>
          </section>

          <section className="faq">
            <h3 className="sec-heading">Frequently Asked Questions</h3>
            <ul>
              <li>
                <strong>Q:</strong> How long does a typical project take?
              </li>
              <li>
                <strong>A:</strong> It depends on the complexity — we’ll give
                you a timeline after our first discussion.
              </li>
              <li>
                <strong>Q:</strong> Do you provide materials?
              </li>
              <li>
                <strong>A:</strong> Yes, we can source or work with
                client-supplied materials.
              </li>
            </ul>
          </section>

          <section className="help">
            <h3>Still Need Help?</h3>
            <p>
              Reach out via our <strong>Contact</strong> page or drop us an
              email at{" "}
              <a href="mailto:contact@tejalelectrical.com">
                kokdeelectrical@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </>
    );
};

export default GetStarted;
