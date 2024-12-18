import React, { useEffect, useState } from "react";
import { fetchReviewWords } from "../api";
import LearningType1 from "../components/LearningType1";
import LearningType2 from "../components/LearningType2";
import LearningType3 from "../components/LearningType3";
import LearningType4 from "../components/LearningType4";

const ReviewPage = () => {
  const [words, setWords] = useState([]);
  const [wordOnePart, setWordOnePart] = useState(1);
  const [currentType, setCurrentType] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchWords = async () => {
      const { data } = await fetchReviewWords();
      setWords(data.sort(() => Math.random() - 0.5));
      setWordOnePart(Math.round(data?.length / 3));
    };
    fetchWords();
  }, []);

  const handleNext = () => {
    if (currentIndex < 2) {
      setCurrentIndex(currentIndex + 1);
    } else if (currentType < 3) {
      setCurrentType(currentType + 1);
      setCurrentIndex(0);
    } else {
      alert("You have completed the review!");
    }
  };

  if (!words.length) {
    return <p>Loading...</p>;
  }

  const types = [
    <LearningType1 word={words[currentType * wordOnePart + currentIndex]} onNext={handleNext} />,
    <LearningType2 allWords={words} word={words[currentType * wordOnePart + currentIndex]} onNext={handleNext} />,
    <LearningType3 allWords={words} word={words[currentType * wordOnePart + currentIndex]} onNext={handleNext} />,
    // <LearningType4 allWords={words} word={words[currentType * 3 + currentIndex]} onNext={handleNext} />,
  ].sort(() => Math.random() - 0.5);

  return (
    <div>
      <h1>Review Vocabulary</h1>
      {types[currentType]}
    </div>
  );
};

export default ReviewPage;
