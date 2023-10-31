const questions = [
    {
      question: "Which is the largest animal in the world?",
      answers: [
        { text: "Shark", correct: false },
        { text: "Blue whale", correct: true },
        { text: "Elephant", correct: false },
        { text: "Giraffe", correct: false },
      ]
    },
    {
      question: "What is the tallest mountain in the world?",
      answers: [
        { text: "Mount Everest", correct: true },
        { text: "K2", correct: false },
        { text: "Kangchenjunga", correct: false },
        { text: "Makalu", correct: false },
      ]
    },
    {
      question: "Who painted the famous artwork 'The Starry Night'?",
      answers: [
        { text: "Vincent van Gogh", correct: true },
        { text: "Leonardo da Vinci", correct: false },
        { text: "Pablo Picasso", correct: false },
        { text: "Claude Monet", correct: false },
      ]
    },
    {
      question: "What is the national animal of India?",
      answers: [
        { text: "Lion", correct: false },
        { text: "Tiger", correct: true },
        { text: "Elephant", correct: false },
        { text: "Peacock", correct: false },
      ]
    },
    {
      question: "In which year did the Titanic sink?",
      answers: [
        { text: "1962", correct: false },
        { text: "1955", correct: false },
        { text: "1272", correct: false },
        { text: "1912", correct: true },
      ]
    },
    {
        question: "In Bloom's Taxonomy, which level involves applying knowledge to solve problems or complete tasks?",
        answers: [
          { text: "Remembering", correct: false },
          { text: "Understanding", correct: true },
          { text: "Applying", correct: false },
          { text: "Analyzing", correct: false },
        ]
      },
      {
        question: "Which learning theory focuses on observing and modeling behavior?",
        answers: [
          { text: "Cognitive Theory", correct: true },
          { text: "Behaviorist Theory", correct: false },
          { text: "Constructivist Theory", correct: false },
          { text: "Humanistic Theory", correct: false },
        ]
      },
      {
        question: "Which teaching strategy focuses on hands-on experiences and active learning?",
        answers: [
          { text: "Differentiated Instruction", correct: false },
          { text: "Scaffolding", correct: false },
          { text: "Experiential Learning", correct: false },
          { text: "Direct Instruction", correct: true },
        ]
      },
      {
        question: "Who is considered the father of modern education?",
        answers: [
          { text: "Jean Piaget", correct: false },
          { text: "Friedrich Froebel", correct: false },
          { text: "John Dewey", correct: false },
          { text: "Maria Montessori", correct: true },
        ]
      },
      
        {
          question: "Who is considered the father of modern education?",
          answers: [
            { text: "Jean Piaget", correct: false },
            { text: "Friedrich Froebel", correct: false },
            { text: "John Dewey", correct: false },
            { text: "Maria Montessori", correct: true },
          ]
        },
        // {
        //   question: "What is the purpose of the 'typeof' operator in JavaScript?",
        //   answers: [
        //     { text: "To check the type of a variable", correct: true },
        //     { text: "To assign a value to a variable", correct: false },
        //     { text: "To perform mathematical operations", correct: false },
        //     { text: "To define a function", correct: false },
        //   ]
        // },
        // {
        //   question: "Which array method is used to remove the last element from an array?",
        //   answers: [
        //     { text: "pop()", correct: true },
        //     { text: "push()", correct: false },
        //     { text: "shift()", correct: false },
        //     { text: "unshift()", correct: false },
        //   ]
        // },
        // {
        //   question: "What does CSS stand for?",
        //   answers: [
        //     { text: "Cascading Style Sheets", correct: true },
        //     { text: "Computer Style Sheets", correct: false },
        //     { text: "Colorful Style Sheets", correct: false },
        //     { text: "Creative Style Sheets", correct: false },
        //   ]
        // },
        // {
        //   question: "What does the '+= ' operator do in JavaScript?",
        //   answers: [
        //     { text: "Adds and assigns a value", correct: true },
        //     { text: "Compares two values", correct: false },
        //     { text: "Subtracts and assigns a value", correct: false },
        //     { text: "Concatenates two strings", correct: false },
        //   ]
        // },
        // {
        //   question: "Which keyword is used to declare a constant in JavaScript?",
        //   answers: [
        //     { text: "const", correct: true },
        //     { text: "let", correct: false },
        //     { text: "var", correct: false },
        //     { text: "constant", correct: false },
        //   ]
        // },
        // {
        //   question: "What is the purpose of the 'addEventListener' method in JavaScript?",
        //   answers: [
        //     { text: "To handle events like clicks or keypresses", correct: true },
        //     { text: "To create a new HTML element", correct: false },
        //     { text: "To define a CSS style rule", correct: false },
        //     { text: "To perform mathematical operations", correct: false },
        //   ]
        // },
        // {
        //   question: "Which method is used to convert a string to an integer in JavaScript?",
        //   answers: [
        //     { text: "parseInt()", correct: true },
        //     { text: "toString()", correct: false },
        //     { text: "parseFloat()", correct: false },
        //     { text: "toFixed()", correct: false },
        //   ]
        // },
        // {
        //   question: "What is the purpose of the 'return' statement in a function?",
        //   answers: [
        //     { text: "To end the execution of a function and return a value", correct: true },
        //     { text: "To repeat a block of code", correct: false },
        //     { text: "To declare a new variable", correct: false },
        //     { text: "To define a loop", correct: false },
        //   ]
        // },
     
        // {
        //   question: "Which teaching method focuses on hands-on experiences and active learning?",
        //   answers: [
        //     { text: "Experiential Learning", correct: true },
        //     { text: "Direct Instruction", correct: false },
        //     { text: "Differentiated Instruction", correct: false },
        //     { text: "Constructivist Approach", correct: false },
        //   ]
        // },
        // {
        //   question: "What is the term for an individual's unique way of processing and understanding information?",
        //   answers: [
        //     { text: "Learning Style", correct: true },
        //     { text: "Teaching Style", correct: false },
        //     { text: "Instructional Strategy", correct: false },
        //     { text: "Assessment Method", correct: false },
        //   ]
        // },
        // {
        //   question: "Which educational theorist is associated with the concept of Zone of Proximal Development (ZPD)?",
        //   answers: [
        //     { text: "Lev Vygotsky", correct: true },
        //     { text: "Jean Piaget", correct: false },
        //     { text: "B.F. Skinner", correct: false },
        //     { text: "Maria Montessori", correct: false },
        //   ]
        // },
        // {
        //   question: "What is the primary focus of inclusive education?",
        //   answers: [
        //     { text: "Ensuring access and participation for all students", correct: true },
        //     { text: "Teaching advanced topics to gifted students", correct: false },
        //     { text: "Promoting competition and individual achievement", correct: false },
        //     { text: "Implementing standardized testing", correct: false },
        //   ]
        // },
        // {
        //   question: "Which assessment technique involves observing students in their natural environment?",
        //   answers: [
        //     { text: "Authentic Assessment", correct: true },
        //     { text: "Formative Assessment", correct: false },
        //     { text: "Summative Assessment", correct: false },
        //     { text: "Diagnostic Assessment", correct: false },
        //   ]
        // },
        // {
        //   question: "What is the term for a visual representation of relationships between concepts or ideas?",
        //   answers: [
        //     { text: "Concept Map", correct: true },
        //     { text: "Venn Diagram", correct: false },
        //     { text: "Flowchart", correct: false },
        //     { text: "Mind Map", correct: false },
        //   ]
        // },
        // {
        //   question: "Which approach emphasizes the importance of the social and emotional development of students?",
        //   answers: [
        //     { text: "Humanistic Approach", correct: true },
        //     { text: "Behaviorist Approach", correct: false },
        //     { text: "Cognitive Approach", correct: false },
        //     { text: "Psychoanalytic Approach", correct: false },
        //   ]
        // },
        // {
        //   question: "What is the term for a group of students with similar learning needs who receive specialized instruction?",
        //   answers: [
        //     { text: "Learning Support Group", correct: false },
        //     { text: "Resource Group", correct: false },
        //     { text: "Remedial Group", correct: false },
        //     { text: "Ability Group", correct: true },
        //   ]
        // },
        // {
        //   question: "Which theorist is known for his stages of moral development?",
        //   answers: [
        //     { text: "Lawrence Kohlberg", correct: true },
        //     { text: "Erik Erikson", correct: false },
        //     { text: "Abraham Maslow", correct: false },
        //     { text: "Sigmund Freud", correct: false },
        //   ]
        // },
        // {
        //   question: "What is the term for a brief, focused instructional strategy used to reinforce learning?",
        //   answers: [
        //     { text: "Microteaching", correct: false },
        //     { text: "Drill and Practice", correct: true },
        //     { text: "Simulated Teaching", correct: false },
        //     { text: "Problem-Based Learning", correct: false },
        //   ]
        // },
        //     {
        //       question: "Which approach focuses on the role of experience and reflection in learning?",
        //       answers: [
        //         { text: "Experiential Learning", correct: true },
        //         { text: "Direct Instruction", correct: false },
        //         { text: "Differentiated Instruction", correct: false },
        //         { text: "Constructivist Approach", correct: false },
        //       ]
        //     },
        //     {
        //       question: "What is the term for the process of connecting new knowledge with existing knowledge?",
        //       answers: [
        //         { text: "Assimilation", correct: false },
        //         { text: "Accommodation", correct: false },
        //         { text: "Equilibration", correct: false },
        //         { text: "Scaffolding", correct: true },
        //       ]
        //     },
        //     {
        //       question: "Which theory suggests that individuals have different intelligences?",
        //       answers: [
        //         { text: "Multiple Intelligence Theory", correct: true },
        //         { text: "Cognitive Development Theory", correct: false },
        //         { text: "Social Learning Theory", correct: false },
        //         { text: "Behaviorist Theory", correct: false },
        //       ]
        //     },
        //     {
        //       question: "What is the term for a strategy that involves breaking down complex tasks into smaller, manageable steps?",
        //       answers: [
        //         { text: "Differentiated Instruction", correct: false },
        //         { text: "Scaffolding", correct: true },
        //         { text: "Direct Instruction", correct: false },
        //         { text: "Cooperative Learning", correct: false },
        //       ]
        //     },
        //     {
        //       question: "Which theorist is known for the concept of Zone of Proximal Development (ZPD)?",
        //       answers: [
        //         { text: "Lev Vygotsky", correct: true },
        //         { text: "Jean Piaget", correct: false },
        //         { text: "John Dewey", correct: false },
        //         { text: "Maria Montessori", correct: false },
        //       ]
        //     },
        //     {
        //       question: "What is the term for an assessment that is conducted during the learning process to provide feedback and guide instruction?",
        //       answers: [
        //         { text: "Formative Assessment", correct: true },
        //         { text: "Summative Assessment", correct: false },
        //         { text: "Diagnostic Assessment", correct: false },
        //         { text: "Authentic Assessment", correct: false },
        //       ]
        //     },
        //     {
        //       question: "Which educational approach emphasizes students' self-directed learning and personal growth?",
        //       answers: [
        //         { text: "Humanistic Approach", correct: true },
        //         { text: "Behaviorist Approach", correct: false },
        //         { text: "Cognitive Approach", correct: false },
        //         { text: "Constructivist Approach", correct: false },
        //       ]
        //     },
        //     {
        //       question: "What is the term for a technique that involves asking students open-ended questions to stimulate critical thinking?",
        //       answers: [
        //         { text: "Socratic Method", correct: true },
        //         { text: "Direct Instruction", correct: false },
        //         { text: "Cooperative Learning", correct: false },
        //         { text: "Differentiated Instruction", correct: false },
        //       ]
        //     },
        //     {
        //       question: "Which theory suggests that individuals learn through observation and imitation of others?",
        //       answers: [
        //         { text: "Social Learning Theory", correct: true },
        //         { text: "Cognitive Development Theory", correct: false },
        //         { text: "Behaviorist Theory", correct: false },
        //         { text: "Multiple Intelligence Theory", correct: false },
        //       ]
        //     },
        //     {
        //       question: "What is the term for a group discussion technique that involves students learning from and with each other?",
        //       answers: [
        //         { text: "Cooperative Learning", correct: true },
        //         { text: "Direct Instruction", correct: false },
        //         { text: "Differentiated Instruction", correct: false },
        //         { text: "Scaffolding", correct: false },
        //       ]
        //     },


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
  