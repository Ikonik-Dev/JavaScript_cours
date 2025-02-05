// LES FONCTIONS EN JAVASCRIPT ///
// Exercice 21: Déclarer une fonction qui affiche un message dans la console
function direBonjour() {
    console.log("Hello, World!");
}
direBonjour();

// Exercice 22: Déclarer une fonction qui prend un paramètre et l'affiche dans la console
function afficherMessage(message) {
    console.log(message);
}
afficherMessage("Bonjour, tout le monde!");

// Exercice 23: Déclarer une fonction qui prend deux paramètres et les additionne
function additionnerNombres(nombre1, nombre2) {
    return nombre1 + nombre2;
}
let somme = additionnerNombres(10, 20);
console.log("La somme est: " + somme);

// Exercice 24: Déclarer une fonction qui prend un paramètre et renvoie un message
function obtenirMessage(nom) {
    return "Bonjour, " + nom + "!";
}
let message = obtenirMessage("Alice");
console.log(message);

// Exercice 25: Déclarer une fonction qui prend un paramètre et renvoie true si c'est un nombre pair, sinon false
function estPair(nombre) {
    return nombre % 2 === 0;
}
console.log("Est-ce un nombre pair? " + estPair(10));

// Exercice 26: Déclarer une fonction qui prend un paramètre et renvoie sa longueur
function obtenirLongueur(texte) {
    return texte.length;
}
console.log("Longueur de la chaîne: " + obtenirLongueur("Hello, World!"));

// Exercice 27: Déclarer une fonction qui prend un paramètre et renvoie true si c'est une chaîne vide, sinon false
function estVide(texte) {
    return texte === "";
}
console.log("Est-ce une chaîne vide? " + estVide(""));
console.log("Est-ce une chaîne vide? " + estVide("Hello, World!"));

// Exercice 28: Déclarer une fonction qui prend un paramètre et renvoie true si c'est un nombre, sinon false
function estNombre(valeur) {
    return typeof valeur === "number";
}
console.log("Est-ce un nombre? " + estNombre(42));
console.log("Est-ce un nombre? " + estNombre("Hello, World!"));

// Exercice 29: Déclarer une fonction qui prend un paramètre et renvoie true si c'est un objet, sinon false
function estObjet(valeur) {
    return typeof valeur === "object";
}
console.log("Est-ce un objet? " + estObjet({}));
console.log("Est-ce un objet? " + estObjet("Hello, World!"));

// Exercice 30: Déclarer une fonction qui prend un paramètre et renvoie true si c'est une fonction, sinon false
function estFonction(valeur) {
    return typeof valeur === "function";
}
console.log("Est-ce une fonction? " + estFonction(function() {}));
console.log("Est-ce une fonction? " + estFonction("Hello, World!"));

// Exercice 31: Déclarer une fonction qui prend un paramètre et renvoie true si c'est un tableau, sinon false
function estTableau(valeur) {
    return Array.isArray(valeur);
}
console.log("Est-ce un tableau? " + estTableau([]));
console.log("Est-ce un tableau? " + estTableau("Hello, World!"));

// Exercice 32: Déclarer une fonction qui prend un paramètre et renvoie true si c'est une chaîne, sinon false
function estChaine(valeur) {
    return typeof valeur === "string";
}
console.log("Est-ce une chaîne? " + estChaine("Hello, World!"));
console.log("Est-ce une chaîne? " + estChaine(42));

// Exercice 33: Déclarer une fonction qui prend un paramètre et renvoie true si c'est un booléen, sinon false
function estBooleen(valeur) {
    return typeof valeur === "boolean";
}
console.log("Est-ce un booléen? " + estBooleen(true));
console.log("Est-ce un booléen? " + estBooleen("Hello, World!"));

// Exercice 34: Déclarer une fonction qui prend un paramètre et renvoie true si c'est un nombre fini, sinon false
function estNombreFini(valeur) {
    return Number.isFinite(valeur);
}
console.log("Est-ce un nombre fini? " + estNombreFini(42));
console.log("Est-ce un nombre fini? " + estNombreFini(Infinity));

// Exercice 35: Déclarer une fonction qui prend un paramètre et renvoie true si c'est un nombre entier, sinon false
function estNombreEntier(valeur) {
    return Number.isInteger(valeur);
}
console.log("Est-ce un nombre entier? " + estNombreEntier(42));
console.log("Est-ce un nombre entier? " + estNombreEntier(42.5));

// Exercice 36: Déclarer une fonction qui prend un paramètre et renvoie true si c'est un nombre négatif, sinon false
function estNombreNegatif(valeur) {
    return valeur < 0;
}
console.log("Est-ce un nombre négatif? " + estNombreNegatif(-42));
console.log("Est-ce un nombre négatif? " + estNombreNegatif(42));
