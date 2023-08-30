import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import AsyncButton from "../atoms/AsyncButton";
import { useAuth } from '../../Services/FirebaseService';
import { useDispatch } from 'react-redux';
import { logUser } from '../../Reducers/UserSlice';

interface UserData{
    email: string
    password: string
}

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const auth = useAuth();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const initialState = {
        email: "",
        password: ""
    }
    const [userData, setUserData ] = useState<UserData>(initialState);
    const email = "test@1234test.com"
    const password = "123A!abc"

    useEffect(()=>{
        setUserData({
            email: email,
            password: password
        })
    },[])

    const handleChange = ( event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        const { name, value } = event.target;
        setUserData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
    }


    const handleFormSubmit = async(event:any)=>{
        event.preventDefault();
        try{
            setIsLoading(true)
            const loggedUser = await auth.signInWithEmail(userData.email, userData.password)
            dispatch(logUser(loggedUser))
            console.log(loggedUser)
            navigate("/main")
        }catch(error){
            console.log(error)
        } finally{
            setUserData(initialState)
            setIsLoading(false)
        }
    }
    
    const handleGoogleLogin = async()=>{
        try{
            const userCredential =  auth.signInwithGoogle()
            console.log(userCredential)
        } catch(error){
            console.log(error)
        } 
    }
    
  return (
    <>
    <section className="flex flex-col md:flex-row h-screen items-center">
        <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
            <img src="https://source.unsplash.com/random" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
                flex items-center justify-center">
            <div className="w-full h-100">
                <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Log in to your account</h1>
                <form className="mt-6" onSubmit={handleFormSubmit}>
                    <div>
                        <label className="block text-gray-700">Email Address</label>
                        <input type="email" onChange={handleChange} value={userData.email} name="email" id="login-email" placeholder="Enter Email Address" className="w-full px-4 py-3 mt-2 text-gray-700 bg-white border border-gray-500 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" required/>
                    </div>
                    <div className="mt-4">
                        <label className="block text-gray-700">Password</label>
                        <input type="password" onChange={handleChange} value={userData.password} name="password" id="login-password" placeholder="Enter Password" minLength={6} className="w-full px-4 py-3 mt-2 text-gray-700 bg-white border border-gray-500 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" required/>
                    </div>
                    <div className="text-right mt-2">
                        <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
                    </div>
                    <AsyncButton text={"Log In"} isLoading={isLoading} />
                </form>
                <div className="my-6 border-gray-300 w-full">
                    <button type="button" onClick={handleGoogleLogin} className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-200 hover:border-blue-400 dark:hover:border-blue-300 hover:outline-none hover:ring hover:ring-opacity-40 hover:ring-blue-300">
                        <div className="flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="w-6 h-6" viewBox="0 0 48 48"><defs><path id="a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"/></defs><clipPath id="b"><use xlinkHref="#a" overflow="visible"/></clipPath><path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z"/><path clipPath="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z"/><path clipPath="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z"/><path clipPath="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z"/></svg>
                        <span className="ml-4">
                        Log in with Google</span>
                        </div>
                    </button>
                    <p className="mt-8">Need an account? <button onClick={()=>navigate("/signup")} className="text-blue-500 hover:text-blue-700 font-semibold">Create an account</button></p>
                </div>
            </div>
        </div>
        </section> 
    </>
  )
}

export default Login