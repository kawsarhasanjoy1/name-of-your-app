import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home/Home.jsx';
import Login from './component/Login/Login.jsx';
import Register from './component/Register/Register.jsx';
import AuthContex from './component/AuthContex/AuthContex.jsx';
import PriveteRouter from './component/PriveteRouter/PriveteRouter.jsx';



const router = createBrowserRouter([
  {
    path : '/',
    element : <App></App>,
    children : [
      {
        path :'/',
        element: <PriveteRouter><Home></Home>,</PriveteRouter>
      },
      {
        path: '/login',
        element:<Login></Login>,
      },
      {
        path: '/register',
        element : <Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <AuthContex>
                 <RouterProvider router={router}></RouterProvider>
       </AuthContex>
  </React.StrictMode>,
)
