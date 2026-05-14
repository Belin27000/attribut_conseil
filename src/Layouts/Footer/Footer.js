import Bandeau from "@/Assets/Images/Bandeau.webp";
import Charte200 from "@/Assets/Images/chartedeontologieCPF/charte200.webp";
import Charte800 from "@/Assets/Images/chartedeontologieCPF/charte800.webp";
import Cpf1400 from "@/Assets/Images/logo_CPF/logo_CPF_1400.webp";
import Cpf200 from "@/Assets/Images/logo_CPF/logo_CPF_200.webp";
// import Qualiopi200 from '@/Assets/Images/Logo_Qualiopi/Logo_Qualiopi_200.webp';
// import Qualiopi634 from '@/Assets/Images/Logo_Qualiopi/Logo_Qualiopi_634.webp';
import "@/Layouts/Footer/footer.scss";
import React from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import allFiles from "../../_Services/fileToDownload.service.js";
import Handi from "../../Assets/Images/Handicapped.png";
import DownloadFile from "../../Components/FileLink/DownloadFile.js";
import SocialNetwork from "../../Components/SocialNetwork/SocialNetwork.js";
// import GoogleRate from '../../Components/Google/GlobalRate/GoogleRate.js';
// import GoogleMobile from '../../Components/Google/MobileRate/GoogleMobile.js';

const Footer = () => {
  // const QualiopiValidity = data.Qualiopi.validationDate
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="Footer">
      <SocialNetwork />

      <div className="FooterLogoContainer">
        <div className="QualContainer">
          {/* <img className='QualContainer-Pic' width='634' height='339' src={Qualiopi} alt='Logo Qualiopi' /> */}
          <div className="LogoContainer">
            <div className="CpfContainer">
              <img
                className="QualContainer-Pic"
                sizes="(max-width: 1400px) 100vw, 1400px"
                srcSet={`
                        ${Cpf200} 200w,
                        ${Cpf1400} 1400w
                        `}
                width="2647"
                height="1559"
                src={Cpf1400}
                alt="Logo Mon compte formation"
              />
            </div>
            {/* <div className='QualioContainer'>
                            <img className='QualContainer-Pic'
                                sizes="(max-width: 634px) 100vw, 634px"
                                srcSet={`
                            ${Qualiopi200} 200w,
                            ${Qualiopi634} 634w
                            `}
                                width='634'
                                height='339'
                                src={Qualiopi634}
                                alt="Logo Qualiopi" />
                        </div> */}
            <div className="CharteContainer">
              <img
                className="QualContainer-Pic"
                sizes="(max-width: 800px) 100vw, 800px"
                srcSet={`
                        ${Charte200} 200w,
                        ${Charte800} 800w
                        `}
                width="800"
                height="676"
                src={Charte800}
                alt="Logo Charte CPF"
              />
            </div>
          </div>
          {/* <div className='QualContainer-Bloc'>
                        <div className='Qualiopi_stats'>
                            <DownloadFile file={allFiles.QualiopiFiles()} />
                        </div>
                        <p className='QualContainer-Data'>Validé jusqu'au {QualiopiValidity}.</p>
                        <p className='QualContainer-Data'>La certification Qualiopi a été délivrée pour la catégorie d'action suivante :</p>
                        <p className='QualContainer-Data'>Actions de formation et Bilan de compétences</p>
                        <p className='QualContainer-Data'>Délais d'acces aux formations 10 jours maximum</p>
                    </div> */}
        </div>

        <div className="LogoContainer"></div>
      </div>

      <div className="City_Link">
        <h2>Nous trouver en Seine et Marne</h2>
        <ul>
          <li>
            <Link
              to="/bilan-de-competence/bilan-de-competence-fontainebleau"
              onClick={scrollToTop}
            >
              Bilan de competence à Fontainebleau
            </Link>
          </li>
          <li>
            <Link
              to="/bilan-de-competence/bilan-de-competence-melun"
              onClick={scrollToTop}
            >
              Bilan de competence à Melun
            </Link>
          </li>
          <li>
            <Link
              to="/bilan-de-competence/bilan-de-competence-montereau-fault-yonne"
              onClick={scrollToTop}
            >
              Bilan de competence à Montereau-Fault-Yonne
            </Link>
          </li>
          <li>
            <Link
              to="/bilan-de-competence/bilan-de-competence-avon"
              onClick={scrollToTop}
            >
              Bilan de competence à Avon
            </Link>
          </li>
          <li>
            <Link
              to="/bilan-de-competence/bilan-de-competence-provins"
              onClick={scrollToTop}
            >
              Bilan de competence à Provins
            </Link>
          </li>
          <li>
            <Link
              to="/bilan-de-competence/bilan-de-competence-en-ligne"
              onClick={scrollToTop}
            >
              Bilan de competence en ligne
            </Link>
          </li>
          <li>
            <Link
              to="/bilan-de-competence/bilan-de-competence-CPF"
              onClick={scrollToTop}
            >
              Bilan de competence "Mon compte Formation"
            </Link>
          </li>
          <li>
            <Link
              to="/bilan-de-competence/bilan-de-competence-reconversion"
              onClick={scrollToTop}
            >
              Bilan de competence "Reconversion"
            </Link>
          </li>
          <li>
            <Link
              to="/bilan-de-competence/bilan-de-competence-Apec"
              onClick={scrollToTop}
            >
              Bilan de competence "APEC"
            </Link>
          </li>
        </ul>
      </div>
      {/* <div className="Handi">
                <img src={Handi} alt='Handicapped logo' width='220' height='220' />
            </div> */}
      <div className="FooterPictureFont">
        <img width="2480" height="797" src={Bandeau} alt="Header font" />
        {/* <p className='FooterPunchLine'>Spécialiste de la gestion de carrière et de la relation Homme/Travail</p> */}
        <div className="FooterPictureFont-mention">
          <div className="Handi">
            <img
              className="handicap-picture"
              src={Handi}
              alt="Handicap log"
              width="220"
              height="220"
            />
            <DownloadFile
              image={Handi}
              className="FooterFiles"
              file={allFiles.HandiFiles()}
            />
          </div>
          <DownloadFile
            className="FooterFiles"
            file={allFiles.RGPDFiles()}
            dot={false}
          />
          <DownloadFile
            className="FooterFiles"
            file={allFiles.CGUFiles()}
            dot={false}
          />
          <div className="builderRef">
            <p>
              Made with <FaHeart /> By{" "}
              <a
                href="https://conseilsandtechs.com/"
                rel="noreferrer"
                target="_blank"
              >
                Yann LECERF from Conseils & Tech
              </a>
            </p>
          </div>
        </div>
      </div>
      {/* <GoogleRate /> */}
      {/* <div className="ReviewPad">
                <GoogleMobile />
            </div> */}
    </footer>
  );
};

export default Footer;
