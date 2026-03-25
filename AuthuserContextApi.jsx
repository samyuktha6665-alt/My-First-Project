import React, { createContext, useState } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { _Auth } from '../Backend/BackendBaas'
import { toast } from 'react-hot-toast'

export const AuthUser = createContext()

const AuthuserContextApi = ({ children }) => {

    let [userData, setUserData] = useState(null)

    onAuthStateChanged(_Auth, (useData) => {
        if (useData && useData.emailVerified === true) {
            setUserData(useData)
        } else {
            setUserData(null)
        }
    })

    function logout() {
        signOut(_Auth)
        setUserData(null)
        toast.success("Logged Out")
    }

    return (
        <AuthUser.Provider value={{ userData, logout }}>
            {children}
        </AuthUser.Provider>
    )
}

export default AuthuserContextApi