import React from "react";
import INVESTMENT_LOGO from "/investment-calculator-logo.png";
const Header = () => {
  return (
    <header>
      <img src={INVESTMENT_LOGO} alt="Investment Image" />
      <h1>Investment Calculator</h1>
    </header>
  );
};

export default Header;
