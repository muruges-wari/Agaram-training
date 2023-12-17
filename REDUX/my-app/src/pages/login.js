import axios from 'axios'
import { useState,useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { updateLoginSuccess,guestUser } from '../userslice'

function Login(){
    const registerdata=useSelector((state)=>state.user.register)
    const user=useSelector((state)=>state.user.guestuser)
    const logindata=useSelector((state)=>state.user.login)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    

    useEffect(()=>{
        if(localStorage.getItem("login")==true){
            navigate("/home")
        }
    },[])
    
    const checkLogin=()=>{
        axios({
            method:"post",
            url:`http://agaram.academy/api/action.php?request=candidate_login&email=${logindata.email}&password=${logindata.password}`,
        }).then(function(response){console.log(response.data.data)
            localStorage.setItem("login",true)
                if(localStorage.getItem("guest")){
                    localStorage.removeItem("guest")
                    navigate(`${user}`)
            }
            else{
                navigate("/home")
            }
        
        })
        
    }
    return(
        <>
        {user}
        {JSON.stringify(logindata)}
        {JSON.stringify()}
        <h1>Login Here</h1>
        <label>Email:</label>
        <input type="text" defaultValue={logindata.email} onKeyUp={(e)=>dispatch(updateLoginSuccess({...logindata,email : e.target.value}))}/>
        <label>Password:</label>
        <input type="text" defaultValue={logindata.password} onKeyUp={(e)=>dispatch(updateLoginSuccess({...logindata,password : e.target.value}))}/>
        <button type="button" onClick={()=>checkLogin()}>LOGIN</button>
        </>
    )
}
export default Login;