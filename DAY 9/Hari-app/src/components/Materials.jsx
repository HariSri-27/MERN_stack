import React from "react";

function Notes({ topic }) {
  if (!topic) return null;

  return (
    <div style={{ border: "1px solid gray", padding: "15px", marginTop: "10px" }}>
      <h4>{topic.title}</h4>
      <p>{topic.description}</p>
      <p><strong>Difficulty:</strong> {topic.difficulty}</p>
      <p>{topic.notes}</p>
    </div>
  );
}

export default Notes;