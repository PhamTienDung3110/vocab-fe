import React, { useEffect, useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";

const LearningType2 = ({ word, onNext, allWords }) => {
  const { speak } = useSpeechSynthesis();

  const [selected, setSelected] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [options, setListOptions] = useState([]);

  function getRandomItems(array, count) {
    console.log(array);
    if (array.length <= count) {
      return array;
    }

    return array.sort(() => Math.random() - 0.5).slice(0, count);
  }

  useEffect(() => {
    const options = [
      word.meaning,
      ...getRandomItems(allWords, 3).map((ele) => ele.meaning),
    ].sort(() => Math.random() - 0.5);

    setListOptions(options);
  }, [allWords, word]);

  const handleOnNext = () => {
    setSelected(null);
    setFeedback("");
    setListOptions([]);
    onNext();
  };

  const checkAnswer = () => {
    if (selected === word.meaning) {
      setFeedback("Correct!");
    } else {
      setFeedback("Wrong!");
    }
  };

  return (
    <div>
      <h2>Listen and choose the correct word</h2>
      <button onClick={() => speak({ text: word.word })}>
        🔊 Play
      </button>
      {options.map((option, index) => (
        <div key={index}>
          <input
            type="radio"
            id={`option-${index}`}
            name="meaning"
            value={selected}
            onChange={() => setSelected(option)}
          />
          <label htmlFor={`option-${index}`}>{option}</label>
        </div>
      ))}
      <button onClick={checkAnswer}>Check</button>
      {feedback && <p>{feedback}</p>}
      {feedback === "Correct!" && <button onClick={handleOnNext}>Next</button>}
    </div>
  );
};

export default LearningType2;
