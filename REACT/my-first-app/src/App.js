import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState,useEffect} from 'react';
import Todo from './todos/todo';
import User from './todos/list';
import Head from './todos/head';
import GoogleMaps from './googlemap';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


function App() {
  let [islogin,setlogindata]=useState({
    log:false,
    email:"gayu@gmail.com"
  })
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Head islogin={islogin} setlogindata={setlogindata}/>,
    },
    {
      path: "/todo",
      element: <Todo islogin={islogin} setlogindata={setlogindata}/>,
    },
    {
      path: "/user",
      element: <User/>,
    },
  ]);
  return (
    <div>
          <GoogleMaps/>
    </div>
  );
}

export default App;
