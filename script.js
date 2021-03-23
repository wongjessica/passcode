let code1 = document.querySelector('#code1');
let code2 = document.querySelector('#code2');
let code3 = document.querySelector('#code3');
let code4 = document.querySelector('#code4');
let switchBtn = document.querySelector('input[type="button"]');

function checkForm() {
  if(form.code1.value === '21' && form.code2.value === '34' && form.code3.value === '55' && form.code4.value === '89') {
    alert("Congrats! You completed the game.");
    return false;
  }
  else {
    alert("Sorry: Wrong Code, Try Again");
    return false;
  }
}