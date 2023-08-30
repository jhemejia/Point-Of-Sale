import Home from "../Components/pages/Home.tsx"
import ErrorPage from '../Components/organisms/ErrorPage.tsx';
import LayoutTemplate from '../Components/organisms/Drawer.tsx';
import Login from '../Components/pages/Login.tsx';
import Signup from '../Components/pages/Signup.tsx';
import WhoIAmPage from '../Components/organisms/WhoIAmPage.tsx';
import MyPhilosophyPage from '../Components/organisms/MyPhilosophyPage.tsx';
import ProfilePage from '../Components/pages/ProfilePage.tsx';
import Store from '../Components/pages/Store.tsx';
import LandingPage from '../Components/organisms/LandingPage.tsx';
import MyWorkPage from '../Components/pages/MyWorkPage.tsx';
import ContactPage from '../Components/pages/ContactPage.tsx';
import { createBrowserRouter } from "react-router-dom";
import AuthProvider from "./AuthProvider.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children:[
      {
        path:"/",
        element:<LandingPage />
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
    element: <AuthProvider>
                <LayoutTemplate />
              </AuthProvider>,
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

]);



