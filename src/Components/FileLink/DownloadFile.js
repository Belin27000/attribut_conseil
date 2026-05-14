import React from "react";
import { Link } from "react-router-dom";
import "./DownloadFile.scss";

const DownloadFile = ({ file, dot = true, className }) => {
  const fichiers = Array.isArray(file)
    ? file.filter((fichier) => fichier?.name && fichier?.pdfFile)
    : [];

  if (fichiers.length === 0) {
    console.error("La prop 'file' est vide ou indéfinie.");
    return null;
  }

  const downloadFileURL = (fileIndex) => {
    const PDF_FILE_URL = fichiers[fileIndex].pdfFile;
    window.open(PDF_FILE_URL, "_blank");
  };

  const downloadSingleFileURL = (fichiers) => {
    const PDF_FILE_URL = fichiers[0].pdfFile;
    window.open(PDF_FILE_URL, "_blank");
  };

  if (fichiers.length < 2) {
    return (
      <div
        className={`Single-Link ${className}`}
        onClick={() => downloadSingleFileURL(fichiers)}
      >
        <Link>
          {dot === true && <span className="dot">•</span>}
          <span>{fichiers[0].name}</span>
        </Link>
      </div>
    );
  } else {
    // Ajoute la classe 'no-bullet' si dot est false
    const ulClass =
      `Download-link ${!dot ? "no-bullet" : ""} ${className || ""}`.trim();
    return (
      <ul className={ulClass}>
        {fichiers.map((fichier, fileIndex) => (
          <li key={fileIndex}>
            <Link rel="preload" onClick={() => downloadFileURL(fileIndex)}>
              {fichier.name}
            </Link>
          </li>
        ))}
      </ul>
    );
  }
};

export default DownloadFile;
