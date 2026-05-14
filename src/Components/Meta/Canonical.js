import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const Canonical = () => {
  const { pathname } = useLocation();
  const canonicalUrl = `https://www.2023.attribut-conseils.com${pathname}`;
  return (
    <Helmet>
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:url" content={canonicalUrl} />
    </Helmet>
  );
};

export default Canonical;
