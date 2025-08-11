import React from "react";
import { Link } from "react-router-dom";

import Pin from "@/Assets/Images/Pin.png";
import Thumbup from "@/Assets/Images/Thumbup.png";
import SportMan from "@/Assets/Images/SportMan.png";
import PiseTower from "@/Assets/Images/PiseTower.png";
import MenInVisio from "@/Assets/Images/MenInVisio.png";
import DogQuestion from "@/Assets/Images/DogQuestion.png";
import PeopleLadder from "@/Assets/Images/PeopleLadder.png";
import WomanSurprised from "@/Assets/Images/WomanSurprised.png";
import MetaTitleDes from "../../../Components/Meta/MetaTitleDes.js";

import "./killingQuestion.scss";
import HeaderAdvice from "@/Layouts/Header/HeaderAdvice.js";

const KillingQuestion = () => {
  const metaTitle =
    "rouver sa Voie : Une Approche Constructiviste pour son Chemin";
  const metaDescription =
    "Adoptez une approche constructiviste pour votre carrière : réflexion, exploration, rencontres, développement continu et évaluation pour une voie épanouissante.";

  return (
    <section className="KillQuest">
      <MetaTitleDes title={metaTitle} description={metaDescription} />
      <div className="Page1">
        <HeaderAdvice />
        <header className="KillQuest-title">
          <div className="title-container">
            <h1>La question qui tue....!</h1>
          </div>
          <div className="container">
            <img
              src={WomanSurprised}
              alt="Femme surprise avec les mains sur ses joues"
              width={1247}
              height={1039}
            />
          </div>
        </header>
        <article>
          <div className="OneCol">
            <div className="container">
              <img
                src={DogQuestion}
                alt="Chien regardant un point d\'interrogation"
                width={265}
                height={220}
              />
            </div>
            <p>
              L'incontournable question dans un entretien d'embauche! Cette
              demande peut être DD, surtout si vous n'avez pas bien réfléchi à
              la manière d'y répondre. Pourtant, il s'agit d'une question
              souvent posée en entrevue. Quoi qu'il en soit, plusieurs candidats
              sont mal à l'aise lorsqu'on leur demande quelles sont leurs
              faiblesses. La plupart répondent qu'ils sont trop perfectionnistes
              ou trop minutieux, et transforment ainsi leurs défauts en qualités
              !
            </p>
            <p>
              L'employeur ne pose pas cette question pour vous embarrasser. Il
              veut simplement se faire une idée sur vous et, par le fait même,
              tester votre capacité à vous remettre en question. Un autre
              voudra, quant à lui, connaître les risques qu'il prend en vous
              embauchant.
            </p>
            <h3>Les points forts</h3>
            <p>
              Un recruteur peut vous demander de lui citer trois de vos qualités
              et autant de défauts. Pour les qualités, c'est simple ! Il s'agit
              d'énoncer celles énumérées dans le profil d'emploi, sinon celles
              qui ont un lien direct avec l'emploi offert.
            </p>
          </div>
          <main className="twoCol">
            <h2>Comment décrire vos points forts et vos points faibles?</h2>
            <div className="doubleCol">
              <p>
                Si par exemple vous postulez pour un travail de laboratoire,
                vous ne parlez que des aptitudes désignées dans l'offre de
                service. Même si l'employeur n'en précise aucune, ça ne veut pas
                dire qu'il n'y en a pas !{" "}
              </p>
              <p>
                Vous devez trouver celles qui correspondent le mieux à l'emploi
                envisagé, en vous posant la question suivante : « Quels sont les
                qualités nécessaires pour s'acquitter efficacement des tâches
                énumérées ? »{" "}
              </p>
            </div>
            <div className="container">
              <img
                src={Pin}
                alt="Figure dorée se démarquant parmi des figures argentées identiques, représentant l’individualité et le leadership"
                width={2079}
                height={1058}
              />
            </div>

            <div className="doubleCol">
              <div className="container">
                <img
                  src={SportMan}
                  alt="Homme barbu portant un bandeau jaune et des lunettes de soleil, posant fièrement en tenue de sport colorée"
                  width={1002}
                  height={1323}
                />
              </div>
              <div className="text">
                <p>
                  Grâce à ces étapes, un bilan de compétences devient un outil
                  précieux. Il vous aide à structurer vos réflexions, explorer
                  activement vos options et développer continuellement vos
                  compétences. Un bilan de compétences peut vous fournir des
                  insights essentiels pour guider votre carrière et assurer
                  votre épanouissement professionnel.
                </p>
                <h3>Les points faibles</h3>
                <p>
                  Il n'est pas nécessaire de se montrer parfait. Rien n'est plus
                  énervant et irréaliste que quelqu'un qui prétend ne pas avoir
                  de défauts. D'ailleurs, qui n'a jamais eu d'échecs ni de
                  doutes ?
                </p>
              </div>
            </div>
          </main>
          <div className="news-Link last">
            <Link to={"/home"}>www.attribut-conseils.com</Link>
          </div>
        </article>
      </div>
      <div className="Page2">
        <HeaderAdvice />
        <article>
          <div className="OneCol">
            <h2>
              Montrez que vous savez prendre suffisamment de recul pour
              discerner vos faiblesses.{" "}
            </h2>
            <p>
              Décrivez-les en prenant bien soin d'ajouter les mesures que vous
              avez prises pour corriger chacune d'elles ; ainsi le plan d'action
              que vous proposez fera vite oublier vos points faibles.
            </p>
            <p>
              Attention, ce n'est pas le moment de parler à cœur ouvert durant
              votre entretien : il ne faut pas exprimer vos crantes les plus
              profondes devant le recruteur, ni mentionner un défaut qui
              pourrait réduire vos chances de décrocher le poste que vous
              convoitez. Si vous êtes désordonné et que vous postulez un emploi
              de bibliothécaire, vous n'êtes pas sur la bonne voie !
            </p>
            <p>
              Il en va de même si vous êtes individualiste alors que l'emploi
              que vous souhaitez exige de nombreux travaux d'équipe. Par
              exemple, il serait désastreux pour un comptable de dire « je suis
              un peu trop méticuleux » ; tout comme il pourrait être fatal pour
              un commercial d'affirmer « je suis un peu impatient ».
            </p>
            <p>
              {" "}
              Si l'on vous pose l'inévitable question, le mieux est de répondre
              que vous n'avez pas de défauts majeurs, puis d'énumérer les points
              que vous pourriez améliorer.
            </p>
            <div className="container">
              <img
                src={PeopleLadder}
                alt="3 personnes en costumes et tailleur en train de monter à l'échelle"
                width={1247}
                height={1039}
              />
            </div>
          </div>
          <main className="twoCol">
            <h2>Des réponses possibles</h2>
            <div className="doubleCol">
              <div className="text">
                <p>
                  Faites toujours suivre votre défaut d'une solution pour vous
                  améliorer. Voici quelques réponses envisageables : <br />« On
                  dit de moi que je suis un moulin à paroles, mais en fait,
                  c'est chez moi une façon d'amener les autres à parler d'eux. »
                </p>
                <p>
                  « Je suis une personne un peu sensible, mais je maîtrise de
                  mieux en mieux mon émotivité. »<br />« Je ne vois pas le temps
                  passer en réunion. Il m'arrive de déborder sur la durée
                  prévue. J'en ai conscience et je fais des efforts pour me
                  structurer et me discipliner davantage. Déjà, je crois avoir
                  bien progressé. »
                </p>
              </div>
            </div>
            <div className="container">
              <img
                src={Thumbup}
                alt="3 Personnes avec le pouce vers le haut"
                width={2079}
                height={1058}
              />
            </div>

            <div className="doubleCol">
              <div className="text">
                <div>
                  <p>
                    « Je ne m'exprime pas encore parfaitement en anglais, même
                    si je peux suivre une conversation ; mais je tente
                    d'améliorer ma pratique, notamment lors de séjours à
                    l'étranger. »{" "}
                  </p>
                  <p>
                    « Ma connaissance d'Excel est moins approfondie que celle de
                    Word, mais je possède un ordinateur personnel à la maison
                    sur lequel je m'entraîne régulièrement. »{" "}
                  </p>
                  <p>
                    « Je suis une personne un peu sensible, mais je maîtrise de
                    mieux en mieux mon émotivité. »{" "}
                  </p>
                  <p>
                    « Je prends parfois les choses tellement à coeur que j'ai
                    tendance à en faire une question personnelle. Depuis quelque
                    temps, je travaille sur ce point. »
                  </p>
                  <p>
                    « Je suis un peu timide, mais lorsque je commence à me
                    sentir bien dans un groupe, je suis capable de m'investir. »
                  </p>
                </div>
                <div>
                  <p>
                    « Je ne suis peut-être pas assez démonstratif. Dans un
                    groupe, j'écoute plus que je ne parle, on me trouve ainsi
                    plutôt réservé. J'essaie de m'améliorer en participant à des
                    discussions entre amis. »
                  </p>
                  <p>
                    « Il est difficile pour moi de dire non. En fait, j'ai
                    encore tendance à dire oui facilement, mais en y ajoutant
                    maintenant une échéance réaliste.
                  </p>
                  <p>
                    « J'ai un peu de difficultés à m'exprimer devant un groupe.
                    C'est certainement dû à un manque de pratique. Depuis l'an
                    dernier, je suis membre d'un cercle de discussion dans
                    lequel je fais sans cesse du progrès. »{" "}
                  </p>
                  <p>
                    « J'ai une petite tendance à être soucieux lorsqu'on me
                    confie un travail très difficile ou complexe, mais c'est par
                    souci de bien faire les choses. Lorsque je me trouve dans
                    cette situation, je valide mon travail plus souvent auprès
                    de mon supérieur. »
                  </p>
                </div>
              </div>
            </div>
          </main>
          <div className="news-Link last">
            <Link to={"/home"}>www.attribut-conseils.com</Link>
          </div>
        </article>
      </div>
      <div className="Page3">
        <HeaderAdvice />
        <article>
          <div className="OneCol">
            <p>
              « Dans une équipe, je suis souvent celui qui questionne. Je
              soulève les problèmes avant qu'ils ne deviennent ingérables, je
              suis parfois considéré comme l'avocat du diable. Mais j'essaie
              d'aborder certains points avec humour, sans brusquer mes
              collègues, ce qui permet la plupart du temps de faire accepter mes
              interventions. »
            </p>
            <p>
              « Je n'aime pas réprimander le personnel, alors quand j'ai à le
              faire, je commence par un élément positif. »
            </p>
            <p>
              « En période de stress intense, je suis parfois directif avec mes
              collaborateurs. Lorsque cela m'arrive, j'ajoute toujours une
              petite touche d'humour à mon intervention. »
            </p>
            <h3>
              Révélez de vrais défauts sur vous, mais qui sont en fait mineurs
              et corrigibles dans le cadre de votre emploi.{" "}
            </h3>
            <p>
              Vous pouvez tout aussi bien mentionner un point faible qui n'est
              pas du tout en lien avec vos fonctions professionnelles. Par
              exemple, vous pouvez avouer être un peu désordonné à la maison,
              mais en précisant qu'au travail, vous êtes tout le contraire :
              vous occupez bien vos fonctions, vous êtes organisé et structuré.
              <div className="container">
                <img
                  src={PiseTower}
                  alt="Tour de pise"
                  width={1247}
                  height={1039}
                />
              </div>
            </p>
          </div>
          <main className="twoCol">
            <h2>Des réponses à eviter</h2>
            <div className="doubleCol">
              <div className="text">
                <p>
                  Répondre que vous êtes trop perfectionniste ou trop minutieux,
                  et transformer vos défauts en qualités, ça ne passe plus
                  auprès des recruteurs. Ils sont tout simplement fatigués de
                  l'entendre ! Voici d'autres exemples de réponses à éviter :
                  <br />
                  « Je suis trop dynamique. »<br />
                  Je n'ai pas vraiment de défauts, je suis une personne facile à
                  vivre et efficace dans le travail. »
                </p>
                <p>
                  « J'ai les défauts de mes qualités et les qualités de mes
                  défauts. »
                  <br /> « Je suis tenace... jusqu'à l'entêtement. »<br />« Ma
                  grande franchise m'a parfois joué des tours. »<br />« Mon
                  enthousiasme me pousse parfois à l'excès. »<br />
                  l« Mes défauts sont minimes par rapport à mes qualités. »
                  <br />« Je suis exigeant avec moi-même, je le suis également
                  avec les autres. »
                </p>
              </div>
            </div>
            <div className="container">
              <img
                src={MenInVisio}
                alt="Homme en costume gris au travail souriant devant son ordinateur"
                width={2079}
                height={1058}
              />
            </div>

            <div className="OneCol">
              <div className="text">
                <p className="Bold_BIG">
                  Ne vous faites plus surprendre par cette question. Prévoyez
                  une liste de points à améliorer pour ne pas figer bêtement
                  devant l'employeur. La règle d'or est de ne jamais vous
                  dévaloriser en entretien.{" "}
                </p>
              </div>
              <Link to={"/bilan-de-competence"} className="MoreInfo">
                Pour en savoir plus
              </Link>
            </div>
          </main>
          <div className="news-Link last">
            <Link to={"/home"}>www.attribut-conseils.com</Link>
          </div>
        </article>
      </div>
    </section>
  );
};

export default KillingQuestion;
