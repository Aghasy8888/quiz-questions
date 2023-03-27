import "./App.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, logIn } from "./redux/actions";
// import Question from "./components/Question";

function App() {
  const counter = useSelector((state) => state.counterReducer);
  const isLogged = useSelector((state) => state.loggedReducer);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>counter {counter}</h1>
      <button
        onClick={() => {
          dispatch(increment(10));
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(decrement(5));
        }}
      >
        -
      </button>

      <button
        onClick={() => {
          dispatch(logIn());
        }}
      >
        Log In
      </button>
      {isLogged && (
        <h1>i shouldn't see valuable information if i am not logged in </h1>
      )}
    </div>
  );
}

export default App;
