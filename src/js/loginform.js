var name = document.forms["form"]["name"];
var password = document.forms["form"]["password"];

name.addEventListener("textInput", name_Verify);
password.addEventListener("textInput", pass_Verify);

function validated() {
  if (name.value.length < 9) {
    name.style.border = "1px solid red";
    name_error.style.display = "block";
    name.focus();
    return false;
  }
  if (password.value.length < 6) {
    password.style.border = "1px solid red";
    pass_error.style.display = "block";
    password.focus();
    return false;
  }
}
function email_Verify() {
  if (name.value.length >= 8) {
    name.style.border = "1px solid green";
    name_error.style.display = "none";
    return true;
  }
}
function pass_Verify() {
  if (password.value.length >= 5) {
    password.style.border = "1px solid green";
    pass_error.style.display = "none";
    return true;
  }
}
