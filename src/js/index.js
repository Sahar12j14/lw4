import '../css/style.css';

function validationName(element) {
  let checkErorr = true;
  if (!isFilled(element.value)) {
    checkErorr = false;
    element.classList.add('form-registration__input__error');
    return {
      errCode: -1,
      errMessage: 'Expected input name'
    };
  }
  if (isNumber(element.value)) {
    checkErorr = false;
    element.classList.add('form-registration__input__error');
    return {
      errCode: 1,
      errMessage: 'Name must not contain numbers'
    };
  }
  if (!checkErorr) {
  } else {
    element.classList.remove('form-registration__input__error');
    return {
      errCode: 0
    };
  }
  console.log(element.value.length);
}
function emailValidation(email) {
  let checkErorr = true;
  if (!isFilled(email.value)) {
    checkErorr = false;
    email.classList.add('form-registration__input__error');
    return {
      errCode: -1,
      errMessage: 'Expected input email'
    };
  }
  if (!isEmail(email.value)) {
    checkErorr = false;
    email.classList.add('form-registration__input__error');
    return {
      errCode: 1,
      errMessage: 'Incorrect email format'
    };
  }
  if (!checkErorr) {
  } else {
    email.classList.remove('form-registration__input__error');
    return {
      errCode: 0
    };
  }
}
function passwordValidation(password) {
  let checkErorr = true;
  if (!isFilled(password.value)) {
    checkErorr = false;
    password.classList.add('form-registration__input__error');
    return {
      errCode: 1,
      errMessage: 'Expected input password '
    };
  }
  if (password.value.length < 6) {
    checkErorr = false;
    password.classList.add('form-registration__input__error');
    return {
      errCode: -1,
      errMessage: 'Password must be more than 6 characters'
    };
  }
  if (!checkErorr) {
  } else {
    password.classList.remove('form-registration__input__error');
    return {
      errCode: 0
    };
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
  const name = document.querySelector('#name');
  const lastName = document.querySelector('#last-name');
  const email = document.querySelector('#email');
  const password = document.querySelector('#password');
  if (validationName(name).errCode !== 0) {
    document.getElementById('form-registration__item__error-name').innerHTML=validationName(name).errMessage;
  } else {
    document.getElementById('form-registration__item__error-name').innerHTML='';
  }
  if (validationName(lastName).errCode !== 0) {
    document.getElementById('form-registration__item__error-last-name').innerHTML=validationName(lastName).errMessage;
  } else {
    document.getElementById('form-registration__item__error-last-name').innerHTML='';
  }
  if (emailValidation(email).errCode !== 0) {
    document.getElementById('form-registration__item__error-email').innerHTML=emailValidation(email).errMessage;
  } else {
    document.getElementById('form-registration__item__error-email').innerHTML='';
  }
  if (passwordValidation(password).errCode !== 0) {
    document.getElementById('form-registration__item__error-password').innerHTML=passwordValidation(password).errMessage;
  } else {
    document.getElementById('form-registration__item__error-password').innerHTML='';
  }
};
