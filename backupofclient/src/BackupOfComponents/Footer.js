import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© 2024 Restaurant Name. All Rights Reserved.</p>
      <div style={styles.social}>
        <a href="https://facebook.com">Facebook</a> | 
        <a href="https://instagram.com">Instagram</a> | 
        <a href="https://twitter.com">Twitter</a>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    padding: "10px",
    backgroundColor: "#333",
    color: "#fff",
    textAlign: "center",
  },
  social: {
    marginTop: "10px",
  },
};

export default Footer;
