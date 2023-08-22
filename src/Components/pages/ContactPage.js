import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
const ContactPage = () => {
    const initialState = {
        name: '',
        email: '',
        phone: '',
        message: ''
    };
    const [clientData, setClientData] = useState(initialState);
    //function to handle input changes
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setClientData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };
    const onFormSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        formData.append("access_key", "33d86185-c2dc-459e-9f63-0af715df2d21");
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
        try {
            await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            });
            setClientData(initialState);
        }
        catch (error) {
            console.log("Contact Form Error", error);
        }
    };
    return (_jsx("div", { className: "flex flex-col justify-center w-full h-full", children: _jsx("div", { className: "relative flex items-top justify-center  bg-white dark:bg-gray-900 sm:items-center sm:pt-0", children: _jsx("div", { className: "max-w-6xl mx-auto sm:px-6 lg:px-8", children: _jsx("div", { className: "mt-8 overflow-hidden", children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2", children: [_jsxs("div", { className: "p-6 mr-2  dark:bg-gray-800 sm:rounded-lg", children: [_jsx("h1", { className: "text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight animate-pulse", children: "Get in touch" }), _jsx("p", { className: "text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2", children: "Fill in the form to start a conversation" }), _jsxs("div", { className: "flex items-center mt-8 text-gray-600 dark:text-gray-400", children: [_jsxs("svg", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", viewBox: "0 0 24 24", className: "w-8 h-8 text-gray-500", children: [_jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" }), _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z" })] }), _jsx("div", { className: "ml-4 text-md tracking-wide font-semibold w-40", children: "Medell\u00EDn, Antioquia, Colombia" })] }), _jsxs("div", { className: "flex items-center mt-4 text-gray-600 dark:text-gray-400", children: [_jsx("svg", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", viewBox: "0 0 24 24", className: "w-8 h-8 text-gray-500", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" }) }), _jsx("div", { className: "ml-4 text-md tracking-wide font-semibold w-40", children: "+57 318 595 4326" })] }), _jsxs("div", { className: "flex items-center mt-2 text-gray-600 dark:text-gray-400", children: [_jsx("svg", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", viewBox: "0 0 24 24", className: "w-8 h-8 text-gray-500", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5", d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" }) }), _jsx("div", { className: "ml-4 text-md tracking-wide font-semibold w-40", children: "jhemejia95@gmail.com" })] })] }), _jsxs("form", { onSubmit: onFormSubmit, className: "p-6 flex flex-col justify-center", children: [_jsx("input", { type: "hidden", name: "subject", value: "New Submission from Contact Me - Portfolio" }), _jsxs("div", { className: "flex flex-col", children: [_jsx("label", { htmlFor: "name", className: "hidden", children: "Full Name" }), _jsx("input", { type: "name", name: "name", id: "name", placeholder: "Full Name", className: "px-4 py-3 mb-2 text-gray-800 font-semibold border-gray-400 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300", value: clientData.name, onChange: handleInputChange })] }), _jsxs("div", { className: "flex flex-col mt-2", children: [_jsx("label", { htmlFor: "email", className: "hidden", children: "Email" }), _jsx("input", { type: "email", name: "email", id: "email", placeholder: "Email", className: "px-4 py-3 mb-2 text-gray-800 font-semibold border-gray-400 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300", value: clientData.email, onChange: handleInputChange })] }), _jsxs("div", { className: "flex flex-col mt-2", children: [_jsx("label", { htmlFor: "phone", className: "hidden", children: "Number" }), _jsx("input", { type: "tel", name: "phone", id: "tel", placeholder: "Telephone Number", className: "px-4 py-3 mb-2 text-gray-800 font-semibold border-gray-400 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300", value: clientData.phone, onChange: handleInputChange })] }), _jsxs("div", { className: "mt-2", children: [_jsx("label", { htmlFor: "message", className: "hidden", children: "Number" }), _jsx("textarea", { rows: 3, name: "message", id: "message", placeholder: "Your Message", value: clientData.message, onChange: handleInputChange, className: "w-full h-20 px-3 py-2 bg-white placeholder-gray-400 font-bold border border-gray-400 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300", required: true })] }), _jsx("button", { type: "submit", className: "md:w-32 bg-indigo-600 hover:bg-blue-dark text-white  py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300", children: "Submit" })] })] }) }) }) }) }));
};
export default ContactPage;
