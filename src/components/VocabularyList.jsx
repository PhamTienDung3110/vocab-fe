import React, { useEffect, useState } from "react";
import { fetchVocabulary, deleteVocabulary } from "../api";

const VocabularyList = () => {
  const [vocabulary, setVocabulary] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await fetchVocabulary();
      setVocabulary(data);
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    await deleteVocabulary(id);
    setVocabulary(vocabulary.filter((word) => word._id !== id));
  };

  return (
    <div>
      <h2>Your Vocabulary</h2>
      <ul>
        {vocabulary.map((word) => (
          <li key={word._id}>
            {word.word} - {word.meaning}{" "}
            <button onClick={() => handleDelete(word._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VocabularyList;
