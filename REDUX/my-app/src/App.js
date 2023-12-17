import './App.css';
import Register from './pages/register';
import Login from './pages/login';
import Home from './pages/home';
import UserDetails from './pages/userdetails';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Register/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/home",
    element: <Home/>,
  },
  {
    path: "/user/:userId",
    element: <UserDetails/>,
  },
]);

function App() {
  return (
    <div className="App">
        <RouterProvider router={router} />
        {/* <Register/> */}
    </div>
  );
}

export default App;
