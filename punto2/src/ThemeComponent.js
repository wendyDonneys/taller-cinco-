import React, { useContext, useTransition} from "react"; 
import {ThemeContext} from "./ThemeProvider"; 

const ThemeComponent = () => {
    const {theme, toogleTheme} = useContext(ThemeContext); 

    const styles = {
        container: {
            backgroundColor: theme === "claro" ? "#fff": "#333",
            color: theme === "oscuro" ? "000" : "#fff",
            heigth: "100vh",
            diplay : "flex",
            alignitems: "center",
            flexDirection: "column",
            JustifiContent: "Center"
            transition: width 0.3s ease;
            cursor: pointer;
            
        },

        button: {
            backgroundColor: theme === "claro" ? "#fff": "#333",
            color: theme === "claro" ? "000" : "#fff", 
            border: "none",
            heigth: "100vh",
            diplay : "flex",
            alignitems: "center",
            flexDirection: "column",
            JustifiContent: "Center" 
            transition: width 0.3s ease;
            cursor: pointer;
        },
            
    };
};

