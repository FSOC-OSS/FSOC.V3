// Password Strength Check in the login form
const sectionPasswordField = document.getElementById('section-login-password');
const sectionStrengthBar = document.getElementById('section-password-strength');

sectionPasswordField.addEventListener('input', function() {
  const password = sectionPasswordField.value;
  let strength = 0;

  if (password.length > 6) strength++;
  if (password.match(/[A-z]/)) strength++;
  if (password.match(/[A-Z]/)) strength++;
  if (password.match(/[0-9]/)) strength++;
  if (password.match(/[$@#&!]/)) strength++;

  sectionStrengthBar.classList.remove('weak', 'medium', 'strong');
  if (strength < 2) {
    sectionStrengthBar.classList.add('weak');
  } else if (strength < 4) {
    sectionStrengthBar.classList.add('medium');
  } else {
    sectionStrengthBar.classList.add('strong');
  }
});

// Form validation for the login section
document.getElementById('login-form-section').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('section-login-email').value;
  const password = document.getElementById('section-login-password').value;

  if (email === '' || password === '') {
    alert('Please fill in all fields.');
  } else if (!validateEmail(email)) {
    alert('Invalid email address.');
  } else {
    alert('Login successful!');
  }
});

function validateEmail(email) {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return re.test(String(email).toLowerCase());
}
