import React from "react";
import useNoIndexMetaTag from "@/Hook/useNoIndexMetaTag.js";

const Private360ProPage = () => {
  useNoIndexMetaTag();

  return (
    <iframe
      title="Evaluation 360 Pro"
      src="/360_competences_professionnel.html"
      style={{ width: "100%", minHeight: "100vh", border: "none" }}
    />
  );
};

export default Private360ProPage;
