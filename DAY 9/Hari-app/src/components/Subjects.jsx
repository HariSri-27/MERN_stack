import React, { useState } from "react";
import Topics from "./Topics";

function Subjects({ subjects }) {
  const [search, setSearch] = useState("");
  const [selectedSubject, setSelectedSubject] = useState(null);

  const filteredSubjects = subjects.filter(sub =>
    sub.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Subjects</h2>
      <input
        placeholder="Search Subject..."
        onChange={e => setSearch(e.target.value)}
      />
      <div style={{ marginTop: "10px" }}>
        {filteredSubjects.map(sub => (
          <button key={sub.id} onClick={() => setSelectedSubject(sub)} style={{ margin: "5px" }}>
            {sub.name}
          </button>
        ))}
      </div>

      {selectedSubject && <Topics subject={selectedSubject} />}
    </div>
  );
}

export default Subjects;