import React from "react";

import WhoAmI from "@/Assets/Images/WhoAmI.png";
import Binoculars from "@/Assets/Images/Binoculars.png";
import MetaTitleDes from "@/Components/Meta/MetaTitleDes.js";

import "./findYourWay.scss";
import { Link } from "react-router-dom";
import HeaderAdvice from "../../../Layouts/Header/HeaderAdvice.js";

const FindYourWay = () => {
  const metaTitle =
    "rouver sa Voie : Une Approche Constructiviste pour son Chemin";
  const metaDescription =
    "Adoptez une approche constructiviste pour votre carrière : réflexion, exploration, rencontres, développement continu et évaluation pour une voie épanouissante.";
  return (
    <section className="FindYw">
      <MetaTitleDes title={metaTitle} description={metaDescription} />
      <HeaderAdvice />
      <header className="FindYw-title">
        <div className="title-container">
          <h1>Trouver sa Voie : Une approche constructiviste</h1>
        </div>
      </header>
      <article>
        <div className="OneCol">
          <h2>pour Construire son Chemin Pas à Pas</h2>
          <p>
            "C'est en marchant que se construit le chemin" – cette phrase du
            poète Antonio Machado nous invite à voir notre parcours
            professionnel comme une série d'étapes progressives et
            significatives. Trouver sa voie n'est pas un événement ponctuel,
            mais un processus continu de construction et de réévaluation.
          </p>
          <h3>Pourquoi la Réflexion Personnelle est-elle SI IMPORTANTE?</h3>
          <p>
            Le point de départ de toute quête professionnelle est
            l'introspection. Réfléchissez à vos passions, valeurs et
            aspirations. Identifiez ce qui vous motive réellement et ce que vous
            souhaitez accomplir. Cette réflexion est la fondation sur laquelle
            vous construirez votre cheminement. Comprendre ses motivations
            profondes permet de mieux orienter ses choix et d'assurer une
            meilleure cohérence avec ses objectifs professionnels.
          </p>
          <div className="container">
            <img
              src={WhoAmI}
              alt="femme regardant vers nous avec des jumelles"
              width={1228}
              height={755}
            />
          </div>
        </div>
        <main className="twoCol">
          <h2>Comment l'Exploration active Peut-elle Aider ?</h2>
          <p>
            La découverte de votre voie passe par l'exploration active de
            différentes options. Testez divers domaines et métiers, participez à
            des ateliers, assistez à des conférences et engagez-vous dans des
            projets variés. Chaque expérience vous rapproche de ce qui vous
            correspond le mieux. L'exploration active permet de valider ou
            d'infirmer vos intérêts et compétences dans des contextes réels et
            variés.
          </p>
          <div className="container">
            <img
              src={Binoculars}
              alt="femme regardant vers nous avec des jumelles"
              width={1228}
              height={755}
            />{" "}
          </div>
          <h3>Pourquoi le développement continu est-il essentiel ? </h3>
          <p>
            Apprendre de nouvelles compétences et se perfectionner est crucial.
            Inscrivez-vous à des formations, lisez des livres et suivez des
            cours en ligne. Chaque compétence acquise est une brique ajoutée à
            votre parcours professionnel, vous rendant plus polyvalent et
            préparé. Évaluez régulièrement vos progrès et ajustez votre plan en
            fonction des retours et des nouvelles informations pour rester
            aligné avec vos aspirations et les réalités du marché.
          </p>
          <h3>Faire un Bilan de Compétences</h3>
          <p>
            Grâce à ces étapes, un bilan de compétences devient un outil
            précieux. Il vous aide à structurer vos réflexions, explorer
            activement vos options et développer continuellement vos
            compétences. Un bilan de compétences peut vous fournir des insights
            essentiels pour guider votre carrière et assurer votre
            épanouissement professionnel.
          </p>
        </main>
        <div className="news-Link last">
          <Link to={"/home"}>www.attribut-conseils.com</Link>
        </div>
      </article>
    </section>
  );
};

export default FindYourWay;
