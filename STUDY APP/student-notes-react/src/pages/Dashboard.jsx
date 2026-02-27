import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "../data/notes.json";

function Dashboard() {

  const navigate = useNavigate();

  const [subjects, setSubjects] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {

    if (localStorage.getItem("login") !== "true") {
      navigate("/");
    }

    setSubjects(data.subjects);

  }, []);


  const logout = () => {
    localStorage.removeItem("login");
    navigate("/");
  };


  // filter topics based on search
  const filterTopics = (topics) => {
    return topics.filter(topic =>
      topic.title.toLowerCase().includes(search.toLowerCase()) ||
      topic.description.toLowerCase().includes(search.toLowerCase()) ||
      topic.notes.toLowerCase().includes(search.toLowerCase())
    );
  };


  return (
    <div className="overlay">

      <div className="dashboard-container">

        <div className="header">

          <h2>📚 Student Notes Dashboard</h2>

          <button className="logout-btn" onClick={logout}>
            Logout
          </button>

        </div>


        {/* Search */}
        <input
          className="search-box"
          placeholder="🔍 Search topics, notes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />


        {/* Subjects */}
        {
          subjects.map(subject => {

            const filteredTopics = filterTopics(subject.topics);

            if (filteredTopics.length === 0 && search !== "") return null;

            return (

              <div key={subject.id} className="subject-box">

                <h3 className="subject-title">
                  {subject.name}
                </h3>

                <div className="topics-grid">

                  {
                    filteredTopics.map(topic => (

                      <div key={topic.id} className="topic-card">

                        <h4>{topic.title}</h4>

                        <p>
                          <strong>Description:</strong> {topic.description}
                        </p>

                        <p>
                          <strong>Notes:</strong> {topic.notes}
                        </p>

                        <span className={`difficulty ${topic.difficulty.toLowerCase()}`}>
                          {topic.difficulty}
                        </span>

                      </div>

                    ))
                  }

                </div>

              </div>

            );

          })
        }

      </div>

    </div>
  );

}

export default Dashboard;