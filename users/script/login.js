function login() {
  console.log("Execute login function");
  let username = $("#txtUsername").val();
  let password = $("#txtPassword").val();



  let users = readUsers();
  let flag=false;

  for (let i = 0; i < users.length; i++) {
    if (username === users[i].email && password === users[i].password) {
      console.log("I found it");
      flag=true;
      window.location="home.html";
    }
  }
  if(!flag){
        console.log("Invalid credentials");
        $("#alertError").removeClass("hide");
        setTimeout(function(){
        $("#alertError").addClass("hide");
        },3000);
  }
}

function init() {
  console.log("Login script");
  $("#btnLogin").click(login);
}

window.onload = init;
