// Floating Particles
const particleContainer = document.getElementById('particles');
for (let i = 0; i < 100; i++) {
  const particle = document.createElement('div');
  particle.className = 'particle';
  particle.style.position = 'absolute';
  particle.style.width = `${Math.random() * 5 + 2}px`;
  particle.style.height = `${Math.random() * 5 + 2}px`;
  particle.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 75%)`;
  particle.style.top = `${Math.random() * 100}%`;
  particle.style.left = `${Math.random() * 100}%`;
  particle.style.animation = `float ${Math.random() * 5 + 5}s ease-in-out infinite`;
  particleContainer.appendChild(particle);
}

const styles = document.createElement('style');
styles.innerHTML = `
  .particle {
    border-radius: 50%;
    opacity: 0.8;
  }
  @keyframes float {
    0% { transform: translateY(0); opacity: 1; }
    50% { opacity: 0.6; }
    100% { transform: translateY(-200px); opacity: 0; }
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

// Redirect to another page after 2 seconds
setTimeout(function () {
  window.location.href = "next-page.html"; // Replace with the URL of your next page
}, 2000); // 2000ms = 2 seconds

