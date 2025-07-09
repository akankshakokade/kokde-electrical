import React, { Fragment } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import PropTypes from 'prop-types'

import './footer4.css'

const Footer4 = (props) => {
  return (
    <footer className="footer4-footer7 thq-section-padding">
      <div className="footer4-max-width thq-section-max-width">
        <div className="footer4-content">
          <div className="footer4-logo1">
            <img
              alt={props.logoAlt}
              src={props.logoSrc}
              className="footer4-logo2"
            />
          </div>
          <div className="footer4-links">
            {/* <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="thq-body-small"
            >
              {props.link1 ?? (
                <Fragment>
                  <span className="footer4-text16">Home</span>
                </Fragment>
              )}
            </a> */}
            <Link to="/" className="thq-link thq-body-small">
              <span className="navbar8-text16">Home</span>
            </Link>
            <Link to="/services" className="thq-link thq-body-small">
              <span className="navbar8-text16">Services</span>
            </Link>
            <Link to="/about-us" className="thq-link thq-body-small">
              <span className="navbar8-text16">About Us</span>
            </Link>
            <Link to="/services" className="thq-link thq-body-small">
              <span className="navbar8-text16">Faq</span>
            </Link>
            {/* <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="thq-body-small"
            >
              {props.link2 ?? (
                <Fragment>
                  <span className="footer4-text18">Services</span>
                </Fragment>
              )}
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="thq-body-small"
            >
              {props.link3 ?? (
                <Fragment>
                  <span className="footer4-text15">About Us</span>
                </Fragment>
              )}
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="thq-body-small"
            >
              {props.link4 ?? (
                <Fragment>
                  <span className="footer4-text19">Contact Us</span>
                </Fragment>
              )}
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="thq-body-small"
            >
              {props.link5 ?? (
                <Fragment>
                  <span className="footer4-text14">FAQ</span>
                </Fragment>
              )}
            </a> */}
          </div>
        </div>
        <div className="footer4-credits">
          <div className="thq-divider-horizontal"></div>
          <div className="footer4-row">
            <div className="footer4-container">
              <span className="thq-body-small">
                © 2019 All Rights Reserved @Kokade  Electrical.
              </span>
            </div>
            <div className="footer4-footer-links">
              <span className="footer4-text11 thq-body-small">
                {props.privacyLink ?? (
                  <Fragment>
                    <span className="footer4-text21">Privacy Policy</span>
                  </Fragment>
                )}
              </span>
              <span className="thq-body-small">
                {props.termsLink ?? (
                  <Fragment>
                    <span className="footer4-text17">Terms and Conditions</span>
                  </Fragment>
                )}
              </span>
              <span className="thq-body-small">
                {props.cookiesLink ?? (
                  <Fragment>
                    <span className="footer4-text20">Cookies Policy</span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer4.defaultProps = {
  link5: undefined,
  link3: undefined,
  link1: undefined,
  termsLink: undefined,
  link2: undefined,
  link4: undefined,
  logoAlt: "Electrical Contracting Services Logo",
  cookiesLink: undefined,
  logoSrc:
    "data:image/png;base64,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",
  privacyLink: undefined,
};

Footer4.propTypes = {
  link5: PropTypes.element,
  link3: PropTypes.element,
  link1: PropTypes.element,
  termsLink: PropTypes.element,
  link2: PropTypes.element,
  link4: PropTypes.element,
  logoAlt: PropTypes.string,
  cookiesLink: PropTypes.element,
  logoSrc: PropTypes.string,
  privacyLink: PropTypes.element,
}

export default Footer4
