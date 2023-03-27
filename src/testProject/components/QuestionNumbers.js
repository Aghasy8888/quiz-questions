import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link, NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import questionsAndAnswersArray from '../files/questionsAnswers';
import '../css/styles.css';

function QuestionNumbers({
  handleFinish,
}) {
  const questionIndex = useParams();
  let questionIndx = Number(questionIndex.questionIndex);
  questionIndx = !questionIndx ? 0 : questionIndx;

  const previousQuestionIndex = questionIndx === 0 ? 0 : questionIndx - 1;
  const nextQuestionIndex =
    questionIndx === questionsAndAnswersArray.length - 1
      ? questionsAndAnswersArray.length
      : questionIndx + 1;

  return (
    <div className='qNumbersAndButtons'>
      <div className='allIndexes'>
        {questionsAndAnswersArray.map((question, index) => {
          return (
            <NavLink
              style={({ isActive }) => {
                return { color: isActive ? 'green' : 'black' };
              }}
              className='indexes'
              to={`/questions/${index}`}
              key={index}
            >
              {index + 1}
            </NavLink>
          );
        })}
      </div>

      <div className='container'>
        <Link to={`/questions/${previousQuestionIndex}`}>
          <Button disabled={questionIndx === 0} variant='primary'>
            Previous Question
          </Button>
        </Link>

        <Link to={`/questions/${nextQuestionIndex}`}>
          <Button
            disabled={questionIndx === questionsAndAnswersArray.length - 1}
            variant='primary'
          >
            Next Question
          </Button>
        </Link>
        <Link to='/result'>
          <Button
            onClick={() => {
              handleFinish(true);
            }}
          >
            Finish The Qiuz
          </Button>
        </Link>

        <Link to='/'>
          <Button onClick={() => handleFinish(true)}>Start Again</Button>
        </Link>
      </div>
    </div>
  );
}

export default QuestionNumbers;
