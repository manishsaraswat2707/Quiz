const questions = [
  {
    question: "What does CPU stand for?",
    answers: [
      { text: "Central Processing Unit", correct: true },
      { text: "Computer Processing Unit", correct: false },
      { text: "Central Processor Unit", correct: false },
      { text: "Computer Processor Unit", correct: false },
    ],
  },
  {
    question: "What is the function of the ALU in a CPU?",
    answers: [
      { text: "Arithmetic Logic Unit", correct: true },
      { text: "Advanced Logic Unit", correct: false },
      { text: "Arithmetic Language Unit", correct: false },
      { text: "Algorithmic Logic Unit", correct: false },
    ],
  },
  {
    question: "What is a register in computer architecture?",
    answers: [
      { text: "Temporary storage inside the CPU", correct: true },
      { text: "Permanent storage on a hard drive", correct: false },
      { text: "A type of CPU instruction", correct: false },
      { text: "Input device for a computer", correct: false },
    ],
  },
  {
    question: "What does RAM stand for?",
    answers: [
      { text: "Random Access Memory", correct: true },
      { text: "Read-Only Memory", correct: false },
      { text: "Run-All Memory", correct: false },
      { text: "Real Access Memory", correct: false },
    ],
  },
  {
    question: "What is the role of the control unit in a CPU?",
    answers: [
      { text: "Manages the operations of the computer's components", correct: true },
      { text: "Performs arithmetic and logic operations", correct: false },
      { text: "Stores data permanently", correct: false },
      { text: "Provides temporary storage for data", correct: false },
    ],
  },
  {
    question: "What is the purpose of the cache memory in a computer?",
    answers: [
      { text: "Stores frequently used instructions and data for faster access", correct: true },
      { text: "Holds the operating system files", correct: false },
      { text: "Manages the input and output operations", correct: false },
      { text: "Performs complex mathematical calculations", correct: false },
    ],
  },
  {
    question: "What is the primary function of the input unit in a computer system?",
    answers: [
      { text: "Accepts data and instructions from the user or external devices", correct: true },
      { text: "Processes data to produce information", correct: false },
      { text: "Stores data for future use", correct: false },
      { text: "Displays the output to the user", correct: false },
    ],
  },
  {
    question: "What is the purpose of the clock speed in a CPU?",
    answers: [
      { text: "Determines how fast the CPU can execute instructions", correct: true },
      { text: "Manages the flow of data in and out of the CPU", correct: false },
      { text: "Controls the memory allocation in a computer", correct: false },
      { text: "Handles the graphics processing tasks", correct: false },
    ],
  },
  {
    question: "What is binary representation in computer architecture?",
    answers: [
      { text: "A system of encoding data using only 0s and 1s", correct: true },
      { text: "A way of storing text-based information", correct: false },
      { text: "An advanced programming language", correct: false },
      { text: "A method of compressing files", correct: false },
    ],
  },
  {
    question: "What is the function of the motherboard in a computer?",
    answers: [
      { text: "Connects and communicates between all the computer's components", correct: true },
      { text: "Provides power to the computer", correct: false },
      { text: "Stores the operating system files", correct: false },
      { text: "Manages the network connections", correct: false },
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
  