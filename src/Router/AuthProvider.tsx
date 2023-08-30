import { useState, useEffect, createContext, ReactNode } from 'react'
import { Navigate  } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AuthState, selectUser } from '../Reducers/UserSlice';

export const AuthContext = createContext<AuthState|null>({} as AuthState)

interface AuthProviderProps {
    children?: ReactNode
  }

const AuthProvider = ({ children }: AuthProviderProps) => {
    const loggedUser = useSelector(selectUser);
    const [user, setUser] = useState<AuthState | null>(loggedUser);

    useEffect(() => {
        setUser(loggedUser);
    }, [loggedUser]);
    
    console.log(user)
    return (
    <AuthContext.Provider value={user}>
        { user? children : <Navigate to={"/login"}/>}
    </AuthContext.Provider>
    )
  };

export default AuthProvider
