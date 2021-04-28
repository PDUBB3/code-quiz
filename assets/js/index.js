const questions = [
  {
    title: "What is the Capitol of New Zealand?",
    options: ["Wellington ", "Auckland", "Hamilton", "Tauranga"],
    answer: "Wellington",
  },
  {
    title: "What is the Capitol of Philippines?",
    options: ["Quezon", "Manila", "Caloocan", "Davao"],
    answer: "Manila",
  },
  {
    title: "What is the Capitol of Japan?",
    options: ["Yokohama", "Kyoto", "Tokyo", "Osaka"],
    answer: "Tokyo",
  },
  {
    title: "What is the Capitol of Thailand?",
    options: ["Phuket", "Pattaya", "Chiang Mai", "Bangkok"],
    answer: "Bangkok",
  },
  {
    title: "What is the Capitol of Russia?",
    options: ["Novosibirsk", "Krasnodar", "Moscow", "Kazan"],
    answer: "Moscow",
  },
];

const renderNextQuestion = (event) => {
  const target = event.target;
  const currentTarget = event.currentTarget;

  if (target.matches("li")) {
    const option = target.getAttribute("data-option");
    const answer = currentTarget.getAttribute("data-answer");

    if (option === answer) {
      currentQuestionIndex++;

      const questionContainer = document.getElementById("question-container");
      questionContainer.remove();

      if (currentQuestionIndex < questions.length) {
        const nextQuestion = questions[currentQuestionIndex];

        renderQuestion(nextQuestion);
      }
    } else {
      timerValue = timerValue - 5;
    }
  }
};

// will render the question container for a given question
const renderQuestion = (question) => {
  const questionContainer = document.createElement("div");
  questionContainer.setAttribute("class", "question-container");
  questionContainer.setAttribute("id", "question-container");

  const questionDiv = document.createElement("div");
  questionDiv.setAttribute("class", "question");
  questionDiv.textContent = question.title;

  const ul = document.createElement("ul");
  ul.setAttribute("class", "answers");
  ul.setAttribute("data-answer", question.answer);

  const li1 = document.createElement("li");
  li1.setAttribute("data-option", question.options[0]);
  li1.textContent = question.options[0];

  const li2 = document.createElement("li");
  li2.setAttribute("data-option", question.options[1]);
  li2.textContent = question.options[1];

  const li3 = document.createElement("li");
  li3.setAttribute("data-option", question.options[2]);
  li3.textContent = question.options[2];

  const li4 = document.createElement("li");
  li4.setAttribute("data-option", question.options[3]);
  li4.textContent = question.options[3];

  ul.append(li1, li2, li3, li4);

  questionContainer.append(questionDiv, ul);

  const startQuizContainer = document.getElementById("start-quiz-container");

  if (startQuizContainer) {
    startQuizContainer.remove();
  }

  main.append(questionContainer);
