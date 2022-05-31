const correctAnswers = ["B", "B", "B", "B"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector("span");
const resultdiv = document.querySelector(".result");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let score = 0;
  const userAnswers = [form.q1.value, form.q2.value, form.q3.value];

  // check answers
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });
  resultdiv.className -= 'd-none';
  result.innerText = "%" + score;
});
