// todo: les variables

// Exercice 1: Déclarer une variable et l'afficher dans la console
let myVariable = "Hello, World!";
console.log(myVariable);

// Exercice 2: Déclarer deux variables, les additionner et afficher le résultat
let num1 = 5;
let num2 = 10;
let sum = num1 + num2;
console.log("La somme est: " + sum);

// Exercice 3: Déclarer une variable, changer sa valeur et afficher les deux valeurs
let myNumber = 20;
console.log("Valeur initiale: " + myNumber);
myNumber = 30;
console.log("Nouvelle valeur: " + myNumber);

// Exercice 4: Déclarer une variable avec const et essayer de changer sa valeur (cela devrait provoquer une erreur)
const myConstant = 100;
console.log("Valeur de la constante: " + myConstant);
// myConstant = 200; // Décommenter cette ligne pour voir l'erreur

// Exercice 5: Déclarer une variable avec let dans un bloc et essayer de l'accéder en dehors du bloc (cela devrait provoquer une erreur)
{
    let blockVariable = "Je suis dans un bloc";
    console.log(blockVariable);
}
// console.log(blockVariable); // Décommenter cette ligne pour voir l'erreur

// Exercice 6: Déclarer une variable avec var dans un bloc et essayer de l'accéder en dehors du bloc (cela ne devrait pas provoquer d'erreur)
{
    var blockVariable = "Je suis dans un bloc";
    console.log(blockVariable);
}
console.log(blockVariable);

// Exercice 7: Déclarer une variable avec let et la déclarer à nouveau avec let (cela devrait provoquer une erreur)
let myVariable2 = "Je suis une variable";
// let myVariable2 = "Je suis une autre variable"; // Décommenter cette ligne pour voir l'erreur

// todo: les types de variables

// Exercice 8: Déclarer une variable de type string et afficher sa longueur
let myString = "Bonjour, tout le monde!";
console.log("Longueur de la chaîne: " + myString.length);

// Exercice 9: Déclarer une variable de type number et vérifier si elle est un entier
let myNumber2 = 42.5;
console.log("Est-ce un entier? " + Number.isInteger(myNumber2));

// Exercice 10: Déclarer une variable de type boolean et inverser sa valeur
let myBoolean = true;
console.log("Valeur initiale: " + myBoolean);
myBoolean = !myBoolean;
console.log("Valeur inversée: " + myBoolean);

// Exercice 11: Déclarer une variable de type array et afficher le premier élément
let myArray = [1, 2, 3, 4, 5];
console.log("Premier élément du tableau: " + myArray[0]);

// Exercice 12: Déclarer une variable de type object et afficher une de ses propriétés
let myObject = { name: "Alice", age: 25 };
console.log("Nom de l'objet: " + myObject.name);

// todo : les opérations sur les variables

// Exercice 13: Déclarer deux variables de type number et les additionner en utilisant l'opérateur +
let num3 = 10;
let num4 = 20;
let sum2 = num3 + num4;
console.log("La somme est: " + sum2);

// Exercice 14: Déclarer deux variables de type string et les concaténer en utilisant l'opérateur +
let string1 = "Hello, ";
let string2 = "World!";
let result = string1 + string2;
console.log("La concaténation est: " + result);

// Exercice 15: Déclarer une variable de type number et l'incrémenter de 1 en utilisant l'opérateur ++
let num5 = 5;
num5++;
console.log("La variable incrémentée est: " + num5);

// Exercice 16: Déclarer une variable de type number et la décrémenter de 1 en utilisant l'opérateur --
let num6 = 10;
num6--;
console.log("La variable décrémentée est: " + num6);

// Exercice 17: Déclarer une variable de type number et la multiplier par un autre nombre en utilisant l'opérateur *
let num7 = 5;
let num8 = 10;
let product = num7 * num8;
console.log("Le produit est: " + product);

// Exercice 18: Déclarer une variable de type number et la diviser par un autre nombre en utilisant l'opérateur /
let num9 = 100;
let num10 = 10;
let quotient = num9 / num10;
console.log("Le quotient est: " + quotient);

// Exercice 19: Déclarer une variable de type number et obtenir le reste de la division par un autre nombre en utilisant l'opérateur %
let num11 = 100;
let num12 = 3;
let remainder = num11 % num12;
console.log("Le reste de la division est: " + remainder);

// exercice 20: Déclarer une variable de type number et la multiplier par 2 en utilisant l'opérateur *=
let num13 = 5;
num13 *= 2;
console.log("La variable multipliée par 2 est: " + num13);

