
import { useEffect,useState} from "react"
import axios from 'axios'
import { useNavigate,Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { guestUser,allUser} from "../userslice"

function UserList(props){
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const user=useSelector((state)=>state.user.guestuser)
    const data=useSelector((state)=>state.user.alluser)


    const getData=()=>{
            axios({
                method:"get",
                url:"http://agaram.academy/api/action.php?request=getAllMembers",
            }).then(function(response){
                console.log(response.data.data)
                dispatch(allUser(response.data.data))
               
            })
    }
    const deleteData=(id)=>{
        axios.get(`https://agaram.academy/api/action.php?request=removeMember&id=${id}`).then(function(response){
        getData()  
        })
    }
    const log=(d)=>{
        if(localStorage.getItem("login")=="true"){
            navigate(`/user/${d}`)
        }
        else{
            dispatch(guestUser(`/user/${d}`))
            localStorage.setItem("guest","true")
            navigate("/login")
        }
    }
    
    useEffect(()=>{
       getData()
        
    },[])
    return(
        <>
        {user}
        {/* {JSON.stringify(props)} */}
        <table border="1">
            <thead>
            <th>ID</th>
            <th>Name</th>
            <th>EMAIL</th>
            <th>Password</th>
            <th>Aadhar</th>
            <th>View</th>
            {props.isDeleteVisible?<th>Delete</th>:null}
            

            </thead>
            <tbody><td></td>
                {
                    data.map((d)=>{
                        return(
                            <>
                            <tr>
                                <td>{d.id}</td>
                                <td>{d.name}</td>
                                <td>{d.email}</td>
                                <td>{d.password}</td>
                                <td>{d.aadhar}</td>
                                <td><button onClick={()=>log(d.id)}>view</button></td>
                                {/* <td><Link to={`/user/${d.id}`}>view</Link></td> */}
                               {props.isDeleteVisible? <td><button type="text" onClick={()=>deleteData(d.id)}>&times;</button></td>:null}
                                

                            </tr>
                            
                            </>
                        )
                    })
                }
            </tbody>
        </table>
        </>
    )
}
export default UserList