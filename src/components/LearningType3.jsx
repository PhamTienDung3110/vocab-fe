import React, { useState } from "react";
import { Speech } from "react-speech";

const LearningType3 = ({ word, onNext }) => {
  const [selected, setSelected] = useState(null);
  const [feedback, setFeedback] = useState("");

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
      <h2>Listen and choose the correct word</h2>
      <Speech
        text={word.word}
        voice="Google UK English Male"
        textAsButton={true}
        displayText="🔊 Play"
      />
      {options.map((option, index) => (
        <div key={index}>
          <input
            type="radio"
            id={`option-${index}`}
            name="audio"
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

export default LearningType3;
