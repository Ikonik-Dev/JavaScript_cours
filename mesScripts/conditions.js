// Exercice 1: Vérifier si une personne est éligible pour voter
let ageVoter = 20;
if (ageVoter >= 18) {
    console.log("Vous pouvez voter.");
} else {
    console.log("Vous ne pouvez pas voter.");
}

// Exercice 2: Vérifier si une personne peut obtenir un permis de conduire
let agePermis = 16;
if (agePermis >= 18) {
    console.log("Vous pouvez obtenir un permis de conduire.");
} else {
    console.log("Vous ne pouvez pas obtenir un permis de conduire.");
}

// Exercice 3: Vérifier si un nombre est pair ou impair
let nombrePairImpair = 7;
if (nombrePairImpair % 2 === 0) {
    console.log("Le nombre est pair.");
} else {
    console.log("Le nombre est impair.");
}

// Exercice 4: Vérifier si une année est bissextile
let anneeBissextile = 2024;
if ((anneeBissextile % 4 === 0 && anneeBissextile % 100 !== 0) || anneeBissextile % 400 === 0) {
    console.log("L'année est bissextile.");
} else {
    console.log("L'année n'est pas bissextile.");
}

// Exercice 5: Vérifier si une personne a droit à une réduction
let ageReduction = 65;
if (ageReduction < 18 || ageReduction >= 65) {
    console.log("Vous avez droit à une réduction.");
} else {
    console.log("Vous n'avez pas droit à une réduction.");
}

// Exercice 6: Vérifier si une température est dans une plage confortable
let temperatureConfort = 22;
if (temperatureConfort >= 20 && temperatureConfort <= 25) {
    console.log("La température est confortable.");
} else {
    console.log("La température n'est pas confortable.");
}

// Exercice 7: Vérifier si un mot de passe est valide
let motDePasseValide = "abc123";
if (motDePasseValide.length >= 8) {
    console.log("Le mot de passe est valide.");
} else {
    console.log("Le mot de passe n'est pas valide.");
}

// Exercice 8: Vérifier si un nombre est positif, négatif ou zéro
let nombrePosNegZero = -5;
if (nombrePosNegZero > 0) {
    console.log("Le nombre est positif.");
} else if (nombrePosNegZero < 0) {
    console.log("Le nombre est négatif.");
} else {
    console.log("Le nombre est zéro.");
}

// Exercice 9: Vérifier si une personne peut entrer dans une boîte de nuit
let ageBoite = 20;
let avecCarteMembre = true;
if (ageBoite >= 18 && avecCarteMembre) {
    console.log("Vous pouvez entrer dans la boîte de nuit.");
} else {
    console.log("Vous ne pouvez pas entrer dans la boîte de nuit.");
}

// Exercice 10: Vérifier le jour de la semaine
let jourSemaine = 5;
switch (jourSemaine) {
    case 1:
        console.log("Lundi");
        break;
    case 2:
        console.log("Mardi");
        break;
    case 3:
        console.log("Mercredi");
        break;
    case 4:
        console.log("Jeudi");
        break;
    case 5:
        console.log("Vendredi");
        break;
    case 6:
        console.log("Samedi");
        break;
    case 7:
        console.log("Dimanche");
        break;
    default:
        console.log("Jour invalide");
}