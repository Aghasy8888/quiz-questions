import { useState, memo, useEffect } from 'react';
import { useNavigate, Route, Routes } from 'react-router-dom';
import Start from '../pages/Start';
import SharedLayoutQuestions from './SharedLayoutQuestions';
import SingleQuestion from './SingleQuestion';
import NotFound from '../pages/NotFound';
import questionsAndAnswersArray from '../files/questionsAnswers';
import Results from '../pages/Results';
import ProtectedRoute from './ProtectedRoute';

function CountriesAndCapitalsQuiz() {
  const [haveFinished, setHaveFinished] = useState(false);
  const navigate = useNavigate();
  const pageAccessedByReload =
    (window.performance.navigation &&
      window.performance.navigation.type === 1) ||
    window.performance
      .getEntriesByType('navigation')
      .map((nav) => nav.type)
      .includes('reload');

  useEffect(() => {
    if (pageAccessedByReload) {
      navigate('/');
    }
  }, []);

  const handleFinish = (bool) => {
    setHaveFinished(bool);
  };
  return (
    <Routes>
      <Route path='/' element={<Start handleFinish={handleFinish} />} />

      <Route
        path='/questions'
        element={
          <ProtectedRoute haveFinished={haveFinished}>
            <SharedLayoutQuestions
              handleFinish={handleFinish}
            />
          </ProtectedRoute>
        }
      >
        <Route
          index
          element={
            <ProtectedRoute haveFinished={haveFinished}>
              <SharedLayoutQuestions
                handleFinish={handleFinish}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path='/questions/:questionIndex'
          element={
            <ProtectedRoute haveFinished={haveFinished}>
              <SingleQuestion
                questionsAndAnswersArray={questionsAndAnswersArray}
              />
            </ProtectedRoute>
          }
        />
      </Route>

      <Route
        path='/result'
        element=<Results />
      />

      <Route path='*' element=<NotFound /> />
    </Routes>
  );
}

export default memo(CountriesAndCapitalsQuiz);
