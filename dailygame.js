const words = [
  { word: "plant", clue: "Something green that grows" },
  { word: "water", clue: "You should save this" },
  { word: "earth", clue: "The planet we live on" },
  { word: "solar", clue: "Type of renewable energy from the sun" },
];

let selected = words[Math.floor(Math.random() * words.length)];
let attempts = 3;

document.getElementById("clue").textContent = "Clue: " + selected.clue;
document.getElementById("remaining-chances").textContent = `Chances left: ${attempts}`;

function submitGuess() {
  const input = document.getElementById("guess-input").value.toLowerCase();
  const feedback = document.getElementById("guess-feedback");
  const correctWord = selected.word;

  const row = document.createElement("div");
  row.classList.add("guess-row");

  for (let i = 0; i < correctWord.length; i++) {
    const span = document.createElement("span");
    span.textContent = input[i] || "";
    if (input[i] === correctWord[i]) {
      span.classList.add("correct");
    } else if (correctWord.includes(input[i])) {
      span.classList.add("wrong-position");
    } else {
      span.classList.add("incorrect");
    }
    row.appendChild(span);
  }

  feedback.appendChild(row);
  attempts--;
  document.getElementById("remaining-chances").textContent = `Chances left: ${attempts}`;

  if (input === correctWord || attempts === 0) {
    document.getElementById("answer").innerHTML =
      input === correctWord
        ? "🎉 Correct!"
        : `😢 Out of attempts. The word was <span id="correct-word">${correctWord}</span>`;

    changeBackgroundAfterGame(); // Fade to aftergame background
  }
}

// Background transition after game ends
function changeBackgroundAfterGame() {
  const bg = document.getElementById("background");
  bg.style.opacity = "0";

  setTimeout(() => {
    bg.style.backgroundImage = "url('aftergame.jpg')"; // Change to aftergame background
    bg.style.opacity = "1";
  }, 1000); // After fade out
}

// Theme toggle logic
document.getElementById("theme-toggle").addEventListener("click", () => {
  const body = document.body;
  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
  } else {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
  }
});
