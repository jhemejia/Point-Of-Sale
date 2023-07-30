import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from "./Components/pages/Home.tsx"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import ErrorPage from './Components/organisms/ErrorPage.tsx';
import App from './App.tsx';
import Login from './Components/pages/Login.tsx';
import Signup from './Components/pages/Signup.tsx';
import WhoWeArePage from './Components/organisms/WhoWeArePage.tsx';
import OurPhilosophyPage from './Components/organisms/OurPhilosophyPage.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children:[
      {
        path:"who-we-are",
        element:<WhoWeArePage />
      },
      {
        path:"our-philosophy",
        element:<OurPhilosophyPage />
      },
    ]
  },
  {
    path: "/dashboard",
    element: <App />,
    children:[
      {
        path: "/dashboard/home",
        element: <div className='h-full'>HOME</div> ,
      }
    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },

]);



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
