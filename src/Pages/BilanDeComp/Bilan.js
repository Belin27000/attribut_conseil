import React from "react";
// import { Link } from 'react-router-dom';
// import { FaStar } from "react-icons/fa";
import Calendar from "@/Assets/Images/Calendar.png";
import Crown from "@/Assets/Images/Crown.png";
import Euro from "@/Assets/Images/Euro.png";
import Qualiopi from "@/Assets/Images/Logo_Qualiopi.png";
import MobileHand from "@/Assets/Images/MobileHand.png";
import LogoTree from "@/Assets/Images/Tree.png";
import Visio from "@/Assets/Images/Visio.png";
import Basket from "@/Assets/video/Basket.mp4";
import climb from "@/Assets/video/Grimpeur.mp4";
import Secret from "@/Assets/video/Secret.mp4";
import ContactButton from "@/Components/Button/ContactButton.js";
import ScrollToTop from "@/Components/Button/ScrollButton/ScrollToTop.js";
import TelButton from "@/Components/Button/TelButton/TelButton.js";
import GoogleWidget from "@/Components/Google/GoogleWidget/GoogleWidget.js";
import MetaTitleDes from "@/Components/Meta/MetaTitleDes.js";
import Movie from "@/Components/Movie/Movie.js";
import Questions from "@/Components/Questions/Questions.js";
import allFiles from "@/_Services/fileToDownload.service.js";
import Dday from "../../Components/Dday/Dday.js";
import DownloadFile from "../../Components/FileLink/DownloadFile.js";
import "./bilan.scss";

const Fontainebleau = () => {
  // const ville = 'Fontainebleau';
  const metaTitle = `Attribut Conseils - Bilan de compétences`;
  const metaDescription = `Vous cherchez à réaliser votre bilan de compétence? Contactez-nous !`;

  return (
    <section className="Bilan">
      <MetaTitleDes title={metaTitle} description={metaDescription} />

      <h1>
        <span>Votre</span>
        <br /> BILAN DE COMPÉTENCES
      </h1>
      <p className="Bilan_Yellow">
        Construisez
        <br />
        l’avenir professionnel <br />
        <span>qui vous ressemble</span>
      </p>
      <div className="Bilan container-img">
        <img
          className="Tree"
          src={LogoTree}
          alt="Logo arbre Attribut conseils"
          width={1002}
          height={633}
        />
      </div>
      <article className="Bilan-article">
        <p>
          Bonjour,
          <br />
          Enchantée et bienvenue. Si vous êtes ici, c’est que vous cherchez
          potentiellement à transformer ou à faire évoluer votre carrière
          professionnelle. Pour sortir d’une impasse professionnelle ou donner
          du sens à votre carrière, optimiser vos compétences ou vous redonner
          confiance en vous. Quel que soit votre objectif, nous sommes là pour
          vous accompagner dans cette démarche.
        </p>
      </article>
      <article className="timeline right-container topDot articleCertif">
        <h2>Qu’est ce qu’un bilan de compétences?</h2>
        <div className="articleCertif-container">
          <div className="articleCertif-container-text">
            <p>
              Le bilan de compétences est un dispositif puissant pour
              (re)positionner professionnellement, après avoir identifié vos
              potentialités et vos aspirations et de les avoir confrontés aux
              réalités du marché ou du contexte de votre entreprise.
            </p>
            <p>
              A travers l'analyse dynamique de votre parcours personnel et
              professionnel dans un objectif de réussite et pour atteindre un
              résultat concret! Il permet également d'agir en s'appuyant sur une
              meilleure connaissance de soi, à partir d'un projet clair et un
              plan d'action défini.
            </p>
          </div>
        </div>
      </article>
      <article className="timeline right-container topDot withMovie">
        <h3>Qui peut faire un bilan de compétences ?</h3>
        <div>
          <p>
            Le cabinet ATTRIBUT CONSEILS spécialisé dans la gestion de carrière
            professionnelle réalisent des <b>bilans de compétences</b> pour tous
            types de profils. Que vous exerciez un métier dans le public ou le
            privé, quel que soit votre niveau, votre statut et votre secteur
            d’activité.{" "}
          </p>
          <div className="movie-container">
            <Movie src={climb} />
          </div>
        </div>
      </article>
      <TelButton number="06 98 88 15 55" />
      <article className="timeline left-container withMovie">
        <div>
          <h2>Comment se déroule un bilan de compétences ?</h2>
          <p>
            Vous êtes accompagné sur une durée de 3 mois en moyenne par un
            consultant expert durant 24 heures, dont 16 heures de séances en
            face à face, des heures de tests et des temps d'investigation
            personnelle.
          </p>
          <p>
            Un entretien de suivi est organisé 6 mois après la fin du bilan pour
            faire le point sur l’avancement du projet.
          </p>
          <p>
            Un premier entretien gratuit et sans engagement permet, avant de
            démarrer la démarche, de faire connaissance avec le consultant, de
            poser des questions sur le processus, et d’exposer votre situation
            et vos attentes
          </p>
        </div>
        <div className="movie-container">
          <Movie src={Basket} />
        </div>
      </article>
      <article className="timeline left-container last ">
        <h3 className="text-centered">Les étapes de votre accompagnement </h3>
        <div>
          <ul>
            <li>
              <p className="text-end">
                <b>Une phase préliminaire qui a pour objet :</b>
              </p>
            </li>
            <li>
              <p>d'analyser votre besoin</p>
            </li>
            <li>
              <p> de déterminer le format le plus adapté</p>
            </li>
            <li>
              <p>
                {" "}
                de définir conjointement les modalités de déroulement du bilan,
                les méthodes et techniques.
              </p>
            </li>
            <li>
              <p className="text-end">
                <b>Une phase d'investigation</b> permettant au bénéficiaire soit
                de construire son projet professionnel et d'en vérifier la
                pertinence, soit d'élaborer une ou plusieurs alternatives.
              </p>
            </li>
            <li>
              <p className="text-end">
                <b>Une phase de conclusion pour :</b>
              </p>
            </li>
            <li>
              <p>
                s'approprier les résultats détaillés de la phase
                d'investigation{" "}
              </p>
            </li>
            <li>
              <p>
                recenser les conditions et moyens favorisant la réalisation du
                ou des projets professionnels ;
              </p>
            </li>
            <li>
              <p>
                prévoir les principales modalités et étapes du ou des projets
                professionnels, dont la possibilité de bénéficier d'un entretien
                de suivi avec votre consultant.
              </p>
            </li>
          </ul>
        </div>
      </article>
      <article className="timeline right-container downDot withMovie">
        <div className="secret">
          <p>
            À l'issue du bilan, une synthèse est réalisée par votre consultant.
            La synthèse est confidentielle et vous appartient.
          </p>
          <p>
            ATTRIBUT CONSEILS est tenu de respecter le caractère confidentiel
            des informations données et est soumis au{" "}
            <b>secret professionnel.</b>
          </p>
        </div>
        <div className="movie-container">
          <Movie src={Secret} />
        </div>
      </article>

      <div className="MobileHand-img">
        <img
          className="Tree"
          src={MobileHand}
          alt="Contacter Attribut conseils"
          width={450}
          height={500}
        />
        <div className="infoOnMobile">
          <h3>PARLEZ NOUS DE VOTRE SITUATION</h3>
          <p>
            Quelque soit votre objectif, Contactez attribut conseils pour une
            analyse de situation et informations sur le processus bilan de
            compétences. Entretien gratuit et sans engagement.
          </p>
          <p>A VOTRE ECOUTE</p>
          <TelButton number="06 98 88 15 55" />
        </div>
      </div>
      <div className="Bilan-oblique">
        <div className="oblique-Left">
          <p>
            Avec plus de 16 ans d'expérience à notre actif, nous sommes l'un des
            meilleurs cabinets pour toutes les problématiques concernant la
            relation au travail. Notre équipe est constituée de psychologues du
            travail, de consultants experts bilan, d'ingénieurs de formation, de
            spécialistes en coaching, d'anciens RH et dirigeants d'entreprise.
          </p>
          <p>
            En tant que leader, Attribut Conseils aide des centaines de salariés
            chaque année. Vous pouvez recourir à nos services que vous soyez en
            présentiel ou en visio, nos accompagnements sont individualisés et
            personnalisés.{" "}
          </p>
        </div>
        <div className="oblique-Right">
          <ul className="oblique-Right_list">
            <li className="subList">
              <ul className="subList-text-list">
                <li className="subList-Yellow small">
                  Du lundi au samedi inclus
                </li>
                <li className="subList-Yellow">De 8h30 à 20h</li>
                <li>
                  Des horaires adaptés aux vôtres, pour prendre le temps de bien
                  faire
                </li>
              </ul>
            </li>
            <li className="subList_imgCont">
              {" "}
              <img
                className="Calendar"
                src={Calendar}
                alt="Logo calendrier Attribut conseils"
                width={750}
                height={750}
              />{" "}
            </li>
          </ul>
          <ul className="oblique-Right_list">
            <li className="subList">
              <ul className="subList-text-list">
                <li className="subList-Yellow small">
                  100% visio/100% présentiel ou mixte
                </li>
                <li className="subList-Yellow">Au choix</li>
                <li>
                  Pas de plateforme digitale impersonnelle, que des consultants
                  diplômés
                </li>
              </ul>
            </li>
            <li className="subList_imgCont">
              {" "}
              <img
                className="Visio"
                src={Visio}
                alt="Logo personne devant un bureau"
                width={750}
                height={750}
              />{" "}
            </li>
          </ul>
          <ul className="oblique-Right_list">
            <li className="subList">
              <ul className="subList-text-list">
                <li className="subList-Yellow small">
                  Tous les accompagnements
                </li>
                <li className="subList-Yellow">
                  100% financés par votre CPF po par le PDC
                </li>
                <li>
                  La gestion de votre carrière avec des experts, entièrement
                  prise en charge
                </li>
              </ul>
            </li>
            <li className="subList_imgCont">
              {" "}
              <img
                className="Euro"
                src={Euro}
                alt="Logo euro jaune"
                width={750}
                height={750}
              />{" "}
            </li>
          </ul>
          <ul className="oblique-Right_list">
            <li className="subList">
              <ul className="subList-text-list">
                <li className="subList-Yellow small">
                  Experts en gestion de carrière
                </li>
                <li className="subList-Yellow">depuis 20 ans</li>
                <li>
                  5000 personnes accompagnées Certification qualité Qualiopi
                </li>
              </ul>
            </li>
            <li className="subList_imgCont">
              <div>
                <img
                  className="Crown"
                  src={Crown}
                  alt="Logo couronne de laurier jaune"
                  width={750}
                  height={750}
                />
                <img
                  className="Qualiopi-list"
                  src={Qualiopi}
                  alt="Logo Qualiopi"
                  width={634}
                  height={339}
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="Qualiopi_stats">
        <DownloadFile file={[allFiles.fileList()[0]]} dot={false} />
      </div>
      <article className="timeline right-container topDot withMovie">
        <h2>Comment financer mon bilan de compétences? </h2>
        <div className="col">
          <p>
            Le prix d’un bilan se situe entre{" "}
            <b>1000€ pour un bilan flash et 2240€</b>. Le financement d’un bilan
            de compétences dépend de votre situation, statut et des modalités
            souhaitées.
          </p>
          <p>
            Pour financer le bilan de compétences vous avez 4 possibilités :
            utiliser vos droits <b>CPF</b>, le plan de développement des
            compétences de votre employeur, France Travail ou le financement
            personnel.
          </p>
          <p>
            Vous pouvez effectuer le bilan de compétences sur le temps de
            travail ou hors temps de travail sans prévenir votre employeur. Nous
            sommes habilité France Travail, Qualiopi pour le plan de
            développement des compétences et sur le CPF.{" "}
          </p>
        </div>
      </article>
      <ContactButton text="Je demande le programme du bilan de compétences" />
      <GoogleWidget />
      <TelButton number="06 98 88 15 55" />
      <div className="Qualiopi_stats">
        <DownloadFile file={[allFiles.fileList()[1]]} dot={false} />
      </div>
      <Questions tag="all" ville="Fontainebleau" />
      <Dday />
      <ScrollToTop />
    </section>
  );
};

export default Fontainebleau;
