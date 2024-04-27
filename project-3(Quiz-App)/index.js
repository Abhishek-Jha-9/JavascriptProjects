const questions = [
  {
    question: "What is 2+2",
    answers: [
      {
        text: "4",
        correct: true,
      },
      {
        text: "5",
        correct: false,
      },
      {
        text: "6",
        correct: false,
      },
      {
        text: "7",
        correct: false,
      },
    ],
  },
  {
    question: "What country has the highest life expectancy?",
    answers: [
      {
        text: "Hong Kong",
        correct: true,
      },
      {
        text: "USA",
        correct: false,
      },
      {
        text: "INDIA",
        correct: false,
      },
      {
        text: "CHINA",
        correct: false,
      },
    ],
  },
  {
    question: "Where would you be if you were standing on the Spanish Steps?",
    answers: [
      {
        text: "Rome",
        correct: true,
      },
      {
        text: "Greek",
        correct: false,
      },
      {
        text: "France",
        correct: false,
      },
      {
        text: "Russia",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which language has the more native speakers: English or Spanish?",
    answers: [
      {
        text: "Spanish",
        correct: true,
      },
      {
        text: "English",
        correct: false,
      },
      {
        text: "French",
        correct: false,
      },
      {
        text: "Hindi",
        correct: false,
      },
    ],
  },
];

let quiz = document.querySelector(".quiz");
let questionEle = document.querySelector("#question");
let answerBtn = document.querySelector("#answers-buttons");
let nextBtn = document.querySelector("#next-btn");

let score = 0;
let currentQuestionIndex = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  showQuestions();
  nextBtn.innerHTML = "NEXT";
}
function showQuestions() {
  resetState();
  let questionNo = currentQuestionIndex + 1;
  questionEle.innerHTML =
    `${questionNo}. ` + questions[currentQuestionIndex].question;
  showAnswers();
}

function showAnswers() {
  questions[currentQuestionIndex].answers.forEach((ans) => {
    const button = document.createElement("button");
    button.innerHTML = ans.text;
    button.classList.add("answers"); // adds  class name to button
    answerBtn.appendChild(button);
    if (ans.correct) {
      button.dataset.correct = ans.correct;
    }
    button.addEventListener("click", checkAnswer);
  });
}
function resetState() {
  nextBtn.style.display = "none";
  while (answerBtn.firstChild) {
    answerBtn.removeChild(answerBtn.firstChild);
  }
}
function checkAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerBtn.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextBtn.style.display = "block";
}

function showScore() {
  resetState();
  questionEle.innerHTML = `You scored ${score} out of ${questions.length}`;
  nextBtn.innerHTML = "Play Again";
  nextBtn.style.display = "Block";
}
function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestions();
  } else {
    showScore();
  }
}

nextBtn.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
