import React, { useEffect, useState } from "react";
import VocabularyList from "../components/VocabularyList";
import AddVocabularyForm from "../components/AddVocabularyForm";
import ReviewWords from "../components/ReviewWords";
import VocabLevel from "../components/VocabLevel";
import { fetchReviewWords } from "../api";

const Dashboard = ({ setLoggedIn }) => {
  const [words, setWords] = useState([]);
  useEffect(() => {
    const fetchWords = async () => {
      const { data } = await fetchReviewWords();
      setWords(data);
    };
    fetchWords();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
  };

  return (
    <div>
      <h2>Dashboard ( {words?.length} từ )</h2>
      <VocabLevel />
      <AddVocabularyForm />
      <VocabularyList />
      <ReviewWords />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
