import React from 'react';
import allFiles from '../../_Services/fileToDownload.service.js';
import ContactButton from '../../Components/Button/ContactButton.js';
import Dday from '../../Components/Dday/Dday.js';
import DownloadFile from '../../Components/FileLink/DownloadFile.js';
import MetaTitleDes from '../../Components/Meta/MetaTitleDes.js';
import './outplacement.scss';

const Outplacement = () => {
    const metaTitle = `Attribut Conseils - Outplacement`
    const metaDescription = `Vous souhaitez repositionner un ou plusieurs collaborateurs, l'outplacement est LA solution- Contactez-nous !`
    return (
        <section className='Outplacement'>
            <MetaTitleDes title={metaTitle} description={metaDescription} />

            <h1 className='sr-only'>Cabinet d'outplacement en Seine et Marne</h1>
            <h2 className="Outplacement-title">OUTPLACEMENT INDIVIDUEL ou COLLECTIF </h2>
            <article className="Outplacement-article">
                <h3 className="Outplacement-article-title">QU’EST CE QUE l’OUTPLACEMENT ? </h3>
                <p>Dans le cadre d’une procédure de restructuration, l’entreprise peut faire appel à un prestataire pour piloter le repositionnement d’un ou plusieurs collaborateurs jusqu’à l’obtention d’une solution professionnelle durable. Une réunion avec l’entreprise pourra être mis en place afin de mieux préciser le contexte et la situation professionnelle du ou des salariés.
                </p>
                <h3 className="Outplacement-article-title">LE RÔLE DE NOTRE CABINET ATTRIBUT CONSEILS</h3>
                <p>Notre expérience et notre réseau sont nos atouts pour piloter le repositionnement du salarié jusqu’à l'obtention d’une <strong>solution professionnelle durable</strong>.
                </p>
                <p>Notre cabinet garantit la mobilisation et l’engagement des moyens humains et matériels nécessaires jusqu’à la réussite de la mission : contrat de travail, création ou reprise d’entreprise, entrée en formation...
                </p>
                <p>Nous assurons également un rôle social fort permettant aux salariés de <strong>mieux vivre cette situation</strong> souvent délicate.
                </p>
                <p>L'entreprise prouve ainsi sa démarche proactive et cultive une image responsable. La prise en charge du reclassement des salariés par notre cabinet offre à l'ensemble des acteurs concernés une <strong>approche rassurante</strong>.
                </p>
                <p>Vous apprécierez notre suivi et notre implication.
                </p>
                <p>Notre cabinet spécialisé en gestion de carrières sensibilise les salariés sur l'optimisation des chances de réussite et la connaissance de l'environnement.</p>
                <h3 className="Outplacement-article-title">DES PERSPECTIVES GAGNANT- GAGNANT</h3>
                <p className='WinWin'>Le reclassement des collaborateurs permet:
                </p>
                <ul className='WinWin-List'>
                    <li><strong>AU SALARIE :</strong>
                        <ul>
                            <li>D’être accompagné dans la transition vers de nouvelles perspectives
                            </li>
                            <li>De faire de ce moment une opportunité
                            </li>
                            <li>D’être soutenu dans la gestion du stress occasionné
                            </li>
                            <li>De faire le point sur ses compétences et son projet de carrière
                            </li>
                            <li>De définir et mettre en œuvre une stratégie de reclassement ou de reconversion
                            </li>
                            <li>D’être coaché dans l’intégration de son nouveau poste
                            </li>
                        </ul>
                    </li>
                    <li><strong>A L’ENTREPRISE :</strong>
                        <ul>
                            <li>D’être en phase avec les réalités changeantes du marché
                            </li>
                            <li>De rester viables et compétitives
                            </li>
                            <li>De maintenir la productivité
                            </li>
                            <li>De s’engager activement dans le repositionnement des collaborateurs
                            </li>
                            <li>De faire passer un message rassurant auprès des équipes
                            </li>
                            <li>D’accélérer le retour à l’emploi
                            </li>
                            <li>De bénéficier d’un appui dans la mise en place et la réalisation de la procédure
                            </li>
                            <li>De maintenir un climat social favorable
                            </li>
                        </ul>
                    </li>
                </ul>
                <h3 className="Outplacement-article-title">OBJECTIFS DE L’ACCOMPAGNEMENT </h3>
                <p>La finalité est d’abord ﻿de permettre au salarié de se (re)positionner professionnellement, après avoir identifié ses potentialités, ses aspirations et les avoir confrontés aux réalités du marché. Le déroulement de l’accompagnement permettra au salarié d’analyser ses compétences professionnelles et personnelles ainsi que ses aptitudes et motivations afin de définir un projet professionnel pour un retour à l’emploi et, le cas échéant, un projet de création d’entreprise. L’accompagnement vise à valoriser l'image de soi, retrouver un mental gagnant à travers l'analyse dynamique de son parcours personnel et professionnel dans un objectif de réussite et pour atteindre un résultat concret de retour à l’emploi ou de création d’entreprise. </p>
            </article>
            <article className="Outplacement-article_bgWhite">
                <h3 className="Outplacement-article_blue">LES CLÉS DE LA RÉUSSITE</h3>
                <p><strong>Convergence de paramètres :  </strong></p>
                <p><strong>Un partenariat fort avec l’ensemble des parties prenantes : Direction, syndicats, CE et salariés.</strong></p>
                <p><strong> Une collaboration fructueuse avec les associations d’entreprises, les centres de formation, les pôles emploi</strong></p>
                <p><strong>L’implication du salarié licencié et consultants d’Attribut Conseils vers l’aboutissement du projet de re positionnement</strong></p>
            </article>
            <article className="Outplacement-article">
                <h3 className="Outplacement-article-title">LES ÉTAPES DE L’ACCOMPAGNEMENT</h3>
                <p>Le processus dont <strong>le salarié est l’acteur principal</strong>, est conduit par un consultant en entretiens sur une moyenne de 6 mois et se termine par un suivi pendant la première période de l’intégration en entreprise si souhaité.</p>
                <p>L’accompagnement pourra se prolonger sur 12 mois selon les besoins.</p>
                <p>L’accompagnement comporte plusieurs phases qui correspondent à la construction d’un projet quel qu’il soit.</p>
                <p><strong>LA PREMIERE ETAPE </strong>permet au salarié d’être informé sur le déroulement de la prestation et des formalités administratives. Il permet surtout de commencer à travailler sur son propre projet, car le consultant axera le sujet sur le futur. Les doutes, les questionnements, les amertumes s’expriment et ce seront possiblement nécessaires. Le consultant commence son travail pour emmener la personne vers demain.
                </p>
                <p><strong>LA DEUXIEME ETAPE </strong>consiste à exprimer à huit clos ses problématiques personnelles, ses propres besoins, ses freins, ses peurs. Pour le consultant, c’est le moment d’aller chercher où se situent les motivations pour commencer à entrevoir la forme qu’il faudra mettre en place pour accompagner le salarié : Pédagogie individualisée, le consultant approprié et experts nécessaires. Le consultant et le salarié co construisent le programme et finalisent par un accord d’engagement réciproque.
                </p>
                <p><strong>LA TROISIEME ETAPE </strong>est le temps du bilan. Nécessaire pour faire le point sur son capital de connaissances, de compétences. Le bilan est le moment de la pause, un retour sur soi. Il va permettre de réfléchir au sens que l’on veut donner à sa vie professionnelle. Pour cela, 10h d’entretiens seront nécessaires. Le salarié devra mener un travail personnel en dehors des entretiens, pour finaliser un projet qui déterminera la voie qu’il souhaite poursuivre. Les résultats de ce bilan peuvent amener la personne à transférer ses compétences vers d’autres secteurs, à modifier radicalement son projet et s’engager dans les chemins de la formation ou reprendre ou créer une entreprise.
                </p>
                <p><strong>LA QUATRIÈME PHASE : </strong>Une fois le bilan réalisé, c’est le moment de la préparation à l’action.
                </p>
                <p>Le salarié entre dans la quatrième phase composée de plusieurs étapes : Préparation, mise en œuvre du projet,
                </p>
                <p>temps de suivi jusqu’à l’atteinte de l’objectif : Emploi, Formation, ou création et reprise d’entreprise.
                </p>
            </article>
            <article className="Outplacement-article_bgWhite">
                <h3 className="Outplacement-article_blue"> Contactez nous dès maintenant pour l’analyse de vos besoins : </h3>
                <ContactButton />
            </article>
            <article className="Outplacement-article">
                <h3 className="Outplacement-article-title">Nos tarifs</h3>
                <p>Le coût de l’outplacement est évalué en fonction de vos besoins. Un devis sera alors établit.
                </p>

                <DownloadFile file={allFiles.outplacementFile()} />

            </article>
            <Dday />
        </section>
    );
};

export default Outplacement;