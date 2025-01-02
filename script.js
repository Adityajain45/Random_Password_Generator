// script.js
function generatePassword(length) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      password += chars[randomIndex];
    }
    return password;
  }
  
  document.getElementById('generate-btn').addEventListener('click', () => {
    const length = parseInt(document.getElementById('length').value, 10);
    if (length < 4 || length > 20) {
      alert('Please choose a length between 4 and 20.');
      return;
    }
    const password = generatePassword(length);
    document.getElementById('password').textContent = password;
  });
  
  document.getElementById('copy-btn').addEventListener('click', () => {
    const password = document.getElementById('password').textContent;
    navigator.clipboard.writeText(password).then(() => {
      alert('Password copied to clipboard!');
    }).catch(() => {
      alert('Failed to copy password.');
    });
  });
  