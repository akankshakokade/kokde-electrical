import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import Services from '../components/Services'
import './home.css'
import { Link } from "react-router-dom";
const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        {/* <title>kokade electricals</title> */}
        <meta property="og:title" content="Infantile Friendly Turtle" />
      </Helmet>
      {/* <Navbar8
        page4Description={
          <Fragment>
            <span className="home-text100">
              Get in touch with us for your electrical needs.
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text101">Get Started</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text102">/services</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text103">Home</span>
          </Fragment>
        }
        // link1={
        //   <Fragment>
        //     <span className="home-text104">home</span>
        //   </Fragment>
        // }
        link1={
          <a href="#" onClick={(e) => e.preventDefault()}>
            <span className="home-text104">Home</span>
          </a>
        }
        page4={
          <Fragment>
            <span className="home-text105">Contact</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text106">Services</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text107">Contact</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text108">
              Welcome to our electrical contracting services website.
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text109">
              Explore our wide range of electrical services.
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text110">About-us</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text111">About Us</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text112">
              Learn more about our company and team.
            </span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text113">Contact Us</span>
          </Fragment>
        }
        link1Url="#Contact10"
      ></Navbar8> */}
      <Hero17
        action2={
          <Fragment>
            <span className="home-text114">Learn More</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text115">Get a Quote</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text116">
              Professional Electrical Contracting Services
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text117">
              We offer top-notch electrical contracting services for
              residential, commercial, and industrial projects. Our team of
              experienced electricians ensures high-quality workmanship and
              customer satisfaction.
            </span>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature3Description={
          <Fragment>
            <span className="home-text118">
              We tailor our electrical solutions to meet the specific needs of
              each client, ensuring high-quality workmanship and customer
              satisfaction.
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text119">
              Customized Electrical Solutions
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text120">
              We offer 24/7 emergency electrical services to address any urgent
              issues that may arise at any time of the day or night.
            </span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text121">
              Professional Electrical Services
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text122">
              Our team of experienced electricians provides professional
              electrical services for residential and commercial properties.
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text123">24/7 Emergency Response</span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        heading1={
          <Fragment>
            <span className="home-text124">Get in touch with us today!</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text125">
              Contact us for all your electrical contracting needs. Our team of
              experts is ready to assist you.
            </span>
          </Fragment>
        }
        action1={
          <Link to="/contact-us">
            <span>
              {props.action2 ?? (
                <Fragment>
                  <span className="navbar8-text27">Contact Us</span>
                </Fragment>
              )}
            </span>
          </Link>
        }
      ></CTA26>
      <Features25
        feature3Description={
          <Fragment>
            <span className="home-text127">
              We tailor our electrical solutions to meet the specific needs of
              each client, ensuring high-quality workmanship and customer
              satisfaction.
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text128">
              Our team of experienced electricians provides professional
              electrical services for residential, commercial, and industrial
              projects.
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text129">24/7 Emergency Response</span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text130">
              Professional Electrical Services
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text131">
              We offer round-the-clock emergency electrical services to address
              urgent issues promptly and efficiently.
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text132">
              Customized Electrical Solutions
            </span>
          </Fragment>
        }
      ></Features25>
      {/* <Pricing14
        plan3Price={
          <Fragment>
            <span className="home-text133">$300</span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text134">Contact Us</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text135">Basic plan</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text136">Contact Us</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text137">Enterprise plan</span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text138">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text139">Free Estimates</span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text140">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text141">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text142">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text143">New Installations</span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text144">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text145">Feature text goes here</span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="home-text146">or $299 yearly</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text147">Get started</span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text148">Contact Us</span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text149">Commercial Services</span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text150">Safety Inspections</span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text151">$200/yr</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text152">Business plan</span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text153">Feature text goes here</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text154">Get started</span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text155">Industrial Projects</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text156">
              Choose the perfect plan for you
            </span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text157">Electrical Repairs</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text158">Pricing plan</span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text159">Feature text goes here</span>
          </Fragment>
        }
        plan1={
          <Fragment>
            <span className="home-text160">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text161">Business plan</span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text162">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text163">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text164">Feature text goes here</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text165">or $29 monthly</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text166">$200</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text167">or $49 monthly</span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text168">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text169">Feature text goes here</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text170">or $20 monthly</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text171">$299/yr</span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="home-text172">or $499 yearly</span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text173">Feature text goes here</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text174">$499/yr</span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text175">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text176">Licensed Electricians</span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="home-text177">or $200 yearly</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text178">24/7 Emergency Service</span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text179">Energy Efficiency Upgrades</span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text180">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <span
                dangerouslySetInnerHTML={{
                  __html: " ",
                }}
              />
            </span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text181">Get started</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text182">$100</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="home-text183">Enterprise plan</span>
          </Fragment>
        }
      ></Pricing14> */}
      <Steps2
        step1Description={
          <Fragment>
            <span className="home-text184">
              Schedule a consultation to discuss your electrical needs and
              receive a customized quote.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text185">
              Experienced electricians will carry out the installation process
              efficiently and with attention to quality.
            </span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text186">Project Planning</span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text187">
              Our team will create a detailed plan outlining the scope of work,
              timeline, and budget for your project.
            </span>
          </Fragment>
        }
        step1Title={
          <Fragment>
            <span className="home-text188">Initial Consultation</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text189">Professional Installation</span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text190">
              We conduct a thorough inspection to ensure that all electrical
              components are installed correctly and meet safety standards.
            </span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text191">Final Inspection</span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        author2Position={
          <Fragment>
            <span className="home-text192">COO, Company XYZ</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text193">CEO, Company ABC</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text194">John Doe</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text195">David Johnson</span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text196">
              Highly recommend their electrical services. Very knowledgeable and
              efficient.
            </span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text197">Jane Smith</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text198">CTO, Company ZYX</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text199">Sarah Williams</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text201">CFO, Company 123</span>
          </Fragment>
        }
        review1={
          <Fragment>
            <span className="home-text202">
              Great service! The team was professional and completed the project
              on time.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text203">Testimonials</span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text204">
              Impressed with the quality of work provided. Will definitely use
              their services again.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text205">
              Professional team that goes above and beyond to ensure customer
              satisfaction.
            </span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text206">
              Our experienced team is ready to assist you with residential,
              commercial, and industrial electrical needs.
            </span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text207">
              Gat NO 377, KOHAKADEWADI, NHAVARA,TAL SHIRUR ,DIST PUNE
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text208">Contact Us</span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text209">
              456 Power Street, Townsville, State, Zip Code
            </span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text210">Main Office</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text211">Branch Office</span>
          </Fragment>
        }
        contact10Id="Contact10"
      ></Contact10>
    </div>
  );
}

export default Home
