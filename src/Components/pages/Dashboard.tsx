import { useState } from 'react'
import Icon from '@mdi/react';
import { mdiMenu } from '@mdi/js';
import { Outlet } from 'react-router-dom';


const Dashboard = () => {
    // declare variables
    const [aSideOpen, setASideOpen] = useState(false);
    const [profileDiv, setProfileDiv] = useState(false);
    const profileImageUrl = 'https://picsum.photos/40';

   
  return (
    <div className="min-h-screen w-full bg-light-gray text-gray-700" >
        {/* <!-- page -->  */}        
        <main className="min-h-screen w-full bg-light-gray text-gray-700" >
            {/* <!-- header page --> */}
            <header className="flex w-full items-center justify-between border-b-2 border-grey-100 bg-white p-2">
              {/*   <!-- logo --> */}
                <div className="flex items-center space-x-2">
                    <button type="button" className="text-3xl" onClick={()=>{setASideOpen(!aSideOpen)}}><Icon path={mdiMenu} size={1} /></button>
                    <div className='w-20'><img src="logo.png" alt="" /></div>
                </div>
                {/* <!-- button profile --> */}
                <div>
                    <button type="button" 
                        className="h-9 w-9 overflow-hidden rounded-full " onClick={()=>{setProfileDiv(!profileDiv)}}>
                        <img src={profileImageUrl} alt="profile-img" />
                    </button>

                   {/*  <!-- dropdown profile --> */}
                    <div className={["absolute right-2 mt-1 w-48 divide-y divide-grey-100 rounded-md border border-gray bg-white shadow-md",profileDiv?"":" hidden"].join("")}
                        >
                        <div className="flex items-center space-x-2 p-2">
                            <img src={profileImageUrl} alt="profile-img" className="h-9 w-9 rounded-full" />
                            <div className="font-medium">Hafiz Haziq</div>
                        </div>

                        <div className="flex flex-col space-y-3 p-2">
                            <a href="#" className="transition hover:text-blue-600">My Profile</a>
                            <a href="#" className="transition hover:text-blue-600">Edit Profile</a>
                            <a href="#" className="transition hover:text-blue-600">Settings</a>
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

            <div className="flex h-full">
                {/* <!-- aside --> */}
                <aside className={["flex w-72 flex-col space-y-2 border-r-2 border-grey-100 bg-white p-2 h-full ",!aSideOpen?"hidden":""].join("")}
                    >
                    <a href="#" className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-grey-100 ">
                        <span className="text-2xl"><i className="bx bx-home"></i></span>
                        <span>Dashboard</span>
                    </a>

                    <a href="#" className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-grey-100 ">
                        <span className="text-2xl"><i className="bx bx-cart"></i></span>
                        <span>Cart</span>
                    </a>

                    <a href="#" className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-grey-100 ">
                        <span className="text-2xl"><i className="bx bx-shopping-bag"></i></span>
                        <span>Shopping</span>
                    </a>

                    <a href="#" className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-grey-100 ">
                        <span className="text-2xl"><i className="bx bx-heart"></i></span>
                        <span>My Favourite</span>
                    </a>

                    <a href="#" className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-grey-100 ">
                        <span className="text-2xl"><i className="bx bx-user"></i></span>
                        <span>Profile</span>
                    </a>
                </aside>

                {/* <!-- main content page --> */}
                <div className="w-full p-4 h-full"><Outlet/></div>
            </div>
        </main>  
    </div>
  )
}

export default Dashboard