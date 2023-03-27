import {
  CLEAR_USER_ANSWER_ARRAY,
  HANDLE_ANSWER,
} from '../actions/actionTypes';

const userAnswerArrayReducer = (state = [], action) => {
  switch (action.type) {
    case HANDLE_ANSWER:
      return [...action.userAnswerArray];
    case CLEAR_USER_ANSWER_ARRAY:
      return [];
    default:
      return state;
  }
};

export default userAnswerArrayReducer;
