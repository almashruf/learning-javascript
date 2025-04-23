const box = document.getElementById('colorBox');

box.addEventListener('mousemove', (e) => {
  const rect = box.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  const dx = e.clientX - centerX;
  const dy = e.clientY - centerY;

  const distance = Math.sqrt(dx * dx + dy * dy);
  const maxDistance = Math.sqrt((rect.width / 2) ** 2 + (rect.height / 2) ** 2);

  const intensity = Math.min(distance / maxDistance, 1);

  box.style.backgroundColor = `rgba(255, 0, 0, ${intensity})`;
});

box.addEventListener('mouseleave', () => {
  box.style.backgroundColor = 'rgba(255, 0, 0, 0)';
});
