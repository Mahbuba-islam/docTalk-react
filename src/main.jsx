import {  StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ToastContainer } from 'react-toastify';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import Blogs from './Components/Blogs/Blogs.jsx';
import Contact from './Components/Contact/Contact.jsx';
import MyBookings from './Components/MyBookings/MyBookings.jsx';
import AllDoctors from './Components/AllDoctors/AllDoctors.jsx';
import Doctors from './Components/Doctors/Doctors.jsx';
import Details from './Components/Details/Details.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
     children: [
      {
        path:'/',
        element:<Doctors></Doctors>
      },
      {
        path: '/blogs',
        element: <Blogs />,
        loader:()=> fetch('/blogs.json')
      },
      { 
        path:'/contact',
      element:<Contact></Contact>
    },
    {
      path:'/mybookings',
      element:<MyBookings></MyBookings>,
      loader:()=> fetch('/data.json')
    },
    {
      path:'/allDoctors',
      element:<AllDoctors></AllDoctors>,
      loader: ()=> fetch('/data.json')
    },
    {
      path:'/details/:id',
      element:<Details></Details>,
      loader: ()=> fetch('/data.json')
    }
      
    ]

  },
 
  
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    <ToastContainer />
  </StrictMode>,
)
