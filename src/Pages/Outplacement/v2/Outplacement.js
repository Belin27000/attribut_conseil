import React from "react";
import MetaTitleDes from "../../../Components/Meta/MetaTitleDes.js";
import "./outplacement.scss";
import ContactButton from "../../../Components/Button/ContactButton.js";
import Together from "../../../../src/Assets/Images/Together.png";
import Target from "../../../../src/Assets/Images/ArrowInTarget.png";
import Hear from "../../../../src/Assets/Images/Hear.png";
import KeyBridge from "../../../../src/Assets/Images/KeyAsBridge.png";
import Books from "../../../../src/Assets/Images/BookTour.png";
import Ball from "../../../../src/Assets/Images/BallInGoal.png";
import StopDominoFall from "../../../../src/Assets/Images/StopDominoFall.png";
//import CurvedBar from "../../../Components/bar/curvedBar.jsx";
import DownloadFile from "../../../Components/FileLink/DownloadFile.js";
import allFiles from "../../../_Services/fileToDownload.service.js";
import HandOnBlur from "../../../Assets/Images/HandOnBlur.png";
import LogoTree from "../../../Assets/Images/Tree.png";
const Outplacement = () => {
  const metaTitle = `PSE & Outplacement – Transition Pro | Attribut Conseils`;
  const metaDescription = `Cabinet expert en outplacement collectif et individuel : PSE, cellule d’écoute, EIC, reclassement, ateliers RPS managers. Culture du résultat et mise en réseau.`;
  return (
    <section className="OutplacementV2">
      <MetaTitleDes title={metaTitle} description={metaDescription} />
      <div className="OutplacementV2-Logo">
        <img
          className="Tree"
          src={LogoTree}
          alt="Logo arbre Attribut conseils"
          width={1002}
          height={633}
        />
      </div>
      <article>
        <h1>
          Outplacement & Transition Professionnelle{" "}
          <span>Attribut Conseils</span>
        </h1>
        <p className="OutplacementV2-title">
          Transformez une période de changement en opportunité de rebond
          professionnel durable.
        </p>
        <p className="OutplacementV2-title-bloc">
          Attribut Conseils accompagne vos collaborateurs dans leurs{" "}
          <strong>transitions professionnelles</strong>, que ce soit dans le
          cadre d’un
          <strong>Plan de Sauvegarde de l’Emploi (PSE)</strong> ou d’un{" "}
          <strong>outplacement individuel</strong>, avec une approche humaine,
          structurée et sécurisée.
        </p>
        <h2>Notre Approche & Nos Forces</h2>
        <ul className="bloc2-text">
          <li>
            Plus de 20 ans d’expérience en{" "}
            <strong>mobilité professionnelle</strong>, bilans de compétences,
            VAE et coaching
          </li>
          <li>
            <strong>Chef de projet PSE</strong> avec expérience confirmée
          </li>
          <li>
            <strong>
              Gestion complète : cellule d’écoute, Espace Information Conseil
              (EIC), antenne emploi, reporting et commissions
            </strong>
          </li>
          <li>
            <strong>Équipe pluridisciplinaire</strong> : psychologues du
            travail, coachs seniors, consultantes mobilité, experts création
            d’entreprise
          </li>
          <li>
            <strong>Force de mise en réseau</strong> : entreprises, France
            Travail, réseaux dirigeants, associations professionnelles
          </li>
          <li>
            <strong>Approche sur‑mesure et agile</strong> : présentiel ou
            distanciel, plateforme collaborative et suivi individuel
          </li>
        </ul>
        <div className="button-withHand">
          <p className="hand">👉</p>
          <ContactButton text={"CONTACTEZ NOUS"} />
        </div>
        <div className="bloc2-pic">
          <img
            src={Together}
            alt="Équipe pluridisciplinaire Attribut Conseils outplacement"
            width={1558}
            height={311}
          />
        </div>
        {/* <CurvedBar
          className="barLine"
          controlX={-200}
          controlY={150}
          strokeWidth={1.5}
        /> */}
      </article>
      <article className="bloc3">
        <h2 className="bloc3-title">
          Outplacement Collectif PSE
          <br />
          <span className="blue">
            {" "}
            3 Phases pour sécuriser vos équipes en cas de licenciement
            économique
          </span>
        </h2>
        <div className="phase1 phaseBloc">
          <div className="phaseBloc-pic">
            <img
              src={Hear}
              alt="Cellule d’écoute PSE – Attribut Conseils"
              width={258}
              height={994}
            />
          </div>
          <div className="phaseBloc-text">
            <h3>Phase 1 – Cellule d’Écoute et de Soutien Psychologique</h3>
            <p className="punchLine">
              💬 Sécuriser les collaborateurs dès le début
            </p>
            <ul>
              <li>Ligne d’écoute confidentielle (numéro vert)</li>
              <li>
                Soutien psychologique personnalisé pour salariés fragilisés
              </li>
              <li>
                Détection précoce des situations à risque (stress, anxiété,
                burn-out)
              </li>
            </ul>
          </div>
        </div>
        <div className="phase2 phaseBloc">
          <div className="phaseBloc-pic">
            <img
              src={Books}
              alt="Espace Information Conseil (EIC)"
              width={257}
              height={1083}
            />
          </div>
          <div className="phaseBloc-text">
            {" "}
            <h3>Phase 2 – Espace Information Conseil (EIC)</h3>
            <p className="punchLine">📘 Informer, orienter, rassurer</p>
            <ul>
              <li>
                Présentation claire des mesures du <strong>PSE</strong> et des
                dispositifs France Travail
              </li>
              <li>Diagnostics individuels et entretiens de clarification</li>
              <li>
                Co-construction des plans d’action : mobilité interne,
                reconversion, formation, création/reprise d’entreprise
              </li>
            </ul>
          </div>
        </div>
        <div className="phase3 phaseBloc">
          <div className="phaseBloc-pic">
            <img
              src={Ball}
              alt="Accompagnement individuel et bilan de compétences"
              width={281}
              height={1053}
            />
          </div>
          <div className="phaseBloc-text">
            {" "}
            <h3>Phase 3 – Cellule de Reclassement</h3>
            <p className="punchLine">
              Chaque salarié bénéficie d’une solution validée et pérenne:
              Emploi, formation, VAE ou création d’entreprise
              <br /> 🎯 Concrétiser le rebond professionnel
            </p>
            <ul>
              <li>
                <strong>Bilan professionnel complet</strong> et stratégie
                personnalisée
              </li>
              <li>
                Accompagnement à la recherche d’emploi : CV, réseaux, LinkedIn,
                préparation aux entretiens
              </li>
              <li>
                Validation des projets : formation, VAE, création ou reprise
                d’entreprise
              </li>
              <li>
                Suivi de la période d’essai et reporting confidentiel aux
                commissions
              </li>
            </ul>
          </div>
        </div>
      </article>
      <article className="bloc4">
        {/* <CurvedBar
          className="barLine"
          controlX={-200}
          controlY={150}
          strokeWidth={1.5}
        /> */}

        <h2>
          Prévention des Risques Psychosociaux (RPS){" "}
          <span> – Ateliers Managers pour PSE et OUTPLACEMENT</span>
        </h2>
        <p className="punchLine">
          Anticiper, détecter et accompagner les impacts humains d’un PSE
        </p>
        <div className="bloc4-pic">
          <img
            src={StopDominoFall}
            alt="Ateliers prévention RPS pour managers en PSE"
            width={701}
            height={248}
          />
        </div>
        <p className="punchLine">
          Dans le cadre de nos missions d’outplacement et de PSE, nous proposons
          des ateliers dédiés aux managers pour les aider à :{" "}
        </p>
        <div className="bloc4-double">
          <div>
            <p>
              <strong>
                Repérer les signaux faibles : stress, isolement, perte de
                motivation
              </strong>
            </p>
            <ul>
              <li>Prévenir les RPS en période de réorganisation</li>
              <li>Adopter une communication claire et bienveillante</li>
              <li>
                Soutenir les collaborateurs fragilisés tout en préservant
                l’équilibre des équipes
              </li>
            </ul>
          </div>
          <div>
            <p>
              <strong>
                Ces ateliers collaboratifs s’appuient sur des méthodes pratiques
                :
              </strong>
            </p>
            <ul>
              <li>analyse de situations </li>
              <li>Techniques d’écoute active et de communication</li>
              <li>
                Outils pour relayer vers la cellule d’écoute ou les ressources
                internes
              </li>
            </ul>
          </div>
        </div>
      </article>
      <article className="bloc5">
        {/* <CurvedBar
          className="barLine"
          controlX={-50}
          controlY={50}
          strokeWidth={1.5}
        /> */}
        <div className="bloc5-header">
          <div className="bloc5-header-pic">
            <img
              src={Target}
              alt="Culture du résultat"
              width={300}
              height={301}
            />
          </div>
          <div className="bloc5-header-text">
            <strong>Culture du résultat</strong>
            <br />   Notre mission consiste à accompagner chaque salarié jusqu’à
            la réussite de son projet et la validation d’une solution pérenne.
          </div>
        </div>
        {/* <CurvedBar
          className="barLine"
          flipV
          flipH
          controlX={-50}
          controlY={50}
          strokeWidth={1.5}
        /> */}
        <div className="splitbar"></div>
        <h2>
          Outplacement Individuel
          <br />
          <span>Un accompagnement sur-mesure pour vos collaborateurs</span>
        </h2>
        <div className="bloc5-article">
          <div className="bloc5-article-pic">
            <img
              src={KeyBridge}
              alt="Outplacement individuel et accompagnement des collaborateurs"
              width={530}
              height={1088}
            />
          </div>
          <div className="bloc5-article-text">
            <p className="black">
              Pour les entreprises qui souhaitent accompagner un ou quelques
              collaborateurs dans leur transition professionnelle ou suite à un{" "}
              <strong>licenciement économique:</strong>
            </p>
            <ul>
              <li>
                Bilan de compétences <strong>complet</strong> pour définir{" "}
                <strong>un projet professionnel</strong> réaliste et motivant
              </li>
              <li>
                Stratégie de mise en œuvre : formation, VAE, entrepreneuriat ou{" "}
                <strong>reclassement externe</strong>
              </li>
            </ul>
            <p className="white">
              Accompagnement sur-mesure en{" "}
              <strong>outplacement individuel</strong> et confidentiel jusqu’à
              la concrétisation du projet
            </p>
            <p className="black">
              <strong>Mise en réseau active :</strong> Accès privilégié à notre
              réseau d’entreprises, partenaires RH, et réseaux dirigeants pour
              accélérer la <strong>mobilité professionnelle</strong> et la
              concrétisation du projet.
            </p>
          </div>
        </div>
        <div className="file-bloc">
          <p className="hand">👉</p>
          <div className="file">
            <DownloadFile
              file={allFiles.outplacementFile()}
              className={"prog"}
              dot={false}
            />
          </div>
        </div>
      </article>
      <article className="bloc6">
        {/* <CurvedBar
          className="barLine"
          controlX={-50}
          controlY={50}
          strokeWidth={1.5}
        /> */}
        <h2>
          <span>Nos engagements</span> CONFIDENTIALITÉ ET RÉSULTAT
        </h2>
        {/* <CurvedBar
          className="barLine"
          controlX={-50}
          controlY={50}
          strokeWidth={1.5}
        /> */}
        <ul>
          <li>
            Accompagnement humain et personnalisé pour chaque collaborateur en
            situation de licenciement économique ou transition professionnelle
          </li>
          <li>
            Confidentialité totale et respect de la démarche volontaire
            Reporting et suivi pour l’entreprise commanditaire
          </li>
          <li>
            Résultats mesurables : retour à l’emploi, formation validée ou
            création d’activité
          </li>
        </ul>
        {/* <CurvedBar
          className="barLine"
          controlX={-50}
          controlY={50}
          strokeWidth={1.5}
        /> */}
        <div className="team" style={{ "--team-bg": `url(${HandOnBlur})` }}>
          <h2>
            Une équipe pluridisciplinaire à vos côtés pour le reclassement et
            l’outplacement
          </h2>
          <div className="team-text">
            <p className="white">
              Psychologues du travail & référente handicap Consultantes mobilité
              et expertes OUTPLACEMENT/ bilans / VAE experts création
              d’entreprise et transition professionnelle
            </p>
            <ul>
              <li>
                {" "}
                ✅ Expertise dans les situations complexes (stress, RPS,
                licenciement économique, plan social)
              </li>
              <li>
                {" "}
                ✅ Réseau actif avec entreprises, réseaux dirigeants, et France
                Travail
              </li>
              <li>
                {" "}
                ✅ Approche humaine, sur-mesure, orientée résultats et bien-être
              </li>
            </ul>
          </div>
        </div>
      </article>
      {/* <CurvedBar
        className="barLine"
        controlX={-50}
        controlY={50}
        strokeWidth={1.5}
      /> */}
      <div className="lastBloc">
        <p>
          Chaque contexte est unique : contactez‑nous pour analyser vos besoins
          et construire un accompagnement PSE ou outplacement sur‑mesure pour
          vos équipes.
        </p>
        <div className="button-withHand footer">
          <p className="hand">👉</p>
          <ContactButton text={"CONTACTEZ NOUS"} />
        </div>
      </div>
    </section>
  );
};

export default Outplacement;
