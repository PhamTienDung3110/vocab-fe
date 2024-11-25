import React, { useState } from "react";
import { login } from "../api";
import { useNavigate } from "react-router-dom";

const Login = ({ setLoggedIn }) => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await login(formData);
      localStorage.setItem("token", data.token);
      setLoggedIn(true);
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <>
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={formData.username}
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <button type="submit">Login</button>
    </form>
    <button onClick={() => navigate("/register")}>Register</button>
    </>
  );
};

export default Login;
