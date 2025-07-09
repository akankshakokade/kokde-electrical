import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// import { Fragment } from "react";
import ContactUs from "./ContactUs";
import "./navbar8.css";

const Navbar8 = (props) => {
  const [link5AccordionOpen, setLink5AccordionOpen] = useState(false);
  const [link5DropdownVisible, setLink5DropdownVisible] = useState(false);

  return (
    <header className="navbar8-container1">
      <header data-thq="thq-navbar" className="navbar8-navbar-interactive">
        <div className="inner-container">
          <img
            alt={props.logoAlt}
            src={props.logoSrc}
            className="navbar8-image1"
          />
          <p style={{ color: "brown" }}>Kokade Electricals</p>
        </div>
        <div data-thq="thq-navbar-nav" className="navbar8-desktop-menu">
          <nav className="navbar8-links1">
            <Link to="/" className="navbar8-link11 thq-link thq-body-small">
              <Fragment>
                <span className="navbar8-text18">Home</span>
              </Fragment>
            </Link>

            <Link to="/services" className="thq-link thq-body-small">
              <span className="navbar8-text16">Services</span>
            </Link>

            {/* <a
              href={props.link3Url}
              target="_blank"
              rel="noreferrer noopener"
              className="navbar8-link31 thq-link thq-body-small"
            >
              {props.link3 ?? (
                <Fragment>
                  <span className="navbar8-text24">/about-us</span>
                </Fragment>
              )}
            </a> */}
            <Link
              to="/about-us"
              className="navbar8-link31 thq-link thq-body-small"
            >
              {props.link3 ?? (
                <Fragment>
                  <span className="navbar8-text24">About Us</span>
                </Fragment>
              )}
            </Link>
            <div
              onClick={() => setLink5DropdownVisible(!link5DropdownVisible)}
              className="navbar8-link4-dropdown-trigger"
            >
              <span className="thq-link thq-body-small">
                {props.link4 ?? (
                  <Fragment>
                    <span className="navbar8-text21">/contact</span>
                  </Fragment>
                )}
              </span>
              <div className="navbar8-icon-container1">
                {link5DropdownVisible && (
                  <div className="navbar8-container2">
                    <svg viewBox="0 0 1024 1024" className="navbar8-icon10">
                      <path d="M298 426h428l-214 214z"></path>
                    </svg>
                  </div>
                )}
                {!link5DropdownVisible && (
                  <div className="navbar8-container3">
                    <svg viewBox="0 0 1024 1024" className="navbar8-icon12">
                      <path d="M426 726v-428l214 214z"></path>
                    </svg>
                  </div>
                )}
              </div>
            </div>
          </nav>
          <div className="navbar8-buttons1">
            <Link
              to="/get-started"
              className="navbar8-action21 thq-button-outline thq-button-animated"
            >
              <span>
                {props.action2 ?? (
                  <Fragment>
                    <span className="navbar8-text27">Get Started</span>
                  </Fragment>
                )}
              </span>
            </Link>

            {/* <Link to="/contact-us">
              <button className="navbar8-action21 thq-button-outline thq-button-animated">
                <span>
                  {props.action2 ?? (
                    <Fragment>
                      <span className="navbar8-text27">Contact Us</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </Link> */}
            <Link
              to="/contact-us"
              className="navbar8-action21 thq-button-outline thq-button-animated"
            >
              <span>
                {props.action2 ?? (
                  <Fragment>
                    <span className="navbar8-text27">Contact Us</span>
                  </Fragment>
                )}
              </span>
            </Link>
          </div>
        </div>
        <div data-thq="thq-burger-menu" className="navbar8-burger-menu">
          <svg viewBox="0 0 1024 1024" className="navbar8-icon14">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="navbar8-mobile-menu">
          <div className="navbar8-nav">
            <div className="navbar8-top">
              <img
                alt={props.logoAlt}
                src={props.logoSrc}
                className="navbar8-logo"
              />
              <div data-thq="thq-close-menu" className="navbar8-close-menu">
                <svg viewBox="0 0 1024 1024" className="navbar8-icon16">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="navbar8-links2">
              <a
                href={props.link1Url}
                className="navbar8-link12 thq-link thq-body-small"
              >
                {props.link1 ?? (
                  <Fragment>
                    <span className="navbar8-text18">/home</span>
                  </Fragment>
                )}
              </a>
              <a href={props.link2Url} className="thq-link thq-body-small">
                {props.link2 ?? (
                  <Fragment>
                    <span className="navbar8-text16">/services</span>
                  </Fragment>
                )}
              </a>
              <a
                href={props.link3Url}
                className="navbar8-link32 thq-link thq-body-small"
              >
                {props.link3 ?? (
                  <Fragment>
                    <span className="navbar8-text24">/about-us</span>
                  </Fragment>
                )}
              </a>
              <div className="navbar8-link4-accordion">
                <div
                  onClick={() => setLink5AccordionOpen(!link5AccordionOpen)}
                  className="navbar8-trigger"
                >
                  <span className="thq-link thq-body-small">
                    {props.link4 ?? (
                      <Fragment>
                        <span className="navbar8-text21">/contact</span>
                      </Fragment>
                    )}
                  </span>
                  <div className="navbar8-icon-container2">
                    {link5AccordionOpen && (
                      <div className="navbar8-container4">
                        <svg viewBox="0 0 1024 1024" className="navbar8-icon18">
                          <path d="M298 426h428l-214 214z"></path>
                        </svg>
                      </div>
                    )}
                    {!link5AccordionOpen && (
                      <div className="navbar8-container5">
                        <svg viewBox="0 0 1024 1024" className="navbar8-icon20">
                          <path d="M426 726v-428l214 214z"></path>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
                {link5AccordionOpen && (
                  <div className="navbar8-container6">
                    <a href={props.linkUrlPage1}>
                      <div className="navbar8-menu-item1">
                        <img
                          alt={props.page1ImageAlt}
                          src={props.page1ImageSrc}
                          className="navbar8-page1-image1"
                        />
                        <div className="navbar8-content1">
                          <span className="navbar8-page11 thq-body-large">
                            {props.page1 ?? (
                              <Fragment>
                                <span className="navbar8-text17">Home</span>
                              </Fragment>
                            )}
                          </span>
                          <span className="thq-body-small">
                            {props.page1Description ?? (
                              <Fragment>
                                <span className="navbar8-text22">
                                  Welcome to our electrical contracting services
                                  website.
                                </span>
                              </Fragment>
                            )}
                          </span>
                        </div>
                      </div>
                    </a>
                    <a href={props.linkUrlPage2}>
                      <div className="navbar8-menu-item2">
                        <img
                          alt={props.page2ImageAlt}
                          src={props.page2ImageSrc}
                          className="navbar8-page2-image1"
                        />
                        <div className="navbar8-content2">
                          <span className="navbar8-page21 thq-body-large">
                            {props.page2 ?? (
                              <Fragment>
                                <span className="navbar8-text20">Services</span>
                              </Fragment>
                            )}
                          </span>
                          <span className="thq-body-small">
                            {props.page2Description ?? (
                              <Fragment>
                                <span className="navbar8-text23">
                                  Explore our wide range of electrical services.
                                </span>
                              </Fragment>
                            )}
                          </span>
                        </div>
                      </div>
                    </a>
                    <a href={props.linkUrlPage3}>
                      <div className="navbar8-menu-item3">
                        <img
                          alt={props.page3ImageAlt}
                          src={props.page3ImageSrc}
                          className="navbar8-page3-image1"
                        />
                        <div className="navbar8-content3">
                          <span className="navbar8-page31 thq-body-large">
                            {props.page3 ?? (
                              <Fragment>
                                <span className="navbar8-text25">About Us</span>
                              </Fragment>
                            )}
                          </span>
                          <span className="thq-body-small">
                            {props.page3Description ?? (
                              <Fragment>
                                <span className="navbar8-text26">
                                  Learn more about our company and team.
                                </span>
                              </Fragment>
                            )}
                          </span>
                        </div>
                      </div>
                    </a>
                    <a href={props.linkUrlPage4}>
                      <div className="navbar8-menu-item4">
                        <img
                          alt={props.page4ImageAlt}
                          src={props.page4ImageSrc}
                          className="navbar8-page4-image1"
                        />
                        <div className="navbar8-content4">
                          <span className="navbar8-page41 thq-body-large">
                            {props.page4 ?? (
                              <Fragment>
                                <span className="navbar8-text19">Contact</span>
                              </Fragment>
                            )}
                          </span>
                          <span className="thq-body-small">
                            {props.page4Description ?? (
                              <Fragment>
                                <span className="navbar8-text14">
                                  Get in touch with us for your electrical
                                  needs.
                                </span>
                              </Fragment>
                            )}
                          </span>
                        </div>
                      </div>
                    </a>
                  </div>
                )}
              </div>
            </nav>
            <div className="navbar8-buttons2">
              <button className="thq-button-filled">
                <span>
                  {props.action1 ?? (
                    <Fragment>
                      <span className="navbar8-text15">Get Started</span>
                    </Fragment>
                  )}
                </span>
              </button>
              <button className="thq-button-outline">
                <span>
                  {props.action2 ?? (
                    <Fragment>
                      <span className="navbar8-text27">Contact Us</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
          <div className="navbar8-icon-group">
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="thq-icon-x-small"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="thq-icon-x-small"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="thq-icon-small"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
        {link5DropdownVisible && (
          <div className="navbar8-container7 thq-box-shadow">
            <div className="navbar8-link5-menu-list">
              <a href={props.linkUrlPage1}>
                <div className="navbar8-menu-item5">
                  <img
                    alt={props.page1ImageAlt}
                    src={props.page1ImageSrc}
                    className="navbar8-page1-image2 thq-img-ratio-1-1"
                  />
                  <div className="navbar8-content5">
                    <span className="navbar8-page12 thq-body-large">
                      {props.page1 ?? (
                        <Fragment>
                          <span className="navbar8-text17">Home</span>
                        </Fragment>
                      )}
                    </span>
                    <span className="thq-body-small">
                      {props.page1Description ?? (
                        <Fragment>
                          <span className="navbar8-text22">
                            Welcome to our electrical contracting services
                            website.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </a>
              <a href={props.linkUrlPage2}>
                <div className="navbar8-menu-item6">
                  <img
                    alt={props.page2ImageAlt}
                    src={props.page2ImageSrc}
                    className="navbar8-page2-image2 thq-img-ratio-1-1"
                  />
                  <div className="navbar8-content6">
                    <span className="navbar8-page22 thq-body-large">
                      {props.page2 ?? (
                        <Fragment>
                          <span className="navbar8-text20">Services</span>
                        </Fragment>
                      )}
                    </span>
                    <span className="thq-body-small">
                      {props.page2Description ?? (
                        <Fragment>
                          <span className="navbar8-text23">
                            Explore our wide range of electrical services.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </a>
              <a href={props.linkUrlPage3}>
                <div className="navbar8-menu-item7">
                  <img
                    alt={props.page3ImageAlt}
                    src={props.page3ImageSrc}
                    className="navbar8-page3-image2 thq-img-ratio-1-1"
                  />
                  <div className="navbar8-content7">
                    <span className="navbar8-page32 thq-body-large">
                      {props.page3 ?? (
                        <Fragment>
                          <span className="navbar8-text25">About Us</span>
                        </Fragment>
                      )}
                    </span>
                    <span className="thq-body-small">
                      {props.page3Description ?? (
                        <Fragment>
                          <span className="navbar8-text26">
                            Learn more about our company and team.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </a>
              {/* <div className="navbar8-content8">
                <span className="navbar8-page42 thq-body-large">
                  {props.page4 ?? (
                    <Fragment>
                      <Link to="/contact" className="navbar8-text19 thq-link">
                        Contact
                      </Link>
                    </Fragment>
                  )}
                </span>

                <span className="thq-body-small">
                  {props.page4Description ?? (
                    <Fragment>
                      <span className="navbar8-text14">
                        Get in touch with us for your electrical needs.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div> */}
              <div className="navbar8-content8">
                <span className="navbar8-page42 thq-body-large">
                  {props.page4 ?? (
                    <Fragment>
                      <Link to="/contact-us" className="navbar8-text25">
                        Contact
                      </Link>
                    </Fragment>
                  )}
                </span>

                <span className="thq-body-small">
                  {props.page4Description ?? (
                    <Fragment>
                      <span className="navbar8-text25">
                        Get in touch with us for your electrical needs.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        )}
      </header>
      {link5DropdownVisible && (
        <div
          onClick={() => setLink5DropdownVisible(false)}
          className="navbar8-container8"
        ></div>
      )}
    </header>
  );
};

Navbar8.defaultProps = {
  linkUrlPage4: "https://www.teleporthq.io",
  link2Url: "https://www.teleporthq.io",
  page4Description: undefined,
  page1ImageSrc:
    "https://images.unsplash.com/photo-1683372101362-2efc3e75650e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MTY3NTM0NXw&ixlib=rb-4.0.3&q=80&w=1080",
  action1: undefined,
  page2ImageAlt: "Services Image",
  link2: undefined,
  linkUrlPage2: "https://www.teleporthq.io",
  logoAlt: "Electrical Contracting Services Logo",
  logoSrc:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPsAAADJCAMAAADSHrQyAAABO1BMVEX///8hHyC8ITEAAAD//v/8/Pz8//8fHR4jISL9//v//f/9//7lsbK3AB39/v/5///FTVoaGBlKSEm6GioYFhe5IjEZFhjv7+//+v+9ITT0///tzs28IS+5HSm/v7/l5eW6ECvJSFjMTF2mpqaenp6VlZVxcXHZ2dlYVlcRDxC/ACLHSlI7OzteXl55eXkzMzO4uLi3ABO2ACD39e/x3dnktLmyJzL27Om+ACW6ABLZiI3NaXXr0c7Ly8uEhIRsbGzjqLHdlqLSf4fy/PLXlZjNV2D84ubGYme+AAvntrLhoqPHM0myIizVeYDKcHbLHTbUkI3braaoABW8Rln30Na4N0a9JTzKf33rxsHn1cvvx87kk5ndnqbXl5LcsLbTanG0SljbX3OsKjzqz9nIW3DPiZXwucHNACe+WVb8kATaAAAV5ElEQVR4nO1dCWOiyLZGoQqBQGmQFgxEMlm1s4lGzN6LJmljOjPzRm8m3TM982a7//8XvFPgggaT3H4Jmtt83W2MLPLVWeqcUweaYWLEiBEjRowYMWLEiBEjRowYMWLEiBEjRowYMWLEiBEjRowXDEGQMIafCqfQF27a1xMlCFZED4hi2lcTLXRdZDCF5IFhvhHJg5YzBID9Xz3dZ/AUL+hZAfQURoJ/nnQF163e7r15++ngHeCvxpu9n85cV+jtCPvRgfgv0QPEIETNm76tVN8cHKa7dbkPx3Hksux0Xx8ezFVdEROCGFFUFAmTaV/3UwC4czrI8v1Ro9mVSyVHNc0khQZIar139ZJc1pqN2wr1AwrGoj7t634a6BifzZ3XL+Rk0qSENcPjbgK8X7WkqdIfpirvl5tzVQaLIslP+6qfBEC86ZRskK4JYjYpZ4+7AfDHAN7TX2Fkkkm1ZKdbVRD8tC/768FxCIsKRhgtXHX7aq5Rnj25U5H7eq9p/gioQB22gPjt7scFqvychLiXp/wco2BBILjy4dxxfDH3QOWu+nR7H1D5dw1Dqw0+bJt1Jz1X4bCIkfB+2lz+U4gSRoQRWpflvmfrg8q5bcGnqqo6jmWpIG7L6un9YKe20Za7nytEF9GLkzvoOqd/tmWrlqxpI9xNtV4qyXb3Mn1+eHX17urq43n60nBKMN2p/VGijuDabMtGq0LElzTZgZOWJI6gvdeOCsZrUi2n4gZOVNKX5+9aN1W3ItBoRvL+QUjvVvcaV+mu7IAaUOrUKYADKHX2IO3xY8GXAAmJCiLVc2De1+Ba0lPxeuewdeS6kw4UXfeo8aVj1z13YHhQ5fMFjmAhSgL/D4g6ESstu24MdB0M2XTMpcbPLg1cCGFCTJhjkEREhcmfHX3/WpaBPsjeqFGf/7YivZRUL68wR0tyWx1yV51y54eqkBcVUYIMjgvVYMRgheQViIMY7ujz5X6JTv7X7aTZLncWoubwteCkxj8WTFx9x6WWu5+qwE1CgoBEiUDeGqLCEgdjIuoKbIX8lpEWDkzH1rwJH85wgD3XMNtQFMY9L2nejEUHAAy2uafTAfG3Pz4/w27rtZw0LQiEDM05rzJIRJI4u04PZIZvLm2z7U3VRs2qq82bivRVbpoTifvmtaVSl18z7M6NQHSFzHCki/AbVW2b136YYsnpmwrWyVcVJjCtblTmLmXTNmpgQaUWyevKDDs96aBM8xGY1MC1y5d/0/oM0r+uEMGJIiSzQstwrkH2pvHjFYzjbFq9wChc5VAG+9QMA67W0Voor3Mcjeq/6oQYQ9QjiozbsOuaDV7fOa8oIiPh2SvqIEQqhyUvIavZmlX6WH2yU1ebMkz0SdtKuwSJwuwVdoleOa97Zl6D0FX7ID5V+RHixEorCckPSB7IKzqaOcXHlSWn7UWw6rV67mKx8kQnFmDywAtLdtswLHXJzUOA9ERnfjK4v6mmX4ZRf/zMKERQnkjwuvgegc8DLwoxvvw/7ozl85gIlT8dOqW3TcPq/pR/8hBEJORvW4X8rn5eyeuSIMxMVi8S4crx9d10mtW8/uRXhnRFqIJRmVrpo0AgS56ZxQwkNEqmX5Cqf4RZWHnyeoOECebcpkMDpgMmj2fH5vEHx/QLjs6BoGOCnlzndUQUUXn/UU5qhvNGys8EdxELiBw5Fui7YZpOS6Ayl548+iC0GiTqzF/7BgSMC0SfhUoW5kTJ7dhgiKap2W8E/HyBB0IwAN/bpqZ23Jko30N29f6qpEEca1r2nETE54s8JEXkMDmQTVM9FGaBu6TnP5Ta2jWk2fUfILjjnpU7fIFw4CQ1qzULfp5gtwtBh6bVy58ZQmtuzycRhCURXOm/SknLeLps4eugEwFh1LSuadrqHDBRVFWwmBcPnZr9miCkTLGKQyROZD7Ur9u2Rk0wkqqKqJP3lbSjOq28KExxohM4QkDjVU0z7e8qej4KOWBdl3C1WzdtlxOmWLZHoPQHNlV4tXuGwdIjcEAI0a+56ZrOlTBNncco/5PTNmzDLN9gwnFR6DxHu7N03Ci36z9Ps3IJTvfQogur5YbARWh7CHKnj/V2U5qi3BXpxkkayXa9iXQUpe2JOO9qav0mwq8cB0bnqqGpSeMor5MI5U5ERcG3jpWeYuFOurVNo23aDUYQIg2wQekJcyXbtxF+ZwCYdtNAPt1NwvAL+V4dmpCRXegnmKFLr4GpGCNEIBvH/U+wt9NoayXuYfDL4Izw5+wGQT4ruV1riXmGdPlBYBpbL9iQt4K/ZXTFfdP41Gi15t68ubm5WfBxe7u3N9eCz3+5zesDtZBEJX/0qdH4vLd3e9vb8e+3b39pNH75pTU392FhMm5vb389+NKxy66CCCJ7JflIxNEXr7DICczHes0wnQMJE2nuYn+/XC7LslMq0XZJ2kzjd06WL8oXv0looBD0beOiXKL9lLJsAxy6Zwle63XZe+/YfagU9E2/D7Ns26ZqvAdxEwV9ca5IFDHFHe6K4MqqYbS7Lm2zqCwc3fz96bBTare9fgnaN0h/2p2PrZvbM2GY3Sm6Lub2zlVL8/ajzWawW107v2qaatJrOPGOHqLfi0dbUeiSj/qbRBBWBLKgOmfKFGI7USFzsllLOi1ILf3BB2t0P5c0r3fQ6xtsXzuNXoeJMqjkcIyAFXzWUT2Gta6hWZbz5x7db+G3Om3Q6bP1VrcMvwMRPqTNO6pZM7X6X7qIQNcU5t3FWxK9r+dEHadVQ213K1LPa9FXhfneHnRUGW35fIJU8m7HX6e2jZpabi74ncNEt61Bo5nWtkyLtqBZtAMNRqJrGDUtqV3X6p8ZcHb0gLP9tD6F2I4oVRniePkNZDBDH44gtxlyV529CWU15chWveJmzXI6t1xe8TwWzrfk4dGmet5sNtPp9NLlZde0nHK5JKuqZmrynudqKf51cRS9nxfAYcma3b6sYDGgdUiXmtZAcmb5bMKViee9dhzbfudijPyCh8gc1YfNeNqSgCrIdSuViktxttA47DhJ03AG8ZxYkA+el2cYBF0HlU/Kn4mIAmvMAsr7ixR+e5XzfgL3X2W1Rq1atX9gFMz0MnGUP6sNmzCtJaIriujfSCQxEl2OcD+pwH0BnIZ3gMJ87FQiX5IW9GpJM6zL8WY5Dh8MuatGSKDLYYWclfyOQ9W6ZZThFCAwtP416M5Kh31xS1bbg7Yr8f0f8gJE909fE78PAvNWTppOY/xGl1Hu3ZAjia4DQ69futRxcV4UA9xRZ4R7iNYIacse1OokSWn+AmojRVrAwcLvVtKEqxhzsyL+NORuXYZcPUfef6EeTaOr6eCz9GH3mKAIHfUB7vitbA+UDeXx7WtGEHG0xSu3a2v2FzTeACPi1gPcGeF72WucB+oi4ZCEBgorKNKD3MlPZWM43oqQS58RJsriAeDWMQ15TxwLLTiFCUxTkGuMGqKCBMw06ia9TcYCqcMUIUmBuyIl5nXyAe7KmTO0JEkUmL8+ECRE6+4asmmYrohHv5VydwLcxzbrCDG/qmbb0Eyn495pHoEU4UHupPpPZ3BWScTCwjsSSbEsgD9V074i41HVCHfzDncIQ28uIDqtJUtplzDiWG/8Y7iLlXd7A/8qwRkqvxMwnacj9jAql5ZRvoUIfpT8KHd1nDsSbuoWBPyac+5iHWam0VniMdx1BQ1zA/DzivS2IiqR2rtrm6Ys6Piuzs/Jk+VOFgwVMpRaqQm2LjB3jn6MzgsosP5MsMj8dKREWSzkuFs7aTVDtggB7tTeBxtAzIgc/e+1CbauvtbF0Jb4R3C/C/2PKKlDDjpna6W5kE0TuXNEJ9XatalpprxUoXePhR79FdwlN8L1GUQ4/M421bOQbRO5SyI5s6mLTzrNigjpCxdC/uu4R+noJKLjP221Ey65SXLH1Y6d1GhXrKvQST1sWvoq7gyOsF4JMwu+tOSPYdtCuSuSkMfVJZXeBGGduyNZ79jRr43/nHuUoA+pMNRSK2xbOHc9j9y0SotOEMgyaGIt/wVwR0rFMZ2FsArpKPfv/EkMEVLpqGobEr+mq9DbBiec+SVwx65sdt1HcycgdRrEJ50vENIAo5er82CuVdlaQuHeapQ7bXrmxMp5ido6dXOicM8TXb7O10UKgTvat77gx8hdgYgbuYf0hmBTbbrcvX3/EOot2UHuIaHqtO8bEMSjfeddqFTu6DxCkv6x3gtpqK3fc97HcJ82BG5hX26Nl2z8TePc8wI6rNeuQeHTFYW5v7g0wt2cIPcpCx64X5RuQuujd3ReQe9kE/yc/G9XEdBED++BC3A3zfBa5bTZC+LCRf0odNlhlDt4K+FA1lSY18/PyMSQpg+Ry6cdQL1UT3YvLw+lsK8ozO+O/B7xSIC9X9jVCdnIkLtmfsfkG6U2fZd2Oele7nQbFrk/04cHrZufq1W6GpHPFdaPF3eXl1dWPaysLC/vLp/s5nIjD8GKkr0kcNULI/w29hG5t7/Db0s1M1kz948wUe59ggHynoOT93jk1heXT043NvkiGwL6Ib+5sb26vLieGx4e0RAInLtPl57DNgW4G+2lHxzNpkunNBKSHl4qp6TXNj3GxVd8JpVIJejfRIq++K+pFH+6tnZ6urWxmaH7ba7BEEQneUVQKvuXbmhn34jcNcM26bMbTOPaOkTk3g5roH2ysZMF0jyfSPEeaz41IJzoIZXK7BT8I0Dv6Vitbm9tzG9s7xaeg+odiJIo0CWVsG1B7qaRrA1CVOdACLQJICbgr5Xc+srp/Cu2mM0MOCY86gFxD0aA38yNfSeMQaFQyEUifODOGB33QT+vXdOnGPUHwmmQoKIg5JNHwHsHpJ0Baqk+XQ/wnu8LOzUcgez8BJKRcFcEzCwB94f8vNHuGoNlFtN0gjUu/9jc7naKajlllQKyfDEg+RQ/7uQy1BSKW2NfiQKvzw5FkJjDx3C3fj8qD37R1PLIYytA4PMsm+WpUD2BgutKnezwQ7lv5qguFwrr6+vHx4tg2RtsMZUqro19ZaQTvMIo3GfTDf3OEe4Qmf0l0w4K2n8DAbr8h4R17Gv66nyG9fTcV2Ww9q1VmLLmMwPumfnxk6P1LTZR3H52gveCY/YsNzQ2H+MuuedOm3YMJU3Lufy+SjDMjKiwspEFifvihtcsm9pYKXhjOZ+9hzuw38oWT56Z3APgmJ+sM+GhHFazlgg566j0qU6qk/4AVkIwg3ZPi2yG9zUd+EMAM7+8TuN8Gqzdx51uX2fZlQgI3gs3eSY8NL+b1neMIlV/TFql+kEVE9oCuX5SZOlURmdw+g9EvrruH0ojuwd0Hsin2OVnpvYwLh/mbrfTjIjJ3+X0mwqm3HK782wx4Qdr8MKDI187Dh6N7udOB2eD3b3zcdT4chtaWRi19yXMSXlmwWUwtfLVHTbjxWp9K99cLYzG4Q9xB2yzi8/E6PH44XPoM2VHdf43SRBEXcoTBh1vJ1jeD1NpnJLKFud3aYCG/kPuJ+xx2MeR4ujdg3Kv/fMdvbGH6Ix4vOUpO1V0z8Vl2a1jj/PoE5kfwX1xPprg9R4Q9yD0wWoB7ur+vxfEPHDDYOYQs1GZ9zKx4rbn39B4EeYR3KdfrQQf9tmd4Ovo0300zSw3//B6v9DuDpsN5ih8orgyLvAeRrhnJ3CfOhTmtjqhXucYmqbKnT2dE33Xnk2MAMZhkr8a4f5qVrljxnUncC+pqmN8qtCHCyPKPJVIjXKn9n4cqrovQ+5wnblJddr2/qELHk7Ax1TmqVHm/ZRtPfScI9w3npnB14JWHkPsXUJ47mLpiAHiDCQeNOekSbifimfo3OZNc6lUFsijO7IH7q9mn3s4OKJIe61KXiRMYa1Y9OL1npanion5IvXx/fxlp3DX343G8y+MOyIKorcu5VaAa2pQaIP5jd1az+0MKhMwBMXN3J1lBmVkjntZ3EFyClEUvEgndH8q96kWU7tAc30Y0VLJ34lSpJFc5tXL4o6JKHBM7pRWJQLenWdP/friYrGfs9MfxY07Yn8Rvu4uvMUFJDFohR36K48lu3Pc1+5dNsXzA0Ng572CZXAENh/DHTEzEN2NwC+8Hnvxa4B5hj3JDa90maXujve3pKjkR0k8ijsza9S92Dx3UswmEsFgpriz6I2Kn7nQPGww4YNZsKdjJDYfZe/o7vQ4VdDLOd5ke148aOn9UjzjRfFbxaHDSyXY7VFf/0idXx9fn5gmPBPcZjO+IQ/IeQWm0SwVzRf5vrejNfi1vkZ4PzaH5gJynyTc4xkoXPXhXeMizGQjTg6msbBFstx8MK1LsVtBtQjU5yflsICV6RcsB4BLB0vn+THumZ0wyaHCzlCxweaDDi8X5L458fu2ZkjuELbMs2FZS9iuYK18JsAd5vlcX/CFwCn4nUlfxqVmoGA5wEox2y/LBKhnwrmDT2T5AHeQfN91FYLHFydVp47ZGSjaeXMXzGwbbCIMqeKk4xZZL7fr5TV8cWfdt/n1V4HhA4IcGi9q0f1Oi8XQFDhS+Be2yBcTiXF99zixE2dhiG6D682v+EWP2HExYDDFbTTy38sh5M+kdOCi6TS4D4imbuDkEuNeri+5SdOwiHaLfIBmgi8u07MtssO5H2LeRWY8gqMGw/N3+w8iBxVCYYPlB30x44JnJ6mmKDKLmUywl4Rnt4HPamCaTCUyiZVxk0eFkyzPZ8azoOghgpL6k/q4m+tz74U2d7ugaEabzfSl7v1lNxeZrUAaRON+lj9dXV48XvdwvLt8Mu91KhTXphrTUplzkLPxIZwHguM3UC/FCbtUcJGDbhKvi4g9zdwZwuxY64VvSyfT5O7RyW2xqVHuqSCoLFeYscai4Clyq14Vd3iK7CC775/CX8BKjYUO7PJ05Q4hymYxNcHJ9cAnsmuL64VcLhca4DGIVnL5YQ/ZHbeRSvRaMwY/vBd2fco6v5h6FRSa3wDGZzKZbDZbLGYp+AxtjeR3NucnNUug3Y0M7SP0kBicjM++epXNZOhnieF4+LoEPnBzijksnXTvmjq4ph2gOb+xdbq2vXa6tbUxv7m5s5PiM9ni6uSTFXZPtuZ3sv6g9bCzdeodncoUw/pKj6fWS+0Fc6fsuLanstl7lsYnNsU9zALlaMPVes/Zr68Xpvkf6oKXmi+OxzOpbOrYjzn75bT+5SE0uc5yLwkU1jqHplq28b1cYszF05UWbnS3/ptJk9zobmOf3vnc7+uCDYoyRfK5TXY4L/tOKJGhK2xPd0FTj9smwE/cglMuDwpfmN0LfkoAx1X2VSKQjBQ3C4/zWy8eXh1+M5B2ZDcLHAqL3f7rQD0XxxRO2V6tNZHdAerfCHkKxPiJDHh73ltOnvYFRQfPtr0Etu/mviXydNbOrbEJev9KZHcpzQR6iylouUhDmumFmFMEYo6Pvf/fdNoXMiXM4M3KEeJblfo35uJH8c0SjxEjRowYMWLEiBEjRowYMWLEiBEjRowYMWLEiBEjRowYMQL4P28cU8zAUCCVAAAAAElFTkSuQmCC",
  page3ImageAlt: "About Us Image",
  linkUrlPage1: "https://www.teleporthq.io",
  page1: undefined,
  link1: undefined,
  page4ImageSrc:
    "https://images.unsplash.com/photo-1595045720389-acca18600f4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MTY3NTM0NXw&ixlib=rb-4.0.3&q=80&w=1080",
  linkUrlPage3: "https://www.teleporthq.io",
  page4: undefined,
  page2: undefined,
  link4: undefined,
  page4ImageAlt: "Contact Image",
  page1Description: undefined,
  page2ImageSrc:
    "https://images.unsplash.com/photo-1590845947670-c009801ffa74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MTY3NTM0Nnw&ixlib=rb-4.0.3&q=80&w=1080",
  page3ImageSrc:
    "https://images.unsplash.com/photo-1630288214173-a119cf823388?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MTY3NTM0N3w&ixlib=rb-4.0.3&q=80&w=1080",
  page2Description: undefined,
  link3: undefined,
  page3: undefined,
  link1Url: "https://www.teleporthq.io",
  page3Description: undefined,
  page1ImageAlt: "Home Image",
  action2: undefined,
  link3Url: "https://www.teleporthq.io",
};

Navbar8.propTypes = {
  linkUrlPage4: PropTypes.string,
  link2Url: PropTypes.string,
  page4Description: PropTypes.element,
  page1ImageSrc: PropTypes.string,
  action1: PropTypes.element,
  page2ImageAlt: PropTypes.string,
  link2: PropTypes.element,
  linkUrlPage2: PropTypes.string,
  logoAlt: PropTypes.string,
  logoSrc: PropTypes.string,
  page3ImageAlt: PropTypes.string,
  linkUrlPage1: PropTypes.string,
  page1: PropTypes.element,
  link1: PropTypes.element,
  page4ImageSrc: PropTypes.string,
  linkUrlPage3: PropTypes.string,
  page4: PropTypes.element,
  page2: PropTypes.element,
  link4: PropTypes.element,
  page4ImageAlt: PropTypes.string,
  page1Description: PropTypes.element,
  page2ImageSrc: PropTypes.string,
  page3ImageSrc: PropTypes.string,
  page2Description: PropTypes.element,
  link3: PropTypes.element,
  page3: PropTypes.element,
  link1Url: PropTypes.string,
  page3Description: PropTypes.element,
  page1ImageAlt: PropTypes.string,
  action2: PropTypes.element,
  link3Url: PropTypes.string,
};

export default Navbar8;
