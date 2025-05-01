const cursor = document.getElementById('cursor');
let trail = [];

document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;

  cursor.style.left = `${x - 8}px`;
  cursor.style.top = `${y - 8}px`;

  // Create fading trail dot
  const trailDot = document.createElement('div');
  trailDot.classList.add('custom-cursor');
  trailDot.style.left = `${x - 8}px`;
  trailDot.style.top = `${y - 8}px`;
  trailDot.style.opacity = '0.3';
  trailDot.style.transform = 'scale(0.8)';
  document.body.appendChild(trailDot);

  trail.push(trailDot);
  if (trail.length > 20) {
    const old = trail.shift();
    old.remove();
  }

  setTimeout(() => {
    trailDot.style.transition = 'opacity 0.5s ease-out';
    trailDot.style.opacity = '0';
    setTimeout(() => trailDot.remove(), 500);
  }, 10);
});
