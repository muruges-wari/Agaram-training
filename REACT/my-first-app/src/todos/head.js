import {useState,useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Header from './header';




function Head(props){
    const navigate = useNavigate();
    let [login,setlogin]=useState({
        email:"gayu@gmail.com",
        password:12345,
    })
    useEffect(()=>{
        checklogin()
      },[])

    const checklogin=()=>{
        axios({
            method: 'post',
            url: 'http://agaram.academy/api/action.php',
            data: {
                request : "candidate_login",
                email : "jegan",
                password : 1234567890
            }
          }).then(function(response){
            console.log(response)
        })
        // if (login.email=="gayu@gmail.com" && login.password==12345){
        //     props.setlogindata({
        //         log:true,
        //         email:login.email,
        //     })
        //     navigate("/todo");
        // }
        // else{
        //     props.setlogindata(false)
        // }
    }
    
    return(
        <>
        <Header/>
        <label>Email:</label>
        <input type="text" onKeyUp={(e)=>{setlogin({
            ...login,
            email:e.target.value,
        })}}/><br/><br/>
        <label>Password:</label>
        <input type="text" onKeyUp={(e)=>{setlogin({
            ...login,
            password:e.target.value,
        })}}/><br/><br/>
        <button type="button" onClick={()=>checklogin()}>Login</button>
        </>
    )
}

export default Head;