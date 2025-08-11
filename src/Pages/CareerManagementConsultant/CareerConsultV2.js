//import CalendarSheet from "@/Assets/Images/CalendarSheet.png";
import careerConsultpourcent from "@/Assets/Images/careerConsultpourcent.png";
import MobileHand from "@/Assets/Images/MobileHand.png";
import multiScreen from "@/Assets/Images/multiScreen.png";
//import simplecareerConsultpourcent from "@/Assets/Images/simplecareerConsultpourcent.png";
import target from "@/Assets/Images/target.png";
import timer from "@/Assets/Images/timer.png";
import touchTarget from "@/Assets/Images/touchTarget.png";
import LogoTree from "@/Assets/Images/Tree.png";
import React from "react";
import Dday from "../../Components/Dday/Dday.js";
import MetaTitleDes from "../../Components/Meta/MetaTitleDes.js";
import "./careerConsultV2.scss";

const CareerConsultV2 = () => {
  const metaTitle = `Attribut Conseils - Formation consultant en gestion de carrières`;
  const metaDescription = `Vous souhaitez vous former aux métiers de consultant en bilan de compétences en Seine et Marne ou en visio? Contactez-nous !`;
  return (
    <section className="CareerConsult">
      <MetaTitleDes title={metaTitle} description={metaDescription} />
      <div className="container-img">
        <img
          className="Tree"
          src={LogoTree}
          alt="Logo arbre Attribut conseils"
          width={1002}
          height={633}
        />
      </div>
      <h1 className="CareerConsult-title">
        <span className="Yellow">Formation Métier</span> CONSULTANT(E) BILAN DE
        COMPÉTENCES
      </h1>
      <h2 className="CareerConsult-subtitle">
        Développez vos compétences pour un accompagnement plus performant
      </h2>
      <p className="CareerConsult-intro">
        Cette formation en classe virtuelle vous offre une expérience de
        développement de compétences, visant à optimiser votre capacité
        d'accompagnement. Nous vous présentons une formation intensive de 3
        jours, centrée sur le métier de consultant en bilan de compétences.
        Cette formation dynamique comprend des séances interactives d'analyse
        filmée de situations d'accompagnement, couvrant toutes les phases du
        bilan. En parallèle, des sessions théoriques vous permettront
        d'assimiler les concepts essentiels. Rejoignez-nous pour acquérir ou
        perfectionner votre pratique et accompagner vos clients avec
        méthodologie et déontologie.
      </p>
      <article className="split">
        <div className="split-left">
          <div className="target logo">
            <img
              src={target}
              alt="logo blanc cible avec fleche au milieu"
              width={508}
              height={633}
            />
            <p>Toutes les étapes du bilan de compétences sont abordées</p>
          </div>
          <div className="multiScreen logo">
            <img
              src={multiScreen}
              alt="logo blanc ecran ordinateur avec 4 visio sur l'ecran"
              width={957}
              height={886}
            />
            <p>Formation collective en distanciel synchrone</p>
          </div>
          <div className="timer logo">
            <img
              src={timer}
              alt="logo blanc cible avec fleche au milieu"
              width={431}
              height={467}
            />
            <p>3 jours (21h) 2 formateurs</p>
          </div>
        </div>
        <div className="split-right">
          <div className="pourcent">
            <img
              src={careerConsultpourcent}
              alt="80% de Pratique"
              width={682}
              height={1250}
            />
          </div>
          <div className="theorie">
            <h3>THÉORIQUE</h3>
            <p>
              Apports théoriques flash qui incitent au partage d’expérience et à
              l’intelligence collective pour adapter les éclairages à la réalité
              de chacun
            </p>
          </div>
          {/* <div className="simplepourcent">
            <img src={simplecareerConsultpourcent} alt="80% de Pratique" />
          </div> */}
          <div className="pratique">
            <h3>PRATIQUE</h3>
            <p>
              Pratique et concrète : Formation opérationnelles avec de
              nombreuses mises en situation et outils pour s’approprier de
              nouvelles pratiques comportementales et relationnelles et répondre
              aux besoins du client.
            </p>
          </div>
        </div>
      </article>
      <article className="touchTarget">
        <div className="pic-container">
          <img
            src={touchTarget}
            alt="femme qui touch le centre d'une cible avec son index"
            width={930}
            height={1329}
          />
        </div>
        <div className="text-container">
          <p>
            À l’issue de la formation, le participant sera capable de mettre en
            œuvre les compétences suivantes :
          </p>
          <p>Conduire un processus de bilan de compétences.</p>
          <p>Maîtriser certains outils propres au bilan.</p>
          <p>
            Aider le client à déceler leurs potentialités, goûts, motivations et
            points d’appui.
          </p>
          <p>
            Aider le client à définir et valider un projet, et construire un
            plan d’action adapté.
          </p>
          <p>Adopter la posture adéquate de l’accompagnant.</p>
        </div>
      </article>
      <div className="forWho">
        <h3 className="Yellow">POUR QUI ?</h3>
        <p>
          Consultants en formation, Assistantes sociales accompagnant des
          demandeurs d'emplois. Experts en bilan de compétences ou
          out-placement. Formateurs intervenants en pré-qualification, en
          orientation, en recherche d'emploi, Conseillers en bilan, en conseil,
          en orientation professionnelle, chargés d'insertion sociale et
          professionnelle.
        </p>
        <p>
          Aux personnes en reconversion souhaitant investir le champ de
          l’accompagnement professionnel ou de la gestion des ressources
          humaines.{" "}
        </p>
      </div>
      <article className="prog">
        <div className="title-container">
          <h3 className="prog-title">PROGRAMME</h3>
          <ul className="prog-title-list">
            <li className="prog-title-list-details">
              Situer le bilan de compétences parmi les autres pratiques
              d’orientation et de conseils
            </li>
            <li className="prog-title-list-details">
              Connaître les familles d’outils utilisés
            </li>
            <li className="prog-title-list-details">
              S’approprier les démarches et phases du bilan
            </li>
          </ul>
        </div>
        <div className="modules">
          <div className="modules-left">
            <div className="modules1">
              <h4>
                Module 1 - Maîtrise des fondamentaux du bilan de compétences :
              </h4>
              <p>
                Comprendre les fondements législatifs, le dispositif juridique
                et les cadres réglementaires.
              </p>
              <p>
                Maîtriser la finalité, les dispositifs, la structure, la
                méthodologie et les outils du bilan de compétences.
              </p>
              <p>Intégrer la déontologie dans sa pratique.</p>
              <p>
                Maîtriser les différentes phases du bilan (entretiens
                préliminaire, investigation, conclusion, suivi à 6 mois).
              </p>
              <p>Intégrer la démarche QUALIOPI.</p>
            </div>
            <div className="modules2">
              <h4>
                Module 2 - Écouter le client et analyser le besoin: L’entretien
                préliminaire
              </h4>
              <ul className="modules2-list">
                <li className="modules2-detail">
                  Acquérir une compréhension approfondie de la motivation et des
                  besoins individuels des clients en situation de licenciement,
                  en mobilité professionnelle et reconversion.
                </li>
                <li className="modules2-detail">
                  Identifier les mécanismes de défense, les freins, et le locus
                  interne et externe des clients.
                </li>
                <li className="modules2-detail">
                  Développer une compréhension profonde de la vision du monde du
                  client.
                </li>
                <li className="modules2-detail">
                  Créer l’alliance avec le client.
                </li>
                <li className="modules2-detail">
                  Maîtriser les techniques de questionnement et d'écoute.
                </li>
                <li className="modules2-detail">
                  Comprendre l'analyse systémique et savoir l'appliquer pour
                  évaluer les situations des clients de manière holistique.
                </li>
              </ul>
            </div>
          </div>
          <div className="modules-right">
            <div className="modules3">
              <h4>
                Module 3 - Développement des Compétences et posture du
                Consultant :
              </h4>
              <ul className="modules3-list">
                <li className="modules3-detail">
                  Définir le cadre et les limites d'intervention de
                  l'accompagnant en bilan de compétences.
                </li>
                <li className="modules3-detail">Techniques d’entretien.</li>
                <li className="modules3-detail">
                  Adopter la posture du consultant en cultivant le non-savoir,
                  le non-vouloir et le non-jugement dans les interactions avec
                  les clients.
                </li>
                <li className="modules3-detail">
                  Co-construire l'accompagnement avec le client et définir le
                  cadre d'intervention.
                </li>
              </ul>
            </div>
            <div className="modules4">
              <h4>Module 4 - Bilan professionnel et personnel</h4>
              <ul className="modules4-list">
                <li className="modules4-detail">
                  Étudier les différents modèles et approches liés à la notion
                  de compétences, de motivation et de personnalité.
                </li>
                <li className="modules4-detail">
                  Comprendre les théories de l'apprentissage, l'auto-formation,
                  l'apprentissage expérientiel, la formation non formelle et le
                  récit de vie et en décrypter les compétences.
                </li>
                <li className="modules4-detail">
                  Mettre en œuvre la démarche de portefeuille de compétences.
                </li>
                <li className="modules4-detail">
                  Appréhender la méthodologie des tests psychométriques,
                  législation et l'éthique.
                </li>
                <li className="modules4-detail">
                  Exploiter les tests et restituer les résultats.
                </li>
                <li className="modules4-detail">
                  Créer des outils d'auto-positionnement et d'évaluation pour
                  les clients.
                </li>
              </ul>
            </div>
            <div className="modules5">
              <h4>
                Module 5 - Approfondissement des techniques et stratégies :
              </h4>
              <ul className="modules5-list">
                <li className="modules5-detail">
                  Approcher les motivations, intérêts et les valeurs des clients
                  en utilisant des typologies Holland, découvrir les outils.
                </li>
                <li className="modules5-detail">
                  Mettre en pratique la méthodologie de l'enquête métier et de
                  la confirmation de projet.
                </li>
                <li className="modules5-detail">
                  Connaitre les techniques d’analyse, lieux, outils et
                  d'évaluation du marché de l'emploi.
                </li>
                <li className="modules5-detail">
                  Informer les clients sur leurs droits à la formation.
                </li>
                <li className="modules5-detail">
                  Savoir élaborer des stratégies et des plans d'actions en
                  prenant en compte l’analyse des risques.
                </li>
                <li className="modules5-detail">
                  Réaliser des synthèses efficaces du bilan de compétences.
                </li>
                <li className="modules5-detail">
                  Appliquer la méthodologie de l'entretien de restitution pour
                  aider les clients à s’emparer et à utiliser les résultats de
                  leur bilan.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </article>
      {/* <article className="planning">
                <h4 className="planning-titles">VOS DATES DE FORMATION:</h4>
                <p>Formation collective en classe virtuelle  synchrone</p>
                <div className="planning-date">
                    <div>
                        <div className="image-container">
                            <img src={CalendarSheet} alt="logo page de calendrier" />
                        </div>
                        <ul className="date-list">
                            <li className="date-list-detail">2, 3, 9 juillet 2024
                            </li>
                            <li className="date-list-detail">24, 25, 26 septembre 2024</li>
                            <li className="date-list-detail">28, 29, 30 octobre 2024</li>
                            <li className="date-list-detail">20, 21, 22 novembre 2024</li>
                        </ul>
                    </div>
                    <p className='Yellow'>800 € <span className='fw-light'>TTC</span></p>
                </div>
            </article> */}
      <a href="tel:06 98 88 15 55" className="contact">
        <div className="image-container">
          <img
            src={MobileHand}
            alt="téléphone dans une main"
            width={450}
            height={500}
          />
          <div className="text">
            <p>Pour obtenir des informations complémentaires</p>
            <p>NOUS CONTACTER</p>
            <p className="contact-tel">06 98 88 15 55</p>
          </div>
        </div>
      </a>
      <Dday />
    </section>
  );
};

export default CareerConsultV2;
