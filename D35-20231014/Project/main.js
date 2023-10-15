
function checkregister() {
    let name = $('#regname').val()
    let email = $('#regemail').val()
    let password = $('#regpassword').val()
    let aadhar = $('#regaadhar').val()
    let address = $('#regaddress').val()
    let phone = $('#regphone').val()
    let city = $('#regcity').val()
    let area = $('#regarea').val()
    let pin = $('#regpin').val()
    $.ajax(
        {
            type: "POST",
            url: "http://agaram.academy/api/action.php",
            data: {
                "request": "create_candidate",
                "name": name,
                "email": email,
                "password": password,
                "aadhar": aadhar,
                "address": address,
                "phone": phone,
                "city": city,
                "area": area,
                "pin": pin,
            },
            success: function (response) {
                console.log('response', response)
                window.location="login.html"
            },
            error: function (err) {
                console.log('error', err)
            }
        }
    )

}
function checklogin(){
    let logemail = $('#loginemail').val()
    let logpassword = $('#loginpassword').val()
    $.ajax(
        {
            type: "POST",
            url: "http://agaram.academy/api/action.php",
            data: {
                "request": "candidate_login",
                "email":logemail,
                "password":logpassword,
            },
            success: function (response) {
                console.log('response', response)
                window.location="list.html"
            },
            error: function (err) {
                console.log('error', err)
            }
        }
    )

}
function getdata(){
    $.ajax(
        {
            type: "GET",
            url: "http://agaram.academy/api/action.php",
            data: {
                "request": "getAllMembers",
            },
            success: function (response) {
                console.log('response', response)
                let dat=JSON.parse(response)
                let da=dat.data
                console.log(da)
                let data="";
                for(let i=0;i<da.length;i++){
                    data=data+`<tr>
                    <td>${da[i].id}</td>
                    <td>${da[i].name}</td>
                    <td>${da[i].email}</td>
                    <td>${da[i].aadhar}</td>
                    <td>${da[i].address}</td>
                    <td>${da[i].phone}</td>
                    <td>${da[i].city}</td>
                    <td>${da[i].area}</td>
                    <td>${da[i].pin}</td>

                    </tr>`
                }
                $('#tbody').html(data)
            },
            error: function (err) {
                console.log('error', err)
            }
        }
    )

}



