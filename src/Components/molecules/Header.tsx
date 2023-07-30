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
    <header className="flex w-full items-center justify-between border-b-2 border-grey-100 bg-white p-2">
              {/*   <!-- logo --> */}
                <div className="flex items-center space-x-2 pl-2">
                    <button type="button" className="text-3xl" onClick={()=>{props.setASideOpen(!props.aSideOpen)}}><Icon path={mdiMenu} size={1} /></button>
                    <div className='w-20'><img src={logo} className='w-20 h-10' alt="" /></div>
                </div>
                {/* <!-- button profile --> */}
                <div>
                    <button type="button" 
                        className="h-9 w-9 overflow-hidden rounded-full flex justify-center" onClick={()=>{props.setProfileDiv(!props.profileDiv)}}>
                        <img src={props.profileImageUrl} alt="profile-img" />
                    </button>

                   {/*  <!-- dropdown profile --> */}
                    <div className={["absolute right-2 mt-1 w-48 divide-y divide-grey-100 rounded-md border border-gray bg-white shadow-md",props.profileDiv?"":" hidden"].join("")}
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