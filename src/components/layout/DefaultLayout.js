import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Header from "./Partial/Header";
import Footer from "./Partial/Footer";

import "./defaultLayout.style.css";
import SideBarNav from "../sidebar/SideBarNav";

export const DefaultLayout = ({ children }) => {
  return (
    <div className="default-layout">
      <div className="left-bar">
        <div className="admin-log   p-2 mb-5">Admin Pannel</div>
        <hr className="devider" />
          <SideBarNav/>
      </div>

      <div className="Main">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default DefaultLayout;
