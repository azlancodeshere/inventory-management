import { createContext, useState, useEffect } from "react";

import api from "../api/api.js"

const AuthContext = createContext();

function AuthProvider({children}){
    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)


const logout = async () =>{
     try {
        await api.post("/users/logout");
        setUser(null)
        setIsAuthenticated(false)
     } catch (error) {

        console.log("logout error:", error)
        
     }
}

const getCurrentUser = async () =>{
    try {
        const response = await api.get("/users/current-user");
        setUser(response.data.data)
        setIsAuthenticated(true);

    } catch (error) {
        setUser(null);
        setIsAuthenticated(false);
        console.log("Backend error:", error)

         if (error.response?.status !== 401) {
            console.log("Backend error:", error);
        }
        
    }

   
}

 useEffect(()=>{
        getCurrentUser();

    },
[]);


const authValue ={
    user,
    setUser,
    logout,
    isAuthenticated,
    setIsAuthenticated
}

return(
    <AuthContext.Provider value={authValue}>
        {children}
    </AuthContext.Provider>
);

}
export {AuthContext, AuthProvider}