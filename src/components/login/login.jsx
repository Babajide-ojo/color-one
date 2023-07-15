import React, { useState } from "react";
import axios from "axios";
import "./login.styles.css";

import { ToastContainer, toast } from "react-toastify";
import { useHistory } from "react-router-dom";
//import "react-toastify/dist/ReactToastify.css";

const LoginUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const data = { email, password };
  const history = useHistory();

  const toastMsg = (message) => toast(message);
  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/loginUser`, data)
      .then((data) => {
        localStorage.setItem("user-details", JSON.stringify(data?.data?.user));
        history.push("/cart")
        setLoading(false);
        e.target.reset();
      })
      .catch((error) => {
        toastMsg(error?.response?.data?.msg);
        console.log(error);
      });              

  };
  return (
    <div>
      <div className="header">
        {" "}
        <ToastContainer />
      </div>
      <div className="form-row login-section">
        <div className="col-12 login-section-input">
          <div className="login-form-wrapper">
            <form class="row g-3" onSubmit={handleSubmit}>
              <h3 className="login-title">Login</h3>
              <div class="col-md-12">
                <label for="inputEmail4" class="form-label">
                  Email
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputEmail4"
                  name="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div class="col-md-12">
                <label for="inputPassword4" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword4"
                  name="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <a href="/sign-up" className="new-user-link" >New Users? Sign up</a>
              <div class="col-12 sign-up-btn-wrapper">
                <button type="submit" class="btn btn-primary login-btn">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginUser;
