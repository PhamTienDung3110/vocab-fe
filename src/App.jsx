import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ReviewPage from "./pages/ReviewPage.jsx";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("token"));

  return (
    <Router>
      <Routes>
        {!loggedIn ? (
          <>
            <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        ) : (
          <>
            <Route path="/review" element={<ReviewPage setLoggedIn={setLoggedIn} />} />
            <Route path="/dashboard" element={<Dashboard setLoggedIn={setLoggedIn} />} />
            <Route path="*" element={<Navigate to="/dashboard" />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;
