import axios from 'axios'
import { useState } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {updateLoginSuccess,updateRegSuccess} from '../userslice'
import { useNavigate } from 'react-router-dom';
function Register(){
    const regData=useSelector((state)=>state.user.register)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    
    const checkRegister=()=>{
        axios(
            {
                method:"post",
                url:"http://agaram.academy/api/action.php?request=create_candidate",
                Data:{
                    name:regData.name,
                    email:regData.email,
                    password:regData.password,
                }

                
            }
        ).then(response=>{console.log(response.config.Data)
        navigate("/login")
        })
    }
    
    return(
        <>
        {JSON.stringify(regData)}
        <h1>Register Here</h1>
        <label>Name:</label>
        <input type="text" defaultValue={regData.name} onKeyUp={(e)=>dispatch(updateRegSuccess({...regData,name : e.target.value}))}/>
        <label>Email:</label>
        <input type="text" defaultValue={regData.email} onKeyUp={(e)=>dispatch(updateRegSuccess({...regData,email : e.target.value}))}/>
        <label>Password:</label>
        <input type="text" defaultValue={regData.password} onKeyUp={(e)=>dispatch(updateRegSuccess({...regData,password : e.target.value}))}/>
        <button type="button" onClick={()=>checkRegister()}>REGISTER</button>
        </>
    )
}
export default Register;