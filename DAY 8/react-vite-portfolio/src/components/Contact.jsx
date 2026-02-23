import React, { useState } from "react";

function Contact() {
  const [message, setMessage] = useState("");

  const handleClick = () => {
    setMessage("Thank you for reaching out!");
  };

  return (
    <section id="contact" style={{ padding: "40px", textAlign: "center" }}>
      <h2>Contact Me</h2>

      <p>Email: hari@email.com</p>
      <p>Phone: +1234567890</p>

      <button onClick={handleClick}>Send Message</button>

      {message && <p>{message}</p>}
    </section>
  );
}

export default Contact;