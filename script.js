//CALLING CONTAINERS 
let emailContainer = document.querySelector('.emailcontainer');
let thanksContainer = document.querySelector('.thankscontainer')

//CALLING BUTTONS
let emailButton = document.querySelector('.new')
let thanksButton = document.querySelector('.dismiss-btn')

//CALLING EMAIL INPUT
let emailInput = document.querySelector('.emailinput')

//CALLING ERROR
let error = document.querySelector('.error')

//CALLING CHANGING MAIL
let changingMail = document.querySelector('.dynamic-mail')


function allCodes() {
  if (emailInput.validity.valid && emailInput.value != '') {
    emailContainer.style.display = 'none';
    thanksContainer.style.display = 'flex';
    changingMail.innerText = emailInput.value;
    changingMail.style.fontWeight = '1000';
  } else {
    error.style.display = 'flex';
    emailInput.style.border = '1px solid red';
  }
}

emailInput.addEventListener('input', () => {
  emailInput.style.border = '1px solid black';
  error.style.display = 'none';
})

emailButton.addEventListener('click', () => {
  allCodes()
})

thanksButton.addEventListener('click', () =>{
  emailContainer.style.display = 'flex';
  thanksContainer.style.display = 'none';
  emailInput.value = '';
})

