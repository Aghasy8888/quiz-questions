import Labels from './Labels';

export default function ShowAnswers(props) {
  return (
    <div className={`question${props.questionIndex}`}>
      {props.questionsAndAnswersArray[props.questionIndex].options.map(
        (option, index) => {
          return (
            <div key={index}>
              <Labels
                answer={option}
                questionIndex={props.questionIndex}
              />
            </div>
          );
        }
      )}
    </div>
  );
}
