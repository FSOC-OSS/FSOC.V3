document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Email validator
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      showmsg('Please enter a valid email address');
      return;
    }

    // pass validator
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
    if (!passwordPattern.test(password)) {
      showmsg('Password too weak! It should be at least 8 characters long, include an uppercase letter, a number, and a special character.');
      return;
    }


    showmsg('Login successful!');
  });


  function showmsg(message) {
    const msg = document.createElement('div');
    msg.className = 'msg';
    msg.innerText = message;
    document.body.appendChild(msg);

    setTimeout(() => {
      msg.remove();
    }, 3000);
  }