const faq = [
  {
    question: "❓Qu’est-ce que la VAE ?",
    answer:
      "La VAE (Validation des Acquis de l’Expérience) permet d’obtenir tout ou partie d’un diplôme, titre ou certificat en faisant reconnaître les compétences acquises au cours de son expérience professionnelle ou personnelle, sans repasser par une formation classique.",
  },
  {
    question: "❓Qui peut bénéficier d’un accompagnement VAE ?",
    answer:
      "Toute personne, quel que soit son âge, son statut, sa nationalité ou son niveau de formation, peut entreprendre une VAE si son expérience est en lien direct avec le diplôme visé. Salariés, indépendants, demandeurs d’emploi, bénévoles ou agents publics : la VAE est ouverte à tous.",
  },
  {
    question: "❓Pourquoi se faire accompagner dans sa VAE ?",
    answer: (
      <>
        <strong>Un accompagnement VAE </strong>permet de structurer votre
        démarche, de comprendre les attendus du diplôme, de rédiger un dossier
        clair et argumenté, et de vous préparer efficacement à l’oral du jury.
        Chez ATTRIBUT CONSEILS, chaque dossier est relu, annoté et consolidé
        pour maximiser vos chances de validation.
      </>
    ),
  },
  {
    question: "❓Combien de temps dure un accompagnement VAE ?",
    answer:
      "L’accompagnement s’étale généralement sur 3 à 12 mois selon votre disponibilité. Le rythme est adapté à votre agenda, avec des séances en présentiel ou en visio, et un suivi personnalisé par un expert dédié.",
  },
  {
    question:
      "❓Comment se déroule l’accompagnement VAE chez ATTRIBUT CONSEILS ?",
    answer: (
      <>
        Constitution du dossier de faisabilité (ex-livret 1)
        <br />
        Rédaction guidée du dossier de validation (ex-livret 2)
        <br />
        Préparation ciblée à l’oral du jury
        <br />
        Nous prenons également en charge les démarches auprès des certificateurs
        (dépôts de dossiers, dates, lieux de jury) pour sécuriser l’ensemble du
        parcours.",
      </>
    ),
  },
  {
    question: "❓Quels sont les résultats attendus d’une VAE ?",
    answer:
      "L’objectif est d’obtenir une validation totale ou partielle du diplôme visé. Vous repartez avec un dossier structuré, une préparation solide à l’oral et une reconnaissance officielle de vos compétences, avec un impact direct sur votre évolution professionnelle.",
  },
  {
    question: "❓Quels sont les financements possibles pour une VAE ?",
    answer:
      "La VAE peut être financée via votre CPF (Compte Personnel de Formation), par un financement personnel, par l’employeur ou par d’autres dispositifs. Des facilités de paiement sont également proposées après un entretien personnalisé.",
  },
  {
    question: "❓Comment démarrer ma VAE avec ATTRIBUT CONSEILS ?",
    answer:
      "Il vous suffit de nous contacter pour un entretien préliminaire gratuit et sans engagement. Cet échange nous permet d’analyser ensemble la faisabilité de votre projet, le diplôme visé, et de vous proposer un programme adapté à votre situation.",
  },
  {
    question: "❓Comment réussir sa VAE ?",
    answer:
      "Réussir sa VAE repose sur une démarche rigoureuse, à la fois structurée et engagée. Chez ATTRIBUT CONSEILS, nous vous accompagnons à chaque étape pour structurer un dossier de validation VAE solide, argumenté et en lien avec les exigences du diplôme visé. Grâce à une co-construction du dossier de faisabilité, des corrections approfondies et une préparation à l’oral du jury VAE, votre consultant expert vous aide à valoriser vos acquis avec méthode. De votre côté, un travail personnel régulier est essentiel pour faire reconnaître votre expérience professionnelle et obtenir un diplôme par la VAE, dans les meilleures conditions.",
  },
];
let allFaq = () => {
  return faq;
};
export const faqVaeService = {
  allFaq,
};
export default faqVaeService;
