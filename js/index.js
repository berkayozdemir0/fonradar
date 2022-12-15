const togglePassword = 
        document.querySelector('#togglePassword');
          
    const password = document.querySelector('#fnumber');
  
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





// input validation start

    function check () {
        // (C1) INIT
        var valid = true, error = "", field = "";
      
        // (C2) NAME
        field = document.getElementById("fname");
        error = document.getElementById("cname");
        if (!field.checkValidity()) {
          valid = false;
          field.classList.add("err");
          error.innerHTML = "Lütfen e posta adresinizi giriniz\r\n";
        } else {
          field.classList.remove("err");
          error.innerHTML = "";
        }
      
        // (C3) NUMBER
        field = document.getElementById("fnumber");
        error = document.getElementById("fpassword");
        if (!field.checkValidity()) {
          valid = false;
          field.classList.add("err");
          error.innerHTML = "Lütfen şifrenizi giriniz\r\n";
        } else {
          field.classList.remove("err");
          error.innerHTML = "";
        }
      
        // (C4) RESULT
        return valid;
      }
    //   input validation finish

    // input rediretc start 
    window.addEventListener("load", function() { // when the page has loaded
        document.getElementById("myForm").addEventListener("submit", function(e) { // passing the event
          e.preventDefault(); // you do not want to let the form submit because you handle the nex page 
          const username = document.getElementById('fname').value;
          const password = document.getElementById('fpassword').value;
      
          if (username === "berkay" && password === 'berkay') {
            // alert('You have sucessfully logged in');
            window.location.href = "http://fonradar.com";
          } else {
            alert('Wrong username or password');
          }
        })
      })
    //   input redirect finish 