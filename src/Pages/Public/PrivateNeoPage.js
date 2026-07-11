import React from "react";
import useNoIndexMetaTag from "@/Hook/useNoIndexMetaTag.js";

const PrivateNeoPage = () => {
  useNoIndexMetaTag();

  return (
    <iframe
      title="NEO PI-R"
      src="/neopir3.html"
      style={{ width: "100%", minHeight: "100vh", border: "none" }}
    />
  );
};

export default PrivateNeoPage;
