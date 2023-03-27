import React from "react";
import { Route, Routes } from "react-router-dom";

export default function Question(props) {
  const questions = [
    "Start the test",
    "Who is the best football player of all time?",
    "Who is the best rapper of all time?",
    "Who is the best charecter in 'Mer Bak@ 1' film?",
    "Which is the best song of System Of A Down?",
    "Who is the best actor of all time?",
  ];

  const answers = [
    "Ricardo Kaka",
    "Tupac Shakur",
    "Hrant",
    "Chop Suey",
    "Mher Mkrtchyan",
  ];

  const previousPage = () => {};

  const nextPage = () => {};

  return (
    <div>
     
<nav

        <Routes>
          <Route path={"/"} element={<p>Start the test</p>} />

          {questions.map((question, index) => (
            <Route
              key={index}
              path={`questions/${index}`}
              element={<p>{question}</p>}
            />
          ))}
        </Routes>
     
      <button>Previous</button>

      <button>Next</button>
    </div>
  );
}
