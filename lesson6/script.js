document.getElementById('main-form').addEventListener("submit", checkForm);

function checkForm(event) {
  event.preventDefault();

  var el = document.getElementById('main-form');

  var name = el.name.value;
  var pass = el.pass.value;
  var repass = el.repass.value;
  var state = el.state.value;

  var fail = "";

  console.log(name + " - " + state + " - " + pass + " - " + repass);

  if(name == "" || pass == "" || state == "")
    fail = "Write please smth into inputs";
  else if(name.length <= 1 || name.length > 50)
    fail = "Write correct name";
  else if(pass != repass)
    fail = "Pass != RePass";
  else if(pass.split("&").length > 1)
    fail = "Uncorrect pass";

  if(fail != ""){
    document.getElementById('error').innerHTML = fail;
  } else {
    alert("All is good!")
    window.location = 'https://www.youtube.com/watch?v=1nzH6WCEonQ&ab_channel=%D0%A8%D0%BA%D0%BE%D0%BB%D0%B0itProger%2F%D0%9F%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5';
  }
}
