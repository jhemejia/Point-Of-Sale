import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

interface FormData {
    name: string;
    email: string;
    message: string;
  }

const ContactForm = () => {

    const [open, setOpen] = useState<boolean>(false)
    const widgetRef = useRef<HTMLDivElement>(null)
    const [formValues, setFormValues] = useState<FormData>({
        name: '',
        email: '',
        message: '',
      })
    // function to close the contact form widget when clicking outside of the form
    const handleClickOutside = (event:any)=>{
        if(open && widgetRef.current && !widgetRef.current.contains(event.target as Node) )
        {
            setOpen(false)
        }
    }
    useEffect(()=>{
        document.addEventListener("click",handleClickOutside)
        return (
          ()=> document.removeEventListener("click",handleClickOutside)
        )
    },[open])

    //function to handle input changes
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormValues((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };

    const handleFormSubmit = async (e:any)=>{
        e.preventDefault()
        const formData = new FormData(e.target)

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
        setOpen(false)
        setFormValues({
            name: '',
            email: '',
            message: '',
          })
    } catch (error){
        console.log("Contact Form Error", error)
    }    
    }

  return (
    <div className="bg-white dark:bg-gray-900 mx-6">
      {/* Contact Form component */} 
    {/* Web3Forms Popup Widget Starts here */} 
        <div  id="web3forms__widget" ref={widgetRef}> 
            <div
                id="w3f__widget--content"
                className={["fixed flex flex-col z-50 bottom-[100px] top-0 right-0 left-0 sm:top-auto sm:right-5 sm:left-auto h-[calc(90%-75px)] w-full sm:w-[350px] overflow-auto  border border-gray-300 bg-white shadow-2xl rounded-md ",open?"":"hidden"].join(" ")}
                
            >
                <div className="flex p-2 flex-col justify-center items-center py-4 bg-indigo-600">
                    <h3 className="text-lg text-white">How can I help?</h3>
                    <p className="text-white opacity-50">I usually respond in a few hours</p>
                </div>
                <div className="bg-gray-50 flex-grow py-3 px-5"> 
                    <form
                    onSubmit={handleFormSubmit}
                    action="none"
                    id="form"
                    >
                        <input
                            type="hidden"
                            name="subject"
                            value="New Submission from Web3Forms"
                        />       
                        <div className="my-4">
                            <label htmlFor="name" className="hidden">Number</label>
                            <input
                                type="text"
                                name="name"
                                id="full_name"
                                placeholder="Full Name"
                                required
                                value={formValues.name}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 text-gray-800 font-semibold border-gray-400 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                            />
                        </div>
                        
                        <div className="mb-4">
                            <label htmlFor="email" className="hidden">Number</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email"
                                value={formValues.email}
                                onChange={handleInputChange}
                                required
                                className="w-full px-3 py-2 text-gray-800 font-semibold border-gray-400 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                            />
                        </div>
                    
                        <div className="mb-4">
                            <label htmlFor="message" className="hidden">Number</label>
                            <textarea
                            rows={3}
                            name="message"
                            id="message"
                            placeholder="Your Message"
                            value={formValues.message}
                            onChange={handleInputChange}
                            className="w-full h-20 px-3 py-2 bg-white placeholder-gray-400 font-bold border border-gray-400 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                            required
                            ></textarea>
                        </div>
                        <div className="mb-3">
                            <button
                            type="submit"
                            className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
                            >
                            Send Message
                            </button>
                        </div>
                        <p className="text-xs text-center text-gray-400" id="result">
                            <span>Powered by <Link to="https://Web3Forms.com" className="text-gray-600" target="_blank" rel="noopener noreferrer">Web3Forms</Link></span>
                        </p>
                    </form>
                </div>
            </div>
            <button
                onClick={()=>setOpen(!open)}
                className="fixed z-40 right-5 bottom-5 shadow-lg flex justify-center items-center w-14 h-14 bg-indigo-500 rounded-full focus:outline-none hover:bg-indigo-600 focus:bg-indigo-600 transition duration-300 ease"
            >
                <svg
                className={["w-6 h-6 text-white absolute", open?"hidden":""].join(" ")}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                >
                <path
                    d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                ></path>
                </svg>
                <svg
                className={["w-6 h-6 text-white absolute", open?"":"hidden"].join(" ")}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                >
                <line x1="18" y1="6" x2="5" y2="19"></line>
                <line x1="6" y1="6" x2="18" y2="17"></line>
                </svg>
            </button>
        </div>
    {/* Web3Forms Popup Widget End here */}
    </div>
  )
}

export default ContactForm
