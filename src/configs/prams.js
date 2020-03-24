export const steps = {
  step0: {
    id: "TypeDuBien",
    title: "Type du bien",
    pageNext: "/EtatDuBien",

    choix: [
      { id: "maison", title: "Maison", first: true },
      { id: "appartement", title: "Appartement" }
    ]
  },
  step1: {
    id: "EtatDuBien",
    title: "Etat du bien",
    pageNext: "/UsageDuBien",
    pagePrev: "/TypeDeBien",
    choix: [
      { id: "ancien", title: "Ancien" },
      { id: "neuf", title: "Neuf" }
    ]
  },
  step2: {
    id: "UsageDuBien",
    title: "Usage du bien",
    pageNext: "/VotreSituation",
    pagePrev: "/EtatDuBien",
    choix: [
      { id: "ResidencePrincipale", title: "Résidence principale" },
      { id: "ResidenceSecondaire", title: "Résidence secondaire" },
      { id: "invistisementLocatif", title: "invistisement locatif" }
    ]
  },
  step3: {
    id: "VotreSituation",
    title: "Votre situation actuelle",
    pageNext: "/EmplacementDuBien",
    pagePrev: "/UsageDuBien",
    choix: [
      { id: "Locataire", title: "Locataire" },
      { id: "Proprietaire", title: "Propriétaire" },
      { id: "Beneficiaire", title: "Bénéficiaire d'un logement de fonction" },
      { id: "Heberge", title: "Hébergé" }
    ]
  },
  step4: {
    id: "EmplacementDuBien",
    title: "Ou se situe le bien à financer",
    pageNext: "/DefinitionMontant",
    pagePrev: "/VotreSituation"
  },
  step5: {
    id: "DefinitionMontant",
    title: "Définissons le montant de votre projet",
    pageNext: "/VosCordonnees",
    pagePrev: "/EmplacementDuBien"
  },
  step6: {
    id: "VosCordonnees",
    title: "Vos Cordonnees",
    pageNext: "/LastStep",
    pagePrev: "/EmplacementDuBien"
  },
  step7: {
    id: "LastStep",
    title: "Et voila, la formulaire est terminé "
  }
};
export default steps;
