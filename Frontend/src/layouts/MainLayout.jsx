import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import "./MainLayout.css";

export default function MainLayout({ children }) {
  return (
    <div className="layout-container">
      <Navbar />

      <div className="content-wrapper">
        <Sidebar />
        <main className="content">{children}</main>
      </div>

      <Footer />
    </div>
  );
}