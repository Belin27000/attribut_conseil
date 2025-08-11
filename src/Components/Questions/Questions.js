import React, { useState } from "react";
import "./questions.scss";
import faqService from "@/_Services/faq.service.js";
import clique from "@/Assets/Images/Clique.png";

const Questions = ({
  tag,
  ville = "Fontainebleau",
  mainTitleFaq,
  mainPfaq,
}) => {
  const faqList = faqService.allFaq();
  const mainTitle = "Experts et outils adaptés à chaque projet professionnel";
  const MainP =
    "Notre équipe d'experts et de formateurs qualifiés et certifiés met à votre disposition les outils adaptés pour réaliser votre bilan de compétences et vous accompagner dans votre projet professionnel. ";
  const displayedMainTitle = mainTitleFaq ? mainTitleFaq : mainTitle;
  const displayedMainP = mainPfaq ? mainPfaq : MainP;
  const [openedQuestions, setOpenedQuestions] = useState([]);

  const toggleQuestion = (index) => {
    if (openedQuestions.includes(index)) {
      setOpenedQuestions(openedQuestions.filter((item) => item !== index));
    } else {
      setOpenedQuestions([...openedQuestions, index]);
    }
  };
  const filteredFaqList = tag
    ? faqList.filter((item) => {
        if (typeof item.tag === "string") {
          return item.tag === tag;
        } else if (Array.isArray(item.tag)) {
          return item.tag.some((t) => tag.includes(t));
        }
        return false;
      })
    : faqList;

  return (
    <section className="questions">
      <h2>{displayedMainTitle}</h2>
      <p>{displayedMainP}</p>
      <div className="clique">
        <p>LES RÉPONSES À VOS QUESTIONS</p>
        <img src={clique} alt="clique" width={500} height={164} />
      </div>
      <div className="questions-container">
        {filteredFaqList.map((faq, index) => (
          <div key={index} className="question">
            <div className="question-header">
              <h3>{faq.title.replace(/TA_VILLE/g, ville)}</h3>
              <button
                className="toggle-button"
                onClick={() => toggleQuestion(index)}
              >
                {openedQuestions.includes(index) ? "-" : "+"}
              </button>
            </div>
            {openedQuestions.includes(index) && (
              <p>{faq.answer.replace(/TA_VILLE/g, ville)}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Questions;
