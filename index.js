const questions = [
  {
    question: "Explain the concept of von Neumann architecture. What are its key components?",
    answers: [
        { text: "Input and output devices", correct: false },
        { text: "Memory and CPU", correct: true },
        { text: "Operating system and application software", correct: false },
        { text: "Hard disk and RAM", correct: false },
    ],
},

{
    question: "Differentiate between RAM and ROM. Provide examples of situations where each is more suitable.",
    answers: [
        { text: "RAM is volatile, while ROM is non-volatile.", correct: true },
        { text: "ROM is used for temporary storage, while RAM is used for permanent storage.", correct: false },
        { text: "Both RAM and ROM are non-volatile.", correct: false },
        { text: "RAM is read-only, while ROM is read-write.", correct: false },
    ],
},

{
    question: "What is the role of the ALU (Arithmetic Logic Unit) in a CPU? Provide examples of arithmetic and logical operations.",
    answers: [
        { text: "ALU manages memory operations.", correct: false },
        { text: "ALU performs arithmetic and logical operations.", correct: true },
        { text: "ALU handles input and output operations.", correct: false },
        { text: "ALU manages peripheral devices.", correct: false },
    ],
},

{
    question: "Explain the difference between a compiler and an interpreter. When is each of them more suitable?",
    answers: [
        { text: "Compiler translates high-level code to machine code, while an interpreter executes code line by line.", correct: true },
        { text: "Compiler executes code line by line, while an interpreter translates high-level code to machine code.", correct: false },
        { text: "Compiler is used for web development, while an interpreter is used for system programming.", correct: false },
        { text: "Compiler and interpreter perform the same function.", correct: false },
    ],
},

{
    question: "Discuss the purpose of the control unit in a CPU. How does it coordinate the execution of instructions?",
    answers: [
        { text: "Control unit manages input devices.", correct: false },
        { text: "Control unit executes arithmetic operations.", correct: false },
        { text: "Control unit coordinates the execution of instructions by managing the flow of data within the CPU.", correct: true },
        { text: "Control unit is responsible for storage operations.", correct: false },
    ],
},

{
    question: "Define pipelining in computer architecture. What advantages does it offer in terms of performance?",
    answers: [
        { text: "Pipelining is a type of software development process.", correct: false },
        { text: "Pipelining is a technique that allows multiple instructions to be overlapped during execution.", correct: true },
        { text: "Pipelining refers to the process of compiling code.", correct: false },
        { text: "Pipelining is used for data storage in computers.", correct: false },
    ],
},

{
    question: "Explain the concept of cache memory. How does it contribute to improving the overall system performance?",
    answers: [
        { text: "Cache memory is used for long-term storage.", correct: false },
        { text: "Cache memory is a type of secondary storage device.", correct: false },
        { text: "Cache memory is a small, high-speed type of volatile computer memory that provides high-speed data access to the processor.", correct: true },
        { text: "Cache memory is used for virtual memory management.", correct: false },
    ],
},

{
    question: "Discuss the role of the input/output unit in computer organization. Provide examples of input and output devices.",
    answers: [
        { text: "Input/output unit is responsible for arithmetic operations.", correct: false },
        { text: "Input/output unit manages the control unit.", correct: false },
        { text: "Input/output unit facilitates communication between the computer and external devices, such as keyboards and printers.", correct: true },
        { text: "Input/output unit is responsible for managing cache memory.", correct: false },
    ],
},

{
    question: "What is the purpose of the system bus in computer architecture? How does it facilitate communication between different components?",
    answers: [
        { text: "System bus is responsible for executing instructions.", correct: false },
        { text: "System bus is a type of secondary storage device.", correct: false },
        { text: "System bus is a communication pathway that connects various hardware components, allowing them to exchange data.", correct: true },
        { text: "System bus manages input devices.", correct: false },
    ],
},

{
    question: "Explain the concept of parallel processing. How does it enhance the performance of a computer system?",
    answers: [
        { text: "Parallel processing is a type of memory management.", correct: false },
        { text: "Parallel processing involves executing multiple instructions simultaneously, improving the overall speed and performance of a computer system.", correct: true },
        { text: "Parallel processing is a type of input/output operation.", correct: false },
        { text: "Parallel processing is only applicable to specific programming languages.", correct: false },
    ],
},
  {
    question: "What is the purpose of the 'cout' object in C++?",
    answers: [
      { text: "To print output to the standard output stream (console)", correct: true },
      { text: "To perform mathematical calculations", correct: false },
      { text: "To read input from the standard input stream (keyboard)", correct: false },
      { text: "To handle file input operations", correct: false },
    ],
  },
  {
    question: "What is an algorithm?",
    answers: [
      { text: "A programming language", correct: false },
      { text: "A step-by-step procedure for solving a problem", correct: true },
      { text: "A hardware component", correct: false },
      { text: "A type of data structure", correct: false },
    ],
  },
  {
    question: "What is the purpose of an operating system?",
    answers: [
      { text: "To store data in memory", correct: false },
      { text: "To manage computer hardware and software resources", correct: true },
      { text: "To perform mathematical calculations", correct: false },
      { text: "To design user interfaces", correct: false },
    ],
  },
  {
    question: "Which programming language is known for its portability and platform independence?",
    answers: [
      { text: "C", correct: false },
      { text: "Java", correct: true },
      { text: "Python", correct: false },
      { text: "JavaScript", correct: false },
    ],
  },
  {
    question: "What is the purpose of the 'if' statement in programming?",
    answers: [
      { text: "To declare a variable", correct: false },
      { text: "To perform a loop", correct: false },
      { text: "To make decisions based on a condition", correct: true },
      { text: "To print output to the console", correct: false },
    ],
  },
  {
    question: "What is the binary system?",
    answers: [
      { text: "A system with two programming languages", correct: false },
      { text: "A system with two operating systems", correct: false },
      { text: "A numeral system with a base of 2", correct: true },
      { text: "A system with two programming paradigms", correct: false },
    ],
  },
  {
    question: "What is the purpose of a compiler?",
    answers: [
      { text: "To execute a program", correct: false },
      { text: "To convert high-level code into machine code", correct: true },
      { text: "To manage memory allocation", correct: false },
      { text: "To create user interfaces", correct: false },
    ],
  },
  {
    question: "What is a variable in programming?",
    answers: [
      { text: "A constant value", correct: false },
      { text: "A reserved keyword", correct: false },
      { text: "A named storage location for data", correct: true },
      { text: "A type of loop", correct: false },
    ],
  },
  {
    question: "What does HTML stand for?",
    answers: [
      { text: "Hypertext Markup Language", correct: true },
      { text: "High-Level Text Language", correct: false },
      { text: "Hyper Transfer Markup Language", correct: false },
      { text: "Home Tool Markup Language", correct: false },
    ],
  },
  {
    question: "What is the purpose of CSS in web development?",
    answers: [
      { text: "To define the structure of a web page", correct: false },
      { text: "To perform server-side scripting", correct: false },
      { text: "To style and format the appearance of a web page", correct: true },
      { text: "To handle database operations", correct: false },
    ],
  },
  {
    "question": "What is the basic function of an operating system?",
    "answers": [
      { "text": "Managing hardware resources", "correct": true },
      { "text": "Executing application programs", "correct": false },
      { "text": "Handling network communication", "correct": false },
      { "text": "Creating user interfaces", "correct": false }
    ]
  },
  {
    "question": "What is the primary purpose of an assembler in computer programming?",
    "answers": [
      { "text": "Translate high-level code to machine code", "correct": false },
      { "text": "Convert assembly language to machine code", "correct": true },
      { "text": "Optimize program execution speed", "correct": false },
      { "text": "Manage memory allocation", "correct": false }
    ]
  },
  {
    "question": "Which storage device is considered volatile memory?",
    "answers": [
      { "text": "Hard disk drive", "correct": false },
      { "text": "Solid-state drive", "correct": false },
      { "text": "RAM (Random Access Memory)", "correct": true },
      { "text": "Flash drive", "correct": false }
    ]
  },
  {
    "question": "What is the purpose of a compiler in the context of programming languages?",
    "answers": [
      { "text": "Execute code line by line", "correct": false },
      { "text": "Convert source code to machine code", "correct": true },
      { "text": "Debugging program errors", "correct": false },
      { "text": "Create graphical user interfaces", "correct": false }
    ]
  },
  {
    "question": "What does the term 'CPU' stand for?",
    "answers": [
      { "text": "Central Processing Unit", "correct": true },
      { "text": "Computer Peripheral Unit", "correct": false },
      { "text": "Control Processing Unit", "correct": false },
      { "text": "Central Peripheral Unit", "correct": false }
    ]
  },
  {
    "question": "What is the purpose of the BIOS (Basic Input/Output System) in a computer?",
    "answers": [
      { "text": "Manage peripheral devices", "correct": false },
      { "text": "Provide low-level hardware control", "correct": true },
      { "text": "Handle graphical user interfaces", "correct": false },
      { "text": "Optimize disk storage", "correct": false }
    ]
  },
  {
    "question": "What is the function of an IP address in networking?",
    "answers": [
      { "text": "Identify a device on the internet", "correct": true },
      { "text": "Establish a secure connection", "correct": false },
      { "text": "Manage file sharing", "correct": false },
      { "text": "Control data encryption", "correct": false }
    ]
  },
  {
    "question": "What is the purpose of a firewall in network security?",
    "answers": [
      { "text": "Accelerate internet speed", "correct": false },
      { "text": "Monitor network traffic and block unauthorized access", "correct": true },
      { "text": "Enhance wireless signal strength", "correct": false },
      { "text": "Optimize data transfer protocols", "correct": false }
    ]
  },
  {
    "question": "What does the acronym 'URL' stand for?",
    "answers": [
      { "text": "Uniform Resource Locator", "correct": true },
      { "text": "Universal Resource Language", "correct": false },
      { "text": "User Requirement Locator", "correct": false },
      { "text": "Unified Resource Language", "correct": false }
    ]
  },
  {
    "question": "In computer terms, what does RAM stand for?",
    "answers": [
      { "text": "Random Access Module", "correct": false },
      { "text": "Read-Only Memory", "correct": false },
      { "text": "Random Access Memory", "correct": true },
      { "text": "Read Access Module", "correct": false }
    ]
  }
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
  