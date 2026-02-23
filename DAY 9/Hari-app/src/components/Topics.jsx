import React, { useState } from "react";
import Notes from "./Materials";

function Topics({ subject }) {
  const [selectedTopic, setSelectedTopic] = useState(null);

  if (!subject || !subject.topics) return null;

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>{subject.name} Topics</h3>
      {subject.topics.map(topic => (
        <button
          key={topic.id}
          onClick={() => setSelectedTopic(topic)}
          style={{ margin: "5px", padding: "5px 10px" }}
        >
          {topic.title}
        </button>
      ))}

      {selectedTopic && <Notes topic={selectedTopic} />}
    </div>
  );
}

export default Topics;