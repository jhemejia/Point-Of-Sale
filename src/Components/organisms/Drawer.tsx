import { useEffect, useState } from 'react'
import { Outlet, Link } from 'react-router-dom';
import Header from '../molecules/Header';


const Dashboard = () => {
    // declare variables
    const [aSideOpen, setASideOpen] = useState(false);
    const [profileDiv, setProfileDiv] = useState(false);
    const profileImageUrl = 'https://picsum.photos/40';

    useEffect(()=>{
        if(profileDiv){
            setTimeout(()=>setProfileDiv(false),3000)
        }
    },[profileDiv])
  return (
    <div className="container min-h-screen min-w-full max-h-screen bg-light-gray text-gray-700" >
        {/* <!-- page -->  */}        
        <main className="h-full bg-light-gray text-gray-700 relative" >
            {/* <!-- header page --> */}
            <div className='flex max-w-full h-14'>
            <Header aSideOpen={aSideOpen} profileDiv={profileDiv} profileImageUrl={profileImageUrl} setASideOpen={setASideOpen} setProfileDiv={setProfileDiv} />
            </div>
            <div className="flex max-h-full">
                {/* <!-- aside --> */}
                <aside className={["flex w-72 h-full flex-col space-y-2 border-r-2 border-grey-100 bg-white p-2 h-full ",!aSideOpen?"hidden":""].join("")}
                    >
                    <Link to='' className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-grey-100 ">
                        <span className="text-2xl"><i className="bx bx-home"></i></span>
                        <span>Dashboard</span>
                    </Link>

                    <Link to='' className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-grey-100 ">
                        <span className="text-2xl"><i className="bx bx-cart"></i></span>
                        <span>Cart</span>
                    </Link>

                    <Link to='' className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-grey-100 ">
                        <span className="text-2xl"><i className="bx bx-shopping-bag"></i></span>
                        <span>Store</span>
                    </Link>

                    <Link to='' className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-grey-100 ">
                        <span className="text-2xl"><i className="bx bx-heart"></i></span>
                        <span>Personel</span>
                    </Link>

                    <Link to="profile" className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-grey-100 ">
                        <span className="text-2xl"><i className="bx bx-user"></i></span>
                        <span>Profile</span>
                    </Link>
                </aside>

                {/* <!-- main content page --> */}
                <div className="flex items-center max-w-full h-full "><Outlet/></div>
            </div>
        </main>  
    </div>
  )
}

export default Dashboard