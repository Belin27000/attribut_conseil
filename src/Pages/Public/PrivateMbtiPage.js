import React from "react";
import useNoIndexMetaTag from "@/Hook/useNoIndexMetaTag.js";

const PrivateMbtiPage = () => {
  useNoIndexMetaTag();

  return (
    <iframe
      title="Questionnaire MBTI"
      src="/mbti_attribut_conseils%20(2).html"
      style={{ width: "100%", minHeight: "100vh", border: "none" }}
    />
  );
};

export default PrivateMbtiPage;
