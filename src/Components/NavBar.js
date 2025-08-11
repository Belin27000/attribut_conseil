import "@/Components/navBar.scss";
import React, { useEffect, useState } from "react";
import { FaAngleLeft, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
// import GoogleMobile from './Google/MobileRate/GoogleMobile.js';

const NavBarTest = () => {
  const [toggleMenu, setToogleMenu] = useState(false);
  const [toggleCarrer, setToggleCarrer] = useState(false);
  const [toggleTraining, setToggleTraining] = useState(false);
  const [toggleInge, setToggleInge] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [showEntrepriseSubMenu, setShowEntrepriseSubMenu] = useState(false);
  const [showOrganismeSubMenu, setShowOrganismeSubMenu] = useState(false);

  const toggleEntrepriseSubMenu = () => {
    setShowOrganismeSubMenu(false);
    setToggleInge(true);
    setShowEntrepriseSubMenu(!showEntrepriseSubMenu);
  };

  const toggleOrganismeSubMenu = () => {
    setShowEntrepriseSubMenu(false);
    setShowOrganismeSubMenu(!showOrganismeSubMenu);
  };

  const toggleNav = () => {
    setToogleMenu(!toggleMenu);
    setToggleCarrer(false);
    setToggleTraining(false);
    setToggleInge(false);
    setShowEntrepriseSubMenu(false);
    setShowOrganismeSubMenu(false);
  };

  const toggleCarrerNav = () => {
    setToggleCarrer(!toggleCarrer);
    setToggleInge(false);
    setToggleTraining(false);
    setShowEntrepriseSubMenu(false);
    setShowOrganismeSubMenu(false);
  };

  const toggleTrainingNav = () => {
    setToggleCarrer(false);
    setToggleInge(false);
    setToggleTraining(!toggleTraining);
    setShowEntrepriseSubMenu(false);
    setShowOrganismeSubMenu(false);
  };

  const toggleIngeNav = () => {
    setToggleCarrer(false);
    setToggleTraining(false);
    setToggleInge(!toggleInge);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);
  return (
    <nav>
      {(!toggleMenu || screenWidth > 1024) && (
        <div className="ReviewMobile">{/* <GoogleMobile /> */}</div>
      )}
      {(toggleMenu || screenWidth > 1024) && (
        <ul className="list">
          <li>
            <Link to="/home" className="items" onClick={toggleNav}>
              <div>Accueil</div>
            </Link>
          </li>
          <li>
            <Link to="/about" className="items" onClick={toggleNav}>
              <div>Qui sommes nous</div>
            </Link>
          </li>
          <li
            className="items"
            onMouseEnter={toggleCarrerNav}
            onMouseLeave={toggleCarrerNav}
          >
            <div>Gestion emploi et carrière</div>
            {toggleCarrer && (
              // {true && (
              <ul className="sub-list">
                <li>
                  <Link to="/bilan-de-competence" onClick={toggleNav}>
                    <div>Bilan de compétences</div>
                  </Link>
                </li>
                <li>
                  <Link to="/vae" onClick={toggleNav}>
                    <div>VAE</div>
                  </Link>
                </li>
                <li>
                  <Link to="/orientation_des_jeunes" onClick={toggleNav}>
                    <div>Orientation jeunes</div>
                  </Link>
                </li>
                {/* <li>
                  <Link to="/outplacement" onClick={toggleNav}>
                    <div>Outplacement</div>
                  </Link>
                </li> */}
                <li>
                  <Link to="/outplacement" onClick={toggleNav}>
                    <div>Outplacement</div>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/accompagnement_a_la_recherche_emploi"
                    onClick={toggleNav}
                  >
                    <div>Accompagnement à la recherche d’emploi</div>
                  </Link>
                </li>
                <li>
                  <Link to="/coaching" onClick={toggleNav}>
                    <div translate="no">Coaching</div>
                  </Link>
                </li>
                <li>
                  <Link to="/psychologie_du_travail" onClick={toggleNav}>
                    <div>Psychologie du travail</div>
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li
            className="items"
            onMouseEnter={toggleTrainingNav}
            onMouseLeave={toggleTrainingNav}
          >
            Formation
            {toggleTraining && (
              // {true && (
              <ul className="sub-list">
                <li>
                  <Link
                    to="/formation_creation_entreprise "
                    onClick={toggleNav}
                  >
                    <div>Accompagnement à la création d’entreprise</div>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/formation_metier_formateur_adultes"
                    onClick={toggleNav}
                  >
                    <div>Formation de formateur</div>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/formation_metier_consultant_en_gestion_de_carrieres"
                    onClick={toggleNav}
                  >
                    <div>Formation consultant en bilan/conseiller emploi</div>
                  </Link>
                </li>
                <li>
                  <Link to="/groupe_analyse_de_pratiques" onClick={toggleNav}>
                    <div>Formation analyse de pratiques</div>
                  </Link>
                </li>
                <li>
                  <Link to="/formation_co-developpement" onClick={toggleNav}>
                    <div>Formation Co-Développement</div>
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li
            className="items"
            onMouseEnter={toggleIngeNav}
            onMouseLeave={toggleIngeNav}
          >
            Ingenierie et administration de la formation
            {toggleInge && (
              // {true && (
              <ul className="sub-list">
                {/* <li onMouseEnter={toggleEntrepriseSubMenu} onMouseLeave={toggleEntrepriseSubMenu}> */}
                <li
                  onMouseEnter={toggleEntrepriseSubMenu}
                  onMouseLeave={toggleEntrepriseSubMenu}
                >
                  <FaAngleLeft />
                  Entreprise
                  {showEntrepriseSubMenu && (
                    // {true && (
                    <ul className="sous-menu">
                      <li>
                        <Link to="/entretien_professionnel" onClick={toggleNav}>
                          <div>entretiens professionnels</div>
                        </Link>
                      </li>
                      <li>
                        <Link to="/gestion_RH_externalisee" onClick={toggleNav}>
                          <div>gestion RH externalisée</div>
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <Link
                    to="/ingenierie_formation"
                    className="items"
                    onClick={toggleNav}
                  >
                    <div>Ingénierie de la formation</div>
                  </Link>
                </li>
                <li
                  onMouseEnter={toggleOrganismeSubMenu}
                  onMouseLeave={toggleOrganismeSubMenu}
                >
                  <FaAngleLeft />
                  Organisme de formation
                  {showOrganismeSubMenu && (
                    // {true && (
                    <ul className="sous-menu">
                      <li>
                        <Link
                          to="/gestion_Formation_externalisee"
                          onClick={toggleNav}
                        >
                          <div>Gestion externalisée de la formation</div>
                        </Link>
                      </li>
                      {/* <li><Link to="/qualiopi" onClick={toggleNav} ><div>Qualiopi</div></Link></li> */}
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link to="/blog" className="items" onClick={toggleNav}>
              <div>Blog</div>
            </Link>
          </li>
        </ul>
      )}
      <button onClick={toggleNav} className="btn" aria-label="Menu">
        <FaBars className={!toggleMenu ? "iconMenu isActive" : "iconMenu"} />
        <FaTimes
          className={toggleMenu ? "closeIconMenu isActive" : "iconMenu"}
        />
      </button>
    </nav>
  );
};

export default NavBarTest;
