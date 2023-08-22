import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Header from '../molecules/Header';
const Dashboard = () => {
    // declare variables
    const [aSideOpen, setASideOpen] = useState(false);
    const [profileDiv, setProfileDiv] = useState(false);
    const profileImageUrl = 'https://picsum.photos/40';
    useEffect(() => {
        if (profileDiv) {
            setTimeout(() => setProfileDiv(false), 3000);
        }
    }, [profileDiv]);
    return (_jsx("div", { className: "container min-h-screen min-w-full max-h-screen bg-light-gray text-gray-700", children: _jsxs("main", { className: "flex flex-col h-full bg-light-gray text-gray-700 relative", children: [_jsx("div", { className: 'flex max-w-full h-14', children: _jsx(Header, { aSideOpen: aSideOpen, profileDiv: profileDiv, profileImageUrl: profileImageUrl, setASideOpen: setASideOpen, setProfileDiv: setProfileDiv }) }), _jsxs("div", { className: "flex h-full", children: [_jsxs("aside", { className: [" w-72 h-full space-y-2 border-r-2 border-gray-100 bg-white p-2 ", !aSideOpen ? "hidden" : ""].join(""), children: [_jsxs(Link, { to: '', className: "flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 ", children: [_jsx("span", { className: "text-2xl", children: _jsx("i", { className: "bx bx-home" }) }), _jsx("span", { children: "Dashboard" })] }), _jsxs(Link, { to: '', className: "flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 ", children: [_jsx("span", { className: "text-2xl", children: _jsx("i", { className: "bx bx-cart" }) }), _jsx("span", { children: "Cart" })] }), _jsxs(Link, { to: 'store', className: "flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 ", children: [_jsx("span", { className: "text-2xl", children: _jsx("i", { className: "bx bx-shopping-bag" }) }), _jsx("span", { children: "Store" })] }), _jsxs(Link, { to: '', className: "flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 ", children: [_jsx("span", { className: "text-2xl", children: _jsx("i", { className: "bx bx-heart" }) }), _jsx("span", { children: "Personel" })] }), _jsxs(Link, { to: "profile", className: "flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 ", children: [_jsx("span", { className: "text-2xl", children: _jsx("i", { className: "bx bx-user" }) }), _jsx("span", { children: "Profile" })] }), _jsx("div", { className: "mt-auto place-self-end h-auto" })] }), _jsx("div", { className: "flex flex-col items-center max-w-full h-full ", children: _jsx(Outlet, {}) })] })] }) }));
};
export default Dashboard;
