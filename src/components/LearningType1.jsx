import React, { useState } from "react";

const LearningType1 = ({ word, onNext }) => {
  const [input, setInput] = useState("");
  const [feedback, setFeedback] = useState("");

  const checkAnswer = () => {
    if (input.toLowerCase() === word.word.toLowerCase()) {
      setFeedback("Correct!");
    } else {
      setFeedback("Try again!");
    }
  };

  const handleOnNext = () => {
    setInput('');
    setFeedback('');
    onNext();
  }

  return (
    <div>
      <h2>Type the word meaning</h2>
      <p>{word?.meaning}</p>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={checkAnswer}>Check</button>
      {feedback && <p>{feedback}</p>}
      {feedback === "Correct!" && <button onClick={handleOnNext}>Next</button>}
    </div>
  );
};

export default LearningType1;
