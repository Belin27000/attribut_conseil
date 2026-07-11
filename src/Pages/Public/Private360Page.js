import React from "react";
import useNoIndexMetaTag from "@/Hook/useNoIndexMetaTag.js";

const Private360Page = () => {
  useNoIndexMetaTag();

  return (
    <iframe
      title="Evaluation 360"
      src="/v6360_traits_personnalite.html"
      style={{ width: "100%", minHeight: "100vh", border: "none" }}
    />
  );
};

export default Private360Page;
