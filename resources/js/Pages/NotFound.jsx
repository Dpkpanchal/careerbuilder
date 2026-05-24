import React from "react";

function NotFound() {
  return (
   <div style={styles.container}>
      <h1 style={styles.title}>Coming Soon</h1>

      <p style={styles.subText}>
        This page is currently under construction.
      </p>

      <a href="/" style={styles.link}>
        Go to Home
      </a>
    </div>

  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  title: {
    fontSize: "72px",
    marginBottom: "10px",
  },
  text: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  subText: {
    color: "#666",
    marginBottom: "20px",
  },
  link: {
    textDecoration: "none",
    color: "#fff",
    background: "#007bff",
    padding: "10px 20px",
    borderRadius: "5px",
  },
};

export default NotFound;
