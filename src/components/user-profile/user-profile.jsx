import React, { useContext } from "react";
import { withRouter } from "react-router";
import "./user-profile.styles.scss";

const UserDetails = () => {
  const user = JSON.parse(localStorage.getItem("user-details"));
  return (
    <div className="profile">
      <div className="row">
        <div className="col-sm-6">
          {" "}
          <div>
            <h3 className="acc-details">ACCOUNT DETAILS</h3>
          </div>
          <hr />
          <div className="profile-name">
            {user.first_name + " " + user.last_name}
          </div>
          <div className="profile-email">{user.email}</div>
        </div>
        <div className="col-sm-6 bonus-stn">
          {" "}
          <div>
            <h3 className="acc-details">COLOR ONE BONUS</h3>
          </div>
          <hr />
          <div className="profile-name">
          ₦ 0.00
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
