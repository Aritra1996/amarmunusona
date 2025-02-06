const messages = [
  "Are you sure?",
  "Really sure??",
  "Think again Thisuri!",
  "Please reconsider!",
  "Don't do this to me!",
  "I'll be heartbroken...",
  "You're breaking my heart!",
  "Last chance!",
  "Okay, I'll stop...",
  "Just kidding, SAY YES! 💖",
];

let messageIndex = 0;

function createHearts() {
  const container = document.createElement("div");
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.width = heart.style.height = Math.random() * 20 + 10 + "px";
    heart.style.animationDelay = Math.random() * 5 + "s";
    container.appendChild(heart);
  }
  document.body.appendChild(container);
}

function createConfetti() {
  const container = document.createElement("div");
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
    confetti.style.animationDelay = Math.random() * 2 + "s";
    container.appendChild(confetti);
  }
  document.body.appendChild(container);
}

function handleNoClick() {
  const noButton = document.querySelector(".no-button");
  const yesButton = document.querySelector(".yes-button");

  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  noButton.style.transform = `translate(
      ${Math.random() * 50 - 25}px, 
      ${Math.random() * 50 - 25}px
  )`;

  const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
  yesButton.style.fontSize = `${currentSize * 1.2}px`;

  yesButton.style.animation = "heartBeat 0.5s";
  setTimeout(() => (yesButton.style.animation = ""), 500);
}

function handleYesClick() {
  createConfetti();
  setTimeout(() => {
    window.location.href = `kissingPage.html?from=Induranga&to=Thisuri`;
  }, 1000);
}

document.addEventListener("DOMContentLoaded", createHearts);
