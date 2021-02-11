import '../css/style.css';

function fieldValidationName(element) {
  let checkErorr = true;
  if (!isFilled(element.value)) {
  checkErorr = false;
  element.style['boxShadow'] = 'inset 0 -1px 0 red';
  return -1;
  }
  if (isNumber(element.value)) {
  checkErorr = false;
  element.style['boxShadow'] = 'inset 0 -1px 0 red';
  return 1;
  }
  if (!checkErorr) {
  } else {
  element.style['boxShadow'] = 'inset 0 -1px 0 rgba(199, 199, 199, 0.3)';
    return 0;
  }
  console.log(element.value.length);
  }
  function emailValidation(email) {
    let checkErorr = true;
    if (!isFilled(email.value)) {
      checkErorr = false;
      email.style['boxShadow'] = 'inset 0 -1px 0 red';
      return -1;
    }
    if (!isEmail(email.value)) {
      checkErorr = false;
      email.style['boxShadow'] = 'inset 0 -1px 0 red';
      return 1;
    }
    if (!checkErorr) {
    } else {
    email.style['boxShadow'] = 'inset 0 -1px 0 rgba(199, 199, 199, 0.3)';
      return 0;
    }
  }
  function passwordValidation(password) {
    let checkErorr = true;
    if (!isFilled(password.value)) {
      checkErorr = false;
      password.style['boxShadow'] = 'inset 0 -1px 0 red';
      return -1;
    }
    if (password.value.length < 6) {
      checkErorr = false;
      password.style['boxShadow'] = 'inset 0 -1px 0 red';
      return 1;
    }
    if (!checkErorr) {
    } else {
    password.style['boxShadow'] = 'inset 0 -1px 0 rgba(199, 199, 199, 0.3)';
      return 0;
    }
  }
  function isFilled(element) {
    if (element.length <= 0) {
      return false;
    }
    return true;
  }
  function isNumber(element) {
    if (element.match(/[0-9]+/) !== null) {
      return true;
    }
    return false;
  }
  function isEmail(email) {
    console.log(email);
    if (email.match(/^[\w-.]+@[\w-]+.[a-z]{2,4}$/) !== null) {
      return true;
    }
    return false;
  }
  
  var registrationButton = document.querySelector('#form-registration__button');
  
  registrationButton.onclick = function () {
    let name = document.querySelector('#name');
    let lastName = document.querySelector('#last-name');
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');
    if(fieldValidationName(name) === 0) {
    document.getElementById('form-registration__item__error-name__empty').style.visibility = "hidden";
    document.getElementById('form-registration__item__error-name__input').style.visibility = "hidden";
    }
    else if(fieldValidationName(name) === 1) {
      document.getElementById('form-registration__item__error-name__empty').style.visibility = "hidden";
      document.getElementById('form-registration__item__error-name__input').style.visibility = "visible";
    }
    else{
      document.getElementById('form-registration__item__error-name__empty').style.visibility = "visible"; 
      document.getElementById('form-registration__item__error-name__input').style.visibility = "hidden";     
    }
    if(fieldValidationName(lastName) === 0) {
      document.getElementById('form-registration__item__error-last-name__empty').style.visibility = "hidden";
      document.getElementById('form-registration__item__error-last-name__input').style.visibility = "hidden";
      }
      else if(fieldValidationName(lastName) === 1) {
        document.getElementById('form-registration__item__error-last-name__empty').style.visibility = "hidden";
        document.getElementById('form-registration__item__error-last-name__input').style.visibility = "visible";
      }
      else{
        document.getElementById('form-registration__item__error-last-name__empty').style.visibility = "visible"; 
        document.getElementById('form-registration__item__error-last-name__input').style.visibility = "hidden";     
      }
      if(emailValidation(email) === 0) {
        document.getElementById('form-registration__item__error-email__empty').style.visibility = "hidden";
        document.getElementById('form-registration__item__error-email__input').style.visibility = "hidden";
        }
        else if(emailValidation(email) === 1) {
          document.getElementById('form-registration__item__error-email__empty').style.visibility = "hidden";
          document.getElementById('form-registration__item__error-email__input').style.visibility = "visible";
        }
        else{
          document.getElementById('form-registration__item__error-email__empty').style.visibility = "visible"; 
          document.getElementById('form-registration__item__error-email__input').style.visibility = "hidden";     
        }
        if(passwordValidation(password) === 0) {
          document.getElementById('form-registration__item__error-password__empty').style.visibility = "hidden";
          document.getElementById('form-registration__item__error-password__input').style.visibility = "hidden";
          }
          else if(passwordValidation(password) === 1) {
            document.getElementById('form-registration__item__error-password__empty').style.visibility = "hidden";
            document.getElementById('form-registration__item__error-password__input').style.visibility = "visible";
          }
          else{
            document.getElementById('form-registration__item__error-password__empty').style.visibility = "visible"; 
            document.getElementById('form-registration__item__error-password__input').style.visibility = "hidden";     
          }
  };