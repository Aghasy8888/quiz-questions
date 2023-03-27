import React from 'react';
import SingleQuestionResult from '../components/SingleQuestionResult';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import '../css/styles.css';

function Results() {
  
  return (
    <div>
      <SingleQuestionResult />
      <Link to='/'>
        <Button className='resultStart'>Start Again</Button>
      </Link>
    </div>
  );
}

export default Results;
