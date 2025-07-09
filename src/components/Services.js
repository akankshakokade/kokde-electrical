// import Image from "next/image";

const Services = () => {
  const sectionStyle = {
    padding: "50px 20px",
    backgroundColor: "#f7f7f7",
    textAlign: "center",
  };

  // const containerStyle = {
  //   maxWidth: "1200px",
  //   margin: "0 auto",
  //   display: "grid",
  //   gridTemplateColumns: "1fr 1fr",
  //   gap: "30px",
  //   alignItems: "center",
  // };


  const containerStyle = {
    display: "flex",
    justifyContent: "center", // centers content horizontally
    padding: "40px", // optional, for spacing
  };

  const textContainerStyle = {
    maxWidth: "800px",
    textAlign: "center",
  };
  
  

  // const textContainerStyle = {
  //   textAlign: "left",
  // };

  const titleStyle = {
    fontSize: "30px",
    fontWeight: "bold",
    color: "#333",
  };

  const subTitleStyle = {
    fontSize: "22px",
    fontWeight: "600",
    marginTop: "20px",
  };

  const paragraphStyle = {
    color: "#555",
    marginTop: "10px",
  };

  const listStyle = {
    marginTop: "15px",
    color: "#555",
    listStyleType: "none",
    paddingLeft: "0",
  };

  const listItemStyle = {
    marginBottom: "8px",
  };

  const imageStyle = {
    borderRadius: "10px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  };

  return (
    <section style={sectionStyle}>
      <div>
        <h2 style={titleStyle}>Know more about our services</h2>
        <p style={paragraphStyle}>
          “Our priority is to understand your business – with electrical
          specialists; we can tailor solutions to suit your specific
          environment.”
        </p>
      </div>
      {/* 
      <div style={containerStyle}>
        <div style={textContainerStyle}>
          <h2 style={titleStyle} >Electrical Services</h2>
          <h3 style={subTitleStyle}>Capable</h3>
          <p style={paragraphStyle}>
            We are qualified, equipped, and staffed to handle a complete range
            of projects, including:
          </p>
          <ul style={listStyle}>
            <li style={listItemStyle}>
              ✔ Industrial and commercial installation
            </li>
            <li style={listItemStyle}>
              ✔ Residential and multi-family installation
            </li>
            <li style={listItemStyle}>✔ Energy management systems</li>
            <li style={listItemStyle}>✔ Remodel and renovation</li>
            <li style={listItemStyle}>
              ✔ Primary and secondary power distribution
            </li>
            <li style={listItemStyle}>✔ Telecommunications and data cabling</li>
          </ul>

          <h3 style={subTitleStyle}>Competitive</h3>
          <p style={paragraphStyle}>
            We believe ethical conduct means providing our customers with an
            excellent value for their investment in our services. You have a
            right to receive the quality and type of installation for which
            you’ve contracted. We fully honor the specifications set forth in
            contract documents.
          </p>
        </div>

      </div> */}
      <div style={containerStyle}>
        <div style={textContainerStyle}>
          <h2 style={titleStyle}>Electrical Services</h2>
          <h3 style={subTitleStyle}>Capable</h3>
          <p style={paragraphStyle}>
            We are qualified, equipped, and staffed to handle a complete range
            of projects, including:
          </p>
          <ul style={listStyle}>
            <li style={listItemStyle}>
              ✔ Industrial and commercial installation
            </li>
            <li style={listItemStyle}>
              ✔ Residential and multi-family installation
            </li>
            <li style={listItemStyle}>✔ Energy management systems</li>
            <li style={listItemStyle}>✔ Remodel and renovation</li>
            <li style={listItemStyle}>
              ✔ Primary and secondary power distribution
            </li>
            <li style={listItemStyle}>✔ Telecommunications and data cabling</li>
          </ul>

          <h3 style={subTitleStyle}>Competitive</h3>
          <p style={paragraphStyle}>
            We believe ethical conduct means providing our customers with an
            excellent value for their investment in our services...
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
