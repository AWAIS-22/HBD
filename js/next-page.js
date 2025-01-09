// Floating Particles
const particleContainer = document.getElementById('particles');
for (let i = 0; i < 300; i++) {  
  const particle = document.createElement('div');
  particle.className = 'particle';
  particle.style.position = 'absolute';
  particle.style.width = `${Math.random() * 5 + 2}px`;  
  particle.style.height = `${Math.random() * 5 + 2}px`;
  particle.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 75%)`;
  particle.style.top = `${Math.random() * window.innerHeight}px`;  
  particle.style.left = `${Math.random() * window.innerWidth}px`;  
  particle.style.animation = `float ${Math.random() * 6 + 4}s ease-in-out infinite`;  
  particleContainer.appendChild(particle);
}

const styles = document.createElement('style');
styles.innerHTML = `
  .particle {
    border-radius: 50%;
    opacity: 0.8;
  }
  @keyframes float {
    0% { transform: translateY(0) rotate(0); opacity: 1; }
    50% { opacity: 0.6; transform: translateY(-100px) rotate(45deg); }
    100% { transform: translateY(0) rotate(0); opacity: 0; }
  }
`;
document.head.appendChild(styles);

// Confetti Effect
const canvas = document.getElementById('confetti-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confetti = [];
const colors = ['#ff7eb3', '#ff65a3', '#ffc3a0', '#ffd1dc', '#ffe4e1'];
for (let i = 0; i < 300; i++) {
  confetti.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    w: Math.random() * 5 + 2,
    h: Math.random() * 10 + 5,
    color: colors[Math.floor(Math.random() * colors.length)],
    speedX: Math.random() * 3 - 1.5,
    speedY: Math.random() * 3 + 2,
    rotation: Math.random() * 360,
    rotationSpeed: Math.random() * 10 - 5
  });
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetti.forEach((conf) => {
    ctx.save();
    ctx.translate(conf.x, conf.y);
    ctx.rotate((conf.rotation * Math.PI) / 180);
    ctx.fillStyle = conf.color;
    ctx.fillRect(-conf.w / 2, -conf.h / 2, conf.w, conf.h);
    ctx.restore();

    conf.x += conf.speedX;
    conf.y += conf.speedY;
    conf.rotation += conf.rotationSpeed;

    if (conf.y > canvas.height) conf.y = -10;
    if (conf.x > canvas.width) conf.x = -10;
    if (conf.x < -10) conf.x = canvas.width;
  });
  requestAnimationFrame(drawConfetti);
}
drawConfetti();

// Open the birthday card after 1 seconds
setTimeout(function () {
  const birthdayCard = document.querySelector('.birthdayCard');
  if (birthdayCard) {
    birthdayCard.classList.add('open');
  }
}, 1000);


function goToPage() {
  window.location.href = "memories.html";
}