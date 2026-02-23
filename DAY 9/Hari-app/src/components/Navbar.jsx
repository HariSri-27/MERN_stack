import React from "react";

function Navbar({ isLoggedIn, setIsLoggedIn }) {
  return (
    <nav style={{ background: "#222", color: "white", padding: "10px" }}>
      <h2 style={{ display: "inline-block", marginRight: "20px" }}>Study Notes Hub</h2>
      {isLoggedIn && (
        <button
          style={{
            padding: "5px 10px",
            borderRadius: "5px",
            cursor: "pointer",
            background: "#4CAF50",
            color: "white",
            border: "none"
          }}
          onClick={() => setIsLoggedIn(false)}
        >
          Logout
        </button>
      )}
    </nav>
  );
}

export default Navbar;