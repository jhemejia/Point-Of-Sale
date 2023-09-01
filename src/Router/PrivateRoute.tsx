import { useState, useEffect, ReactNode } from 'react'
import { Navigate  } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { UserData, selectUser } from '../Reducers/UserSlice';

interface PrivateRouteProps {
    children?: ReactNode
  }

const PrivateRoute = ({ children }: PrivateRouteProps) => {
    const loggedUser = useSelector(selectUser);
    const [user, setUser] = useState<UserData|null>(loggedUser);

    useEffect(() => {
        setUser(loggedUser);
        localStorage.setItem("user",JSON.stringify(loggedUser))
    }, [loggedUser]);
    
    return (
    <>
        { user ? children : <Navigate to={"/login"}/>}
    </>
    )
  };

export default PrivateRoute
