import { useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "../data/notes.json";

function Login(){

  const navigate = useNavigate();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const login = ()=>{

    const user = data.users.find(
      u => u.email === email && u.password === password
    );

    if(user){
      localStorage.setItem("login","true");
      navigate("/dashboard");
    }
    else{
      alert("Invalid login");
    }

  };

  return(

    <div className="overlay">

      <div className="dashboard-container">

        <h2>📚 Student Notes Login</h2>

        <input
          placeholder="Email"
          onChange={e=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={e=>setPassword(e.target.value)}
        />

        <button onClick={login}>
          Login
        </button>

      </div>

    </div>

  );

}

export default Login;