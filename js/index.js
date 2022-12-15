const togglePassword = 
        document.querySelector('#togglePassword');
          
    const password = document.querySelector('#id_password');
  
    togglePassword.addEventListener('click', function (e) {
  
        // Toggle the type attribute
        const type = password.getAttribute(
            'type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
  
        // Toggle the eye slash icon
        if (togglePassword.src.match(
            src = 'images/eye-show.png')) {
            togglePassword.src =
"images/eye-hidden.png";
        } else {
            togglePassword.src =
"images/eye-show.png";
        }
    });