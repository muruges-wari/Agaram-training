
import { useEffect,useState} from "react"
import axios from 'axios'
import { useNavigate,Link } from "react-router-dom"
import UserList from "../components/userlist"

function Home(){
    const navigate=useNavigate()
    const logout=()=>{
        localStorage.removeItem("login")
        navigate("/login") 
    }
    
    useEffect(()=>{
    //    getData()
        
    },[])
    return(
        <>
        <h1>WELCOME TO HOME</h1>
        <UserList />
        
        {localStorage.getItem("login")?<button type="button" onClick={()=>logout()}>logout</button>:null}
        </>
    )
}
export default Home