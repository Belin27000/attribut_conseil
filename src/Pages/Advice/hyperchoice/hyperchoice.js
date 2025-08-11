import React from "react";
import BlowMind from "@/Assets/Images/BlowMind.png";
import WomanHat from "@/Assets/Images/WomanHat.png";
import Wall from "@/Assets/Images/Wall.png";

import "./hyperchoice.scss"; // Assuming you will style this with CSS
import { Link } from "react-router-dom";
import MetaTitleDes from "../../../Components/Meta/MetaTitleDes.js";
import HeaderAdvice from "../../../Layouts/Header/HeaderAdvice.js";

const Hyperchoice = () => {
  const metaTitle = `Souffrez-vous de l'Hyperchoix? Surmonter l'Indécision.`;
  const metaDescription = `L’hyperchoix paralyse votre prise de décision. Découvrez les symptômes et stratégies pour réduire le stress et atteindre vos objectifs.`;
  return (
    <section className="Hyperchoice">
      <MetaTitleDes title={metaTitle} description={metaDescription} />
      <HeaderAdvice />
      <div className="main-title">
        <h1>Souffrez vous de l'hyperchoix ?</h1>
        <img
          src={BlowMind}
          alt="Hyperchoice illustration"
          width={500}
          height={400}
        />
      </div>
      <article className="content">
        <div className="main-content">
          <div className="text-content">
            <p>
              L'abondance de possibilités rend souvent les décisions plus
              difficiles. En Suisse, même l'industrie horlogère en a pris
              conscience et a constaté que réduire le nombre de montres exposées
              en magasin accélérerait les ventes.
            </p>
            <p>
              Dans le monde professionnel, ce phénomène prend de l'ampleur. Face
              à une multitude d'options, nous sommes parfois paralysés.
              Autrefois, les chemins étaient plus simples : on suivait un
              parcours éducatif linéaire, puis on choisissait parmi quelques
              métiers, souvent hérités de nos parents.
            </p>
            <h2>Le syndrome de l'hyperchoix</h2>
            <p>
              Les psychosociologues nous alertent sur le syndrome de
              l'hyperchoix, amplifié par la pression de réussite rapide et la
              société de consommation. Internet nous offre un accès illimité à
              une multitude de possibilités, mais trop de choix simultanés
              peuvent engendrer frustration et inachèvement de projets.
            </p>
          </div>
          <div className="image-content">
            <img
              src={WomanHat}
              alt="Femme avec plusieurs chapeaux sur la tête"
              width={500}
              height={500}
            />
          </div>
          <div className="news-Link">
            <Link to={"/home"}>www.attribut-conseils.com</Link>
          </div>
        </div>
        <div className="double-content">
          <div className="risk-content">
            <h2>Quel est votre risque de souffrir de ce syndrome ?</h2>
            <p>Plusieurs facteurs peuvent y contribuer :</p>
            <ul>
              <li>Votre ouverture maximale :</li>
              <ul className="risk-content-list">
                <li>
                  Vous êtes constamment connecté à Internet et naviguez sur de
                  multiples réseaux sociaux, ce qui peut saturer votre esprit.
                </li>
                <li>
                  Vous changez souvent d'objectif ou d'emploi, sans réelle
                  direction.
                </li>
                <li>
                  Vous êtes hésitant et réfléchi, ce qui peut conduire à
                  l'indécision.
                </li>
              </ul>
              <li>Vos aspirations multiples :</li>
              <ul className="risk-content-list">
                <li>
                  Vous cherchez la reconnaissance sociale et l'ambition de
                  réussir.
                </li>
                <li>
                  Votre curiosité vous pousse à explorer de nombreuses avenues.
                </li>
                <li>
                  Vous avez grandi dans un environnement multiculturel et êtes
                  ouvert au changement.
                </li>
              </ul>
              <li>Votre transition de vie :</li>
              <ul>
                <li>
                  Vous êtes en quête d'une nouvelle identité professionnelle ou
                  personnelle, ce qui nécessite des choix décisifs.
                </li>
              </ul>
            </ul>
          </div>
          <div className="Wall-content">
            <img
              src={Wall}
              alt="mur en brique avec plusieurs porte blanche"
              width={500}
              height={100}
            />
          </div>
          <div className="prevention-content">
            <h2>Comment prévenir ce syndrome ?</h2>
            <p>
              Écoutez vos intérêts profonds : Approfondissez votre connaissance
              de vous-même pour identifier vos véritables aspirations.
              Posez-vous des questions sur ce qui vous motive vraiment.
            </p>
            <ul>
              <li>Concentrez-vous sur quelques options réalistes :</li>
              <ul>
                <li>
                  Limitez vos choix à deux options réalistes pour plus de
                  clarté. Mettez l'accent sur quelques priorités pour éviter de
                  vous disperser.
                </li>
              </ul>
              <li>Persévérez dans vos objectifs prioritaires :</li>
              <ul>
                <li>
                  Concentrez vos efforts sur quelques objectifs pour les
                  réaliser plus efficacement. La patience et la vision à long
                  terme sont essentielles pour un développement durable.
                </li>
                <li>
                  Et si vous avez besoin d'aide pour définir un choix, faites un
                  bilan de compétences.
                </li>
              </ul>
            </ul>
          </div>
          <div className="news-Link">
            <Link to={"/home"}>www.attribut-conseils.com</Link>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Hyperchoice;
