// LES TABLEAUX EN JAVASCRIPT ///

// Exercice 1: Déclarer une variable de type array et afficher le premier élément
let myArray = [1, 2, 3, 4, 5];
console.log("Premier élément du tableau: " + myArray[0]); // 1

// Exercice 2: Déclarer une variable de type array et afficher le dernier élément
let myArray2 = [1, 2, 3, 4, 5];
console.log("Dernier élément du tableau: " + myArray2[myArray2.length - 1]); // 5

// Exercice 3: Déclarer une variable de type array et afficher sa longueur
let myArray3 = [1, 2, 3, 4, 5, 10];
console.log("Longueur du tableau: " + myArray3.length); // 6

// Exercice 4: Déclarer une variable de type array et afficher tous les éléments
let myArray4 = [1, 2, 3, 4, 5];
console.log("Tous les éléments du tableau: " + myArray4); // 1,2,3,4,5

// Exercice 5: Déclarer une variable de type array et afficher tous les éléments séparés par un espace (concatenez les éléments et des espaces entre eux pour les afficher ^^ )
let myArray5 = [1, 2, 3, 4, 5];
// console.log("Tous les éléments du tableau séparés par un espace: " + myArray5.join(" ")); // 1 2 3 4 5

// Exercice 6: Déclarer une variable de type array et afficher tous les éléments séparés par un tiret
let myArray6 = [1, 2, 3, 4, 5];
console.log("Tous les éléments du tableau séparés par un tiret: " + myArray6.join("-")); // 1-2-3-4-5

// Exercice 7: Déclarer une variable de type array et afficher tous les éléments séparés par une virgule
let myArray7 = [1, 2, 3, 4, 5];
console.log("Tous les éléments du tableau séparés par une virgule: " + myArray7.join(",")); // 1,2,3,4,5

// Exercice 8: Déclarer une variable de type array et afficher tous les éléments séparés par un point-virgule
let myArray8 = [1, 2, 3, 4, 5];
console.log("Tous les éléments du tableau séparés par un point-virgule: " + myArray8.join(";")); // 1;2;3;4;5

// Exercice 9: Déclarer une variable de type array et afficher tous les éléments séparés par un retour à la ligne
let myArray9 = [1, 2, 3, 4, 5];
console.log("Tous les éléments du tableau séparés par un retour à la ligne: " + myArray9.join("\n"));  // 1\n2\n3\n4\n5

// Exercice 10: Déclarer une variable de type array et afficher tous les éléments séparés par un espace et entourés de crochets
let myArray10 = [1, 2, 3, 4, 5];
console.log("Tous les éléments du tableau séparés par un espace et entourés de crochets: [" + myArray10.join(" ") + "]");   // [1 2 3 4 5]

// Exercice 11: Déclarer une variable de type array et utiliser la methode concat() pour ajouter un élément à la fin du tableau (la méthode concat() ne modifie pas le tableau d'origine)
let myArray11 = [1, 2, 3, 4, 5];
let myArray12 = myArray11.concat(6);
console.log("Nouveau tableau après concaténation: " + myArray12); // 1,2,3,4,5,6

// Exercice 12: Déclarer une variable de type array et utiliser la methode push() pour ajouter un élément à la fin du tableau (la méthode push() modifie le tableau d'origine)
let myArray13 = [1, 2, 3, 4, 5];
myArray13.push(6);
console.log("Nouveau tableau après ajout: " + myArray13); // 1,2,3,4,5,6

// Exercice 13: Déclarer une variable de type array et utiliser la methode unshift() pour ajouter un élément au début du tableau (la méthode unshift() modifie le tableau d'origine)
let myArray14 = [1, 2, 3, 4, 5];
myArray14.unshift(0);
console.log("Nouveau tableau après ajout: " + myArray14); // 0,1,2,3,4,5

// Exercice 14: Déclarer une variable de type array et utiliser la methode pop() pour supprimer le dernier élément du tableau (la méthode pop() modifie le tableau d'origine)
let myArray15 = [1, 2, 3, 4, 5];
myArray15.pop();
console.log("Nouveau tableau après suppression: " + myArray15); // 1,2,3,4

// Exercice 15: Déclarer une variable de type array et utiliser la methode shift() pour supprimer le premier élément du tableau (la méthode shift() modifie le tableau d'origine)
let myArray16 = [1, 2, 3, 4, 5];
myArray16.shift();
console.log("Nouveau tableau après suppression: " + myArray16); // 2,3,4,5

// Exercice 16: Déclarer une variable de type array et utiliser la methode slice() pour copier une partie du tableau (la méthode slice() ne modifie pas le tableau d'origine)
let myArray17 = [1, 2, 3, 4, 5];
let myArray18 = myArray17.slice(1, 4);
console.log("Nouveau tableau après copie: " + myArray18); // 2,3,4

// Exercice 17: Déclarer une variable de type array et utiliser la methode splice() pour supprimer une partie du tableau (la méthode splice() modifie le tableau d'origine)
let myArray19 = [1, 2, 3, 4, 5];
myArray19.splice(1, 3);
console.log("Nouveau tableau après suppression: " + myArray19); // 1,5

// Exercice 18: Déclarer une variable de type array et utiliser la methode splice() pour ajouter un élément à une position donnée du tableau (la méthode splice() modifie le tableau d'origine)
let myArray20 = [1, 2, 3, 4, 5];
myArray20.splice(2, 0, 10);
console.log("Nouveau tableau après ajout: " + myArray20); // 1,2,10,3,4,5

// Exercice 19: Déclarer une variable de type array et utiliser la methode indexOf() pour trouver l'index d'un élément donné
let myArray21 = [1, 2, 3, 4, 5];
let index = myArray21.indexOf(3);
console.log("Index de l'élément: " + index); // 2

// Exercice 20: Déclarer une variable de type array et utiliser la methode lastIndexOf() pour trouver l'index d'un élément donné à partir de la fin du tableau
let myArray22 = [1, 2, 3, 4, 5, 3];
let lastIndex = myArray22.lastIndexOf(3);
console.log("Index de l'élément à partir de la fin: " + lastIndex); // 5

// Exercice 21: Déclarer une variable de type array et utiliser la methode includes() pour vérifier si un élément est présent dans le tableau
let myArray23 = [1, 2, 3, 4, 5];
let estPresent = myArray23.includes(3);
console.log("Est-ce que l'élément est présent? " + estPresent); // true

// Exercice 22: Déclarer une variable de type array et utiliser la methode join() pour concaténer tous les éléments du tableau en une seule chaîne de caractères
let myArray24 = [1, 2, 3, 4, 5];
let result2 = myArray24.join("");
console.log("Résultat de la concaténation: " + result2); // 12345

// Exercice 23: Déclarer une variable de type array et utiliser la methode reverse() pour inverser l'ordre des éléments du tableau
let myArray25 = [1, 2, 3, 4, 5];
myArray25.reverse();
console.log("Tableau inversé: " + myArray25); // 5,4,3,2,1

// Exercice 24: Déclarer une variable de type array et utiliser la methode sort() pour trier les éléments du tableau (par défaut, les éléments sont triés par ordre alphabétique ou croissant)
let myArray26 = [5, 2, 3, 4, 1];
myArray26.sort();
console.log("Tableau trié: " + myArray26); // 1,2,3,4,5

// Exercice 25: Déclarer une variable de type array et utiliser la methode sort() avec une fonction de comparaison pour trier les éléments du tableau dans l'ordre décroissant
let myArray27 = [5, 2, 3, 4, 1];
myArray27.sort((a, b) => b - a);
console.log("Tableau trié dans l'ordre décroissant: " + myArray27); // 5,4,3,2,1

// Exercice 26: Déclarer une variable de type array et utiliser la methode map() pour appliquer une fonction à chaque élément du tableau
let myArray28 = [1, 2, 3, 4, 5];
let result3 = myArray28.map((element) => element * 2);
console.log("Résultat de la multiplication: " + result3); // 2,4,6,8,10

// Exercice 27: Déclarer une variable de type array et utiliser la methode filter() pour filtrer les éléments du tableau en fonction d'une condition
let myArray29 = [1, 2, 3, 4, 5];
let result4 = myArray29.filter((element) => element % 2 === 0);
console.log("Éléments filtrés: " + result4); // 2,4

// Exercice 28: Déclarer une variable de type array et utiliser la methode reduce() pour réduire les éléments du tableau à une seule valeur. indice: la méthode reduce() prend une fonction de rappel avec deux paramètres: l'accumulateur et la valeur actuelle (accumulator, currentValue)
let myArray30 = [1, 2, 3, 4, 5];
let result5 = myArray30.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log("Résultat de la réduction: " + result5); // 15

// Exercice 29: Déclarer une variable de type array et utiliser la methode forEach() pour afficher chaque élément du tableau
let myArray31 = [1, 2, 3, 4, 5];
myArray31.forEach((element) => console.log(element));

// Exercice 30: Déclarer une variable de type array et utiliser la methode every() pour vérifier si tous les éléments du tableau satisfont une condition
let myArray32 = [1, 2, 3, 4, 5];
let result6 = myArray32.every((element) => element > 0);
console.log("Est-ce que tous les éléments sont positifs? " + result6); // true

// la structure syntaxique de toutes ces methodes est la suivante:
// array.method((element) => {
//     // code
// }); 
// array.method((element, index) => {
//     // code
// });
// array.method((element, index, array) => {
//     // code
// });

// parcourir un tableau en javascript
let myArray33 = [1, 2, 3, 4, 5];
for (let i = 0; i < myArray33.length; i++) {
    console.log(myArray33[i]);
}

// parcourir un tableau avec la méthode forEach()
let myArray34 = [1, 2, 3, 4, 5];
myArray34.forEach((element) => {
    console.log(element);
});


