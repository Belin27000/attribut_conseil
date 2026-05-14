import React from "react";
import LogoTree from "../../../Assets/Images/Tree.png";
import mortarboard from "../../../Assets/Images/mortarboard.png";
import diplome from "../../../Assets/Images/diplome.png";
import diplomeVert from "../../../Assets/Images/diplomeVertical.png";
import diplomeAndMortarboard from "../../../Assets/Images/diplomeAndMortarboard.png";
import gym from "../../../Assets/Images/gym.png";
import fellSun from "../../../Assets/Images/fellSun.png";
import "./vae2.scss";
import faqVaeService from "../../../_Services/faqVae.service.js";
import certificationVaeService from "../../../_Services/certificationVae.service.js";

import MetaTitleDes from "../../../Components/Meta/MetaTitleDes.js";
import ContactButton from "../../../Components/Button/ContactButton.js";
import FaqItem from "../../../Components/Faq/FaqItem.jsx";
import DownloadFile from "@/Components/FileLink/DownloadFile.js";
import allFiles from "@/_Services/fileToDownload.service.js";

const Vae2 = () => {
  const metaTitle = `Validation des Acquis de l’Expérience (VAE) | ATTRIBUT CONSEILS`;
  const metaDescription = `Accompagnement VAE sur-mesure. Dossier de validation, oral du jury, démarches simplifiées. Cabinet certifié Qualiopi & architecte VAE référencé France VAE. CPF possible.`;

  return (
    <section className="VaeV2">
      <MetaTitleDes title={metaTitle} description={metaDescription} />
      <h1>
        VALIDATION DES ACQUIS DE L’EXPÉRIENCES <br />
        <span>ATTRIBUT CONSEILS</span>
      </h1>
      <div className="VaeV2-Logo">
        <img
          className="Tree"
          src={LogoTree}
          alt="Logo arbre Attribut conseils"
          width={1002}
          height={633}
        />
      </div>
      <article className="bloc1">
        <p className="VaeV2-title">
          Valider votre expérience, affirmer votre légitimité professionnelle.
        </p>
        <div className="bloc1-text">
          <h2>Vous souhaitez valider vos acquis ?</h2>
          <p>
            Le cabinet ATTRIBUT CONSEILS accompagne les professionnels désireux
            de faire reconnaître officiellement leurs compétences, à travers{" "}
            <b>
              un accompagnement VAE individuelle sur-mesure, exigeant et
              rigoureux,
            </b>
            des dossiers structurés, cohérents et convaincants.
          </p>
          <p>
            Vous avez construit vos compétences sur le terrain, dans l’action,
            dans le temps.
          </p>
          <p>Nous vous aidons à les faire reconnaître officiellement.</p>
          <p>
            <strong>La Validation des Acquis de l’Expérience (VAE)</strong> est
            bien plus qu’un dossier à remplir : c’est une démarche identitaire,
            une mise en récit structurée de votre valeur professionnelle, et un
            levier stratégique pour votre avenir
          </p>
        </div>
      </article>
      <article className="bloc2">
        <h2>Un accompagnement sur-mesure, piloté par des experts de la VAE</h2>
        <div className="bloc2-text">
          <p>
            Un accompagnement sur-mesure, piloté par des experts de la VAE Notre
            cabinet est référencé sur France VAE en tant qu’architecte
            accompagnateur France VAE. Notre cabinet est certifié Qualiopi VAE
            pour l’accompagnement.
          </p>
          <p className="black">Nous nous engageons à vos côtés, pas à pas,</p>
          <ul>
            <li>Structurer et clarifier votre projet,</li>
            <li>
              Coconstruire une argumentation solide à partir de vos expériences,
            </li>
            <li>
              Traduire vos compétences en lien direct avec le référentiel du
              diplôme visé,
            </li>
            <li>Vous préparer de manière ciblée à l’oral du jury.</li>
          </ul>
          <div className="mortarboard">
            <div className="button-withHand footer">
              <p className="hand">👉</p>
              <ContactButton text={"CONTACTEZ NOUS"} />
            </div>
            <img
              className="mortarboard"
              src={mortarboard}
              alt="chapeau de diplomé carré lancé en l'air"
              width={1002}
              height={633}
            />
          </div>
        </div>
      </article>
      <article className="bloc3">
        <div className="container">
          <div className="container-left">
            <h2>Pourquoi faire une VAE ?</h2>
            <div className="container">
              <img src={gym} alt="personne qui fait de la gym" />
            </div>
          </div>
          <div className="container-right">
            <p>
              Valider ses acquis, c’est faire reconnaître officiellement son
              expérience professionnelle et ses compétences, sans retourner sur
              les bancs de l’école.
            </p>
            <p>
              La VAE vous permet d’obtenir un diplôme, un titre ou un certificat
              en lien avec votre expérience, pour :
            </p>
            <ul>
              <li>Sécuriser votre parcours</li>
              <li>Évoluer dans votre métier</li>
              <li>Accéder à un concours ou une formation</li>
              <li>Changer de poste ou de secteur</li>
              <li>Vous reconvertir</li>
              <li>Gagner en légitimité et en confiance</li>
            </ul>
          </div>
        </div>
      </article>
      <article className="bloc4">
        <h2>ÉTAPE de votre accompagnement PERSONNALISÉ</h2>
        <h2 className="blue">
          Un parcours exigeant, structuré et entièrement ajusté à votre rythme
          de vie.
        </h2>
        <div className="subBloc">
          <div className="number">1</div>
          <div className="bloc">
            <h3>Entretien d’information (gratuit et sans engagement)</h3>
            <div className="container">
              <img
                className="diplome"
                src={diplome}
                alt="Rouleau représentant un diplome entouré d'un noeud rose"
                width={975}
                height={498}
              />
            </div>
            <ul>
              <li>Échange préliminaire pour poser vos questions</li>
              <li>
                Analyse de la cohérence entre votre parcours et le diplôme visé
              </li>
              <li>
                Présentation du cadre réglementaire et des étapes de la VAE
              </li>
              <li>Aide au choix du diplôme</li>
            </ul>
          </div>
        </div>
        <div className="subBloc">
          <div className="number">2</div>
          <div className="bloc">
            <h3>Constitution du dossier de recevabilité</h3>
            <div className="container">
              <img
                className="diplome"
                src={diplome}
                alt="Rouleau représentant un diplome entouré d'un noeud rose"
                width={975}
                height={498}
              />
            </div>
            <ul>
              <li>Co-construction du dossier de recevabilité (ex-livret 1)</li>
              <li>
                Vérification de l’adéquation entre vos acquis et le diplôme visé
              </li>
              <li>Préparation des pièces justificatives</li>
              <li>
                Échanges avec le certificateur jusqu’à la décision de
                recevabilité
              </li>
            </ul>
          </div>
        </div>
        <div className="subBloc">
          <div className="number">3</div>
          <div className="bloc">
            <h3>Rédaction du dossier de validation VAE</h3>
            <div className="container">
              <img
                className="diplome"
                src={diplome}
                alt="Rouleau représentant un diplome entouré d'un noeud rose"
                width={975}
                height={498}
              />
            </div>
            <ul>
              <li>Structuration progressive de votre dossier (ex-livret 2)</li>
              <li>
                Utilisation de grilles, canevas, outils d’analyse et de
                problématisation
              </li>
              <li>
                Relectures critiques et retours personnalisés à chaque étape
              </li>
              <li>
                Travail approfondi sur la clarté, l’argumentation et la mise en
                lien avec le référentiel
              </li>
            </ul>
          </div>
        </div>
        <div className="subBloc">
          <div className="number">4</div>
          <div className="bloc">
            <h3>Préparation à l’oral du jury</h3>
            <div className="container">
              <img
                className="diplome"
                src={diplome}
                alt="Rouleau représentant un diplome entouré d'un noeud rose"
                width={975}
                height={498}
              />
            </div>
            <ul>
              <li>Construction d’un discours structuré et convaincant</li>
              <li>
                Simulation d’entretien, conseils sur la posture, la voix, le
                vocabulaire
              </li>
              <li>Anticipation des questions du jury</li>
              <li>Renforcement de la confiance et de la clarté d’expression</li>
            </ul>
          </div>
        </div>
        <div className="footer">
          <p>Pour obtenir le détail du programme</p>
          <div className="button-withHand footer">
            <p className="hand">👉</p>
            <ContactButton text={"CONTACTEZ NOUS"} />
          </div>
          <div className="container">
            <img
              className="diplomeVert"
              src={diplomeVert}
              alt="Rouleau représentant un diplome entouré d'un noeud rose dans une main"
              width={975}
              height={498}
            />
          </div>
        </div>
      </article>
      <article className="bloc5">
        <h2>
          Nous prenons en charge toutes les démarches administratives auprès des
          certificateurs.
        </h2>
        <div className="VaeV2_stats">
          <DownloadFile file={[allFiles.vae()[1]]} dot={false} />
        </div>
        <div className="allPage">
          <div className="container">
            <img src={fellSun} alt="personne qui sent le soleil" />
          </div>
          <div className="allPage-text">
            <p>
              Du dépôt du dossier de recevabilité à la demande d’inscription au
              jury, en passant par l’identification des modalités spécifiques du
              diplôme (lieu, date, format de l’oral, éventuelles épreuves
              complémentaires), nous supervisons l’ensemble du parcours
              administratif.
            </p>
            <p>
              Vous êtes informé(e) à chaque étape, sans avoir à gérer vous-même
              ces formalités souvent complexes.
            </p>
            <p>
              Notre expertise et notre réseau avec les certificateurs (DAVA,
              ministères, France VAE…) vous garantissent un suivi rigoureux, une
              coordination fluide et une démarche sécurisée jusqu’à la
              présentation devant le jury.
            </p>
          </div>
        </div>
      </article>
      <article className="bloc6">
        <h2>
          Les résultats que nous visons <span>ensemble</span>
        </h2>
        <div className="allMargin">
          <div className="bloc6-white">
            <ul>
              <li>
                Un dossier de <b>validation structuré, cohérent, lisible</b>, en
                lien étroit avec le référentiel du diplôme visé
              </li>
              <li>
                Une <b>posture d’oral maîtrisée,</b> capable de convaincre un
                jury
              </li>
              <li>
                {" "}
                Une <b>validation totale ou partielle</b> de votre
                certification, ouvrant de nouvelles opportunités
                professionnelles
              </li>
              <li>
                Une <b>reconnaissance officielle</b> de vos compétences et de
                votre légitimité professionnelle
              </li>
            </ul>
          </div>
          <div className="bloc6-container">
            <img
              src={diplomeAndMortarboard}
              alt="Diplome avec le chapeau du diplomé sur un banc"
            />
          </div>
          <div className="bloc6-white">
            <h2>Financements possibles</h2>
            <p>
              La VAE peut être financée par votre{" "}
              <b>Compte Personnel de Formation (CPF),</b> un financement
              personnel, ou par l’employeur ou d’autres dispositifs selon votre
              statut.
            </p>
            <p>
              Les tarifs sont <b>ajustables</b> en fonction de vos besoins et
              des facilités de paiement sont possibles après un premier
              entretien.
            </p>
          </div>
          <div className="bloc6-white bold">
            <p>Votre expérience mérite d’être reconnue.</p>
            <p>
              Valider ses acquis, c’est affirmer une légitimité, ouvrir de
              nouveaux possibles, prendre appui sur le passé pour aller plus
              loin.
            </p>
            <p>
              {" "}
              Notre rôle est de sécuriser cette démarche, de la rendre
              accessible, exigeante, et profondément valorisante.
            </p>
            <p> Prenons le temps d’en parler ensemble.</p>
          </div>
          <div className="bloc6-white">
            <h2>Détail par certification au 21/04/2026</h2>
            <ul>
              {certificationVaeService
                .allCertifications()
                .map((certification) => (
                  <li key={certification}>{certification}</li>
                ))}
            </ul>
          </div>
        </div>
        <div className="footer">
          <div className="container">
            <img
              className="diplome"
              src={diplome}
              alt="Rouleau représentant un diplome entouré d'un noeud rose"
              width={975}
              height={498}
            />
          </div>
          <p>Pour un entretien d’information gratuit et sans engagement .</p>
        </div>
        <div className="button-withHand">
          <p className="hand">👉</p>
          <ContactButton text={"CONTACTEZ NOUS"} />
        </div>
      </article>
      <article className="faq">
        <h2>🔹 FAQ – Validation des Acquis de l’Expérience (VAE)</h2>
        {faqVaeService.allFaq().map((item, index) => (
          <FaqItem key={index} question={item.question} answer={item.answer} />
        ))}
      </article>
    </section>
  );
};

export default Vae2;
