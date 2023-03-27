function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

class QuestionsAndAnswers {
  constructor(question, rightAnswer, options) {
    this.question = question;
    this.rightAnswer = rightAnswer;
    this.options = options;
  }
}

const questionText = 'Which is the capital of';

const question1 = new QuestionsAndAnswers(
  `${questionText} Armenia?`,
  'Yerevan',
  shuffle(['Gyumri', 'Ararat', 'Dilijan', 'Yerevan'])
);

const question2 = new QuestionsAndAnswers(
  `${questionText} USA?`,
  'Washington',
  shuffle(['California', 'New York', 'Florida', 'Washington'])
);

const question3 = new QuestionsAndAnswers(
  `${questionText} France?`,
  'Paris',
  shuffle(['Marseille', 'Lyon ', 'Lille', 'Paris'])
);

const question4 = new QuestionsAndAnswers(
  `${questionText} Spain?`,
  'Madrid',
  shuffle(['Barcelona', 'Seville', 'Granada', 'Madrid'])
);

const question5 = new QuestionsAndAnswers(
  `${questionText} China?`,
  'Beijing',
  shuffle(['Shanghai', 'Chongqing', 'Tianjin', 'Beijing'])
);

const question6 = new QuestionsAndAnswers(
  `${questionText} Germany?`,
  'Berlin',
  shuffle(['Berlin', 'Hamburg', 'München', 'Stuttgart'])
);

const question7 = new QuestionsAndAnswers(
  `${questionText} Brazil?`,
  'Brasília',
  shuffle(['São Paulo', 'Brasília', 'Rio de Janeiro', 'Fortaleza'])
);

const question8 = new QuestionsAndAnswers(
  `Which of the following football players are from Brazil?`,
  'Ricardo Kaka',
  shuffle(['Leo Messi', 'Cristiano Ronaldo', 'Ricardo Kaka', 'Karim Benzema'])
);

const questionsAndAnswersArray = [
  question1,
  question2,
  question3,
  question4,
  question5,
  question6,
  question7,
  question8,
];

export const rightAnswersArray = questionsAndAnswersArray.map(
  (question, index) => {
    return question.rightAnswer;
  }
);

export default questionsAndAnswersArray;
