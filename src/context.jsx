import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

const getInitialDarkMode = () =>{
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme:dark)').matches;
    const storedDarkTheme = localStorage.getItem('darkTheme') === 'true';
    return storedDarkTheme || prefersDarkMode;
}

const AppProvider = ({children}) =>{
    const[darkTheme, setDarkTheme] = useState(getInitialDarkMode());
    const [searchTerm, setSearchTerm] = useState("cat");
   const toggleDarkTheme = () =>{
       const newDarkTheme = !darkTheme;
       setDarkTheme(newDarkTheme);
       localStorage.setItem('darkTheme', newDarkTheme)
   }

   useEffect(()=>{
       const body = document.querySelector("body");
       body.classList.toggle("dark-theme", darkTheme);
   }, [darkTheme])
    return <AppContext.Provider value={{darkTheme, toggleDarkTheme, searchTerm, setSearchTerm}}>
        {children}
    </AppContext.Provider>
}
export const useGlobalContext = () =>{
    return useContext(AppContext)
}
export {AppProvider}