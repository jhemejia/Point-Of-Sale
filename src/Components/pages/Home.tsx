import { Outlet } from 'react-router-dom';
import Footer from '../molecules/Footer';
import ContactFormWidget from '../molecules/ContactFormWidget';
import LandingNavigation from '../molecules/LandingNavigation';

const home = () => {
  return (
    <>
    <div className='flex flex-col items-center justify-between flex-nowrap h-full max-w-screen'>
      {/*<!-- Header Menu Left -->*/}    
      <header className="w-full mt-1 text-gray-700 bg-white shadow-sm body-font relative dark:bg-gray-900">
        <LandingNavigation/>
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