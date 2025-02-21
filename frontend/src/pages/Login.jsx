import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css"; // ✅ Import the CSS file

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "test@example.com" && password === "password") {
      localStorage.setItem("user", JSON.stringify({ name: "Test User" }));
      navigate("/");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="auth-container">
  <div className="auth-box">
    <h2>Login</h2>
    <input type="email" placeholder="Email" />
    <input type="password" placeholder="Password" />
    <button>Login</button>
    <p>Don't have an account? <a href="/register">Sign up</a></p>
  </div>
</div>

  );
};

export default Login;
