 const rightAnswerIndexAl = (index)=>{
    let rightAnswerIndex;
    switch (index) {
  case 0:
            rightAnswerIndex = 1;
    break;
  case 1:
    rightAnswerIndex = -1;
    break;
  case 2:
    rightAnswerIndex = 0;
    break;

    default: rightAnswerIndex = 2;
    }

    return rightAnswerIndex;
}

export default rightAnswerIndexAl;