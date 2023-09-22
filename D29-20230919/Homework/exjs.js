// note: if instant delete from window page- call required function at the end of the working function:


// click login button- go to login page
function loginCheck(){
    let login_email=document.getElementById("email").value;
    let login_password=document.getElementById("password").value;
        
    let check=JSON.parse(localStorage.getItem("userDetails"));
    for(var i=0;i<check.length;i++){
        
        if(login_email==check[i].email && login_password==check[i].password){
           
            localStorage.setItem("loggedin",true)
            localStorage.setItem("username",check[i].name)

            login.style.display="none";
            home=document.getElementById("home")
            home.style.display="inline"
            first.style.display="none"
            register.style.display="none"
            table.style.display="none"
        
            document.getElementById("para").innerHTML=`<span> WELCOME ${check[i].name}`
            reg_users()
        }
    }
    
}
// click logout button- shows login page
function logout(){
    login.style.display="block";
    home.style.display="none"
    first.style.display="none"
    register.style.display="none"
    registered_users.style.display="none"
    table.style.display="none"
}

// if refresh- username should be show
function loggedIn(){
    if(localStorage.getItem("loggedin")){
    login.style.display="none"
    home.style.display="block"
    first.style.display="none"
    register.style.display="none"
    registered_users.style.display="none"
    table.style.display="none"
    let login_name=localStorage.getItem("username")
    document.getElementById("para").innerHTML=`<span> WELCOME ${login_name}</span>`
    reg_users()
}
}

// click register button-go to registration page
function registration(){
    register=document.getElementById("register")
    login.style.display="none";
    home.style.display="none";
    first.style.display="none";
    register.style.display="block";
    registered_users.style.display="none"
    table.style.display="none"

}

// add new user details in local storage 
function checkregister(){
    let reg_name=document.getElementById("username").value
    let reg_email=document.getElementById("useremail").value
    let reg_pass=document.getElementById("userpassword").value
    let parsedata=[]
    if(localStorage.getItem("userDetails")){
        parsedata=JSON.parse(localStorage.getItem("userDetails"))
        }
    parsedata.push({
        name:reg_name,
        email:reg_email,
        password:reg_pass,
})
localStorage.setItem("userDetails",JSON.stringify(parsedata))
}

// add new user details in table(dynamic)
function reg_users(){
    login.style.display="none";
    home.style.display="block";
    first.style.display="none";
    register.style.display="none";
    registered_users.style.display="none"
    hide.style.display="block"
    table.style.display="block"
        parsedata=JSON.parse(localStorage.getItem("userDetails"))
        let htmldata="";
        for(var i=0;i<parsedata.length;i++){
            htmldata=htmldata+ `<tr>
            <td>${parsedata[i].name}</td>
            <td>${parsedata[i].email}</td>
            <td id="textname"><button id="regedit" onclick="edit('${parsedata[i].name}')">&#9998</button></td>
            <td><button id="delete" onclick="regdel('${parsedata[i].name}')">&#128465</button></td>
            </tr>`
        }
        document.getElementById("tbody").innerHTML=htmldata
        localStorage.setItem("userDetails",JSON.stringify(parsedata))

}

// click delete icon -delete in table and local storage
function regdel(a){
    let par=JSON.parse(localStorage.getItem("userDetails"))
    let newdata=[]
    for(let i=0;i<par.length;i++){
        if(par[i].name!=a){
            newdata.push(par[i])
        }
    }
    localStorage.setItem("userDetails",JSON.stringify(newdata))
    reg_users()
}

// click pencil icon-edit userdetails in table and local storage
function edit(b){
    let pars=JSON.parse(localStorage.getItem("userDetails"))
    for(let i=0;i<pars.length;i++){
        if(pars[i].name==b){
            let edit_name=pars[i].name;
            let edit_email=pars[i].email;
            let edit_pass=pars[i].password;

            let nameinput=prompt("Enter the new email",edit_name.innerHTML)
            let emailinput=prompt("Enter the  new name",edit_email.innerHTML)
            let passinput=prompt("Enter the new password",edit_pass.innerHTML)

            let edit_data=[]
            if(localStorage.getItem("userDetails")){
                edit_data=JSON.parse(localStorage.getItem("userDetails"))
            }
            edit_data.push({
                name:nameinput,
                email:emailinput,
                password:passinput,
            })
            localStorage.setItem("userDetails",JSON.stringify(edit_data))
            regdel(b)
        }
    }
}




