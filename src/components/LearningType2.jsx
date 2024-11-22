import React, { useState } from "react";

const LearningType2 = ({ word, onNext }) => {
  const [selected, setSelected] = useState(null);
  const [feedback, setFeedback] = useState("");

  const options = [
    word.meaning,
    "Option 1",
    "Option 2",
    "Option 3",
  ].sort(() => Math.random() - 0.5);

  const checkAnswer = () => {
    if (selected === word.meaning) {
      setFeedback("Correct!");
    } else {
      setFeedback("Wrong!");
    }
  };

  return (
    <div>
      <h2>Choose the correct meaning</h2>
      {options.map((option, index) => (
        <div key={index}>
          <input
            type="radio"
            id={`option-${index}`}
            name="meaning"
            value={option}
            onChange={() => setSelected(option)}
          />
          <label htmlFor={`option-${index}`}>{option}</label>
        </div>
      ))}
      <button onClick={checkAnswer}>Check</button>
      {feedback && <p>{feedback}</p>}
      {feedback === "Correct!" && <button onClick={onNext}>Next</button>}
    </div>
  );
};

export default LearningType2;
