import React from "react";
import { Helmet } from "react-helmet-async";

const MetaTitleDes = ({
  title = "Attribut Conseils - Cabinet conseil en ressources humaines",
  description = "Vous cherchez à réaliser un bilan de compétences en Seine et Marne ? Contactez-nous !",
}) => {
  return (
    <Helmet>
      {/* Titre de la page */}
      <title>{title}</title>

      {/* Meta description */}
      <meta name="description" content={description} />

      {/* Balises Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      {/* Balises Twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {/* Directives SEO */}
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
    </Helmet>
  );
};

export default MetaTitleDes;
