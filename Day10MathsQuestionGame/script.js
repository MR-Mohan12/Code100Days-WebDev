//Create random math question
//Question type multiplication question with random range 1 to 10
//Answer will be the product of the random number range and the random number
//User will have to answer question
//onsubmit answer answer will be compared with random generetda answer
//if answer will be correct than score will be decrement
//if answer will be wrong than score will be decresed

// Generate 4 types of question
// For subtract first number should be greater than second number
//store the sccore in local storage and display the score on the top
// give feedback to user  using toast

const questionEl = document.getElementById("question");
const questionFormEl = document.getElementById("form");
const scoreEl = document.getElementById("score");

let storedAnswer;
let score = 0;
console.log(score);


const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
// console.log(randomNumber(20,50));

// const generateQuestion = () => {
//   const randomNumber1 = randomNumber(1, 10);
//   const randomNumber2 = randomNumber(1, 10);
//   const question = `Q. Waht is the ${randomNumber1} multiply by ${randomNumber2} ?`;
//   const answer = randomNumber1 * randomNumber2;
//   return { question, answer };
// };

const generateQuestion = () => {
  const randomNumber1 = randomNumber(1, 10);
  const randomNumber2 = randomNumber(1, 10);
  let questionType = randomNumber(1, 4);

  let firstNumber;
  let secondNumber;
  let question;
  let answer;
  if (randomNumber1 > randomNumber2 && questionType > 2) {
    firstNumber = randomNumber1;
    secondNumber = randomNumber2;
  } else {
    firstNumber = randomNumber2;
    secondNumber = randomNumber1;
  }

  switch (questionType) {
    case 1:
      question = `Q. Waht is the ${firstNumber} Multiply by ${secondNumber} ?`;
      answer = firstNumber * secondNumber;
      break;
    case 2:
      question = `Q. Waht is the ${firstNumber} Add to ${secondNumber} ?`;
      answer = firstNumber + secondNumber;
      break;
    case 3:
      question = `Q. Waht is the ${firstNumber} Divided by ${secondNumber} ?`;
      answer = firstNumber / secondNumber;
      break;
    case 4:
      question = `Q. Waht is the ${firstNumber} Subtract from  ${secondNumber} ?`;
      answer = firstNumber - secondNumber;
      break;
    default:
  }
  return { question, answer };
};

const showQuestion = () => {
  const { question, answer } = generateQuestion();
  questionEl.innerText = question;
  scoreEl.innerText = score;
//   localStorage.setItem("score",score);
  storedAnswer = answer;
};
showQuestion();

const checkAnswer = (event) => {
  event.preventDefault();
  const formData = new FormData(questionFormEl);
  //   console.log(questionFormEl);
  // const userAnswer = parseInt(formData.get("answer"));
  const userAnswer = +formData.get("answer");
  // console.log(userAnswer);
  if (userAnswer === storedAnswer) {
    score += 1;
  } else {
    score -= 1;
  }
  scoreEl.innerText = score;
  event.target.reset();
  showQuestion();
  console.log(userAnswer);
};
