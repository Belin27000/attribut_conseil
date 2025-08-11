import React from 'react';
import allFiles from '../../_Services/fileToDownload.service.js';
import ContactButton from '../../Components/Button/ContactButton.js';
import ScrollToTop from '../../Components/Button/ScrollButton/ScrollToTop.js';
import Dday from '../../Components/Dday/Dday.js';
import DownloadFile from '../../Components/FileLink/DownloadFile.js';
import MetaTitleDes from '../../Components/Meta/MetaTitleDes.js';
import './vae.scss';

const Vae = () => {
    const metaTitle = `Attribut Conseils - VAE`
    const metaDescription = `Vous cherchez à réaliser une VAE en Seine et Marne ou en visio? Contactez nous!`


    return (
        <section className='Vae'>
            <MetaTitleDes title={metaTitle} description={metaDescription} />
            <h1 className='sr-only'>Vae en Seine et Marne</h1>

            <h2 className='Vae-title'>Accompagnement VAE - VAPP</h2>
            <article className='Vae-article'>
                <h3 className='Vae-article-title'>Et si je validais mes compétences par un diplôme… La VAE/La VAPP</h3>
                <p>
                    Vous voulez faire reconnaitre vos compétences par un CAP, BTS, Licence Pro, titres professionnels, Master,...? Vous voulez accéder à des emplois supérieurs nécessitant un diplôme spécifique ?... Certains concours de la fonction publique vous tentent ?... Vous voulez vous inscrire à une formation exigeant un niveau de diplôme supérieur à celui que vous possédez ?...
                </p>
                <p>Faire la différence entre VAE et VAP85 :</p>
                <p className='noPadding'>
                    <strong>VAE : </strong>Personne de tout âge ayant au moins 1 an d'expérience en rapport avec la certification visée. Son objectif est de valider un diplôme en lien avec son expérience.
                </p>
                <p className='noPadding'>
                    <strong>VAP85 : </strong>Avoir interrompu ses études depuis au moins 2 ans et avoir minimum 5 années d'expérience professionnelle quelque soit le secteur d'activité. Son objectif est d’obtenir l’accès dérogatoire à une formation pour laquelle vous n’avez pas le niveau de formation requis.
                </p>
            </article>
            <article className="Vae-article">
                <h3 className="Vae-article-title">
                    Durée du programme de la VAE: minimum 24 heures
                </h3>
                <p>
                    Notre méthode d'accompagnement à la VAE est faite pour vous. Nous vous accompagnons dans la réalisation de votre dossier afin de faire reconnaître vos compétences et d'obtenir le diplôme dont vous avez besoin pour évoluer dans votre carrière.
                </p>
                <p>
                    Nous identifions ensemble la formation qui vous permettra de dynamiser votre parcours, nous vous guidons dans la rédaction de votre dossier et vous préparons à l'entretien devant le jury en mettant à votre service un expert en communication, spécialiste dans la prise de parole en public. Lors de ce parcours, nous vous proposons de rencontrer notre réseau professionnel et anciens candidats à la VAE avec lesquels vous pourrez échanger.
                </p>
                <p>
                    Grâce à l'expertise de nos consultants, <strong>ATTRIBUT CONSEILS a obtenu 100%</strong> de réussite dans tous les dossiers VAE que la société a accompagnés. Notre équipe est composée de consultants experts en VAE, tous consultants en gestion de carrières et ingénierie de la formation.
                </p>
            </article>
            <article className="Vae-article_bgWhite">
                <h3 className="Vae-article-title_blue">Réserver votre acccompagnement VAE dès maintenant, à distance ou en présentiel :</h3>
                <ContactButton />
            </article>
            <article className="Vae-article">
                <h3 className="Vae-article-title">
                    Les étapes de l’accompagnement VAE
                </h3>
                <p>
                    L'accompagnement du candidat consiste à l'assister dans sa préparation à la VAE en vue de l'obtention de la certification visée (CAP, BTS, Licence Pro, titres professionnels, Master,...). Notre accompagnement à la VAE, par le biais d'entretiens individuels, comporte plusieurs étapes :
                </p>
                <h3 className="Vae-article-title left">
                    Etape n°1 : accueil, information, conseil, orientation
                </h3>
                <div>Nous nous rencontrons au cours d'un 1er entretien où nous faisons connaissance :
                    <ul>
                        <li>Vous nous expliquez vos souhaits et nous vérifions ensemble l’adéquation du projet et le diplôme visé</li>
                        <li>Nous définissons ou validons le diplôme visé en fonction de vos expériences,</li>
                        <li>Nous vous expliquons le déroulement de la VAE et les possibilités de financement.</li>
                    </ul>
                </div>
                <h3 className="Vae-article-title left">
                    Etape n°2 : le Livret 1
                </h3>
                <p>
                    Nous vous accompagnons dans la rédaction du livret de ‘recevabilité' appelé ‘Livret 1'. Nous définirons les expériences professionnelles et/ou extra-professionnelles que vous présenterez dans ce Livret 1 et nous le rédigerons ensemble.
                </p>
                <h3 className="Vae-article-title left">
                    Étape n°3 : le Livret 2
                </h3>
                <p>Une fois que votre Livret 1 sera validé, vous rédigerez un livret d'expériences appelé ‘Livret 2'. Nous expliciterons les expériences et compétences que vous présenterez dans ce Livret 2.</p>
                <h3 className="Vae-article-title left">Etape n°4 : préparation au jury</h3>
                <p>Un jury validera votre Livret 2. Nous vous préparons à ce jury et nous simulons ensemble votre présentation.</p>
            </article>
            <article className="Vae-article_bgWhite">
                <h3 className="Vae-article-title_blue">Et après ?</h3>
                <p>Valider un diplôme vous ouvrira de nouvelles opportunités professionnelles : évoluer dans votre métier, avoir plus de responsabilités, continuer à vous former, consolidera votre carrière... autant de pistes qui donneront un nouveau sens à votre carrière professionnelle.</p>
            </article>
            <article className="Vae-article">
                <h3 className="Vae-article-title">Accompagnement VAP85</h3>
                <p>VAP85 : Avoir interrompu ses études depuis au moins 2 ans et d'avoir minimum 5 années d'expérience professionnelle quelque soit le secteur d'activité. Tout diplôme spécialisé dans tout secteur d'activité ; comptabilité, administratif, commercial, communication, RH. ...
                </p>
                <p>L'accompagnement consiste à vous assister dans la préparation à la VAP85 <strong>en vue de postuler à une formation diplômante à laquelle vous ne pourriez pas normalement postuler</strong>. Que vous ayez un BAC ou niveau BAC ou un BAC+2, vous pouvez prétendre à une formation BAC+4/5.</p>
            </article>
            <article className="Vae-article">
                <h3 className="Vae-article-title">Un accompagnement spécifique</h3>
                <p>La procédure de la VAP (dossier et accompagnement) peut se faire entièrement à distance.
                </p>
                <p>
                    Cette dernière vise à faire état de vos acquis en valorisant les activités principales liées à chacune des fonctions occupées et explicitant plus particulièrement les expériences, compétences et formations en lien avec le domaine du diplôme visé.
                </p>
                <p>De façon complémentaire, ATTRIBUT CONSEILS vous accompagne dans la constitution de votre dossier. Un conseiller VAE vous guide dans l’explicitation des éléments attendus par téléphone, par mail ou en présentiel. Attribut Conseils vous aide à mettre en valeur les compétences acquises pour démontrer que vous détenez le socle de compétences. Une fois constitué, le dossier est examiné par une commission pédagogique de l’école ou l’université en charge d’évaluer votre potentiel et capacité à suivre avec succès la formation envisagée. Ensuite, nous vous aidons à préparer votre dossier d'inscription et vous préparons à l'oral du jury.</p>
            </article>
            <article className="Vae-article_bgWhite">
                <h3 className="Vae-article-title_blue">NOS PLUS :</h3>
                <p>
                    Tous nos consultants possèdent tous une vision claire et précise des problématiques actuelles dans une multiplicité de domaines. Experts bilan de compétences/VAE.
                </p>
            </article>
            <div className='Vae_stats'>
                <DownloadFile file={allFiles.vaeStat()} dot={false} />
            </div>

            <article className="Vae-article">
                <h3 className="Vae-article-title">Tarifs Validation des Acquis de l’Expérience (VAE)</h3>
                <p>Le tarif d'une VAE se situe entre 1500€ et 5000€ net de taxes, en fonction des besoins exprimés et selon les modalités de prise en charge. Détail des tarifs (conditions générales de ventes)
                </p>
                <p>Vous pouvez également demander une prise en charge par votre employeur (Plan de développement des compétences)
                </p>
                {/* <p>Vous pouvez également demander une prise en charge par votre employeur <Link target='_blank' rel='noreferrer' to="https://travail-emploi.gouv.fr/formation-professionnelle/entreprise-et-formation/article/plan-de-developpement-des-competences">(Plan de développement des compétences)
                </Link>
                </p> */}
                <p>Quelle que soit la configuration, la VAE est, dans la majorité des cas, intégralement financée grâce aux fonds de la formation professionnelle. N'hésitez pas à nous contacter au <a href='tel:06.98.88.15.55'>06 98 88 15 55</a> pour en savoir plus sur les modalités de prise en charge.</p>
                {/* <ul className='Vae-article-doc'>
                    <li>Programme</li>
                    <li>Tarifs et conditions générales de vente</li>
                </ul> */}
                <DownloadFile file={allFiles.vae()} />
            </article>
            <Dday />
            <ScrollToTop />
        </section >
    );
};

export default Vae;