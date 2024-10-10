import React, { useContext} from "react"; 
import {ThemeContext} from "./ThemeProvider"; 

const ThemeComponent = () => {
    const {theme, toogleTheme} = useContext(ThemeContext); 

    const styles = {
        container: {
            backgroundColor: theme === "claro ? "#fff": "#333",
            color: theme === "claro" ? "000" : "#fff",
            heigth: "100vh",
            diplay :"flex",
            flexDirection: "column",
            JustifiContent: "Center"
            alignItems: "center",
            Transition: "all 0.3s ease"; 
        }; 

        button: {
            backgroundColor: theme === "claro ? "#fff": "#333",
            color: theme === "claro" ? "000" : "#fff", 
            border: "none";
            heigth: "100vh";
            diplay :"flex";
            flexDirection: "column";
            JustifiContent: "Center"
            alignItems: "center";
            Transition: "all 0.3s ease"; 
        }; 
            
    };
};