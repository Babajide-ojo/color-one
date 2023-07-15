import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";
import CartIcon from "../cart-icon/cart-icon";

const Header = () => {
  const user_details = JSON.parse(localStorage.getItem("user-details"));
  return (
    <div className="header">
      <nav className="nav-menu container">
        <div className="logo">
          {/* <Link to="/">colorOne</Link> */}
          <img src="https://res.cloudinary.com/dzv98o7ds/image/upload/q_100/v1671707822/logo_x6llil.jpg" alt="photo" className="logo-img"/>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
        </ul>
        <div className="my-account">
          <li>
            {user_details ? (
              <div class="dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  My Account
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <p class="dropdown-item">
                   Hi {user_details.first_name}
                  </p>
                  <a class="dropdown-item user-item" href="/profile">
                    My Profile
                  </a>
                  <a class="dropdown-item user-item" href="/orders">
                    My Orders
                  </a>
                  <a class="dropdown-item user-item" href="#" onClick={() =>{
                    localStorage.removeItem("user-details");
                  }}>
                    Logout
                  </a>
                </div>
              </div>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
        </div>
        <CartIcon />
      </nav>
    </div>
  );
};

export default Header;
