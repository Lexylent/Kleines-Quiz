const questions = [
  {
    question: "What is the capital of France?",
    answers: {
      a: "Paris",
      b: "Berlin",
      c: "Madrid"
    },
    correctAnswer: "a"
  },
  {
    question: "What is the highest mountain in the world?",
    answers: {
      a: "Mount Everest",
      b: "K2",
      c: "Mount Kilimanjaro"
    },
    correctAnswer: "a"
  },
  {
    question: "What is the largest ocean in the world?",
    answers: {
      a: "Atlantic Ocean",
      b: "Indian Ocean",
      c: "Pacific Ocean"
    },
    correctAnswer: "c"
  },
  {
    question: "What is the currency of Japan?",
    answers: {
      a: "Yen",
      b: "Dollar",
      c: "Euro"
    },
    correctAnswer: "a"
  },
  {
    question: "What is the name of the largest desert in the world?",
    answers: {
      a: "Sahara",
      b: "Gobi",
      c: "Antarctica"
    },
    correctAnswer: "a"
  }
];

let score = 0;
let currentQuestion = 0;

// Rendert Fragen und Antworten auf der Seite
function renderQuestion() {
  document.querySelector("#question").innerHTML = questions[currentQuestion].question;
  let answers = "";
  for (const letter in questions[currentQuestion].answers) {
    answers += `<div class="quiz-answer" onclick="checkAnswer('${letter}')">${letter}. ${questions[currentQuestion].answers[letter]}</div>`;
  }
  document.querySelector("#answers").innerHTML = answers;
}

// Überprüfen Sie, ob die Antwort richtig ist, und aktualisieren Sie die Punktzahl
function checkAnswer(answer) {
  if (answer === questions[currentQuestion].correctAnswer) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion === questions.length) {
    endQuiz();
  } else {
    renderQuestion();
  }
}

// Anzeige des Endergebnisses
function endQuiz() {
  document.querySelector("#question").innerHTML = "Quiz Complete!";
  document.querySelector("#answers").innerHTML = `Your score is ${score}/${questions.length}`;
}

// aktuelle Partitur anzeigen
function showScore() {
  document.querySelector("#score").innerHTML = `Score: ${score}`;
}

renderQuestion();

