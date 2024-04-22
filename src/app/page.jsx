"use client";
import Image from "next/image";
import React, { useState } from "react";
import backgroundImage from "../../public/background.jpg";
import pradipchaudharyLogo from "../../public/pradipchaudhary.png";
const Homepage = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      style={{
        // use the src property of the image object
        backgroundImage: `url(${backgroundImage.src})`,
        // other styles
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Image
        src={pradipchaudharyLogo}
        alt=""
        style={{
          position: "absolute",
          top: "2%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />
      <h1 style={{ fontSize: 50, color: "white" }}>
        Hi there, I'm Pradip Chaudhary 👋
      </h1>
      <p
        style={{
          fontSize: 16,
          color: "white",
          maxWidth: 1000,
          textAlign: "center",
          marginTop: 25,
          lineHeight: 1.8,
        }}
      >
        A passionate Full Stack Software Developer 🚀 having a special interest
        in Frontend technologies and experience of building Web applications
        with JavaScript / Reactjs / Nodejs and some other cool libraries and
        frameworks.
      </p>
      <a
        href="mailto:your@email.com"
        style={{
          backgroundColor: "#4b4b4b00",
          color: "#fff",
          padding: "10px 20px",
          border: "none",
          borderRadius: "0px",
          cursor: "pointer",
          fontSize: "1.2rem",
          textDecoration: "none",
          display: "inline-block",
          textAlign: "center",
          marginTop: 70,
          borderBlock: "1px solid #7a7a7a",
          fontWeight: "normal",
          hover: "color: #333" /* Change to desired hover color */,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Let's Work Together
      </a>
    </div>
  );
};

export default Homepage;
