
function checkAjax() {
    $.ajax(
        {
            type: "get",
            url: "https://jsonplaceholder.typicode.com/posts",
            data: {},
            success: function (response) {
                console.log('response', response)
                let tabledata = "";
                for(let i=0;i<response.length;i++){
                tabledata=tabledata + `<tr>
                <td>${response[i].id}</td>
                <td>${response[i].userId}</td>
                <td><button class="btn btn-success" type="button" onclick="findid('${response[i].id}')">${response[i].title}</button><button type="button" onclick="putdata('${response[i].id}')">PUT</button></td>
                </tr>`
            }
            $('#table_body').html(tabledata)
            },
            error: function (err) {
                console.log('error', err)
            }
        }
    )
    
}
function findid(id){
// alert(id)
    $.ajax(
    {
        type: "get",
        url: `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
        data: {},
        success: function (response) {
            console.log(response)
        },
        error: function (err) {
            console.log(err)
        }
    }
    )
}
function addpost(){
        $.ajax(
        {
            type: "post",
            url: "https://jsonplaceholder.typicode.com/posts",
            data: {
                userId:2,
                name:"gayu",
                place:"krishnancoil",
                title:"Agaram academy"
            },
            success: function (response) {
                console.log(response)
            },
            error: function (err) {
                console.log(err)
            }
        }
        )
    }

function putdata(data){
    $.ajax(
        {
            type: "put",
            url: `https://jsonplaceholder.typicode.com/posts/${data}`,
            data: {
                title:"welcome"
            },
            success: function (response) {
                console.log(response)
            },
            error: function (err) {
                console.log(err)
            }
        }
        )
}
