import React, { useState } from "react";
import { register } from "../api";

const Register = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await register(formData);
      alert("Registration successful. Please login.");
    } catch (err) {
      alert("Registration failed");
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>Register</h2>
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
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
