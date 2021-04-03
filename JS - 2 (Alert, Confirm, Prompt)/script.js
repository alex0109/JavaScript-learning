// ALERT

alert("Alert is working !");

// CONFIRM

// var data = confirm("How are you?");
// console.log(data); //true

if(confirm("How are you?")) {
  alert("Fine, its great!");
} else {
  alert("Smth wrong?");
}

// PROMPT

var data1 = prompt("Say, how old are you?", 1);
console.log(data1);
