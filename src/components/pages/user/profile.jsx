import React, { useContext } from "react";

import Layout from "../../shared/layout";
import UserDetails from "../../user-profile/user-profile";

const Profile = () => {
  return (
    <Layout>
      <UserDetails />
    </Layout>
  );
};
export default Profile;
