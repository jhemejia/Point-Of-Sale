import { useState } from 'react'

interface ClientData {
    name: string
    email: string
    phone: string
    message: string
}

const ContactPage = () => {
    const initialState = {
        name: '',
        email: '',
        phone: '',
        message: ''
    }
    const [clientData, setClientData] = useState<ClientData>(initialState)

    //function to handle input changes
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setClientData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };

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
        setClientData(initialState)
    } catch (error){
        console.log("Contact Form Error", error)
    } 
    }


  return (
    <div className="flex flex-col justify-center w-full h-full">
        <div className="relative flex items-top justify-center  bg-white dark:bg-gray-900 sm:items-center sm:pt-0">
            <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                <div className="mt-8 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="p-6 mr-2  dark:bg-gray-800 sm:rounded-lg">
                            <h1 className="text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight animate-pulse">
                                Get in touch
                            </h1>
                            <p className="text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2">
                                Fill in the form to start a conversation
                            </p>

                            <div className="flex items-center mt-8 text-gray-600 dark:text-gray-400">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                    Medellín, Antioquia, Colombia
                                </div>
                            </div>

                            <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                    +57 318 595 4326 
                                </div>
                            </div>

                            <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                    jhemejia95@gmail.com
                                </div>
                            </div>
                        </div>

                        <form onSubmit={onFormSubmit} className="p-6 flex flex-col justify-center">
                            <input type="hidden" name="subject" value="New Submission from Contact Me - Portfolio"/>

                            <div className="flex flex-col">
                                <label htmlFor="name" className="hidden">Full Name</label>
                                <input type="name" name="name" id="name" placeholder="Full Name" className="px-4 py-3 mb-2 text-gray-800 font-semibold border-gray-400 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" value={clientData.name}
                                onChange={handleInputChange}/>
                            </div>

                            <div className="flex flex-col mt-2">
                                <label htmlFor="email" className="hidden">Email</label>
                                <input type="email" name="email" id="email" placeholder="Email" className="px-4 py-3 mb-2 text-gray-800 font-semibold border-gray-400 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" value={clientData.email}
                                onChange={handleInputChange}/>
                            </div>

                            <div className="flex flex-col mt-2">
                                <label htmlFor="phone" className="hidden">Number</label>
                                <input type="tel" name="phone" id="tel" placeholder="Telephone Number" className="px-4 py-3 mb-2 text-gray-800 font-semibold border-gray-400 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" value={clientData.phone}
                                onChange={handleInputChange}/>
                            </div>

                            <div className="mt-2">
                                <label htmlFor="message" className="hidden">Number</label>
                                <textarea
                                rows={3}
                                name="message"
                                id="message"
                                placeholder="Your Message"
                                value={clientData.message}
                                onChange={handleInputChange}
                                className="w-full h-20 px-3 py-2 bg-white placeholder-gray-400 font-bold border border-gray-400 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                                required
                                ></textarea>
                            </div>

                            <button type="submit" className="md:w-32 bg-indigo-600 hover:bg-blue-dark text-white  py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactPage
