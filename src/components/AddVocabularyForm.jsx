import React, { useState } from "react";
import { addVocabulary } from "../api";

const AddVocabularyForm = () => {
  const [formData, setFormData] = useState({ word: "", meaning: "", example: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addVocabulary(formData);
    alert("Word added successfully!");
    setFormData({ word: "", meaning: "", example: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Word</h2>
      <input
        type="text"
        placeholder="Word"
        value={formData.word}
        onChange={(e) => setFormData({ ...formData, word: e.target.value })}
      />
      <input
        type="text"
        placeholder="Meaning"
        value={formData.meaning}
        onChange={(e) => setFormData({ ...formData, meaning: e.target.value })}
      />
      <input
        type="text"
        placeholder="Example"
        value={formData.example}
        onChange={(e) => setFormData({ ...formData, example: e.target.value })}
      />
      <button type="submit">Add Word</button>
    </form>
  );
};

export default AddVocabularyForm;
