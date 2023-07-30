import { Outlet, useNavigate } from 'react-router-dom';
import Footer from '../molecules/Footer';

const home = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className='flex flex-col items-center justify-between flex-nowrap h-full max-w-screen'>
      {/*<!-- Header Menu Left -->*/}    
      <header className="w-full mt-1 text-gray-700 bg-white shadow-sm body-font relative">
        <div className="container flex flex-col items-center justify-between p-2 mx-auto md:flex-row">
            <a href="/" className="flex items-center font-medium text-gray-900 title-font md:mb-0">
                <img src="./logo.png" alt="logo" className="w-20 " />
            </a>
            <nav className="flex flex-wrap items-center justify-center pl-6 ml-6 text-base border-l border-gray md:mr-auto">
                <a href="#_" className="mr-5 font-medium hover:text-gray-900">Home</a>
                <a href="#_" className="mr-5 font-medium hover:text-gray-900">About</a>
                <a href="#_" className="font-medium hover:text-gray-900">Contact</a>
            </nav>
            <div className="items-center h-full justify-end">
                <button onClick={()=>navigate("/login")} className="mr-5 font-medium hover:text-gray-900">Login</button>
                <button onClick={()=>navigate("/signup")}
                    className="px-4 py-2 text-xs font-bold text-white uppercase transition-all duration-150 bg-teal-500 rounded shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none ease">
                    Sign Up
                </button>
            </div>
        </div>
      </header>
      <div className="h-full max-w-full relative ">
        <Outlet/>
      </div>
      <div className='relative mt-2 w-full'>
      <Footer />
      </div>
    </div> 
    </>
  )
}

export default home