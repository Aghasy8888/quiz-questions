import React, { memo } from 'react';
import { useParams } from 'react-router-dom';
import ShowAnswers from './ShowAnswers';

function SingleQuestion({
  questionsAndAnswersArray,
}) {
  const { questionIndex } = useParams();

  return (
    <div>
      {`${Number(questionIndex) + 1}) ${
        questionsAndAnswersArray[questionIndex].question
      }`}

      {
        <ShowAnswers
          questionIndex={questionIndex}
          questionsAndAnswersArray={questionsAndAnswersArray}
        />
      }
    </div>
  );
}

export default memo(SingleQuestion);
