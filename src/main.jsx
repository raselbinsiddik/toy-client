import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx';
import Home from './components/Home.jsx';
import './index.css';
import Login from './components/Login.jsx';

import Rgister from './components/Rgister.jsx';
import AddToys from './components/AddToys.jsx';
import ViewDetail from './components/ViewDetail.jsx';
import Blog from './components/Blog.jsx';
import MyToys from './components/MyToys.jsx';
import AllToys from './components/AllToys.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path: 'login',
        element:<Login></Login>
      },
      {
        path: 'register',
        element:<Rgister></Rgister>
      },
      {
        path: 'addToys',
        element:<AddToys></AddToys>
      },
      {
        path: 'detail/:id',
        element: <ViewDetail></ViewDetail>,
        loader: ({ params }) => fetch(`http://localhost:5000/toyCategory/${params.id}`)
        
      },
      {
        path: 'blog',
        element:<Blog></Blog>
      },
      {
        path: 'myToys',
        element:<MyToys></MyToys>
      },
      {
        path: 'allToys',
        element:<AllToys></AllToys>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
