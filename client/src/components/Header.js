import React from "react";
import heroImage from "../images/books2.jpg";

const headerStyle = {
  backgroundImage: `url(${heroImage})`,
  maxWidth: "100vw",
  height: "30vw",
  backgroundSize: "cover",
  position: "relative"
};

function Header() {
  return (
    <header style={headerStyle}>
      <h1>
        <span className="blue">G</span>
        <span className="red">o</span>
        <span className="yellow">o</span>
        <span className="blue">g</span>
        <span className="green">l</span>
        <span className="red">e</span> Books Search
      </h1>
      <p>What Would You Like to Read?</p>
    </header>
  );
}

export default Header;
