// Exercice 1: Créer un objet représentant une voiture avec des propriétés pour la marque, le modèle et l'année.
let voiture = {
    marque: "Toyota",
    modele: "Corolla",
    annee: 2020
};

// Exercice 2: Ajouter une méthode à l'objet voiture pour afficher ses informations.
voiture.afficherInfos = function() {
    console.log(`Marque: ${this.marque}, Modèle: ${this.modele}, Année: ${this.annee}`);
};

// Exercice 3: Créer un objet représentant un étudiant avec des propriétés pour le prénom, le nom et les notes.
let etudiant = {
    prenom: "Alice",
    nom: "Dupont",
    notes: [15, 18, 12, 14]
};

// Exercice 4: Ajouter une méthode à l'objet étudiant pour calculer la moyenne des notes.
etudiant.calculerMoyenne = function() {
    let somme = this.notes.reduce((a, b) => a + b, 0);
    return somme / this.notes.length;
};

// Exercice 5: Créer un objet représentant un livre avec des propriétés pour le titre, l'auteur et le nombre de pages.
let livre = {
    titre: "Le Petit Prince",
    auteur: "Antoine de Saint-Exupéry",
    pages: 96
};

// Exercice 6: Ajouter une méthode à l'objet livre pour afficher un résumé du livre.
livre.afficherResume = function() {
    console.log(`Titre: ${this.titre}, Auteur: ${this.auteur}, Pages: ${this.pages}`);
};

// Exercice 7: Créer un objet représentant un compte bancaire avec des propriétés pour le titulaire et le solde.
let compteBancaire = {
    titulaire: "Jean Martin",
    solde: 1000
};

// Exercice 8: Ajouter des méthodes à l'objet compte bancaire pour déposer et retirer de l'argent.
compteBancaire.deposer = function(montant) {
    this.solde += montant;
    console.log(`Nouveau solde après dépôt: ${this.solde}`);
};

compteBancaire.retirer = function(montant) {
    if (montant <= this.solde) {
        this.solde -= montant;
        console.log(`Nouveau solde après retrait: ${this.solde}`);
    } else {
        console.log("Fonds insuffisants");
    }
};

// Exercice 9: Créer un objet représentant une bibliothèque avec une propriété pour stocker une collection de livres.
let bibliotheque = {
    collection: []
};

// Exercice 10: Ajouter des méthodes à l'objet bibliothèque pour ajouter un livre à la collection et afficher tous les livres.
bibliotheque.ajouterLivre = function(livre) {
    this.collection.push(livre);
};

bibliotheque.afficherLivres = function() {
    this.collection.forEach(livre => {
        console.log(`Titre: ${livre.titre}, Auteur: ${livre.auteur}, Pages: ${livre.pages}`);
    });
};