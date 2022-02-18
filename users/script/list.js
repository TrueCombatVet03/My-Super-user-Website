function createRow(usersArray){
    for(let i=0;i<usersArray.length;i++){
        let user = usersArray[i];
        let tmp=`
        <tr>
            <td class="table-primary">${user.email}</td>
            <td class="table-secondary" >${user.password}</td>
            <td class="table-success" >${user.fname}</td>
            <td class="table-danger">${user.lname}</td>
            <td class="table-warning">${user.age}</td>
            <td class="table-info" >${user.address}</td>
            <td class="table-light" >${user.phone}</td>
            <td class="table-danger" >${user.payment}</td>
            <td class="table-light" >${user.color}</td>
        </tr>
        `;
        $("#userList").append(tmp);
        
    }
}
function init(){
    console.log("Listing");
    let users=readUsers( );
    createRow(users);

}
window.onload=init;
