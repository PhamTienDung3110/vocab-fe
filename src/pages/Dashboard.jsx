import React from "react";
import VocabularyList from "../components/VocabularyList";
import AddVocabularyForm from "../components/AddVocabularyForm";
import ReviewWords from "../components/ReviewWords";

const Dashboard = ({ setLoggedIn }) => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <AddVocabularyForm />
      <VocabularyList />
      <ReviewWords />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
