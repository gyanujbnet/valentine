const noBtn = document.getElementById("noBtn");
const card = document.getElementById("card");
const song = document.getElementById("loveSong");
const noSound = document.getElementById("noSound");
const msgDiv = document.getElementById("msg");
const confettiDiv = document.getElementById("confetti");
let noClicks = 0;
const messages = ["Yayyy! 💕 I love you forever 🌹💑", "You are my sunshine! ☀️❤️", "You're my one and only 💎", "I'm so lucky to have you 💖", "Sweetest Valentine to me! 💘", "Hugs & kisses forever! 😘🌹", "You make my heart skip a beat! 💗", "Forever and always, my love! 👑💕"];
createHearts();
noBtn.addEventListener("touchstart", moveButton);
noBtn.addEventListener("mouseover", moveButton);
function moveButton() {
  noClicks++;
  try {
    noSound.currentTime = 0;
    noSound.play().catch(e => console.log("Audio play failed:", e));
  } catch (e) {
    console.log("Audio error:", e);
  }
  const maxOffset = Math.max(100, 200 + noClicks * 20);
  const x = Math.random() * (window.innerWidth - 120);
  const y = Math.random() * (window.innerHeight - 90);
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
  noBtn.style.transform = "scale(" + (1 + noClicks * 0.05) + ")";
  noBtn.style.animation = "none";
  setTimeout(() => {
    noBtn.style.animation = "shake 0.3s";
  }, 10);
}
function yes() {
  try {
    song.currentTime = 0;
    song.play().catch(e => console.log("Song play failed:", e));
  } catch (e) {
    console.log("Audio error:", e);
  }
  const randomMsg = messages[Math.floor(Math.random() * messages.length)];
  msgDiv.innerHTML = randomMsg;
  msgDiv.style.opacity = "1";
  showConfetti();
  noBtn.style.display = "none";
  document.querySelector(".yes").disabled = true;
}
function showConfetti() {
  confettiDiv.innerHTML = "";
  for (let i = 0; i < 80; i++) {
    const confetti = document.createElement("div");
    confetti.style.position = "absolute";
    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.top = Math.random() * window.innerHeight + "px";
    confetti.style.width = "10px";
    confetti.style.height = "10px";
    const colors = ['#e63946', '#ff7eb3', '#ff758c', '#ffc0cb', '#ffb3ba'];
    confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.borderRadius = Math.random() > 0.5 ? "50%" : "0";
    confetti.style.opacity = "0.9";
    confetti.style.animation = "confetti-fall " + (2 + Math.random() * 1.5) + "s ease-in forwards";
    confetti.style.animationDelay = (Math.random() * 0.5) + "s";
    confettiDiv.appendChild(confetti);
  }
  setTimeout(() => {
    confettiDiv.innerHTML = "";
  }, 4000);
}
function createHearts() {
  const bg = document.querySelector('.heart-bg');
  bg.innerHTML = "";
  for (let i = 0; i < 15; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = (Math.random() * window.innerHeight - 100) + "px";
    heart.style.animationDelay = (Math.random() * 4) + "s";
    heart.style.animationDuration = (4 + Math.random() * 2) + "s";
    bg.appendChild(heart);
  }
}
const style = document.createElement('style');
style.textContent = `@keyframes shake { 0%, 100% { transform: translateX(0) scale(1); } 10%, 30%, 50%, 70%, 90% { transform: translateX(-5px) scale(1.05); } 20%, 40%, 60%, 80% { transform: translateX(5px) scale(1.05); } }`;
document.head.appendChild(style);
window.addEventListener('resize', createHearts);