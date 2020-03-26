export const params = {
  step0: {
    id: "typeDuBien",
    title: "Type du bien",
    pageNext: "/etatDuBien",

    choix: [
      { id: "maison", title: "Maison" },
      { id: "appartement", title: "Appartement" }
    ]
  },
  step1: {
    id: "etatDuBien",
    title: "Etat du bien",
    pageNext: "/usageDuBien",
    pagePrev: "/typeDuBien",
    choix: [
      { id: "ancien", title: "Ancien" },
      { id: "neuf", title: "Neuf" }
    ]
  },
  step2: {
    id: "usageDuBien",
    title: "Usage du bien",
    pageNext: "/votreSituation",
    pagePrev: "/etatDuBien",
    choix: [
      { id: "ResidencePrincipale", title: "Résidence principale" },
      { id: "ResidenceSecondaire", title: "Résidence secondaire" },
      { id: "invistisementLocatif", title: "invistisement locatif" }
    ]
  },
  step3: {
    id: "votreSituation",
    title: "Votre situation actuelle",
    pageNext: "/emplacementDuBien",
    pagePrev: "/usageDuBien",
    choix: [
      { id: "Locataire", title: "Locataire" },
      { id: "Proprietaire", title: "Propriétaire" },
      { id: "Beneficiaire", title: "Bénéficiaire d'un logement de fonction" },
      { id: "Heberge", title: "Hébergé" }
    ]
  },
  step4: {
    id: "emplacementDuBien",
    title: "Ou se situe le bien à financer",
    pageNext: "/definitionMontant",
    pagePrev: "/votreSituation"
  },
  step5: {
    id: "definitionMontant",
    title: "Définissons le montant de votre projet",
    pageNext: "/vosCordonnees",
    pagePrev: "/emplacementDuBien"
  },
  step6: {
    id: "vosCordonnees",
    title: "Vos Cordonnees",
    pageNext: "/lastStep",
    pagePrev: "/emplacementDuBien"
  },
  step7: {
    id: "lastStep",
    title: "Et voila, la formulaire est terminé "
  }
};
export default params;
