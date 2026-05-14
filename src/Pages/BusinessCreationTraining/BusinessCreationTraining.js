import allFiles from "@/_Services/fileToDownload.service.js";
//import FlagCPF from "@/Assets/Images/CPF_France.png";
//import CPF_White from "@/Assets/Images/CPF_White.png";
import success from "@/Assets/Images/success.png";
import Tree from "@/Assets/Images/Tree.png";
import TwoDesigner from "@/Assets/Images/TwoDesigner.png";
import Visio2 from "@/Assets/Images/Visio2.png";
import React from "react";
import TelButton from "../../Components/Button/TelButton/TelButton.js";
import CircleDot from "../../Components/CircleDot/CircleDot.js";
import Dday from "../../Components/Dday/Dday.js";
import DownloadFile from "../../Components/FileLink/DownloadFile.js";
import GoogleRate from "../../Components/Google/GlobalRate/GoogleRate.js";
import MetaTitleDes from "../../Components/Meta/MetaTitleDes.js";
import "./businessCreationTraining.scss";

const BusinessCreationTraining = () => {
  const metaTitle = `Attribut Conseils - Formation à la création d'entreprise `;
  const metaDescription = `Vous souhaitez être accompagné pour la création de votre entreprise ? Contactez Attribut conseils en Seine et Marne et Ile de France`;
  return (
    <section className="bct">
      <MetaTitleDes title={metaTitle} description={metaDescription} />

      <div className="container">
        <div className="Landing-Page container-img">
          <img
            className="Tree"
            src={Tree}
            alt="Logo arbre Attribut conseils"
            width={1002}
            height={633}
          />
          {/* <img
            className="FlagCPF"
            src={FlagCPF}
            alt="Logo CPF avec drapeau Français"
            width={500}
            height={164}
          /> */}
        </div>
        <div className="container-head">
          <h1>
            <span>Votre</span>
            <br /> ACCOMPAGNEMENT CRÉATION D’ENTREPRISE
          </h1>
          <h2>
            Préparez-vous à réussir
            <br />
            <span>Votre création d’entreprise !</span>
          </h2>
        </div>
      </div>
      <div className="bct-description">
        <div className="bct-pres">
          <p>
            Bienvenue,
            <br />
            Vous aspirez à concrétiser votre projet de création d’entreprise ?
            Vous recherchez à développer vos compétences entrepreneuriales et à
            inscrire votre entreprise dans une trajectoire de croissance durable
            ?
          </p>
          <p>
            Notre formation, entièrement personnalisée, a pour objectif de vous
            aider à prendre du recul afin de libérer le potentiel de croissance
            de votre future entreprise. Nous vous accompagnons dans la
            structuration et la consolidation de votre projet, en vous préparant
            à relever les défis de demain, pour un lancement serein et assuré.
          </p>
        </div>
        <div className="Success-container">
          <p>
            L’accompagnement
            <br />
            est le gage d’une
            <br /> réussite
            <br /> entrepreneuriale. 85 % des entreprises accompagnées sont
            toujours en activité 3 ans après leur <br />
            création.{" "}
          </p>
          <img
            className="Success"
            src={success}
            alt="Logo recompense"
            width={389}
            height={500}
          />
        </div>
      </div>
      <div className="training-path">
        <div className="description">
          <h2>Comment se déroule la formation?</h2>
          <p>
            Chaque formation à la création d’entreprise est conçue de manière
            spécifique, offrant un apprentissage individualisé pour{" "}
            <b>répondre à vos besoins uniques</b>. Nous nous appuyons sur une
            méthodologie générale tout en adaptant les contenus et les outils à
            votre projet spécifique.
          </p>
          <p>
            Vous bénéficierez de l'accompagnement d'un dirigeant expérimenté de
            PME, spécialisé dans le soutien aux jeunes créateurs.{" "}
            <b>Un premier entretien, gratuit et sans engagement</b>, nous
            permettra d'analyser vos besoins afin de concevoir un programme sur
            mesure qui vous convienne.
          </p>
          <p>
            Notre approche privilégie une pratique intensive, avec un ratio de
            10% théorique et 90% pratique. Tout au long de la formation, vous
            travaillerez activement sur votre projet de création, depuis
            l'exploration de votre idée jusqu'à la concrétisation de votre
            entreprise.
          </p>
          <div className="description-picContainer">
            <img
              src={TwoDesigner}
              alt="Two designer working"
              width={500}
              height={392}
            />
            <div className="text">
              <p className="Yellow">100% visio/100% présentiel ou mixte</p>
              <p className="Yellow medium">Au choix</p>
              <p>
                Pas de plateforme digitale impersonnelle, que des consultants
                formateurs en entretien
              </p>
            </div>
            <img
              src={Visio2}
              alt="Man working on a laptop"
              width={500}
              height={392}
            />
          </div>
        </div>
        <div className="yellow-circle"></div>
        <div className="white-circle"></div>
        <div className="yellow-line"></div>
      </div>
      <div className="training-step">
        <div className="step">
          <div>
            <h3>
              Quels sont les étapes cles de votre formation à la création
              d’entreprise?
            </h3>
            <ol>
              <li>Le projet: Définir et évaluer l’idée</li>
              <li>
                Le business plan: Réaliser l’étude de marché, definir la
                stratégie
              </li>
              <li>L’activité et les moyens - Définir la rentabilité</li>
              <li>
                Financement: Notions de bilan, BFR, fonds propres et
                immobilisations{" "}
              </li>
              <li>
                Prévisions financières: suivi, plan de financement, compte de
                résultat, plan de trésorerie,{" "}
              </li>
              <li>Statut juridique - Régime social</li>
              <li>Démarche: plan d’actions des formalités</li>
            </ol>
          </div>
        </div>
        <div className="Inter"></div>
        <div className="step-after">
          <div>
            <h3>
              Et après la <span>formation?</span>
            </h3>
            <p>
              Nous restons à vos cotés!{" "}
              <span>Vous rejoignez notre communauté d’entrepreneurs.</span>
            </p>
            <p className="whiteP">
              Vous bénéficiez d’un suivi à 6 mois avec votre formateur.{" "}
            </p>
            <p className="Darkblue">Pour obtenir le programme détaillé</p>
            <TelButton number="06 98 88 15 55" />
          </div>
        </div>
      </div>
      <div className="whoCanDo">
        <div className="whoCanDo-yellow-circle"></div>
        <div className="whoCanDo-white-circle"></div>
        <h3>Qui peut intégrer la formation création d’entreprise ?</h3>
        <p>
          Le cabinet ATTRIBUT CONSEILS est là pour soutenir tous les porteurs de
          projets, qu'ils évoluent dans le secteur public ou privé, quel que
          soit leur niveau, leur statut ou leur domaine d'activité. Nous sommes
          là pour vous, que vous ayez simplement une idée en germe ou que vous
          cherchiez à développer vos compétences entrepreneuriales.
        </p>
      </div>
      <div className="Qualiopi_stats">
        <DownloadFile file={allFiles.CreaCompanyFiles()} dot={false} />
      </div>
      <div className="howPay">
        <div className="text">
          <h3>Comment financer ma formation création d’entreprise? </h3>
          <p>
            Le prix de cette formation se situe entre <b>1000€ et 2240€.</b> Le
            financement de la formation dépend de votre situation, statut et des
            modalités souhaitées.
          </p>
          <p>
            La durée de la formation varie entre 8h et 16h, selon votre besoin,
            entièrement individualisée et sous la forme d’entretien en face à
            face (visio ou présentiel ou mixte). Un travail personnel est
            nécessaire entre les entretiens.
          </p>
          <p>
            Pour financer votre formation vous avez 3 possibilités : le plan de
            développement des compétences de votre employeur, France Travail ou
            le financement personnel. Vous pouvez consulter nos conditions
            générales de vente ci dessous.
          </p>
        </div>
        {/* <div className="picContainer">
          <img src={CPF_White} alt="Logo CPF" width={450} height={265} />
        </div> */}
      </div>
      <div className="trainYourself">
        <h3>FORMEZ VOUS ET DÉVELOPPEZ VOS COMPÉTENCES ENTREPRENEURIALES</h3>
        <div className="text">
          <p className="Yellow">Du lundi au samedi inclus</p>
          <p className="Yellow medium">De 8h30 à 20h</p>
          <p>
            Des horaires adaptés aux vôtres, pour prendre le temps de bien faire
          </p>
        </div>
        <CircleDot />
      </div>
      <div className="GoogleReview">
        <div className="googleRate">
          <h3>AVIS GOOGLE</h3>
          <GoogleRate />
        </div>
        <div className="reviewExample">
          <q>
            Un accompagnement méthodique et de grande qualité, qui m'a permis
            d'y voir clair dans mon projet et m'a vraiment donné confiance pour
            sa réalisation. Un grand Merci
          </q>
          <br />
          <br />
          <q>
            Très bon accompagnement, écoute et co-construction du projet très
            bonne. Partie financière très pédagogique
          </q>
          <br />
          <br />
          <q>
            Très bon accompagnement, écoute et co-construction du projet très
            bonne. Partie financière très pédagogique
          </q>
          <br />
          <br />
          <q>
            Excellent formateur ! J’ai réalisé avec Alain une formation création
            d’entreprise , et j’ai été très agréablement surpris de la qualité
            de prestation. A l’écoute, Alain , prend le temps de nous expliquer
            et de mettre en pratique. Suivi personnalisé et pédagogie ++++ Je
            recommande vivement
          </q>
        </div>
      </div>
      <Dday />
    </section>
  );
};

export default BusinessCreationTraining;
