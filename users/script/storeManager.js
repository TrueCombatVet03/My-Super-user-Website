

const LS_KEY="users";
function saveUser(user){
    //load the old data from local storage
    let oldData=readUsers( );
    //merge the data
    oldData.push(user);
    let val=JSON.stringify(oldData);//parse into JSON string
    
    localStorage.setItem(LS_KEY,val);//send it to the localstorage

 
}
function readUsers(){
    //get values from local storage
    let data = localStorage.getItem(LS_KEY);
    if(!data){//not users?
        return[ ];//creating array first register
    }else{
        let list=JSON.parse(data);//parse string back into obj
        return list;
    }
    
    
}

