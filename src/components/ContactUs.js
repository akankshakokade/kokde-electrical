// import React from "react";
// import "./ContactUs.css";

// const ContactUs = () => {
    
//     const checkMe = () => {
//         console.log("Hellooooooooooo");
//     }
//     return (
//       <>
//         <div className="contact-container">
//           <div className="contact-header">
//             <h2>Contact Us</h2>
//             <p>We keep millions of life electrically connected...</p>
//             <p className="breadcrumb">Home &gt; Contact Us</p>
//           </div>

//           <div className="contact-cards">
//             <div className="contact-card">
//               <i className="fas fa-phone"></i>
//               <h4>CONTACT DETAILS</h4>
//               <br />
//               <p>Mobile: +91 9960075283</p>
//             </div>
//             <div className="contact-card">
//               <i className="fas fa-envelope"></i>
//               <h4>EMAIL</h4> <br />
//               <p>kokdeelectrical@gmail.com</p>
//             </div>
//             <div className="contact-card">
//               <i className="fas fa-map-marker-alt"></i>
//               <h4>LOCATION</h4><br/>
//               <p>Gat NO 377, KOHAKADEWADI, NHAVARA,TAL SHIRUR ,DIST PUNE</p>
//             </div>
//           </div>

//           <div className="contact-form-section">
//             <h5>GET IN TOUCH</h5>
//             <h2>Schedule Meeting</h2>
//             <p>
//               If you have any feedback, or want to discuss any projects, or just
//               want to say Hi ! , please fill this form and submit.
//             </p>

//             <form className="contact-form">
//               <div className="form-row">
//                 <input type="text" placeholder="Name" />
//                 <input type="email" placeholder="Email" />
//               </div>
//               <div className="form-row">
//                 <input type="text" placeholder="Mobile" />
//                 <input type="text" placeholder="Subject" />
//               </div>
//               <textarea placeholder="Message"></textarea>
//               <button type="submit">Send Message</button>
//             </form>
//           </div>
//         </div>
//       </>
//     );
// };

// export default ContactUs;

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Snackbar } from "@mui/material";
import "./ContactUs.css";
import { Link } from "react-router-dom";

const ContactUs = () => {
  const form = useRef();
  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )

      .then(
        (result) => {
          console.log("Email successfully sent!");
          setOpen(true);
          form.current.reset();
        },
        (error) => {
          console.log("Failed to send email:", error.text);
        }
      );
  };

  return (
    <>
      <div className="contact-container">
        <div className="contact-header">
          <h2>Contact Us</h2>
          <p>We keep millions of life electrically connected...</p>
          {/* <p className="breadcrumb">Home &gt; Contact Us</p> */}
          <h3 className="breadcrumb">
            <Link to="/">
              <span className="breadcrumb">Home</span>
            </Link>{" "}
            &gt; Contact Us
          </h3>
        </div>

        <div className="contact-cards">
          <div className="contact-card">
            <i className="fas fa-phone"></i>
            <h4>CONTACT DETAILS</h4>
            <br />
            <p>Mobile: +91 9960075283</p>
          </div>
          <div className="contact-card">
            <i className="fas fa-envelope"></i>
            <h4>EMAIL</h4> <br />
            <p>kokdeelectrical@gmail.com</p>
          </div>
          <div className="contact-card">
            <i className="fas fa-map-marker-alt"></i>
            <h4>LOCATION</h4>
            <br />
            <p>Gat NO 377, KOHAKADEWADI, NHAVARA,TAL SHIRUR ,DIST PUNE</p>
          </div>
        </div>

        <div className="contact-form-section">
          <h5>GET IN TOUCH</h5>
          <h2>Schedule Meeting</h2>
          <p>
            If you have any feedback, or want to discuss any projects, or just
            want to say Hi ! , please fill this form and submit.
          </p>

          <form className="contact-form" ref={form} onSubmit={handleSubmit}>
            <div className="form-row">
              <input type="text" placeholder="Name" name="from_name" required />
              <input
                type="email"
                placeholder="Email"
                name="from_email"
                required
              />
            </div>
            <div className="form-row">
              <input type="text" placeholder="Mobile" name="mobile" />
              <input
                type="text"
                placeholder="Subject"
                name="subject"
                required
              />
            </div>
            <textarea placeholder="Message" name="message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={() => setOpen(false)}
        message="Email sent successfully!"
      />
    </>
  );
};

export default ContactUs;

