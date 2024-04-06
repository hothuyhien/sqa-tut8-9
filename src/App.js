import React from 'react';
import {createRoot} from "react-dom/client";
import {createrBrowserRouter, RouterProvider, Route, Link, createBrowserRouter} from "react-router-dom";
import Homepage from './routes/Homepage.js';
import Register from './routes/Register.js';
import SuccessPage from './routes/SuccessPage.js';

const router = createBrowserRouter([
  {
    path:"/",
    element: <Homepage/>,
  },
  {
    path:"register",
    element: <Register/>
  },
  {
    path:"register/success",
    element: <SuccessPage/>
  },
]);


export default router;
