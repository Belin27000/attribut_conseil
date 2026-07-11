import React from "react";
import useNoIndexMetaTag from "@/Hook/useNoIndexMetaTag.js";

const PrivateCourbeDeatisfactionPage = () => {
  useNoIndexMetaTag();

  return (
    <iframe
      title="Courbe de satisfaction"
      src="/courbe_de_satisfaction_attribut.html"
      style={{ width: "100%", minHeight: "100vh", border: "none" }}
    />
  );
};

export default PrivateCourbeDeatisfactionPage;
