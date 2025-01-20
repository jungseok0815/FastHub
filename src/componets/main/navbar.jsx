import React from "react";
import "../../css/user/Navbar.css";
import { useAuth } from "../../config/Context/UserContext";
function Navbar() {
   const { user, logout } = useAuth();
   console.log(user)
  return (
    <nav className="navbar">
      <div className="logo">FastHub</div>
      <ul className="nav-links">
        <li><a href="#shop">Shop</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#about">마이페이지</a></li>
        <li>{!user && < a href="/login">Login</a>}
            {user && < a onClick={logout}>Logout</a>}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;