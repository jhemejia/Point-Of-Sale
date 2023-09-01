import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from "./Components/pages/Home.tsx";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import "./index.css";
import ErrorPage from './Components/organisms/ErrorPage.tsx';
import App from './App.tsx';
import Login from './Components/pages/Login.tsx';
import Signup from './Components/pages/Signup.tsx';
import WhoIAmPage from './Components/organisms/WhoIAmPage.tsx';
import MyPhilosophyPage from './Components/organisms/MyPhilosophyPage.tsx';
import ProfilePage from './Components/pages/ProfilePage.tsx';
import { store } from './store.ts';
import { Provider } from 'react-redux';
import Store from './Components/pages/Store.tsx';
import LandingPage from './Components/organisms/LandingPage.tsx';
import MyWorkPage from './Components/pages/MyWorkPage.tsx';
import ContactPage from './Components/pages/ContactPage.tsx';
const router = createBrowserRouter([
    {
        path: "/",
        element: _jsx(Home, {}),
        errorElement: _jsx(ErrorPage, {}),
        children: [
            {
                path: "/",
                element: _jsx(LandingPage, {})
            },
            {
                path: "my-work",
                element: _jsx(MyWorkPage, {})
            },
            {
                path: "about",
                element: _jsx(WhoIAmPage, {})
            },
            {
                path: "my-philosophy",
                element: _jsx(MyPhilosophyPage, {})
            },
            {
                path: "contact",
                element: _jsx(ContactPage, {})
            },
        ]
    },
    {
        path: "/main",
        element: _jsx(App, {}),
        errorElement: _jsx(ErrorPage, {}),
        children: [
            {
                path: "profile",
                element: _jsx(ProfilePage, {}),
            },
            {
                path: "store",
                element: _jsx(Store, {}),
            },
        ]
    },
    {
        path: "/login",
        element: _jsx(Login, {}),
    },
    {
        path: "/signup",
        element: _jsx(Signup, {}),
    },
]);
ReactDOM.createRoot(document.getElementById('root')).render(_jsx(Provider, { store: store, children: _jsx(React.StrictMode, { children: _jsx(RouterProvider, { router: router }) }) }));
