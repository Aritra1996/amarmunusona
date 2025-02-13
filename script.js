const audio = document.getElementById("background-music");
let isPlaying = false;

function toggleMusic() {
  if (audio.paused) {
    audio.play().catch((error) => {
      console.error("Audio playback failed:", error);
      alert("Please interact with the page to enable music playback.");
    });
    document.getElementById("music-text").textContent = "Music: On";
  } else {
    audio.pause();
    document.getElementById("music-text").textContent = "Music: Off";
  }
}

function toggleMute() {
  audio.muted = !audio.muted;
  document.getElementById("mute-icon").className = audio.muted
    ? "fas fa-volume-mute"
    : "fas fa-volume-up";
}

// Original Valentine Code
const messages = [
  "পাক্কা ?",
  "একদম পাক্কা ??",
  "আরও একটু ভাবো মুনু !",
  "ভেবেচিন্তে দেখো !",
  "এরকম করো না আমার সাথে!",
  "আমার হৃদয় ভেঙে টুকরো টুকরো হয়ে গেল গো !",
  "শেষ সুযোগ !",
  "টাটা...",
  "ওরম মনে হয়, এখনো না ? 💖",
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
  const musicEnabled = !audio.paused; // Check if music is playing
  setTimeout(() => {
    window.location.href = `kissingPage.html?from=Aritra&to=Diamond&musicEnabled=${musicEnabled}`;
  }, 1000);
}

// Heart animation for GIF container
function createContainerHearts() {
  const container = document.querySelector(".hearts-overlay");

  function createHeart() {
    const heart = document.createElement("i");
    heart.className = "fas fa-heart heart-bubble";
    heart.style.left = Math.random() * 100 + "%";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    heart.style.fontSize = Math.random() * 10 + 15 + "px";

    container.appendChild(heart);

    setTimeout(() => heart.remove(), 4000);
  }

  setInterval(createHeart, 1000);
}

// Start experience after music prompt
function startExperience(enableMusic) {
  console.log("Starting experience with music:", enableMusic);
  // Hide music prompt
  document.getElementById("musicPrompt").style.display = "none";

  // Show all content
  document.querySelector(".container").style.display = "block";

  // Handle music
  if (enableMusic) {
    audio.play().catch(() => {});
  } else {
    audio.pause();
  }
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  createHearts();
  createContainerHearts();
  document.querySelector(".container").style.display = "none"; // Hide content initially
});
