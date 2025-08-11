import React from "react";
import "./advice.scss";
import dice from "@/Assets/Images/dice.png";
import BarbeMan from "@/Assets/Images/BarbeMan.png";
import ManHide from "@/Assets/Images/ManHide.png";
import QuestionMan from "@/Assets/Images/QuestionMan.png";
import ClockMed from "@/Assets/Images/ClockMed.png";
import PaperCheck from "@/Assets/Images/PaperCheck.png";
import { Link } from "react-router-dom";
import HeaderAdvice from "../../Layouts/Header/HeaderAdvice.js";
import MetaTitleDes from "../../Components/Meta/MetaTitleDes.js";

const JobInterview = () => {
  const metaTitle = `Surmonter “La Question Qui Tue” en Entretien`;
  const metaDescription = `Des conseils pratiques pour répondre à “la question qui tue” en entretien d’embauche. Préparez-vous à affronter les questions difficiles avec confiance.`;
  return (
    <section className="JobInterview">
      <MetaTitleDes title={metaTitle} description={metaDescription} />
      <div className="Page1">
        <HeaderAdvice />
        <header>
          <div className="title-container">
            <h1>A CHACUN SA QUESTION QUI TUE EN ENTRETIEN D’EMBAUCHE....!</h1>
          </div>
          <div className="container">
            <img
              src={dice}
              alt="doigt poussant 3 dés empilés"
              width={389}
              height={310}
            />
          </div>
        </header>
        <main className="article-news">
          <aside className="first-col">
            <img
              src={BarbeMan}
              alt="L'entretien fac au pdg"
              width={389}
              height={310}
            />
            <p>
              Ça y est, vous y êtes! Vous êtes face à l’employeur, celui ou
              celle qui a le pouvoir de vous faire accéder à l’emploi tant
              convoité. Vous êtes confiant puisque vous maîtrisez le b-a-ba de
              la parfaite préparation à l’entretien : vous êtes arrivé à l’heure
              (vous avez pris soin de vérifier le chemin la veille), vous êtes
              tiré à quatre épingles et en conformité avec le code vestimentaire
              de l’entreprise, les produits et services de la société n’ont plus
              de secrets pour vous, vous maîtrisez sur le bout des doigts
              l’offre d’emploi, la description de poste et le profil recherché,
              et vous avez à la portée de la main tous les documents
              susceptibles de vous être utiles (CV, lettres de recommandation,
              diplômes, etc.).
            </p>
            <h2>De plus, vous êtes irrésistible! </h2>
            <p>
              Au premier contact, vous en êtes certain, votre poignée de main
              chaleureuse et votre sourire éblouissant ont donné une première
              impression des plus remarquables à votre interlocuteur.{" "}
            </p>
            <div className="news-Link">
              <Link to={"/home"}>www.attribut-conseils.com</Link>
            </div>
          </aside>
          <article className="double-col">
            <h2>Vous êtes en contrôle total!</h2>
            <p>
              Vos réponses sont fluides, vous récitez les phrases sagement
              préparées que vous avez répétées des dizaines de fois devant le
              miroir en étant si à l’aise qu’elles paraissent spontanées!
            </p>
            <p>
              Rien ne pourrait venir troubler votre paisible ascension vers le
              succès…{" "}
            </p>
            <h3>Rien jusqu’à l’arrivée de .......</h3>
            <img
              src={ManHide}
              alt="homme caché derrière ses main"
              width={389}
              height={198}
            />
            <h2>« LA question qui tue »!</h2>
            <section className="double-col-split">
              <div className="right">
                <p>
                  Le recruteur qui vous semblait jusque-là banal et prévisible
                  s’est brusquement transformé en menace potentielle à votre
                  réussite. Vos mains pourtant si sèches initialement sont
                  désormais moites et vos doigts se tortillent à ne plus pouvoir
                  dissocier votre main gauche de votre main droite!
                </p>
                <p>Qu’a-t-on bien pu vous demander?</p>
                <img
                  src={QuestionMan}
                  alt="Est-ce une question piège"
                  width={389}
                  height={176}
                />
              </div>
              <div className="left">
                <p>
                  Au-delà de la populaire question « Quelles sont vos principaux
                  points à améliorer? » (à laquelle vous avez évidemment déjà
                  trouvé des réponses), plusieurs questions peuvent vous mettre
                  dans l’embarras lors d’un entretien. En effet, un intervieweur
                  expérimenté, bien que suivant un canevas bien structuré, saura
                  cibler vos zones d’inconfort par le biais de questions
                  spontanées auxquelles vous ne serez pas préparé.
                </p>
              </div>
            </section>
          </article>
        </main>
      </div>
      <div className="Page2">
        <HeaderAdvice />
        <main className="article-news">
          <aside className="first-col">
            <h2>LA QUESTION QUI TUE POURRA VARIER D’UN INDIVIDU A L’AUTRE</h2>
            <p>
              selon la personnalité, les compétences, la culture et l’historique
              d’emploi. Pour certains, ce sera une question portant sur les
              changements fréquents d’emploi, les périodes manquantes dans le
              CV, une absence prolongée du marché du travail ou encore, sur ce
              qui semble difficile dans le travail d’équipe. Pour d’autres,
              cette fameuse question portera sur des conflits ayant eu lieu avec
              d’anciens collègues ou superviseurs ou sur une leçon de vie tirée
              d’une situation difficile au travail. Peu importe le contenu de LA
              question,{" "}
            </p>
            <h3>
              vous trouverez quelques conseils afin de vous en sortir indemne,
              ou presque…
            </h3>
            <p>
              Évitez de répondre rapidement en proie au stress ou à la nervosité
              ou de vous exclamez d’un « Hum! Bonne question! », car ceci peut
              donner l’impression que vous n’avez jamais songé à cet élément et
              que vous n’avez pas fait une bonne introspection. Prenez plutôt le
              temps de réfléchir et de reprendre le contrôle en adoptant la
              méthode qui vous rend le plus à l’aise. Celle-ci peut prendre
              diverses formes telles que de demander à l’intervieweur de revenir
              sur cette question à la fin de l’entretien (vous devez toutefois
              être certain d’y revenir!), de prendre simplement un moment de
              réflexion avant de répondre ou encore, de demander un verre d’eau!
            </p>
            <p>
              Souvenez-vous qu’il n’y a aucune obligation de répondre du tac au
              tac et que ces instants pris pour réfléchir seront payants. Vous
              devez cependant répondre à la question, car en n’y répondant pas,
              vous confirmerez votre malaise.
            </p>
            <div className="news-Link">
              <Link to={"/home"}>www.attribut-conseils.com</Link>
            </div>
          </aside>
          <article className="double-col">
            <h2>Respirez...</h2>
            <section className="double-col-split">
              <div className="right">
                <p>
                  Si, malgré ces quelques conseils, vous avez fourni une réponse
                  qui n’est pas en adéquation avec ce que vous pensez ou avec ce
                  que vous souhaitiez exprimer, dites-le simplement et demandez
                  si vous pouvez apporter quelques éclaircissements ou
                  explications.
                </p>
                <p>
                  Il sera trop tard lorsque vous en serez à vous morfondre dans
                  votre voiture à la suite de l’entretien.{" "}
                </p>
                <img
                  src={ClockMed}
                  alt="femme medecin avec un horloge à la main"
                  width={389}
                  height={383}
                />
                <p>
                  «De plus, avouer de façon sympathique, cette bévue vous sera
                  fort probablement pardonnée. Si par malheur, la question posée
                  touche votre corde sensible au point tel de vous arracher des
                  larmes, n’hésitez pas à demander une petite pause afin de vous
                  permettre d’aller vous rafraîchir. Cette situation n’est
                  certainement pas idéale, mais sera préférable que de forcer
                  votre intervieweur à sortir sa boîte de papiers-mouchoirs!
                </p>
                <p>
                  Bien qu’il soit difficile de prévoir l’ensemble des questions
                  du recruteur, il est tout de même possible de vous préparer à
                  cette « question qui tue ». En effet, songez à ce qui serait
                  le plus difficile pour vous de discuter lors de l'entretien,
                  au sujet que vous souhaiteriez éviter à tout prix et faites-y
                  face!
                </p>
              </div>
              <div className="left">
                <p>
                  Vous serez ainsi beaucoup plus à l’aise dans le cas où ce
                  sujet tabou serait abordé. La simplicité, la transparence et
                  l’honnêteté demeurent toujours des alliés inconditionnels afin
                  de répondre aux questions les plus délicates.
                </p>
                <p>
                  En conclusion, il est important de toujours garder en tête que
                  votre interlocuteur en a vu d’autre! Ainsi, essayer de le
                  tromper avec des réponses évasives ne pourra être gagnant.{" "}
                </p>
                <h2 className="center">
                  Soyez vous-même, c’est-à-dire à votre meilleur : survivez à «
                  LA question qui tue »!
                </h2>
                <img
                  src={PaperCheck}
                  alt="main qui coche des case sur un papier"
                  width={389}
                  height={658}
                />
                <p className="bold">
                  Dans notre prochaine news letter nous vous présenterons une
                  liste de question possible en entretien, en attendant
                  recherchez celles que vous ne voulez pas que l'on vous pose...{" "}
                </p>
              </div>
            </section>
            <div className="news-Link last">
              <Link to={"/home"}>www.attribut-conseils.com</Link>
            </div>
          </article>
        </main>
      </div>
    </section>
  );
};

export default JobInterview;
