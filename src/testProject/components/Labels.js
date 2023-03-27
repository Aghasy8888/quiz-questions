import { useSelector, useDispatch } from 'react-redux';
import { handleAnswerAction } from '../../redux/actions';

export default function Labels({ answer, questionIndex }) {
  const userAnswerArray = useSelector((state) => state.userAnswerArrayReducer);
  const dispatch = useDispatch();

  const handleAnswer = (index, option) => {
    userAnswerArray[index] = option;
  };
  return (
    <div>
      <label
        onClick={() => {
          handleAnswer(questionIndex, answer);
          dispatch(handleAnswerAction(userAnswerArray));
        }}
      >
        <input
          type='radio'
          name={`group${questionIndex}`}
          value={`group${questionIndex}`}
        />
        {answer}
      </label>
    </div>
  );
}
