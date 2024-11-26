import React from "react";
import VocabularyList from "../components/VocabularyList";
import AddVocabularyForm from "../components/AddVocabularyForm";
import ReviewWords from "../components/ReviewWords";
import VocabLevel from "../components/VocabLevel";

const Dashboard = ({ setLoggedIn }) => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <VocabLevel />
      <AddVocabularyForm />
      <VocabularyList />
      <ReviewWords />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
