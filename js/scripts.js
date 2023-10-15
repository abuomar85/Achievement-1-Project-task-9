(function() {
    let form = document.querySelector('#register-form');
    let emailInput = document.querySelector('#email');
    let messageInput = document.querySelector('#message');
    
    function validateEmail() {
      let value = emailInput.value;
      if(!value) {
        showErrorMessage(emailInput, 'Email is a required field');
        return false;
      }
      if(value.indexOf('@') === -1) {
        showErrorMessage(emailInput, ' You must enter a valid email address.');
        return false;
      }
      if(value.indexOf('.') === -1) {
        showErrorMessage(emailInput, ' You must enter a valid email address.');
        return false;
      }
      showErrorMessage(emailInput, null); 
      return true;
    }
    
    function validateMessage() {
      let value = messageInput.value;

      if(!value) {
        showErrorMessage(messageInput, 'Message is required');
        return false; 
      }
      
      if(value.length < 10){
        showErrorMessage(messageInput, ' The message needs to be at least 10 charchter');
        return false;
    }
    showErrorMessage(messageInput, null);
    return true;
    }

    function showErrorMessage(input, message) {
        let container = input.parentElement;

        let error = container.querySelector('.error-message');
        if(error) {
            container.removeChild(error);
        }
        // add the error if the message isn't empty
        if(message) {
            let error = document.createElement('div');
            error.classList.add('error-message');
            error.innerText = message;
            container.appendChild(error);
        }
    }
    
    function validateForm() {
        let isValidEmail = validateEmail();
        let isValidMessage = validateMessage();

      return isValidEmail && isValidMessage;
    }
    
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // Do not submit to the server
      if (validateForm()) {
        alert('Success!');
      }
    });

    emailInput.addEventListener('input', validateEmail);
    messageInput.addEventListener('input', validateMessage);
  
    // THE RETURN STATEMENT HERE
  })();