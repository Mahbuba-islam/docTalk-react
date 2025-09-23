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

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
     children: [
      {
        path: '/blogs',
        element: <Blogs />
      },
      { 
        path:'/contact',
      element:<Contact></Contact>
    },
    {
      path:'/mybookings',
      element:<MyBookings></MyBookings>
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
