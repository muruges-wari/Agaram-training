// USING FIREBASE AUTHENTICATION


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
// console.log(auth)


// note: if instant delete from window page- call required function at the end of the working function:
// click login button- go to login page
function loginCheck() {
    let user_detail = document.getElementById("email").value
    let password = document.getElementById("password").value
    let login_name = document.getElementById("loginname").value
    auth.signInWithEmailAndPassword(user_detail, password)
        .then((userCredential) => {
            alert("login successfully")

            var user = auth.currentUser;
            var userid = user.uid;
            console.log(userid)
            let details = {
                username: login_name,
                useremail: user_detail,
                loggedin: true,
            }
            db.ref('registeredUsers/' + userid).set(details)

            window.location = "newhome.html"
            // console.log(userCredential)
        })
        .catch((error) => {
            console.log(error.code)
            console.log(error.message)
        });

}

function logout() {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            var userid = user.uid;
            db.ref(`registeredUsers/${userid}`).once('value')
                .then(function (snapshot) {
                    var data = snapshot.val();
                    if (data.loggedin == true) {
                        let log = {
                            loggedin: false,
                        }
                        db.ref(`registeredUsers/` + userid).set(log)
                        window.location = "newlogin.html"
                    }
                })
        }
    });

}

// if refresh- username should be show
function loggedIn() {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            var userid = user.uid;
            db.ref(`registeredUsers/${userid}`).once('value')
                .then(function (snapshot) {
                    var data = snapshot.val();
                    if (data.loggedin == true) {
                        document.getElementById("para").innerHTML = data.username
                        reg_users()
                    }
                })
        }
    });
}

// click register button-go to registration page
function registration() {
    window.location = "newregister.html"
}

// add new user details in local storage 


function checkregister() {

    console.log('call');
    // console.log('register function called');
    let reg_name = document.getElementById("username").value
    let reg_email = document.getElementById("useremail").value
    let reg_password = document.getElementById("userpassword").value
    auth.createUserWithEmailAndPassword(reg_email, reg_password)
        .then((userCredential) => {
            alert("Registered sucessfully")
            console.log(userCredential)
        })
        .catch((error) => {
            console.log(error.code)
            console.log(error.message)
        });


}

// add new user details in table(dynamic)
function reg_users() {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            var userid = user.uid;
            db.ref(`registeredUsers/${userid}`).once('value')
                .then(function (snapshot) {
                    let data = snapshot.val();
                    console.log(data)
                    let htmldata = "";
                    htmldata = htmldata + `<tr>
                    <td>${data.username}</td>
                    <td>${data.useremail}</td>
                    <td id="textname"><button id="regedit" type="button" onclick="edit('${data.username}')">&#9998</button></td>
                    <td> <button id="delete" type="button" onclick="regdel('${data.username}')">&#128465</button></td>
                    </tr>`
                    document.getElementById("tbody").innerHTML = htmldata

                })
        }
    }
    )
};



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
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            var userid = user.uid;
            db.ref(`registeredUsers/${userid}`).once('value')
                .then(function (snapshot) {
                    var data = snapshot.val();
                    if (data.loggedin == false) {
                        window.location = "newfront.html"
                    }
                })
        }
    });


}
function logoutbutton() {
    window.location = "newlogin.html"
}


