// Floating Particles
const particleContainer = document.getElementById('particles');
const particles = [];

// Create particles manually for full control
function createParticles() {
  particleContainer.innerHTML = ''; // Clear previous particles
  particles.length = 0; // Clear the particle array

  for (let i = 0; i < 300; i++) { // Adjust particle count as needed
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.position = 'absolute';
    particle.style.width = `${Math.random() * 5 + 2}px`;  
    particle.style.height = `${Math.random() * 5 + 2}px`;
    particle.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 75%)`;

    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const speedY = Math.random() * 1 + 0.5; // Vertical speed

    particle.style.transform = `translate(${x}px, ${y}px)`;
    particleContainer.appendChild(particle);

    particles.push({ element: particle, x, y, speedY });
  }
}

// Update particle positions
function updateParticles() {
  particles.forEach(p => {
    p.y += p.speedY;
    if (p.y > window.innerHeight) {
      p.y = -10; // Reset to top when moving out of view
    }
    p.element.style.transform = `translate(${p.x}px, ${p.y}px)`;
  });

  requestAnimationFrame(updateParticles); // Keep updating
}

createParticles();
updateParticles();

// Update particles on window resize
window.addEventListener('resize', () => {
  createParticles(); // Recreate particles on resize
});

const styles = document.createElement('style');
styles.innerHTML = `
  .particle {
    border-radius: 50%;
    opacity: 0.8;
    pointer-events: none; /* Prevent particle interaction */
    will-change: transform; /* Optimize for animations */
  }
`;
document.head.appendChild(styles);

// Confetti Effect
const canvas = document.getElementById('confetti-canvas');
const ctx = canvas.getContext('2d');

// Resize canvas dynamically
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const confetti = [];
const colors = ['#ff7eb3', '#ff65a3', '#ffc3a0', '#ffd1dc', '#ffe4e1'];

for (let i = 0; i < 150; i++) { // Adjust confetti count as needed
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

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

// Reapply resize logic
window.addEventListener('resize', resizeCanvas);
resizeCanvas();
