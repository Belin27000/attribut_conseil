import allFiles from '@/_Services/fileToDownload.service.js';
import Qualiopi200 from '@/Assets/Images/Logo_Qualiopi/Logo_Qualiopi_200.webp';
import Qualiopi634 from '@/Assets/Images/Logo_Qualiopi/Logo_Qualiopi_634.webp';
import PresAC from '@/Assets/video/Pres_AC.mp4';
import '@/Pages/Acceuil/home.scss';
import React from 'react';
import data from '../../Assets/data/data.json';
import DownloadFile from '../../Components/FileLink/DownloadFile.js';
import GoogleWidget from '../../Components/Google/GoogleWidget/GoogleWidget.js';
import KeyNumber from '../../Components/KeyNumbers/KeyNumber.js';
import MetaTitleDes from '../../Components/Meta/MetaTitleDes.js';
import Movie from '../../Components/Movie/Movie.js';



const Home = () => {
    const QualiopiValidity = data.Qualiopi.validationDate

    const metaTitle = `Cabinet conseils RH et formation`
    const metaDescription = `Vous cherchez à réaliser un bilan de compétences ou une formation en seine et Marne ou en visio?`




    return (
        <div className='Home'>

            <MetaTitleDes title={metaTitle} description={metaDescription} />
            <h1 className='sr-only'>Bilan de compétences en Seine et Marne</h1>
            <section className='topSideHome'>
                <div translate="no" className='PunchLine'>"Le travail nous travaille, ensemble faisons en sorte qu'il nous travaille bien"</div>
                <div className='DiffBloc'>
                    <p>Notre<span className='DiffBlocColor'>différence :</span></p>
                    <p>Notre expérience de la diversité des problématiques professionnelles et la capacité à travailler ensemble vers des solutions</p>
                </div>
                {/* <div className='movie' >
                    <video className='responsive-video' autoPlay muted loop playsInline>
                        <source src={PresAC} type='video/mp4' />
                    </video>
                </div> */}
                <Movie src={PresAC} loop={true} />
            </section>
            <p className='BlueBand'><span className='CapName'>attri</span><span className='EndName' translate="no">but</span><span className='CapName '>conseils </span> <span className='BlueBandLastWord'> c'est :</span></p>
            <KeyNumber />
            <GoogleWidget />
            <div className='QualContainer'>
                <img className='QualContainer-Pic'
                    sizes="(max-width: 634px) 100vw, 634px"
                    srcSet={`
                            ${Qualiopi200} 200w,
                            ${Qualiopi634} 634w
                            `}
                    width='634'
                    height='339'
                    src={Qualiopi634}
                    alt="Logo Qualiopi" />
                <div className='QualContainer-Bloc'>
                    <div className='Qualiopi_stats'>
                        <DownloadFile file={allFiles.QualiopiFiles()} dot={false} />
                    </div>
                    <p className='QualContainer-Data'>Validé jusqu'au {QualiopiValidity}.</p>
                    <p className='QualContainer-Data'>La certification Qualiopi a été délivrée pour la catégorie d'action suivante :</p>
                    <p className='QualContainer-Data'>Actions de formation, Bilan de compétences, VAE</p>
                    <p className='QualContainer-Data'>Délais d'acces aux formations 10 jours maximum</p>
                </div>
            </div>
        </div>
    );
};

export default Home;