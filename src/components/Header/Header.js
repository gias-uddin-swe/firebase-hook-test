import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";
import "./Header.css";
import useAuth from "./../../Hooks/useAuth";
const Header = () => {
  const { user, error, logOut } = useAuth();

  console.log(user.email);
  return (
    <div>
      <div className="menu-container">
        <Link to="/home" className="header-items">
          Home
        </Link>
        <Link to="/checkout" className="header-items">
          Payments
        </Link>
        <Link to="/shipping" className="header-items">
          shipping
        </Link>

        <Link to="/register" className="header-items">
          Register
        </Link>

        <Link to="/login" className="header-items">
          Login
        </Link>

        <li onClick={logOut} className="header-items">
          Logout
        </li>
      </div>
    </div>
  );
};

export default Header;
