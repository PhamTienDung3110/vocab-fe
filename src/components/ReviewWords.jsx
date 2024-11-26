import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ReviewWords = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/review")}>Start Review</button>
      <button onClick={() => navigate("/review")}>Start Study</button>
    </div>
  );
};

export default ReviewWords;
