import React, { useState } from "react";

const LearningType4 = ({ word, onNext }) => {
  const [selected, setSelected] = useState(null);
  const [feedback, setFeedback] = useState("");

  const sentence = word.example.replace(word.word, "_____");
  const options = [
    word.word,
    "Option 1",
    "Option 2",
    "Option 3",
  ].sort(() => Math.random() - 0.5);

  const checkAnswer = () => {
    if (selected === word.word) {
      setFeedback("Correct!");
    } else {
      setFeedback("Wrong!");
    }
  };

  return (
    <div>
      <h2>Fill in the blank</h2>
      <p>{sentence}</p>
      {options.map((option, index) => (
        <div key={index}>
          <input
            type="radio"
            id={`option-${index}`}
            name="sentence"
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

export default LearningType4;
