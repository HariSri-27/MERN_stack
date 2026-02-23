import React, { useState } from "react";

function Contact() {
  const [message, setMessage] = useState("");

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Contact</h2>
      <p>Email: support@studynotes.com</p>
      <button onClick={() => setMessage("Thank you for contacting us!")}>
        Send Message
      </button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Contact;