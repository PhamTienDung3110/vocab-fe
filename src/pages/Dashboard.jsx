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
      <button onClick={handleLogout}>Logout</button>
      <AddVocabularyForm />
      <VocabularyList />
      <ReviewWords />
    </div>
  );
};

export default Dashboard;
