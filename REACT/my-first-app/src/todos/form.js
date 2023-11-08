import {useState} from 'react';

function Addtodo(props){
    let [input,setInput]=useState("")
    return(
        <>
        <input type="text" onKeyUp={(e)=>{setInput(e.target.value)}}/>
        <button type="button" onClick={()=>{
            props.settodo([...props.tod,input])
        }}>ADD</button>
        
        </>
    )
}
export default Addtodo;