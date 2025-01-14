import React from "react";
import "../../css/user/Navbar.css";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">FastHub</div>
      <ul className="nav-links">
        <li><a href="#shop">Shop</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#about">마이페이지</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;