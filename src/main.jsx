import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Home from './Components/Header/Home/Home';

import {

  createBrowserRouter,

  RouterProvider,

} from "react-router-dom";
import Main from './Components/Layout/Main';
import OrderReview from './Components/OrderReview/OrderReview';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';


let router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/review",
        element: <OrderReview></OrderReview>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      }

    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
