import React from "react";
import useNoIndexMetaTag from "@/Hook/useNoIndexMetaTag.js";

const PrivateValeursCroyancesPage = () => {
  useNoIndexMetaTag();

  return (
    <iframe
      title="Valeurs et croyances"
      src="/valeurs-croyances.html"
      style={{ width: "100%", minHeight: "100vh", border: "none" }}
    />
  );
};

export default PrivateValeursCroyancesPage;
