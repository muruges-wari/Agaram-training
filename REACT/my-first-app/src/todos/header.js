// import Subheader from './subheader'
import { Link } from "react-router-dom";
function Header(){
    return(
        <>
        <nav>
          <ul>
            <li>
              <Link to={`/`}>login</Link>
            </li>
            <li>
              <Link to={`/todo`}>Todo</Link>
            </li>
            <li>
              <Link to={`/user`}>user</Link>
            </li>
          </ul>
        </nav>
        {/* <h1>{props.name}</h1>
        <button variant="success" onClick={()=>props.change("Agaram Software Academy")}>test</button>
        <Subheader name={props.name}/> */}
        </>
    )

}
export default Header;