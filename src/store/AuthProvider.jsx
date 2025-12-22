import { useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export function AuthProvider({ children }) {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const storedUser = localStorage.getItem('user')
        if(storedUser) setUser(storedUser)

     }, [])

    const login = () => { 
        localStorage.setItem('user', true)
        setUser(true)
    }

    const logout = () => { }

    const value = {
        user,
        loading,
        login,
        logout,
        isAuthenticated: !!user
    }

    return (
        <AuthContext.Provider value={value} >
            {children}
        </AuthContext.Provider>
    )
}