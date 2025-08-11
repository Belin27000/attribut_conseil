import React from 'react';
import { Link } from 'react-router-dom';
import './DownloadFile.scss';

const DownloadFile = ({ file, dot = true, className }) => { // Destructuration propre des props
    if (!file || file.length === 0) {
        console.error("La prop 'file' est vide ou indéfinie.");
        return null; // Retourne null si `file` est vide ou indéfini
    }

    const fichiers = file; // Renomme simplement pour lisibilité

    const downloadFileURL = (fileIndex) => {
        const PDF_FILE_URL = fichiers[fileIndex].pdfFile;
        window.open(PDF_FILE_URL, '_blank');
    };

    const downloadSingleFileURL = (fichiers) => {
        const PDF_FILE_URL = fichiers[0].pdfFile;
        window.open(PDF_FILE_URL, '_blank');
    };

    if (fichiers.length < 2) {
        return (
            <div className={`Single-Link ${className}`} onClick={() => downloadSingleFileURL(fichiers)}>
                <Link>
                    {dot && (
                        <span className="dot">•</span> // Affiche le disque seulement si `dot` est vrai
                    )}
                    <span>{fichiers[0].name}</span>
                </Link>
            </div>
        );
    } else {
        return (
            <ul className={`Download-link ${className}`}>
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