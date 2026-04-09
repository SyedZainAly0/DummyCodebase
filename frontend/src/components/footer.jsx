import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© 2026 MyWebsite. All rights reserved.</p>
      <div style={styles.social}>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    padding: "20px",
    textAlign: "center",
    backgroundColor: "#1e1e1e",
    color: "#fff",
    marginTop: "50px",
  },
  social: {
    marginTop: "10px",
    display: "flex",
    justifyContent: "center",
    gap: "15px",
  },
};

export default Footer;