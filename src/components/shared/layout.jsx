import Header from '../header/header'
import React from "react";
import Footer from '../footer/footer';

const Layout = ({ children }) => {
  return (
    <>
    <Header />
      <main className="main">{children}</main>
    <Footer />
    </>
  );
};

export default Layout;
