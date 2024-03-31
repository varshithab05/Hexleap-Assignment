'use client';
import React, { createContext,useContext,Dispatch,SetStateAction,useState } from "react";

type GlobalContextProviderProps={
    children:React.ReactNode;
};
interface ContextProps{
    limit:number,
    setLimit:Dispatch<SetStateAction<number>>,
    currentIndex:number,
    setCurrentIndex:Dispatch<SetStateAction<number>>,
}

export const GlobalContext = createContext<ContextProps | null>(null);

// const GlobalContext = createContext<ContextProps>({
//     limit:4,
//     setLimit:():number=>0,
// })
export const GlobalContextProvider= ({children}:GlobalContextProviderProps)=>{
    const [limit,setLimit] = useState(5);
    const [currentIndex,setCurrentIndex] = useState(0);
    return(
        <GlobalContext.Provider value={{limit,setLimit,currentIndex,setCurrentIndex}}>
            {children}
        </GlobalContext.Provider>
    )
}
export function useGlobalContext(){
    const context = useContext(GlobalContext);
    if(!context){
        throw new Error("useGlobalContext must be used with in a GlobalConextProvider");
    }
    return context;
}
// export const useGlobalContext = ()=> useContext(GlobalContext)