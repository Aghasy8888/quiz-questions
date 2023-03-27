import React from 'react';
import { useSelector } from 'react-redux';
import questionsAndAnswersArray, {
  rightAnswersArray,
} from '../files/questionsAnswers';
import '../css/styles.css';
import compareArrays from '../files/campareTheArrays';

function SingleQuestionResult() {
  const userAnswerArray = useSelector((state) => state.userAnswerArrayReducer);
  const userRightAnswers = compareArrays(userAnswerArray, rightAnswersArray);

  return (
    <>
      <h3>
        You have {userRightAnswers} right answer(s) out of{' '}
        {questionsAndAnswersArray.length}.{' '}
      </h3>
      {questionsAndAnswersArray.map((question, index) => {
        return (
          <div key={index}>
            <h3>
              {index + 1}. {question.question}
            </h3>

            {userAnswerArray[index] ? (
              <>
                <p
                  className={
                    userAnswerArray[index] === question.rightAnswer
                      ? 'right'
                      : 'wrong'
                  }
                >
                  {`Your answer: ${userAnswerArray[index]}`}
                </p>
                <div>
                  {userAnswerArray[index] === question.rightAnswer ? (
                    `is right.`
                  ) : (
                    <>
                      <p>is wrong.</p>
                      <p>Right answer: {question.rightAnswer}</p>
                    </>
                  )}
                </div>
              </>
            ) : (
              `You did not answer this question.`
            )}
          </div>
        );
      })}
    </>
  );
}

export default SingleQuestionResult;
