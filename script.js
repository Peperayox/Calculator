const buttons = document.querySelectorAll('button');
let down = '';
let up = '';
let ans = '';
let var1 = '';
let var2 = '';

buttons.forEach((button) => {
  button.addEventListener('click', onClick);
});

function onClick() {
  switch (this.id) {
    case 'clear':
      _clear();
      console.log('clearnigger');
      break;
    case 'delete':
      _delete();
      console.log('nignog delete');
      break;
    case 'x':
    case '+':
    case '-':
    case '÷':
      operator();
      console.log('x nigger');
      break;
    case '=':
      console.log('igual funciona');
      break;
    default:
      down += this.id;
  }
}
function _clear() {
  down = '';
}
function _delete() {
  if (down) {
    down = down.substring(0, down.length - 1);
  }
}
function operator() {
  up = down;
  down = '';
}
function mul() {
  return var1 * var2;
}
function div() {
  return Math.round((var1 / var2) * 100000) / 100000;
}
function sum() {
  return var1 + var2;
}
function minus() {
  return var1 - var2;
}
