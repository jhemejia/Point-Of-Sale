import React, { useState } from "react"
import { Link } from "react-router-dom"

const Footer = () => {

    const [clientEmail, setClientEmail] = useState<string>('')

    const onFormSubmit = async (event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        const formData = new FormData(event.currentTarget)

        formData.append("access_key", "33d86185-c2dc-459e-9f63-0af715df2d21");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
        try{
        await fetch("https://api.web3forms.com/submit",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
              },
              body: json
        })
        setClientEmail('')
    } catch (error){
        console.log("Contact Form Error", error)
    } 
    }

  return (
    <>
        <footer className="bg-white dark:bg-gray-900 px-0 mx-0 max-w-full ">
            <div className="flex flex-col px-6 pt-12 pb-2 w-full grow">
                <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 sm:gap-y-1 lg:grid-cols-4 max-w-full">
                    <div className="sm:col-span-2">
                        <h1 className="max-w-full text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white">Let me contact you! Let's bring your ideas to life.</h1>

                        <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                            <form onSubmit={onFormSubmit}>
                                <input type="hidden" name="subject" value="New Submission from Contact Me - Portfolio"/>

                                <input value={clientEmail} id="email" type="text" className="px-4 py-2 mb-2 text-gray-800 font-semibold border-gray-400 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Email Address" required
                                onChange={(e) => setClientEmail(e.target.value)}/>
                        
                                <button type="submit" className="w-full px-6 py-2.5 text-sm  font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                                    Contact Me
                                </button>
                            </form>
                        </div>
                    </div>

                    <div>
                        <p className="font-semibold text-gray-800 dark:text-white">Quick Links</p>

                        <div className="flex flex-col items-start mt-5 space-y-2">
                            <Link to="/" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Home</Link>
                            <Link to="/about" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Who I Am</Link>
                            <Link to="/my-philosophy" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">My Philosophy</Link>
                        </div>
                    </div>

                    <div>
                        <p className="font-semibold text-gray-800 dark:text-white">Industries</p>

                        <div className="flex flex-col items-start mt-5 space-y-2">
                            <a href="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">E-Commerce & Sales</a>
                            <a href="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Marketing</a>
                            <a href="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Trucking Compliance & Factoring</a>
                        </div>
                    </div>
                </div>
                <div className="my-6 border-t border-gray-200 md:my-8 dark:border-gray-700 align-start justify-start  max-w-full ">
                    <div className="flex items-center justify-between mx-2 max-w-full ">
                        <a href="/">
                            <img className="w-40 h-20" src="logo.png" alt=""/>
                        </a>
                    
                        <div className="flex mx-2 items-center">
                            <a href="https://www.linkedin.com/in/jhersondmejiag/" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="LinkedIn">
                            <svg className="w-6 h-6 hover:fill-blue" viewBox="0 0 24 24" fill="gray"
                                    xmlns="http://www.w3.org/2000/svg">
                            <g>
                            <path d="M10.033 15.3h-1.6v-5.199h1.6v5.199zm-.8-5.866c-.577 0-.866-.267-.866-.8 0-.223.082-.412.25-.567.166-.155.371-.233.616-.233.577 0 .866.268.866.801s-.288.799-.866.799zm6.734 5.866h-1.633v-2.9c0-.755-.268-1.133-.801-1.133-.422 0-.699.211-.834.633-.043.067-.066.201-.066.4v3h-1.633v-3.533c0-.8-.012-1.355-.033-1.666h1.4l.1.699c.367-.556.9-.833 1.633-.833.557 0 1.006.194 1.35.583.346.389.518.95.518 1.684v3.066zM12 21c-4.963 0-9-4.037-9-9s4.037-9 9-9 9 4.037 9 9-4.037 9-9 9zm0-16c-3.859 0-7 3.141-7 7s3.141 7 7 7 7-3.141 7-7-3.141-7-7-7z"/>
                            </g>
                            </svg>
                            </a>
                            
                            <a href="#" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Facebook">
                                <svg className="w-5 h-5 hover:fill-blue" viewBox="0 0 24 24" fill="gray"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z">
                                    </path>
                                </svg>
                            </a>

                            <a href="https://github.com/jhemejia/" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Github">
                                <svg className="w-5 h-5 hover:fill-blue" viewBox="0 0 24 24" fill="gray"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z">
                                    </path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>   
        </footer>
    </>
  )
}

export default Footer