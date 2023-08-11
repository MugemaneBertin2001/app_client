import { createContext, useContext, useEffect } from "react";

const StateContext = createContext({
    user:null,
    token:null,
    setUser: ()=>{},
    setToken:()=>{}
});
export const ContextProvider = ({children})=>{

    const [user, setUser] = useEffect();
    const [token, _setToken] = useEffect(localStorage.getItem('ACCESS_TOKEN'));

    const setToken = (element)=>{
        _setToken(element);
        if(element){
            localStorage.setItem('ACCESS_TOKEN', token);
        }else{
            localStorage.removeItem('ACCESS_TOKEN');
        }
    }
 
    return(
        <StateContext.Provider value={{
            currentUser,
            token,
            setToken,
            setUser
        }}>{children}

        </StateContext.Provider>
    )
}
export const useStateContext = ()=>useContext(StateContext);