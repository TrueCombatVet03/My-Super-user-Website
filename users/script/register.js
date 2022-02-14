//create the constructor ES2015 / class

class User{
    constructor(email,password,first,last,age,address,phone,payment,color){
        this.email=email;
        this.password=password;
        this.fname=first;
        this.lname=last;
        this.age=age;
        this.address=address;
        this.phone=phone;
        this.payment=payment;
        this.color=color;
    }
}

function registerUser(){
    let email = $("#txtEmail").val();
    let password = $("#txtPassword").val();
    let first = $("#txtFirst").val();
    let last = $("#txtLast").val();
    let age = $("#txtAge").val();
    let address = $("#txtAddress").val();
    let phone = $("#txtPhone").val();
    let payment = $("#selPayment").val();
    let color = $("#txtColor").val();

    let user = new User(email,password,first,last,age,address,phone,payment,color);
    console.log(user);
       
}

function init(){
    console.log("Init Register");
    
    $("#btnRegister").click(registerUser);
    
}
window.onload=init;





$(document).ready(function () {
    $("#btnRegister").click(function () {
  
        $("#myTable").append(`
        <td>
            <td>${$("#txtEmail").val()}</td>
            <td>${$("#txtPassword").val()}</td>
            <td>${$("#txtFirst").val()}</td>
            <td>${$("#txtLast").val()}</td>
            <td>${$("#txtAge").val()}</td>
            <td>${$("#txtAddress").val()}</td>
            <td>${$("#txtPhone").val()}</td>
            <td>${$("#txtselPayment").val()}</td>
            <td>${$("#txtColor").val()}</td>
        </td>`)
    });
  });