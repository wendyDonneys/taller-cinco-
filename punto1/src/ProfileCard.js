import React from "react"; 
import './styles/profileCard.css'; 
import img from "./assets/WM.jpg"

function ProfileCard () {
    return (
        <div className="profile-card">
            <img src= {img} alt = "profile"/>
            < h2 className="profile-name"> Wendy Maylin Donneys </h2>
            <p className="profile-description">Estudiante de Desarrollo de software y bootcamp Keykode 2024 con experiencia en JavaScript, React y Node.js.</p>
        </div>

    );
}

export default ProfileCard; 