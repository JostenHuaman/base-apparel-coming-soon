document.getElementById('form').addEventListener('submit', function(event){
    var emailInput = document.getElementById('emailInput');
    var emailError = document.getElementById('emailError');
    var emailValue = emailInput.value;
    var emailAlert = document.getElementById('emailAlert');


    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(emailValue)){
        emailError.style.display = 'block';
        emailAlert.style.display = 'block';
        emailInput.style.border = '1px solid red';
        event.preventDefault();
    }

})