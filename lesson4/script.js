var counter = 0;

// FIRST FUNCTION

function onClickBtn(el) {
  counter++;
  el.innerHTML = "You press me: " + counter;
  
  // el.style.color = "red";

  el.style.cssText = "border-radius: 5px; border: 0; font-size: 20px;"

  console.log(el.name);
}

// SECOND FUNCTION

function onInput(el) {
  if(el.value == "Hello")
    alert("Hello bud!");

  console.log(el.value);
}
