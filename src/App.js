import {createBrowserRouter,RouterProvider, Outlet,} from 'react-router-dom'



import { Footer } from './Components/Footer';
import { NavBar } from './Components/NavBar';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Single } from './pages/Single';
import { Write } from './pages/Write';
import "./style.scss";

  const Layout = () => {
    return (
      <>
      <NavBar />
      <Outlet />
      <Footer />
      </>
      );
  }
  
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout />,
      children:[
  
    {
  path:"/",
  element:<Home />
},
{
  path:"/post/:id",
  element:<Single />
},
{
  path:"/write",
  element:<Write />
},
]
    },
{
  path:"/Login",
  element:<Login />
},
{
  path:"/Register",
  element:<Register />
}


  ]);
  function App(){
  return (
    <div className="app">
      <div className='container'>
      <RouterProvider router={router} />
      
      </div>
    </div>

  )
  } 
export default App;
