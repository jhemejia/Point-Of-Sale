import Icon from '@mdi/react';
import { mdiMenu } from '@mdi/js';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

type HeaderProps = {
    profileImageUrl: string,
    aSideOpen: boolean,
    profileDiv:boolean,
    setASideOpen: Function,
    setProfileDiv: Function,
}

const Header = (props:HeaderProps) => {

    const [ logo, setLogo] = useState('');

   useEffect(()=>{
    setLogo('/logo.png')
   },[])

  return (
    <>
    <header className="flex w-full items-center justify-between border-b-2 border-gray-100 bg-white p-2">
              {/*   <!-- logo --> */}
                <div className="flex items-center space-x-2 pl-2">
                    <button type="button" className="text-3xl" onClick={()=>{props.setASideOpen(!props.aSideOpen)}}><Icon path={mdiMenu} size={1} /></button>
                    <div className='w-20'><img src={logo} className='w-20 h-10' alt="" /></div>
                </div>
                {/* <!-- button profile --> */}
                <div className='flex items-center space-x-4'>
                    <div className='cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>
                    </div>
                    <button type="button" 
                        className="h-9 w-9 overflow-hidden rounded-full flex justify-center" onClick={()=>{props.setProfileDiv(!props.profileDiv)}}>
                        <img src={props.profileImageUrl} alt="profile-img" />
                    </button>

                   {/*  <!-- dropdown profile --> */}
                    <div className={["absolute right-2 mt-64 w-48 divide-y divide-gray-100 rounded-md border border-gray bg-white shadow-md",props.profileDiv?"":" hidden"].join("")}
                        >
                        <div className="flex items-center space-x-2 p-2">
                            <img src={props.profileImageUrl} alt="profile-img" className="h-9 w-9 rounded-full" />
                            <div className="font-medium">Hafiz Haziq</div>
                        </div>

                        <div className="flex flex-col space-y-3 p-2">
                            <Link to="profile" className="transition hover:text-blue-600">My Profile</Link>
                            <Link to='' className="transition hover:text-blue-600">Edit Profile</Link>
                            <Link to='' className="transition hover:text-blue-600">Settings</Link>
                        </div>

                        <div className="p-2">
                            <button className="flex items-center space-x-2 transition hover:text-blue-600">
                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1">
                                    </path>
                                </svg>
                                <div>Log Out</div>
                            </button>
                        </div>
                </div>
                </div>
            </header>
    </>
  )
}

export default Header