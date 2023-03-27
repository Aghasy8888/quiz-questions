import { CLEAR_USER_ANSWER_ARRAY, HANDLE_ANSWER,} from "./actionTypes";

export const handleAnswerAction = (userAnswerArray) => {
  return {
    type: HANDLE_ANSWER,
    userAnswerArray,
  }
}

export const clearUserAnswerArray = (userAnswerArray) => {
  return{
    type: CLEAR_USER_ANSWER_ARRAY,
    userAnswerArray,
  }    
}
