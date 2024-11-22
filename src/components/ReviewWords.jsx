import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ReviewWords = () => {
  const [words, setWords] = useState([]);
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/review")}>Start Review</button>
    </div>
  );
};

export default ReviewWords;
