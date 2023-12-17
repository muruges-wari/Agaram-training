import { useParams } from 'react-router-dom';
import { useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { singleUser,guestUser} from '../userslice';
import { useNavigate } from 'react-router-dom';
import UserList from '../components/userlist';
import { loaderActive } from '../userslice';
import axios from 'axios';
function UserDetails(){
    const {userId}=useParams()
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const indi_data=useSelector((state)=>state.user.singleuser)
    const loader=useSelector((state)=>state.user.isloaderactive)
    console.log(indi_data)
    useEffect(()=>{
        dispatch(loaderActive(true))
        if(localStorage.getItem("login")=="false"){
            navigate("/login")
        }
        getUserData()
    },[userId])

    const getUserData=()=>{
        axios.get(`https://agaram.academy/api/action.php?request=getMemberDetail&id=${userId}`).then(function(response){
            console.log(response.data.data)
            dispatch(singleUser(response.data.data))
            dispatch(loaderActive(false))
        })
    }
    
    return(
        <>
        {loader?<img src="https://img.freepik.com/premium-vector/processing-icon-circular-loader-loading-progress-indicator-isolated-white-background_543062-380.jpg?w=20"/>:`welcome${userId}`}
         {/* welcome User {userId} */}
        <table>
            <thead>
                <th>name</th>
                <th>email</th>
                <th>password</th>
                <th>phone</th>
                <th>Aadhar</th>
                <th>Address</th>
                
            </thead>
            <tbody>
                <td>{indi_data.name}</td>
                <td>{indi_data.email}</td>
                <td>{indi_data.password}</td>
                <td>{indi_data.phone}</td>
                <td>{indi_data.aadhar}</td>
                <td>{indi_data.address}</td>
                


            </tbody>
        </table>
        <UserList isDeleteVisible={true}/>
        </>
    )



}

export default UserDetails