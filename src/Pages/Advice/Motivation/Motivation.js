import React from "react";
import MetaTitleDes from "../../../Components/Meta/MetaTitleDes.js";
import WomenMotiv from "@/Assets/Images/Motivation.png";
import ArrowOnBoard from "@/Assets/Images/ArrowOnBoard.png";

import "./motivation.scss";
import { Link } from "react-router-dom";
import HeaderAdvice from "../../../Layouts/Header/HeaderAdvice.js";

const Motivation = () => {
  const metaTitle = `Démotivation/Amotivation: Comprendre,Surmonter le Manque de Motivation`;
  const metaDescription = `Les différences entre démotivation et amotivation. Apprenez à identifier les causes de chaque état et comment les surmonter pour raviver votre motivation.`;
  return (
    <section className="Motiv">
      <MetaTitleDes title={metaTitle} description={metaDescription} />
      <HeaderAdvice />
      <header className="Motiv-title">
        <div className="title-container">
          <h1>
            Démotivation VS Amotivation <br />
            Comprendre les différences{" "}
          </h1>
        </div>
        <div className="container">
          <img
            src={WomenMotiv}
            alt="femme avec sa main droite sur le front devant son ordinateur"
            width={325}
            height={250}
          />
        </div>
      </header>
      <article>
        <div className="OneCol">
          <p>
            "La motivation est une force essentielle qui nous pousse à agir et à
            atteindre nos objectifs. Cependant, il faut distinguer démotivation
            et amotivation, deux états souvent confondus mais profondément
            différents. Cet article explore ces concepts et démontre que le
            véritable manque de motivation n'existe pas, mais qu'il s'agit
            plutôt de différentes formes de motivation influençant nos
            comportements.
          </p>
          <h2>Démotivation : Une perte temporaire de motivation</h2>
          <p>
            <b>La démotivation</b> est une diminution de motivation due à des
            facteurs spécifiques. Selon Richard Ryan et Edward Deci, professeurs
            à l'Université de Rochester et pionniers de la théorie de
            l'autodétermination, la démotivation peut être causée par plusieurs
            facteurs :{" "}
          </p>
          <ul>
            <li>Fatigue : L'épuisement physique ou mental </li>
            <li>Stress: Une surcharge due à un stress excessif </li>
            <li>
              Manque de reconnaissance : L'absence de feedback positif et de
              reconnaissance peut décourager
            </li>
            <li>
              Objectifs inatteignables : Des cibles perçues comme irréalistes{" "}
            </li>
            <li>
              Monotonie : Des tâches répétitives et peu stimulantes peuvent
              également être démotivantes.
            </li>
          </ul>
        </div>
        <main className="twoCol">
          <h2>Amotivation : Une absence de motivation profonde</h2>
          <p>
            L<b>'amotivation</b>, quant à elle, est un état d'absence totale de
            motivation, souvent lié à des facteurs plus profonds. Deci et Ryan
            décrivent l'amotivation comme un sentiment d'impuissance où les
            individus croient que leurs actions n'ont aucun impact. Elle peut
            être causée par :
          </p>
          <div className="container">
            <img
              src={ArrowOnBoard}
              alt="L'amotivation et comment l'expliquer"
              width={4384}
              height={1436}
            />
          </div>
          <h3>Le Mythe du Manque de Motivation</h3>
          <p>
            Le "<b>manque de motivation</b>" est souvent perçu comme une absence
            totale de volonté, mais selon Ryan et Deci, il s'agit en réalité de
            différentes formes de <b>motivation : extrinsèque</b> (motivée par
            des récompenses externes), <b>intrinsèque</b> (motivée par l'intérêt
            personnel) et évitante (motivée par le désir d'éviter des
            conséquences négatives). Même lorsque la motivation semble absente,
            elle existe sous une autre forme. Dans le cadre d'un{" "}
            <b>bilan de compétences</b>, identifier ces sources de motivation
            permet de définir des objectifs de carrière alignés avec ses
            aspirations, réduisant ainsi la démotivation et prévenant
            l'amotivation.
          </p>
          <blockquote>
            Nuttin, J. (1980). <b>Théorie de la motivation</b> humaine :
            perspectives des sciences du comportement**. Presses Universitaires
            de France.
          </blockquote>
        </main>
        <div className="news-Link last">
          <Link to={"/home"}>www.attribut-conseils.com</Link>
        </div>
      </article>
    </section>
  );
};

export default Motivation;
