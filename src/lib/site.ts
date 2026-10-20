
export const SITE = {
  name: "Mondiale Services Auto",
  shortName: "MSA",
  url: "https://mondialeservicesauto.fr",
  phone: "06 67 90 55 71",
  phoneLink: "tel:+33667905571",
  description:
    "Remorquage automobile, transport de véhicules et achat de véhicules.",
};

export const SERVICES = [
  {
    slug: "remorquage",
    number: "01",
    title: "Remorquage automobile",
    shortDescription:
      "Votre véhicule est immobilisé ? Contactez-nous pour organiser sa prise en charge.",
    description:
      "Mondiale Services Auto vous accompagne pour vos besoins de remorquage automobile. Contactez-nous pour présenter votre situation, le lieu de prise en charge et la destination souhaitée.",
    points: [
      "Prise de contact et description de la situation",
      "Informations sur le véhicule et son emplacement",
      "Organisation de la prise en charge selon les modalités convenues",
    ],
  },
  {
    slug: "transport-vehicule",
    number: "02",
    title: "Transport de véhicules",
    shortDescription:
      "Un véhicule à déplacer ? Présentez-nous votre trajet et votre besoin.",
    description:
      "Vous avez besoin de déplacer une voiture ? Contactez Mondiale Services Auto pour discuter du véhicule, des lieux de départ et d'arrivée et des modalités de transport.",
    points: [
      "Étude de votre demande de transport",
      "Définition des lieux de départ et d'arrivée",
      "Organisation selon les disponibilités et les modalités convenues",
    ],
  },
  {
    slug: "achat-vehicule",
    number: "03",
    title: "Achat de véhicules",
    shortDescription:
      "Vous souhaitez vendre votre voiture ? Présentez-nous votre véhicule.",
    description:
      "Vous envisagez de vendre votre véhicule ? Contactez Mondiale Services Auto avec les informations disponibles afin de discuter de votre demande. Toute proposition reste soumise à étude.",
    points: [
      "Présentation du véhicule et de son état",
      "Échange sur votre demande",
      "Étude des conditions éventuelles de reprise ou d'achat",
    ],
  },
] as const;
