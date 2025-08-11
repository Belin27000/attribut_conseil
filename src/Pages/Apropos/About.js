import React from "react";
import "@/Pages/Apropos/about.scss";
import { Qualiopi, DataDoc, dbPic } from "@/Pages/index.js";
import data from "../../Assets/data/data.json";
import MetaTitleDes from "../../Components/Meta/MetaTitleDes.js";

const About = () => {
  const QualiopiValidity = data.Qualiopi.validationDate;
  console.log(QualiopiValidity);
  return (
    <section className="About">
      <MetaTitleDes />
      <h1 className="sr-only">
        Bilan de compétences en Seine et Marne - qui sommes nous
      </h1>
      <h2>Qui sommes nous ?</h2>

      <div className="Pres">
        <p>
          Nous intervenons sur l’ensemble des sujets concernant le travail :
        </p>
        <p>
          La gestion des carrières professionnelles bilans de compétences, de
          mobilité professionnelle, la psychologie du travail, le développement
          des compétences par la formation professionnelle, la gestion de la
          formation du point de vue de l’ingénierie et de la qualité, les
          risques psychosociaux auprès de tous types d’entreprises et en en
          direction des salariés et des particuliers de tous secteurs et
          niveaux.
        </p>
      </div>
      <div className="Pres">
        <p>
          Nous sommes passionnés par le sujet du travail et de l'apprentissage.
        </p>
        <p>
          Nous croyons fermement que ce domaine, essentiel dans nos vies,
          devrait être une source d'épanouissement et d'élévation plutôt qu'une
          source de souffrance. Notre engagement est de cultiver une approche
          attentive afin de favoriser l'harmonie dans nos vies. Pour y parvenir,
          cela nécessite un effort personnel constant pour se développer et
          s'améliorer, ainsi qu'un travail sur notre relation aux autres et
          notre communication. En combinant ces éléments, nous pouvons créer des
          environnements de travail où le bonheur et l'épanouissement sont
          possibles pour tous. Ensemble, osons le bonheur en entreprise en
          faisant de cet idéal une réalité.
        </p>
      </div>
      <div className="Pres">
        <p>
          ATTRIBUT CONSEILS a plus de 16 ans maintenant, et reçoit plus de 300
          salariés par an de tous secteurs, tous niveaux sur des problématiques
          très diverses liées au travail.
        </p>
        <p>
          Notre équipe est composée de psychologues du travail, de consultants
          experts bilan, de coachs et thérapeutes bref diplômés, d'ingénieurs de
          formation, de chef de projets blended learning, d’anciens RRH et
          dirigeants d’entreprise. Attribut conseils et son équipe attachent une
          grande importance à la formation continue et nous sommes en permanence
          dans un objectif de qualification par la formation et par la
          supervision.
        </p>
      </div>
      <div className="Pres-center">
        <h3>
          Notre expertise englobe un large éventail de domaines lies au travail,
          ce qui nous permet d'intervenir de manière exhaustive sur tous les
          aspects essentiels.
        </h3>
        <p>
          Nous comprenons l'importance de la gestion des carrières
          professionnelles, car elle permet aux individus de tracer leur chemin
          vers le succès et l'épanouissement dans le monde du travail. En nous
          appuyant sur des méthodes éprouvées et une connaissance approfondie
          des dynamiques professionnelles, nous aidons nos clients à élaborer
          des plans de carrière solides et à prendre des décisions éclairées
          pour progresser dans leur domaine.
        </p>
      </div>
      <div className="Pres">
        <p>
          La psychologie du travail est un autre domaine central de notre
          expertise.
        </p>
        <p>
          Nous comprenons les enjeux psychologiques qui accompagnent le travail,
          tels que le stress, la motivation, la satisfaction professionnelle et
          les relations interpersonnelles. En utilisant des approches
          psychologiques avancées, nous offrons un soutien adapté aux individus
          et aux organisations pour améliorer leur bien-être mental, leur
          productivité et leur climat de travail.
        </p>
      </div>
      <div className="Pres">
        <p>
          Le développement des compétences par le biais de la formation
          professionnelle est une autre facette cruciale de notre intervention.
        </p>
        <p>
          Nous croyons fermement que l'apprentissage continu est essentiel pour
          s'adapter aux évolutions du marché du travail et aux nouvelles
          exigences professionnelles. La formation est l’un des leviers de la
          motivation. Nous concevons des programmes de formation personnalisés
          qui ciblent les lacunes spécifiques des individus et des équipes, en
          utilisant des méthodologies pédagogiques innovantes pour maximiser
          l'acquisition de connaissances et le développement des compétences.
        </p>
      </div>
      <div className="Pres">
        <p>
          La gestion de la formation est une tâche complexe qui nécessite une
          approche rigoureuse et une expertise technique.
        </p>
        <p>
          Nous apportons notre savoir-faire en matière d'ingénierie de la
          formation et de gestion de la qualité pour optimiser les processus de
          formation et garantir des résultats efficaces. Nous veillons à ce que
          les programmes de formation soient bien structurés, basés sur des
          objectifs clairs, et évalués de manière objective afin de garantir
          leur pertinence et leur impact positif sur les participants.
        </p>
      </div>
      <div className="Pres-center">
        <p className="Pres-center_bold">
          Nous sommes également conscients des risques psychosociaux qui peuvent
          affecter les entreprises, les salariés et les particuliers. Nous
          offrons des services de conseil et d'accompagnement pour identifier,
          prévenir et gérer ces risques, tels que le stress, le harcèlement ou
          l'épuisement professionnel. Notre approche holistique tient compte des
          facteurs organisationnels et individuels pour promouvoir un
          environnement de travail sain et équilibré.
        </p>
      </div>
      <div className="Pres-center">
        <p className="Pres-center_bold_size">
          Notre objectif est d'apporter des solutions complètes et
          personnalisées à nos clients...
        </p>
        <p>
          ... en combinant notre expertise dans ces différents domaines pour
          favoriser un environnement de travail épanouissant, productif et
          équitable. Quels que soient les défis auxquels nos clients sont
          confrontés, nous sommes là pour les accompagner et les aider à
          atteindre leurs objectifs professionnels.
        </p>
      </div>
      <div className="Pres">
        <p>
          AttriBUT représente une communauté de partenaires privés et publics et
          est en prise sur le marché du travail et ses mutations. L’une de nos
          forces : La mise en réseau.
        </p>
        <p>
          Membre du Centre des Jeunes Dirigeants, nous contribuons à une
          démarche volontaire de performance globale
        </p>
        <ul>
          <li>Respect du client</li>
          <li>Respect du salarié</li>
          <li>Respect de l’environnement</li>
          <li>
            Respect du fournisseur (signataire de la charte des achats
            responsables)
          </li>
          <li>Démarche RSE (membre fondatrice du groupe FACE)</li>
        </ul>
      </div>
      <div className="Pres-center-certif">
        <div className="Pres-center-certif_width">
          <div className="Pres-center-certif_width-Qual">
            <img src={Qualiopi} alt="Logo Qualiopi" width={634} height={339} />
            <p className="Pres-center-certif_width_bold">
              Validé jusqu'au {QualiopiValidity}.
            </p>
          </div>
          <div className="Pres-center-certif_width_bold">
            <p>
              La certification Qualiopi a été délivrée pour la catégorie
              d'action suivante :{" "}
            </p>
            <p>Bilan de compétences et actions de formation</p>
          </div>
          <div className="Pres-center-certif_width_bold Datadoc">
            <p>ATTRIBUT CONSEILS est datadocké sous le numéro :</p>
            <div className="Datadoc">
              <img
                className="DataDocPic"
                src={DataDoc}
                alt="Logo DadaDoc"
                width={716}
                height={772}
              />
            </div>
            <p className="DataDockNbr">id.DD 0000498</p>
          </div>
        </div>
        <div className="Pres-center-certif_width">
          <p className="Pres-center-certif_width_bold">
            ATTRIBUT CONSEILS est titulaire du processus qualité́ QUALIOPI,
            certificat de qualification professionnelle, qui atteste de la
            qualité du processus mis en œuvre par les prestataires d’actions
            concourant au développement des compétences, qu’il s’agisse
            d’actions de formation, de bilans de compétences :
          </p>
          <ul className="certifList">
            <li>Le respect de la réglementation</li>
            <li>
              L’adéquation des compétences et des moyens techniques et humains
              aux actions de formation
            </li>
            <li>La satisfaction des clients</li>
            <li>La pérennité́ financière</li>
            <li>
              Le respect du code de déontologie, du code de conduite
              professionnelle et du règlement intérieur
            </li>
          </ul>
        </div>
      </div>

      <div className="Pres">
        <p>
          Une équipe de psychologues du travail, expert bilans et VAE,
          formateurs consultants, ingénieurs de formation, coachs certifiés,
          anciens RRH, anciens dirigeants, tous animés par le même objectif :
          votre réussite.
        </p>
        <p>
          Notre engagement : Définir les objectifs et les atteindre ! La
          transformation, le renouvellement, la mutation, le mouvement
          nécessitent une conduite de projet avec une méthodologie qui prend en
          compte deux résistances :
        </p>
        <ul>
          <li translate="no">Celle de l’individu</li>
          <li translate="no">Celle du système</li>
        </ul>

        <p>
          A partir de cette complexité, nous nous engageons à prendre le temps
          nécessaire à l’analyse des besoins, à la définition de l’objectif et à
          la construction de votre accompagnement.
          <br />
          Nos valeurs :
        </p>
        <ul>
          <li>Le respect</li>
          <li>L'intégrité</li>
          <li>L'ouverture</li>
          <li>La conscience</li>
          <li>L'efficacité</li>
          <li>Le partage</li>
        </ul>
        <div className="db_Pic">
          <div className="db_Pic-container">
            <img
              width="960px"
              height="960px"
              src={dbPic}
              alt="Portrait De Daphné Battaglia "
            />
          </div>
          <div>
            <h3 translate="no">
              Daphné BATTAGLIA - Fondatrice ATTRIBUT CONSEILS{" "}
            </h3>
            <p className="Pres-Daph">
              Ma passion a toujours été d'apporter mon soutien aux hommes et aux
              femmes dans leur parcours professionnel, et faire connecter 2
              mondes en mouvement: celui de l’entreprise et le nôtre.
            </p>
            <p className="Pres-Daph">
              Pour moi, l'enjeu crucial est partagé : l'entreprise a un rôle
              essentiel à jouer en favorisant sa croissance grâce à des
              collaborateurs épanouis, dont le développement personnel est au
              cœur du projet.
            </p>
            <p className="Pres-Daph">
              De même, chaque collaborateur peut envisager le travail comme un
              moyen d'atteindre ses propres objectifs de développement.
            </p>
            <p className="Pres-Daph_margin">
              Mon approche pédagogique se base sur le croisement des expertises
              en faisant intervenir des psychologues du travail spécialisés dans
              l'emploi, des experts de la formation et des pédagogues
              chevronnés.
            </p>
          </div>
        </div>
        <p className="Pres-Daph">
          Je crois profondément en l'importance de la formation continue tout au
          long de la vie, une conviction que j'ai mise en pratique en me formant
          à différentes étapes de ma vie.
        </p>
        <p className="Pres-Daph">
          Ce qui me porte particulièrement, ce sont les domaines de
          l'autoformation, des théories de l'apprentissage, de la pédagogie, de
          la psychologie du travail et de la dynamique des groupes.
        </p>
        <p className="Pres-Daph_margin">
          J'aime m'impliquer dans des projets existants ou en initier de
          nouveaux. Je suis active au sein de plusieurs associations
          professionnelles, ce qui me permet de rester constamment connectée aux
          évolutions du monde du travail.
        </p>
        <p className="Pres-Daph">
          Mon bagage académique et professionnel comprend un{" "}
          <strong>DESS en Ingénierie de la formation</strong>, une formation
          approfondie en <strong>psychologie jusqu'au niveau Master 2</strong>,
          ainsi qu'une <strong>certification en audit de formation</strong>.
        </p>
        <p className="Pres-Daph">
          J’ai complété ces formations par des certifications en thérapie brèves
          et systémiques, et par une longue formation en coaching qui me vaut le
          titre de <strong>coach senior</strong>.
          {/* Je suis également titulaire d'un <strong>Diplôme Universitaire en audit de formation</strong> et j'ai obtenu la <strong>certification de l'INRS en Formation sur les Risques Psycho Sociaux</strong>. */}
        </p>
        <p className="Pres-Daph">
          En outre, je possède le{" "}
          <strong>
            Titre professionnel en tant que chef de projet en ingénierie de la
            formation blended learning
          </strong>
          .
        </p>
        <p className="Pres-Daph">Je vous l’ai dit, j’adore la formation!</p>
        <p>
          <strong>
            Mes valeurs fondamentales sont la qualité dans le travail,
            l’authenticité et le partage.
          </strong>
        </p>
      </div>
    </section>
  );
};

export default About;
