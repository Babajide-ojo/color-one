import React, { useState } from "react";
import axios from "axios";
import "./signup.styles.scss";

import { ToastContainer, toast } from "react-toastify";
//import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const data = { first_name, last_name, email, password, confirm_password };

  const toastMsg = (message) => toast(message);
  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();

    axios
      .post(`${process.env.REACT_APP_API_URL}/user/create`, data)
      .then((data) => {
        console.log(data);
        toastMsg(data?.data.msg);
       
        setLoading(false);
        e.target.reset();
      })
      .catch((error) => {
        toastMsg(error?.response?.data?.msg);
      });
  };

  return (
    <div>
      <div className="header">
        {" "}
        <ToastContainer />
      </div>

      <div className="sign-up-form-wrapper">
        <h3 className="sign-up-title">Create An Account</h3>
        <form class="row g-3" onSubmit={handleSubmit}>
          <div class="col-md-12">
            <label for="inputEmail4" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              id="inputEmail4"
              name="email"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div class="col-md-12">
            <label for="inputEmail4" class="form-label">
              First Name
            </label>
            <input
              type="tect"
              class="form-control"
              id="inputEmail4"
              name="first_name"
              required
              onChange={(e) => {
                setFirst_name(e.target.value);
              }}
            />
          </div>
          <div class="col-md-12">
            <label for="inputEmail4" class="form-label">
              Last Name
            </label>
            <input
              type="text"
              class="form-control"
              id="inputEmail4"
              name="last_name"
              required
              onChange={(e) => {
                setLast_name(e.target.value);
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
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <div class="col-md-12">
            <label for="inputPassword4" class="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              class="form-control"
              id="inputPassword4"
              name="current_password"
              required
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
          </div>

          <div class="col-12 sign-up-btn-wrapper">
            <button type="submit" class="btn sign-up-btn">
              {loading ? <>Processing...</> : <>Sign In</>}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
