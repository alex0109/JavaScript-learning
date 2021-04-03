// WORK WITH IDes

var text = document.getElementById('text');

console.log(text.title);
text.title = "New text"
console.log(text.title);

text.style.color = "orange";
text.style.background = "green";

text.innerHTML = "<h1>NEW TEXT</h1>";
// document.getElementById('text').style.color = "white";

// WORK WITH CLASSES

var spans = document.getElementsByTagName('span');

for(var i = 0; i < spans.length; i++) {
  console.log(spans[i].innerHTML);
}

// WORK WITH CLASSes

var classes = document.getElementsByClassName('Simpleclass');

for(var j = 0; j < classes.length; j++) {
  console.log(classes[j].innerHTML);
}
