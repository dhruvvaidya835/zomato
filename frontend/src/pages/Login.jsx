import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // ✅ Import Link for navigation
import { loginUser } from "../utils/api"; // ✅ Import API function
import "../App.css"; // ✅ Import styles

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    setLoading(true);

    try {
      const response = await loginUser(formData);
      console.log("API Response Data:", response.data);

      // Extract user details from API response
      const { _id, fullname, email, token } = response.data;

      if (!_id || !fullname || !email || !token) {
        throw new Error(`API response missing required fields: ${JSON.stringify(response.data)}`);
      }

      const user = { _id, fullname, email };

      setMessage(`Login Successful! Welcome, ${fullname}`);

      // Store token & user data in localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      // Redirect to home after success message
      setTimeout(() => navigate("/"), 2000);
    } catch (err) {
      console.error("Login Error:", err);
      setError(err.response?.data?.message || err.message || "Login failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Login</h2>
        {message && <p className="success">{message}</p>}
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleLogin}>
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* 👇 Added "Sign Up" link here */}
        <p className="signup-link">
          Don't have an account? <Link to="/register">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
