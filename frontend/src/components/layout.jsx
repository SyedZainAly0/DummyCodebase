import React from "react";

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>MyWebsite</div>
      <ul style={styles.navLinks}>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

// Simple inline styles
const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#1e1e1e",
    color: "#fff",
  },
  logo: {
    fontWeight: "bold",
    fontSize: "24px",
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
  },
};

export default Navbar;