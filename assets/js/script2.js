document.getElementById('registrationForm').addEventListener('submit', function(event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // Check if password and confirm password match
    if (password !== confirmPassword) {
      event.preventDefault();
      showmsg('Passwords do not match.');
      return;
    }

    // Email Validtor
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      event.preventDefault();
      showmsg('Please enter a valid email address.');
      return;
    }

    //  MOb_No Validateor
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
      event.preventDefault();
      showmsg('Please enter a valid phone number.');
      return;
    }
    // pass validator
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
    if (!passwordPattern.test(password)) {
      showmsg('Password too weak! It should be at least 8 characters long, include an uppercase letter, a number, and a special character.');
      return;
    }
    function showmsg(message) {
        const msg = document.createElement('div');
        msg.className = 'msg';
        msg.innerText = message;
        document.body.appendChild(msg);

        setTimeout(() => {
          msg.remove();
        }, 3000);
      }

  });