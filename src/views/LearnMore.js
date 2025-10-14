import React from "react";

const LearnMore = () => {
  return (
    <section
      style={{
        padding: "60px 20px",
        textAlign: "center",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h1 style={{ fontSize: "36px", fontWeight: "bold", color: "#333" }}>
        Learn More About Kokade Electricals
      </h1>
      <p
        style={{
          maxWidth: "800px",
          margin: "20px auto",
          fontSize: "18px",
          color: "#555",
        }}
      >
        At <strong>Kokade Electricals</strong>, we specialize in delivering
        top-tier electrical solutions for residential, commercial, and
        industrial clients. With decades of experience, we bring safety,
        efficiency, and innovation to every project we handle.
      </p>

      <h3 style={{ marginTop: "40px", fontSize: "24px", color: "#222" }}>
        Our Commitment
      </h3>
      <p
        style={{
          maxWidth: "700px",
          margin: "10px auto",
          fontSize: "17px",
          color: "#666",
        }}
      >
        We are committed to offering customized electrical solutions that match
        your specific needs. Our skilled team ensures quality work, timely
        delivery, and compliance with safety standards.
      </p>

      <h3 style={{ marginTop: "40px", fontSize: "24px", color: "#222" }}>
        Why Choose Us?
      </h3>
      <ul
        style={{
          listStyle: "none",
          paddingLeft: 0,
          fontSize: "17px",
          color: "#555",
          maxWidth: "700px",
          margin: "20px auto",
        }}
      >
        <li>⚡ Experienced and certified electricians</li>
        <li>⚡ On-time project delivery</li>
        <li>⚡ 24/7 customer support</li>
        <li>⚡ Quality materials and modern equipment</li>
      </ul>
    </section>
  );
};

export default LearnMore;
