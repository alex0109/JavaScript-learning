let prNum, tempOut;
prNum = Math.floor((Math.random() * 10) + 1);
console.log(prNum);

function f1(){
  let num, out;

  num = document.getElementById('mynum').value;
  out = document.getElementById('out');

  if (num == prNum) {
    out.innerHTML = 'Вы угадали!';
  }
  else if (num > prNum) {
    out.innerHTML = 'Попробуйте чуть меньше';
  }
  else {
    out.innerHTML = 'Попробуйте чуть больше';
  }
}
