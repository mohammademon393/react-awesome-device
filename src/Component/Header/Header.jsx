import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav>
        <h3>Electronic Shop</h3>
        <div className="li">
          <span className="home">
            <li>Home</li>
          </span>
          <li>About</li>
          <li>Offer</li>
        </div>
        <div>
          <button className="btn">Sign up</button>
          <button className="btn">Login</button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
