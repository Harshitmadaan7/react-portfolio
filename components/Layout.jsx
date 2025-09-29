// File: client/components/Layout.jsx
// Student: Harshit Madaan
// StudentID: 301493954
// Date: 2025-09-25
// Purpose: Main navigation + layout wrapper for portfolio

import React from "react";
import { Link } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header className="site-header">
        <div className="brand">
          <Link to="/" className="logo-link">
            <img src="/logo.jpeg" alt="logo" className="logo" />
            <span className="brand-name">Harshit M.</span>
          </Link>
        </div>

        <nav className="main-nav" aria-label="Main Navigation">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/project">Projects</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
      <main id="main-content" className="page-container">
      </main>
    </>
  );
}
