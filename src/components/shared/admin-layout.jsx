import Header from "../admin/header/header";
import React from "react";

const AdminLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="main">{children}</main>
    </>
  );
};

export default AdminLayout;
