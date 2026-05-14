import CGU from "@/Assets/FileToDownload/CGU.pdf";
import Handi from "@/Assets/FileToDownload/Handi.pdf";
import OrientationJeuneEthique from "@/Assets/FileToDownload/OrientationJeune/EthiqueJeune.pdf";
import OrientationJeuneProg from "@/Assets/FileToDownload/OrientationJeune/ProgOrientationJeune.pdf";
//import OutplacementProg from "@/Assets/FileToDownload/Outplacement/OutplacementProg.pdf";
import OutplacementIndividuel from "../Assets/FileToDownload/Outplacement/OUTPLACEMENT_INDIVIDUEL.pdf";
import QualiopiCertif from "@/Assets/FileToDownload/Qualiopi/QualiopiCertif.pdf";
import StatsBC from "@/Assets/FileToDownload/Qualiopi/beforeAudit/StatsBc.pdf";
import SatisfactionBC from "@/Assets/FileToDownload/BilanDeComp/SatisfactionBC.pdf";
import StatsCrea from "@/Assets/FileToDownload/Qualiopi/beforeAudit/StatsCrea.pdf";
import RGPD from "@/Assets/FileToDownload/RGPD.pdf";
import TrainingTrainerPrice from "@/Assets/FileToDownload/TrainingTrainer/TrainingTrainerPrice.pdf";
import TrainingTrainerProg from "@/Assets/FileToDownload/TrainingTrainer/TrainingTrainerProg.pdf";
import VaeEthique from "@/Assets/FileToDownload/Vae/EthiqueVae.pdf";
// import VaeProg from '@/Assets/FileToDownload/Vae/PROGVae.pdf'
// import VaePrice from '@/Assets/FileToDownload/Vae/PriceVae.pdf'
import vae_Stats from "@/Assets/FileToDownload/Vae/STATS_VAE_2025.pdf";
import SatisfactionVae from "@/Assets/FileToDownload/Vae/SatisfactionVAE.pdf";
import careerConsultPrice from "@/Assets/FileToDownload/careerConsult/careerConsultPrice.pdf";
import careerConsultProg from "@/Assets/FileToDownload/careerConsult/careerConsultProg.pdf";
import Charte_PSH from "@/Assets/FileToDownload/registreHandi/Charte_PSH.pdf";
import PSH from "@/Assets/FileToDownload/registreHandi/LIVRET_ACCUEIL_PSH.pdf";
import RegistreHandi from "@/Assets/FileToDownload/registreHandi/registre.pdf";
import CGV from "@/Assets/FileToDownload/CGV.pdf";
// import CreaCompanyStats from '@/Assets/FileToDownload/CreaCompany/CreaCompanyStats.pdf'
// import CreaCompanyProg from '@/Assets/FileToDownload/CreaCompany/CreaCompanyProg.pdf'
// import CreaCompanyPrice from '@/Assets/FileToDownload/CreaCompany/CreaCompanyPrice.pdf'
// import CreaCompanyEthique from '@/Assets/FileToDownload/CreaCompany/CreaCompanyEthique.pdf'

const bilanDeCompFiles = [
  {
    name: "Consultez nos statistiques de suivi sur 6 mois",
    pdfFile: StatsBC,
  },
  {
    name: "Résultat satisfaction clients sur nos bilans de compétences",
    pdfFile: SatisfactionBC,
  },
];
const vaeFiles = [
  // {
  //     name: 'Programme',
  //     pdfFile: VaeProg,
  // },
  // {
  //     name: 'Tarifs et conditions générales de vente',
  //     pdfFile: VaePrice
  // },
  {
    name: "Déontologie et étique",
    pdfFile: VaeEthique,
  },
  {
    name: "Résultat satisfaction clients sur nos VAE",
    pdfFile: SatisfactionVae,
  },
];
const vaeStats = [
  {
    name: "Consultez nos statistiques, critères prédéfinis pour juin 2025",
    pdfFile: vae_Stats,
  },
];
const OrientationJeuneFiles = [
  {
    name: "Programme",
    pdfFile: OrientationJeuneProg,
  },
  {
    name: "Déontologie et éthique",
    pdfFile: OrientationJeuneEthique,
  },
];
const Outplacement = [
  //   {
  //     name: "Programme",
  //     pdfFile: OutplacementProg,
  //   },
  {
    name: "DECOUVRIR L’ACCOMPAGNEMENT INDIVIDUEL ",
    pdfFile: OutplacementIndividuel,
  },
];
const CreaCompanyFile = [
  // {
  //     name: 'Programme',
  //     pdfFile: CreaCompanyProg
  // },
  // {
  //     name: 'Tarifs et conditions générales de vente',
  //     pdfFile: CreaCompanyPrice
  // },
  // {
  //     name: 'Déontologie et éthique',
  //     pdfFile: CreaCompanyEthique
  // },
  // {
  //     name: 'Chiffres clés de ma satisfaction clients 2023',
  //     pdfFile: CreaCompanyStats
  // },
  {
    name: "Consultez nos statistiques de suivi sur 6 mois",
    pdfFile: StatsCrea,
  },
];
const TrainingTrainerFile = [
  {
    name: "Programme",
    pdfFile: TrainingTrainerProg,
  },
  {
    name: "Tarifs et conditions générales de vente",
    pdfFile: TrainingTrainerPrice,
  },
];
const CGUFile = [
  {
    name: "Conditions générales de vente",
    pdfFile: CGV,
  },
  {
    name: "Conditions générales d'utilisation du site",
    pdfFile: CGU,
  },
];
const RGPDFile = [
  {
    name: "RGPD",
    pdfFile: RGPD,
  },
];
const QualiopiFile = [
  {
    name: "Télécharger notre certificat Qualiopi",
    pdfFile: QualiopiCertif,
  },
];
const HandiFile = [
  {
    name: "Charte d'engagement PSH",
    pdfFile: Charte_PSH,
  },
  {
    name: "livret d'accueil PSH",
    pdfFile: PSH,
  },
  {
    name: "Registre d'accessibilité",
    pdfFile: RegistreHandi,
  },
  {
    name: "Personnes en situation de handicap",
    pdfFile: Handi,
    picture: "./Assets/Images/Handicapped.png",
  },
];
const careerConsultFile = [
  {
    name: "Programme",
    pdfFile: careerConsultProg,
  },
  {
    name: "Tarifs et conditions générales de vente",
    pdfFile: careerConsultPrice,
  },
];

let fileList = () => {
  return bilanDeCompFiles;
};
let vae = () => {
  return vaeFiles;
};
let vaeStat = () => {
  return vaeStats;
};
let jeune = () => {
  return OrientationJeuneFiles;
};
let outplacementFile = () => {
  return Outplacement;
};
let CreaCompanyFiles = () => {
  return CreaCompanyFile;
};
let TrainingTrainerFiles = () => {
  return TrainingTrainerFile;
};
let CGUFiles = () => {
  return CGUFile;
};
let RGPDFiles = () => {
  return RGPDFile;
};
let QualiopiFiles = () => {
  return QualiopiFile;
};
let HandiFiles = () => {
  return HandiFile;
};
let careerConsultFiles = () => {
  return careerConsultFile;
};

export const allFiles = {
  fileList,
  vae,
  vaeStat,
  jeune,
  outplacementFile,
  CreaCompanyFiles,
  TrainingTrainerFiles,
  CGUFiles,
  RGPDFiles,
  QualiopiFiles,
  HandiFiles,
  careerConsultFiles,
};
export default allFiles;
