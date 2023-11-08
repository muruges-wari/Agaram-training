import Table from 'react-bootstrap/Table';
import {useState} from 'react';
import Addtodo from './form';
import Header from './header';
import axios from 'axios';

function User(){
    let [users,setusers]=useState(["gayu","muru"])
    const del=(s)=>{
        let updatedTodo=users.filter((v)=>v!=s)
        setusers(updatedTodo)
    }
    const getData=()=>{
        axios({
            method: 'get',
            url: 'https://jsonplaceholder.typicode.com/posts',
          })
            .then(function (response) {
                console.log(response.data)
            });
    }
    const postData=()=>{
        axios({
            method: 'post',
            url: 'https://jsonplaceholder.typicode.com/posts',
            data: {
                "userId": 1,
                "id": 1,
                "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            }
          }).then(function (response) {
            console.log(response)
        });
          
}
    return(
        <>
        <Header/>
        <Table striped bordered hover>
            <tr>
                <th>Order</th>
                <th>Names</th>
                <th>Delete</th>
            </tr>
            {users.map((t,i)=>(
                <tr>
                    <td>{i+1}</td>
                    <td>{t}</td>
                    <td><button type="button" onClick={()=>del(t)}>x</button></td>
                </tr>
            ))}
        </Table>
        <Addtodo settodo={setusers} tod={users}/>
        <br/>
        <br/>
        <button type="button" onClick={()=>getData()}>get data</button>
        <button type="button" onClick={()=>postData()}>postdata</button>
        </>
    )
}
export default User;