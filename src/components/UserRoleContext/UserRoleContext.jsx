import { createContext, useContext, useState } from "react";

const UserRoleContext = createContext();

export function useUserRole(){
    const context = useContext(UserRoleContext);
    if (!context){
        throw new Error("useUserRole must be used within the UserRoleProvider");
    }
    return context;
}

export function UserRoleProvider({children}){
    const [userRole, setUserRole] = useState("");
    
    return(
        <UserRoleContext.Provider value={{userRole, setUserRole}}>
            {children}
        </UserRoleContext.Provider>
    )
}