import Table from 'react-bootstrap/Table';
import {useState} from 'react';
import Addtodo from './form';
import Header from './header';

function Todo(props){
    let [todos,setTodos]=useState(["apple","orange"])
    const del=(s)=>{
        let updatedTodo=todos.filter((v)=>v!=s)
        setTodos(updatedTodo)
    }
    return(
        <>
        {props.islogin.log?<h4>WELCOME {props.islogin.email}</h4>:"not"}
        <Header/>
        <Table striped bordered hover>
            <tr>
                <th>Order</th>
                <th>Items</th>
                <th>Delete</th>
            </tr>
            {todos.map((t,i)=>(
                <tr>
                    <td>{i+1}</td>
                    <td>{t}</td>
                    <td><button type="button" onClick={()=>del(t)}>x</button></td>
                </tr>
            ))}
        </Table>
        <Addtodo settodo={setTodos} tod={todos}/>
        
        </>
    )
}
export default Todo;