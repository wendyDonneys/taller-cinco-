import React, {createContext, useState} from "react";

//contexto
export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => { 
    const [theme, setTheme] = useState ("claro"); 

//Función 
const toggleTheme = () => {
    setTheme ((prevTheme) => (prevTheme === "claro" ? "oscuro": "claro")); 
}; 

return (
    <ThemeContext.Provider value = {{ theme, toogleTheme}}>
        {children}
    </ThemeContext.Provider>

);


}; 
