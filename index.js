let arrayOfQuestions = [
  {
    id: 0,
    question: "First question",
    answer: "Answer for first",
  },
  {
    id: 1,
    question: "Second question",
    answer: "Answer for second",
  },
  {
    id: 2,
    question: "Third question",
    answer: "Answer for third",
  },
  {
    id: 3,
    question: "Fourth question",
    answer: "Answer for fourth",
  },
  {
    id: 4,
    question: "Fifth question",
    answer: "Answer for fifth",
  },
];

let question = document.querySelector(".question");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let progressPr = document.querySelector(".progressPr");
let answer = document.querySelector(".answer");
let countOfPr = document.querySelector(".countOfPr");
let countOfQ = document.querySelector(".countOfQ");

let currQ = 0;

arrayOfQuestions.map((el) => {
  if (el.id === currQ) {
    question.innerHTML = el.question;
  }

  if (currQ === 0) {
    prev.disabled = true;
  } else if (currQ > 0) {
    prev.disabled = false;
  }

  if (currQ >= arrayOfQuestions.length - 1) {
    next.disabled = true;
  } else if (currQ < arrayOfQuestions.length - 1) {
    next.disabled = false;
  }
});

next.addEventListener("click", () => {
  currQ++;
  arrayOfQuestions.map((el) => {
    if (el.id === currQ) {
      question.innerHTML = el.question;
      progressPr.style.width = currQ * 25 + "%";
      countOfPr.innerHTML = currQ * 25 + "%";
      countOfQ.innerHTML = currQ + 1 + " of " + arrayOfQuestions.length;
    }
  });

  if (currQ === 0) {
    prev.disabled = true;
  } else if (currQ > 0) {
    prev.disabled = false;
  }

  if (currQ >= arrayOfQuestions.length - 1) {
    next.disabled = true;
  } else if (currQ < arrayOfQuestions.length - 1) {
    next.disabled = false;
  }
});

prev.addEventListener("click", () => {
  currQ--;
  arrayOfQuestions.map((el) => {
    if (el.id === currQ) {
      question.innerHTML = el.question;
      progressPr.style.width = currQ * 25 + "%";
      countOfPr.innerHTML = currQ * 25 + "%";
      countOfQ.innerHTML = currQ + 1 + " of " + arrayOfQuestions.length;
    }
  });

  if (currQ === 0) {
    prev.disabled = true;
  } else if (currQ > 0) {
    prev.disabled = false;
  }

  if (currQ >= arrayOfQuestions.length - 1) {
    next.disabled = true;
  } else if (currQ < arrayOfQuestions.length - 1) {
    next.disabled = false;
  }
});

answer.addEventListener("click", () => {
  if (answer.innerHTML === "Show Answer") {
    answer.innerHTML = "Hide Answer";
    if (arrayOfQuestions[currQ].id === currQ) {
      question.innerHTML = arrayOfQuestions[currQ].answer;
    }
  } else if (answer.innerHTML === "Hide Answer") {
    answer.innerHTML = "Show Answer";
    if (arrayOfQuestions[currQ].id === currQ) {
      question.innerHTML = arrayOfQuestions[currQ].question;
    }
  }
});
