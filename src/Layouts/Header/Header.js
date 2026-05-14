import React, { useEffect } from "react";
import Bandeau from "@/Assets/Images/Bandeau.webp";
// import logo_Attribut from '@/Assets/Images/logo_Attribut.png'
import logo_Attribut from "@/Assets/Images/logo_Attribut_Blanc.png";
// import logo_Attribut from '@/Assets/Images/logo_Attribut.webp'
// import logo_soleil from '@/Assets/Images/Logo_soleil.png'
// import logo_soleil from '@/Assets/Images/Logo_soleil.webp'
import "@/Layouts/Header/header.scss";
// import ContactButton from '../../Components/Button/ContactButton.js';
import NavBar from "@/Components/NavBar.js";
import { Link } from "react-router-dom";
// import ContactButton from '../../Components/Button/ContactButton.js';

const Header = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <header className="Header">
      <NavBar />
      <Link to={"/home"} className="PictureFont">
        <img
          className="Bandeau"
          src={Bandeau}
          alt="Header font"
          width="2480"
          height="797"
        />
        <p className="HeaderText">Expert de la relation homme/travail</p>
      </Link>
      <Link to={"/home"} className="Logos">
        <div className="LogoContainerAc">
          <img
            width="600"
            height="600"
            className="LogoAc"
            src={logo_Attribut}
            alt="Attribut Conseil Logo"
          />
        </div>
      </Link>
    </header>
  );
};

export default Header;
