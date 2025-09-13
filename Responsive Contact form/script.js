const form = document.getElementById('contactForm');
const statusEl = document.getElementById('form-status');

form.addEventListener('submit', e => {
  e.preventDefault();
  statusEl.textContent = '';
  statusEl.className = 'status';

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const msg = document.getElementById('msg').value.trim();

  // Simple Validation
  if (!name || !email || !msg) {
    showStatus('Please fill in all fields.', 'error');
    return;
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    showStatus('Please enter a valid email address.', 'error');
    return;
  }

  // Simulate success state
  showStatus('Your message has been sent successfully!', 'success');
  form.reset();
});

function showStatus(message, type) {
  statusEl.textContent = message;
  statusEl.className = `status ${type}`;
  statusEl.style.opacity = 1;
  setTimeout(() => { statusEl.style.opacity = 0; }, 4000);
}
