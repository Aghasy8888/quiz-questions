import './App.css';
import React from 'react';
import CountriesAndCapitalsQuiz from './testProject/components/CountriesAndCapitalsQuiz';
import { BrowserRouter } from 'react-router-dom';

function App() {
  
  return (
    <BrowserRouter>
    <CountriesAndCapitalsQuiz />
    </BrowserRouter>
  )
  
 
}

export default App;
