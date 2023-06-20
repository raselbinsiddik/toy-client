import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from './App.jsx';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import './index.css';

import AddToys from './components/AddToys.jsx';
import AllToys from './components/AllToys.jsx';
import Blog from './components/Blog.jsx';
import MyToys from './components/MyToys.jsx';
import NotPound from './components/NotPound.jsx';
import Rgister from './components/Rgister.jsx';
import ToyDetails from './components/ToyDetails.jsx';
import UpdateToys from './components/UpdateToys.jsx';
import ViewDetail from './components/ViewDetail.jsx';
import PrivateRoute from './Private/PrivateRoute.jsx';
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
        element: <PrivateRoute><ViewDetail></ViewDetail></PrivateRoute>,
        loader: ({ params }) => fetch(`https://the-toy-server1.vercel.app/toyCategory/${params.id}`)
        
      },
      {
        path: 'blog',
        element:<Blog></Blog>
      },
      {
        path: 'myToys',
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>,
      
      },
      {
        path: 'allToys',
        element: <AllToys></AllToys>
      },
      {
        path: 'toy/:id',
        element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://the-toy-server1.vercel.app/addToys/${params.id}`)
      },
      {
        path: 'update/:id',
        element: <UpdateToys></UpdateToys>,
        loader: ({ params }) => fetch(`https://the-toy-server1.vercel.app/addToys/${params.id}`)
      }
      
    ]
  },
  {
    path: '*',
    element:<NotPound></NotPound>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-screen-xl mx-auto'>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
   </div>
  </React.StrictMode>,
)
