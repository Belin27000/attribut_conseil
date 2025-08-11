import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";
import blogDatas from "@/_Services/blog.service.js";
import podCastData from "@/_Services/podcasts.service.js";
import verticalDots from "../../Assets/Images/verticalDots.png";
// import SocialNetwork from '../../Components/SocialNetwork/SocialNetwork.js';
import MetaTitleDes from "../../Components/Meta/MetaTitleDes.js";
import { FaInstagram, FaFacebookSquare, FaLinkedin } from "react-icons/fa";

import "./blog.scss";
const Blog = () => {
  const insta = "https://www.instagram.com/attribut_conseils/";
  const Fb = "https://www.facebook.com/AttributConseils/";
  const Twitter = "https://twitter.com/AttributConseil";
  const Linkedin =
    "https://www.linkedin.com/company/attribut-conseils/?viewAsMember=true";
  const Youtube = "https://www.youtube.com/@attributconseils";

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  const metaTitle = `Attribut Conseils | Blog - Expert en Relation Homme/Travail`;
  const metaDescription = `Conseils sur l'évolution professionnelle, la recherche d'emploi et les droits à la formation par Attribut Conseils. Découvrez nos articles pratiques.`;

  return (
    <div className="Blog">
      <MetaTitleDes title={metaTitle} description={metaDescription} />

      <div className="Blog-header">
        <div className="Blog-title">
          <h1>
            BLOG
            <br />
            <span>Attribut conseils</span>
          </h1>
        </div>
        <div className="Blog-catList">
          <img
            src={verticalDots}
            alt="ronds bleu et jaune superposés"
            width={78}
            height={220}
          />
          <ul>
            <li onClick={() => handleCategoryClick(null)}>CATÉGORIE</li>
            <li
              onClick={() => handleCategoryClick("évolution professionnelle")}
            >
              Évolution professionnelle
            </li>
            <li
              onClick={() => handleCategoryClick("Conseils recherche d'emploi")}
            >
              Conseils recherche d'emploi
            </li>
            <li onClick={() => handleCategoryClick("Droit à la formation")}>
              Droit à la formation
            </li>
          </ul>
        </div>
      </div>
      <h2>Nos dernières actualités</h2>
      <div className="Blog-content">
        {blogDatas
          .filter(
            (article) =>
              (selectedCategory
                ? article.categorie.includes(selectedCategory)
                : true) && article.PageLink
          )
          .map((article, index) => (
            <Link to={article.PageLink} key={index} className="Blog-article">
              <div className="pic-container">
                <img
                  src={article.picture}
                  alt={article.pictureAlt}
                  width={article.width}
                  height={article.height}
                />
              </div>
              <div className="text-container">
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <span>Lire l'article...</span>
              </div>
            </Link>
          ))}
      </div>
      <div className="Podcast">
        <div className="Podcast_container">
          <h2>La libre Antenne: Podcasts</h2>
          <div></div>
        </div>
        <div className="Podcast_content">
          {podCastData.map((article, index) => (
            <Link to={`podcasts/${article.link}`} key={index}>
              <div className="container">
                <h3 className="Podcast_title">{article.title}</h3>
                <p className="Podcast_date">{article.date}</p>
                <p className="Podcast_text">{article.text}</p>
                <span>voir le podcast en vidéo...</span>
              </div>
            </Link>
          ))}
        </div>
        <Link to="podcasts/" className="allPodcast">
          Voir tous les podcasts
        </Link>
      </div>
      <div className="Blog-end">
        <div className="text-container">
          <h2 className="title-end">Echangeons</h2>
          <ul>
            <Link to="/contact">
              <li>Nous Contacter</li>
            </Link>
            <Link to="/formation_metier_consultant_en_gestion_de_carrieres">
              <li>Devenir consultant</li>
            </Link>
            <li>
              Nous Suivre
              <ul className="Blog-SocialNetwork">
                <Link to={insta} target="_blank">
                  <li>
                    <FaInstagram />
                  </li>
                </Link>
                <Link to={Fb} target="_blank">
                  <li>
                    <FaFacebookSquare />
                  </li>
                </Link>
                <Link to={Twitter} target="_blank">
                  <li>
                    <FaXTwitter />
                  </li>
                </Link>
                <Link to={Linkedin} target="_blank">
                  <li>
                    <FaLinkedin />
                  </li>
                </Link>
                <Link to={Youtube} target="_blank">
                  <li>
                    <FaYoutube />
                  </li>
                </Link>
              </ul>
            </li>
          </ul>
        </div>
        <img
          src={verticalDots}
          alt="ronds bleu et jaune superposés"
          width={78}
          height={220}
        />
      </div>
    </div>
  );
};

export default Blog;
