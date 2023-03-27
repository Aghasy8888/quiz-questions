import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearUserAnswerArray } from '../../redux/actions';

function Start({ handleFinish }) {
  const dispatch = useDispatch();

  useEffect(() => {
    handleFinish(false);
    dispatch(clearUserAnswerArray());
  }, []);

  return (
    <div>
      <Link to='/questions/0'>Start The Quiz</Link>
    </div>
  );
}

export default Start;
