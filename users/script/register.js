//create the constructor ES2015 / class

class User {
  constructor(
    email,
    password,
    first,
    last,
    age,
    address,
    phone,
    payment,
    color
  ) {
    this.email = email;
    this.password = password;
    this.fname = first;
    this.lname = last;
    this.age = age;
    this.address = address;
    this.phone = phone;
    this.payment = payment;
    this.color = color;
  }
}
//this is param
function isValid(user) {
  //return false when the user is not valid
  //return true when user is valid
  let valid = true;
  //validations
  $("input").removeClass("alert-error");
  if (user.email.length == 0) {
    //if we get here it means that email is empty
    valid = false;
    $("#txtEmail").addClass("alert-error");
    console.log("missing email");
  }
  if (user.password.length == 0) {
    valid = false;
    $("#txtPassword").addClass("alert-error");
    console.log("missing the password");
  }
  if (user.fname.length == 0) {
    valid = false;
    console.log("missing the First Name");
  }
  if (user.lname.length == 0) {
    valid = false;
    console.log("missing the Last Name");
  }
  return valid;
}

function registerUser() {
  let email = $("#txtEmail").val();
  let password = $("#txtPassword").val();
  let first = $("#txtFirst").val();
  let last = $("#txtLast").val();
  let age = $("#txtAge").val();
  let address = $("#txtAddress").val();
  let phone = $("#txtPhone").val();
  let payment = $("#selPayment").val();
  let color = $("#txtColor").val();

  let user = new User(
    email,
    password,
    first,
    last,
    age,
    address,
    phone,
    payment,
    color
  );
  console.log(user);
  if (isValid(user)) {
    saveUser(user); //this fn is in the storeManager.js
  }
}

function init() {
  console.log("Init Register");

  $("#btnRegister").click(registerUser);
}
window.onload = init;
//register user to table//

//clear table except first entry//
$(document).ready(function () {
  $("#button1").click(function () {
    $("#userList").find("tr:gt(1)").remove();
  });
});
//clear register fields//
$(document).ready(function () {
  $("#button2").click(function () {
    $("#txtEmail").val("");
    $("#txtPassword").val("");
    $("#txtFirst").val("");
    $("#txtLast").val("");
    $("#txtAge").val("");
    $("#txtAddress").val("");
    $("#txtPhone").val("");
    $("#txtselPayment").val("");
    $("#txtColor").val("");
  });
});
