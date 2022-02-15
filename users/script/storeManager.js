function saveUser(user){
    console.log(user);//this is the obj
    let val=JSON.stringify(user);//parse into JSON string
    console.log(val);//this is the string in JSON
    localStorage.setItem("users",val);//send it to the localstorage

 
}
function readUser(){

}

