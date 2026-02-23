import React, { useState } from "react";

function Home() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="home" style={{ padding: "40px", textAlign: "center" }}>
      <h1 style={{ color: "#00adb5" }}>Hari Sri</h1> {/* Inline Styling */}
      <h3>Frontend Developer</h3>

      <p>
        I build responsive and interactive web applications.
      </p>

      {showMore && (
        <p>
          Passionate about React, UI/UX design, and modern JavaScript technologies.
        </p>
      )}

      <button onClick={() => setShowMore(!showMore)}>
        {showMore ? "Show Less" : "Show More"}
      </button>
    </section>
  );
}

export default Home;