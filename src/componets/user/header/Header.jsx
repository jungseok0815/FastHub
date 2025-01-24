import {React} from "react";
import { Link } from "react-router-dom";
import "../../../styles/user/Navbar.css";
import { useAuth } from "../../../stores/context/UserContext";
function Navbar() {
   const { user, logout } = useAuth();
   console.log(user)
  return (
    <nav className="navbar">
      <div className="logo">FastHub</div>
      <ul className="nav-links">
        <li><Link to={"/"}><a>Shop</a></Link></li>
        <li><Link to={"/"}><a>About</a></Link></li>
        <li><Link to={"/"}><a>마이페이지</a></Link></li>
        <li>{!user && <Link to={"/auth"}><a>Login</a></Link>}
            {user && < a onClick={logout}>Logout</a>}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;