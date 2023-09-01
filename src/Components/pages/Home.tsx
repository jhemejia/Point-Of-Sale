import { Link, Outlet, useNavigate } from 'react-router-dom';
import Footer from '../molecules/Footer';
import ContactFormWidget from '../molecules/ContactFormWidget';

const home = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className='flex flex-col items-center justify-between flex-nowrap h-full max-w-screen'>
      {/*<!-- Header Menu Left -->*/}    
      <header className="w-full mt-1 text-gray-700 bg-white shadow-sm body-font relative ">
        <div className="container flex items-center justify-between p-2 mx-auto max-w-full">
            <Link to="/" className="flex items-center font-medium text-gray-900 title-font md:mb-0">
                <img src="./logo.png" alt="logo" className="w-20 " />
            </Link>
            <nav className="flex-nowrap items-center justify-center pl-6 ml-6 text-base border-l hidden sm:flex border-gray md:mr-auto ">
                <Link to="/" className="mr-5 font-medium hover:text-gray-900">Home</Link>
                <Link to="/my-work" className="mr-5 font-medium hover:text-gray-900">My Work</Link>
                <Link to="/about" className="mr-5 font-medium hover:text-gray-900">About Me</Link>
                <Link to="/contact" className="font-medium hover:text-gray-900">Contact</Link>
            </nav>
            <div className="flex flex-nowrap items-center h-full justify-end mx-2">
                <button onClick={()=>navigate("/login")} className="mr-5 font-medium hover:text-gray-900">Login</button>
                <button onClick={()=>navigate("/signup")}
                    className="px-4 py-2 text-xs font-bold text-white uppercase transition-all duration-150 bg-green-500 rounded shadow outline-none active:bg-green-600 hover:shadow-md focus:outline-none ease">
                    Sign Up
                </button>
            </div>
        </div>
      </header>
      <div className="h-full max-w-full min-w-full relative ">
        <Outlet/> 
        <ContactFormWidget />
      </div>
      <div className='relative mt-2 w-full'>
      <Footer />
      </div>
    </div> 
    </>
  )
}

export default home