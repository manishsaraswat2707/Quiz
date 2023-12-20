const questions = [
  {
    question: "What is the purpose of the 'cin' object in C++?",
    answers: [
      { text: "To print output to the standard output stream (console)", correct: false },
      { text: "To perform mathematical calculations", correct: false },
      { text: "To read input from the standard input stream (keyboard)", correct: true },
      { text: "To handle file input operations", correct: false },
    ],
  },
  {
    question: "How is memory allocated for a dynamic array in C++?",
    answers: [
      { text: "Using the 'new' keyword", correct: true },
      { text: "Automatically by the compiler", correct: false },
      { text: "By declaring the array with a size at compile time", correct: false },
      { text: "Using the 'malloc' function", correct: false },
    ],
  },
  {
    question: "What is the purpose of the 'this' pointer in C++?",
    answers: [
      { text: "It points to the base class object", correct: false },
      { text: "It points to the derived class object", correct: false },
      { text: "It points to the current object instance", correct: true },
      { text: "It points to the global object", correct: false },
    ],
  },
  {
    question: "Explain the difference between 'cout' and 'cerr' in C++.",
    answers: [
      { text: "'cerr' is used for standard output, while 'cout' is used for standard error output", correct: false },
      { text: "'cout' and 'cerr' are interchangeable and can be used interchangeably", correct: false },
      { text: "'cerr' is used for file input operations, while 'cout' is used for console output", correct: false },
      { text: "'cout' is used for standard output, while 'cerr' is used for standard error output", correct: true },

    ],
  },
  {
    question: "What is the role of the 'break' statement in a switch statement in C++?",
    answers: [
      { text: "It terminates the switch statement and transfers control outside of it", correct: true },
      { text: "It skips the current case and moves to the next one", correct: false },
      { text: "It restarts the switch statement from the beginning", correct: false },
      { text: "It is used to exit the entire program", correct: false },
    ],
  },
  {
    question: "What is the purpose of the 'inline' keyword in C++?",
    answers: [
      { text: "It declares a function to be compiled separately", correct: false },
      { text: "It suggests the compiler to inline the function, replacing the function call with the actual code", correct: true },
      { text: "It indicates that the function should not be inlined", correct: false },
      { text: "It specifies that the function is a member of a class", correct: false },
    ],
  },
  {
    question: "What is function overloading in C++?",
    answers: [
      { text: "Defining multiple functions with the same name but different parameters", correct: true },
      { text: "Defining multiple functions with the same name and same parameters", correct: false },
      { text: "Declaring a function inside another function", correct: false },
      { text: "Defining a function with multiple return types", correct: false },
    ],
  },
  {
    question: "Explain the concept of pointers in C++.",
    answers: [
      { text: "Pointers are used for mathematical calculations", correct: false },
      { text: "Pointers are only used with arrays", correct: false },
      { text: "Pointers are used for file input operations", correct: false },
      { text: "Pointers are variables that store memory addresses", correct: true },

    ],
  },
  {
    question: "What is the 'const' keyword used for in C++?",
    answers: [
      { text: "It specifies that a variable is constant and cannot be used in calculations", correct: false },
      { text: "It is used to define constant functions", correct: false },
      { text: "It indicates that a variable's value cannot be changed", correct: true },
      { text: "It declares a constant pointer to a variable", correct: false },
    ],
  },
  {
    question: "What is the purpose of the 'namespace' in C++?",
    answers: [
      { text: "It organizes code into separate logical units and avoids naming conflicts", correct: true },
      { text: "It specifies the space allocated for variables in memory", correct: false },
      { text: "It defines the scope of a function", correct: false },
      { text: "It is used for mathematical calculations", correct: false },
    ],
  },
];

  
  const questionElement = document.getElementById("question");
  const answerButtons = document.getElementById("answer-buttons");
  const nextButton = document.getElementById("next-btn");
  
  let currentQuestionIndex = 0;
  let score = 0;
  // startQuiz
  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
  }
  // showQuestion
  function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    const questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    // currentQuestion
    currentQuestion.answers.forEach(answer => {
      const button = document.createElement("button");
      button.innerHTML = answer.text;
      button.classList.add("btn");
      answerButtons.appendChild(button);
      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
      button.addEventListener("click", selectAnswer);
    });
  }
  // resetState nxt quiz 
  function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
      answerButtons.removeChild(answerButtons.firstChild);
    }
  }
//   selectAnswer
  function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";
    if (isCorrect) {
      selectedButton.classList.add("correct");
      score++;
    } else {
      selectedButton.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
      if (button.dataset.correct === "true") {
        button.classList.add('correct');
      }
      button.disabled = true;
    });
    nextButton.style.display = "block";
  }
  // showScore
  function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
  }
  // handleNextButton
  function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showScore();
    }
  }
  // nextButton
  nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
      handleNextButton();
    } else {
      startQuiz();
    }
  });
  
  startQuiz();
  