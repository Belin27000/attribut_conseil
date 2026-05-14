import { useState } from "react";

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq-item ${isOpen ? "open" : ""}`}>
      <button
        className="faq-question"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {question}
        <span className="symbol">{isOpen ? "−" : "+"}</span>
      </button>
      <div className="faq-answer" aria-hidden={!isOpen}>
        {isOpen && <div className="faq-answer-inner">{answer}</div>}
      </div>
    </div>
  );
};

export default FaqItem;
