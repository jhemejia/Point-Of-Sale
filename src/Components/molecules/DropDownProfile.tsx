import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { removeUser, selectUser } from '../../Reducers/UserSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useAuth } from '../../Services/FirebaseService'


const DropDownProfile = () => {
    const defProfilePic = "/USER-IMAGEN-DEF.jpeg"
    const [profileDiv, setProfileDiv] = useState(false);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const auth = useAuth()
    const user = useSelector(selectUser)

    useEffect(()=>{
        if(profileDiv){
            setTimeout(()=>setProfileDiv(false),3000)
        }
    },[profileDiv])

    const signOut = async()=>{
        const loggedOut = await auth.signOutUser();
        if(loggedOut){
            dispatch(removeUser())
            navigate("/")
        }
   }
  return (
    <div>
        <button type="button" className="h-9 w-9 overflow-hidden rounded-full flex justify-center" onClick={()=>{setProfileDiv(!profileDiv)}}>
            <img src={user?.photoUrl || defProfilePic} alt="profile-img" />
        </button>
       {/*  <!-- dropdown profile --> */}
       <div className={["absolute right-2 mt-4 w-48 divide-y divide-gray-100 text-gray-700 rounded-md border z-50 border-gray bg-white shadow-md ",profileDiv?"":" hidden"].join("")}
                        >
                        <div className="flex items-center space-x-2 p-2 z-30">
                            <img src={user?.photoUrl || defProfilePic} alt="profile-img" className="h-9 w-9 rounded-full bg-transparent" />
                            <div className="font-medium">{user?.name || 'Unknown User'}</div>
                        </div>

                        <div className="flex flex-col space-y-3 p-2">
                            <Link to="/main/profile" className="transition hover:text-blue-600" >My Profile</Link>
                            <Link to='' className="transition hover:text-blue-600">Edit Profile</Link>
                            <Link to='' className="transition hover:text-blue-600">Settings</Link>
                        </div>

                        <div className="p-2">
                            <button className="flex items-center space-x-2 transition hover:text-blue-600" onClick={signOut}>
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
  )
}

export default DropDownProfile
