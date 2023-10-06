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
        <footer className="bg-transparent px-0 mx-0 max-w-full ">
            <div className="flex flex-col px-6 pt-12 pb-2 w-full grow">
                <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 sm:gap-y-1 lg:grid-cols-4 max-w-full">
                    <div className="sm:col-span-2">
                        <h1 className="max-w-full text-xl font-semibold tracking-tight text-white xl:text-2xl dark:text-white">Let me contact you! Let's bring your ideas to life.</h1>

                        <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                            <form onSubmit={onFormSubmit}>
                                <input type="hidden" name="subject" value="New Submission from Contact Me - Portfolio"/>

                                <input value={clientEmail} id="email" type="text" className="px-4 py-2 mb-2 w-full md:w-auto text-white font-semibold border-gray-400 bg-transparent border rounded-md dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Email Address" required
                                onChange={(e) => setClientEmail(e.target.value)}/>
                        
                                <button type="submit" className="w-full px-6 py-2.5 text-sm mb-4 font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                                    Contact Me
                                </button>
                            </form>
                        </div>
                    </div>

                    <div>
                        <p className="font-semibold text-white dark:text-white">Quick Links</p>

                        <div className="flex flex-col items-start my-5 space-y-2">
                            <Link to="/" className="text-white transition-colors duration-300  hover:underline hover:text-blue-500">Home</Link>
                            <a href="/resume - jherson.pdf" download="Resume - Jherson.pdf"  className="text-white transition-colors duration-300  hover:underline hover:text-blue-500">Resume</a>
                            <Link to="/contact" className="text-white transition-colors duration-300  hover:underline hover:text-blue-500">Contact</Link>
                        </div>
                    </div>

                    <div>
                        <p className="font-semibold text-white dark:text-white">Industries</p>

                        <div className="flex flex-col items-start my-5 space-y-2">
                            <a href="#" className="text-white transition-colors duration-300  hover:underline hover:text-blue-500">E-Commerce & Sales</a>
                            <a href="#" className="text-white transition-colors duration-300  hover:underline hover:text-blue-500">Marketing</a>
                            <a href="#" className="text-white transition-colors duration-300  hover:underline hover:text-blue-500">Trucking Compliance & Factoring</a>
                        </div>
                    </div>
                </div>
                <div className="my-6 border-t border-gray-200 md:my-8 dark:border-gray-700 align-center md:align-start md:justify-start max-w-full ">
                    <div className="flex align-center justify-center mx-2 max-w-full ">
                        <a href="/">
                            <img className="w-40 h-30" src="home-logo.png" alt=""/>
                        </a>
                    </div>
                </div>
            </div>   
        </footer>
    </>
  )
}

export default Footer