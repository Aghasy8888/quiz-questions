import React, { memo } from 'react';
import { Outlet } from 'react-router-dom';
import QuestionNumbers from './QuestionNumbers';

function SharedLayoutQuestions({ handleFinish }) {
  return (
    <div>
      <Outlet />

      <QuestionNumbers  handleFinish={handleFinish} />
    </div>
  );
}

export default memo(SharedLayoutQuestions);
