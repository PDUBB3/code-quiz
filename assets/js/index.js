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
