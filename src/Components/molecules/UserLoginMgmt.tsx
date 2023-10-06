import { selectUser } from '../../Reducers/UserSlice'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import DropDownProfile from './DropDownProfile'

const UserLoginMgmt = () => {
    const navigate = useNavigate()
    const user = useSelector(selectUser)

    if(user){
        return <DropDownProfile />
    }

  return (
    <div className="flex flex-nowrap items-center w-full h-full justify-center md:justify-end mx-2 relative">
                            <button onClick={()=>navigate("/login")} className="mx-auto md:mx-3 rounded bg-white px-4 py-1 text-gray-700 font-medium hover:text-gray-500 shadow outline-none">Login</button>
                            <button onClick={()=>navigate("/signup")}
                                className="mx-auto md:mx-3 px-4 py-2 text-xs font-bold text-white uppercase transition-all duration-150 bg-green-500 rounded shadow outline-none active:bg-green-600 hover:shadow-md focus:outline-none ease">
                                Sign Up
                            </button>
                        </div>
  )
}

export default UserLoginMgmt
