// USING FIREBASE


const firebaseConfig = {
    apiKey: "AIzaSyBKDk3LiMJRd8l8XNofNSFoV0sF1VnjftY",
    authDomain: "myregister-b3d2d.firebaseapp.com",
    databaseURL: "https://myregister-b3d2d-default-rtdb.firebaseio.com",
    projectId: "myregister-b3d2d",
    storageBucket: "myregister-b3d2d.appspot.com",
    messagingSenderId: "1041594331785",
    appId: "1:1041594331785:web:27b1b0bbb9937bbb900c58"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.database()

var dataRef = db.ref("registeredUsers");

var auth = firebase.auth();
console.log(auth)


// note: if instant delete from window page- call required function at the end of the working function:
// click login button- go to login page
function loginCheck() {
    let user_detail = document.getElementById("email").value
    let password = document.getElementById("password").value
    dataRef.once('value')
        .then(function (snapshot) {
            let data = snapshot.val();
            console.log(data);
            if (data) {
                for (i = 0; i < data.length; i++) {

                    if ((data[i].email == user_detail) && (data[i].password == password)) {
                        alert("login successfully")
                        localStorage.setItem("loggedin", true)
                        localStorage.setItem("logname", data[i].name)
                        window.location = "newhome.html";
                    }
                }
            }
        })
}

function logout() {
    localStorage.removeItem("loggedin")
    window.location = "newlogin.html"
}

// if refresh- username should be show
function loggedIn() {
    if (localStorage.getItem("loggedin")) {
        let login_name = localStorage.getItem("logname")
        document.getElementById("para").innerHTML = `<span> WELCOME ${login_name}</span>`
        reg_users()
    }
}

// click register button-go to registration page
function registration() {
    window.location = "newregister.html"
}

// add new user details in local storage 


function checkregister() {
    
    let reg_name = document.getElementById("username").value
    let reg_email = document.getElementById("useremail").value
    let reg_password = document.getElementById("userpassword").value

    let reg_data = {
        name: reg_name,
        email: reg_email,
        password: reg_password,
    }

    dataRef.once('value')
        .then(function (snapshot) {
            let data = snapshot.val();
            console.log(data);
            if (data) {
                data.push(reg_data);
                db.ref('registeredUsers').set(data);
            }
            else {
                db.ref(`registeredUsers/${0}`).set(reg_data);
            }
        })
}


// add new user details in table(dynamic)
function reg_users() {
    // console.log('reg_user called');
    dataRef.once('value')
        .then(function (snapshot) {
            // console.log('yes inside');
            let data = snapshot.val();
            let htmldata = "";
            for (var i = 0; i < data.length; i++) {
                htmldata = htmldata + `<tr>
                <td>${data[i].name}</td>
                <td>${data[i].email}</td>
                <td id="textname"><button id="regedit" type="button" onclick="edit('${data[i].name}')">&#9998</button></td>
                <td> <button id="delete" type="button" onclick="regdel('${data[i].name}')">&#128465</button></td>
            </tr>`
            }
            document.getElementById("tbody").innerHTML = htmldata
        })
}

// click delete icon -delete in table and local storage
function regdel(a) {
    dataRef.once('value')
        .then(function (snapshot) {
            let data = snapshot.val();
            console.log(data)
            let newdata = [];
            for (let i = 0; i < data.length; i++) {
                if (data[i].name != a) {
                    newdata.push(data[i])
                }
            }
            db.ref('registeredUsers').set(newdata)
            reg_users()
        })

}

// click pencil icon-edit userdetails in table and local storage
function edit(b) {
    dataRef.once('value')
        .then(function (snapshot) {
            let data = snapshot.val();
            console.log(data)
            for (let i = 0; i < data.length; i++) {
                if (data[i].name == b) {
                    let edit_name = data[i].name;
                    let edit_email = data[i].email;
                    let edit_pass = data[i].password;

                    let nameinput = prompt("Enter the new email", edit_name.innerHTML)
                    let emailinput = prompt("Enter the  new name", edit_email.innerHTML)
                    let passinput = prompt("Enter the new password", edit_pass.innerHTML)

                    let edit_data = []
                    if (data) {
                        edit_data = data
                    }
                    edit_data.push({
                        name: nameinput,
                        email: emailinput,
                        password: passinput,
                    }
                    )

                    db.ref("registeredUsers").set(edit_data)
                    regdel(b)
                }

            }
        }
        )
}

// if logout homepage should be hide in browser(secure home page)

function secure() {
    //  or if(localStorage.getItem("loggedin")!="true")
    if (!localStorage.getItem("loggedin")) {
        window.location = "newlogin.html"
    }
}



