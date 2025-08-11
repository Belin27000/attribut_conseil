import Movie from "@/Components/Movie/Movie.js";
import MeetingMovie from "../../Assets/video/Meeting.mp4";
import TeamMotivation from "../../Assets/video/TeamMotivation.mp4";
// import Questions from '@/Components/Questions/Questions.js';
import Percent from "@/Assets/Images/Arrow90percent.png";
import Boat from "@/Assets/Images/Aviron.png";
import BlueDot from "@/Assets/Images/BlueDot.svg";
import Chrono from "@/Assets/Images/Chrono.png";
import Confidential from "@/Assets/Images/Confidential.png";
import verticalDots from "@/Assets/Images/LightverticalDots.png";
import MedailleRuban from "@/Assets/Images/MedailleRuban.png";
import Meeting from "@/Assets/Images/Meeting.png";
import PictoOrga from "@/Assets/Images/PictoOrga.png";
import Target from "@/Assets/Images/target.png";
import LogoTree from "@/Assets/Images/Tree.png";
import VoicePicto from "@/Assets/Images/VoicePicto.png";
import ScrollToTop from "@/Components/Button/ScrollButton/ScrollToTop.js";
import CircleDotV2 from "@/Components/CircleDot/CircleDotV2.js";
import GoogleWidget from "@/Components/Google/GoogleWidget/GoogleWidget.js";
import MetaTitleDes from "@/Components/Meta/MetaTitleDes.js";

import React from "react";

import "./coDev.scss";

const CoDev = () => {
  const metaTitle = `Faire son bilan de compétences avec l’APEC`;
  const metaDescription = `Vous souhaitez réaliser un bilan de compétences avec l’APEC mais vous ne savez pas quelles sont les démarches à effectuer ? Laissez-nous vous guider !`;
  return (
    <section className="CoDev">
      <MetaTitleDes title={metaTitle} description={metaDescription} />

      <h1>
        <span>Formation</span>
        <br />
        CO-DÉVELOPPEMENT{" "}
      </h1>
      <p className="CoDev_p">ACTION LEARNING.</p>
      <p className="CoDev_p_Yellow">
        REPENSER SA POSTURE POUR LA METTRE AU SERVICE DE L‘INTELLIGENCE
        COLLECTIVE
      </p>
      <div className="CoDev container-img">
        <img
          className="Tree"
          src={LogoTree}
          alt="Logo arbre Attribut conseils"
          width={1002}
          height={633}
        />
      </div>
      <article className="CoDev-article withMovie">
        <p className="Welcom">Bienvenue,</p>
        <div className="scriptAndMovie">
          <p className="Script">
            Si vous êtes sur cette page, c'est que vous êtes à la recherche
            d'une approche de formation différente, qui valorise les
            connaissances individuelles pour les intégrer dans un processus
            d'apprentissage collectif. Le co-développement est une démarche de
            formation qui part de situations réelles et vécues par le
            professionnel, souvent problématiques, et questionnées par un
            collectif de pairs. L’intervenant contribue à faire émerger des
            apprentissages propres aux différents individus mais aussi,
            parallèlement, à construire des connaissances et de l’intelligence
            collective. Ces solutions issues du groupe deviennent des pistes de
            réponses à des problématiques jusque-là vécues de manière isolée.
          </p>
          <div className="movie-cont">
            <Movie src={MeetingMovie} />
          </div>
        </div>
      </article>
      <article className="Centrale-Text">
        <div>
          <p>
            Cette recherche collective de sens et de solution participe à la
            reconnaissance d’une identité professionnelle, souvent en mouvement
            lorsqu’elle est interrogée dans les pratiques professionnelles
            quotidiennes ainsi qu’au renforcement de la cohésion d’équipe.{" "}
          </p>
        </div>
      </article>
      <article className="boat right-container articleCertif">
        <div className="boat-container-text">
          <p>
            Il s’agit donc d’un outil essentiel dans la prévention{" "}
            <span className="yellow">
              des risques psycho-sociaux dans les métiers à forte composante
              relationnelle.
            </span>
          </p>
        </div>
        <div className="boat-pic">
          <img
            className="BlueDot_rightTop"
            src={BlueDot}
            alt="Point bleu décoration"
            width={2079}
            height={2079}
          />
          <img
            src={Boat}
            alt="Prévention des risques Psucho-sociaux"
            width={864}
            height={729}
          />
          <img
            className="BlueDot_leftBottom"
            src={BlueDot}
            alt="Point bleu décoration"
            width={2079}
            height={2079}
          />
        </div>
      </article>
      {/* <TelButton number="06 98 88 15 55" /> */}
      <article className="timeline left-container center">
        <div className="timeline-cont">
          <h2>Quels sont les fondements du co développement?</h2>
          <p>
            Méthode venue d'outre-Atlantique, le co-développement s'est imposé
            comme une référence incontestable, dont nous sommes des ardents
            promoteurs ! Créée dans les années 80 par deux Canadiens, Claude
            Champagne et Adrien Payette, cette approche est définie comme{" "}
            <span className="Bold">
              "un groupe de personnes désireuses d'améliorer leur pratique
              professionnelle, quel que soit leur domaine, et qui s'entraident
              mutuellement dans cette quête, convaincues qu'elles peuvent
              apprendre les unes des autres".
            </span>
          </p>
        </div>
      </article>
      <article className="percentage">
        <div className="orga">
          <img
            className="target"
            src={Target}
            alt="Pictogramme d'une cible avec une fleche au centre"
            width={508}
            height={467}
          />
          <p>
            Toutes thématiques supposant de la relation aux autres, management,
            changement organisation, travail en mode hybride....RPS
          </p>
          <img
            className="meeting"
            src={Meeting}
            alt="Pictogramme d'un group de personne en réunion"
            width={2079}
            height={2079}
          />
          <p className="meeting-des">1 animateur pour 6 à 10 participants</p>
          <img
            className="Chrono"
            src={Chrono}
            alt="Pictogramme d'une horologe avec une flèche autour"
            width={2079}
            height={2079}
          />
          <p className="chrono-des">
            Présentiel ou visio, 2h30 toutes les 4 à 8 semaines
          </p>
        </div>
        <div className="split">
          <h3 className="theories">théoriques</h3>
          <p className="theories-des">
            Apports théoriques flash qui incitent au partage d’expérience et à
            l’intelligence collective pour adapter les éclairages à la réalité
            de chacun
          </p>
          <h3 className="practices">Pratiques</h3>
          <p className="practices-des">
            Pratiques et concrètes: Des formations opérationnelles avec de
            nombreuses mises en situation pour s’approprier de nouvelles
            pratiques comportementales et relationnelles
          </p>
          <img
            className="percent"
            src={Percent}
            alt="Rond avec 90% à l'interieur une fleche pointant vers théorie et l'autre vers Pratiques"
            width={2079}
            height={2079}
          />
        </div>
      </article>
      <article className="timeline left-container center">
        <div className="timeline-cont">
          <h2>Comment se déroule le co-développement?</h2>
          <p>
            L'espace de co-développement est un temps dédié où les
            collaborateurs confrontent leurs points de vue sur la manière de
            travailler et les différentes stratégies qu'ils ont développées pour
            composer avec la réalité professionnelle. La délibération implique
            l'explication des approches individuelles, exposant les limites et
            parfois les échecs. La confiance mutuelle est essentielle pour
            assumer ce risque. Cette intelligence délibérative redéfinit la
            responsabilité en la rendant collective et partagée entre les
            collègues.{" "}
            <span className="Bold">
              La capacité d'inventer et de trouver des solutions est liée à la
              collaboration, elle prévient de l'isolement.{" "}
            </span>
          </p>
        </div>
      </article>
      <article className="stepExemple">
        <img
          className="verticalDots"
          src={verticalDots}
          alt="Rond bleu jaune blanc et bleu vertical"
          width={441}
          height={1250}
        />
        <div className="steps">
          <h3>Exemple de déroulement de séance:</h3>
          <p>
            <span className="Bold">ÉTAPE 1 –</span> J'expose une situation
            problématique et je décide de prendre du recul.
          </p>
          <p>
            <span className="Bold">ÉTAPE 2 – </span>Questions et analyse de la
            situation par le collectif.
          </p>
          <p>
            <span className="Bold">ÉTAPE 3 – </span>Je définis mon besoin de
            résolution et fixe un objectif.
          </p>
          <p>
            <span className="Bold">ÉTAPE 4 – </span>En intelligence collective,
            propositions d'hypothèses d'actions, de soutien et d'outils.
          </p>
          <p>
            <span className="Bold">ÉTAPE 5 – </span>J'élabore un plan d'action
            en m'appuyant sur tout ou partie des solutions proposées par mes
            "pairs".
          </p>
          <div className="animCoDev">
            <p>
              “L’animateur” expert des groupes en co-développement est garant:
            </p>
            <div className="animCoDev-pictoContAll">
              <div className="pictoCont">
                <img
                  className="Confidential"
                  src={Confidential}
                  alt="pictogramme Confidential"
                  width={729}
                  height={729}
                />
                <p className="picto-des">Neutralité et confidentialité</p>
              </div>
              <div className="pictoCont">
                <img
                  className="Confidential"
                  src={PictoOrga}
                  alt="pictogramme Confidential"
                  width={729}
                  height={729}
                />
                <p className="picto-des">cadre structuré</p>
              </div>
              <div className="pictoCont">
                <img
                  className="Confidential"
                  src={MedailleRuban}
                  alt="pictogramme Confidential"
                  width={729}
                  height={729}
                />
                <p className="picto-des">Respect de la charte déontologique</p>
              </div>
              <div className="pictoCont">
                <img
                  className="Confidential"
                  src={VoicePicto}
                  alt="pictogramme Confidential"
                  width={729}
                  height={729}
                />
                <p className="picto-des">Prise de parole réglementée</p>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article className="benefits">
        <h2>Quelles sont les bénéfices du co développement? </h2>
        <p>
          Motivation et fidélisation des équipes Recherche de sens Prévention
          des risques psychosociaux Développement des compétences
          relationnelles, favorisant ainsi la croissance professionnelle.
          Renforcement de sa posture professionnelle Développement de sa
          capacité à la distanciation dans les situations de stress{" "}
        </p>
      </article>
      {/* <CircleDot displayAll={false} /> */}
      <CircleDotV2
        video={TeamMotivation}
        phone
        text="Personnalisez votre expérience en co-développement selon vos besoins spécifiques."
      />
      <GoogleWidget />
      {/* <ContactButton text="Contactez-nous" /> */}
      {/* <Questions tag='APEC' mainTitleFaq={mainTitleFaq} mainPfaq={mainPfaq} /> */}

      {/* <Questions tag='all' ville={ville} /> */}
      <ScrollToTop />
    </section>
  );
};

export default CoDev;
