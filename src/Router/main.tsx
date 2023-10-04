import Home from "../Components/pages/Home.tsx"
import ErrorPage from '../Components/organisms/ErrorPage.tsx';
import LayoutTemplate from '../Components/organisms/Drawer.tsx';
import Login from '../Components/pages/Login.tsx';
import Signup from '../Components/pages/Signup.tsx';
import WhoIAmPage from '../Components/organisms/WhoIAmPage.tsx';
import MyPhilosophyPage from '../Components/organisms/MyPhilosophyPage.tsx';
import ProfilePage from '../Components/pages/ProfilePage.tsx';
import Store from '../Components/pages/Store.tsx';
import MyWorkPage from '../Components/pages/MyWorkPage.tsx';
import ContactPage from '../Components/pages/ContactPage.tsx';
import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute.tsx";
import ResumePage from "../Components/pages/Resume.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children:[
      {
        path:"/",
        element:<ResumePage />
      },
      {
        path:"my-work",
        element:<MyWorkPage />
      },
      {
        path:"about",
        element:<WhoIAmPage />
      },
      {
        path:"my-philosophy",
        element:<MyPhilosophyPage />
      },
      {
        path:"contact",
        element:<ContactPage />
      },
      
    ]
  },
  {
    path: "/main",
    element: <PrivateRoute>
                <LayoutTemplate />
              </PrivateRoute>,
    errorElement: <ErrorPage />,
    children:[
      {
        path: "profile",
        element: <ProfilePage /> ,
      },
      {
        path: "store",
        element: <Store /> ,
      },
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

],{
  basename:"/Portfolio/",
});



