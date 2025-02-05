// Exercice 1: Afficher les nombres de 1 à 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Exercice 2: Afficher les nombres pairs de 1 à 20
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Exercice 3: Calculer la somme des nombres de 1 à 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);

// Exercice 4: Afficher les éléments d'un tableau
const fruits = ['pomme', 'banane', 'orange'];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Exercice 5: Trouver le plus grand nombre dans un tableau
const numbers = [10, 5, 8, 12, 7];
let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}
console.log(max);

// Exercice 6: Compter le nombre de voyelles dans une chaîne de caractères
const str = "Bonjour tout le monde";
let count = 0;
for (let i = 0; i < str.length; i++) {
    if ('aeiouAEIOU'.includes(str[i])) {
        count++;
    }
}
console.log(count);

// Exercice 7: Inverser une chaîne de caractères
const originalStr = "JavaScript";
let reversedStr = "";
for (let i = originalStr.length - 1; i >= 0; i--) {
    reversedStr += originalStr[i];
}
console.log(reversedStr);

// Exercice 8: Afficher les nombres de la suite de Fibonacci jusqu'à 10 termes
// nota bene: la suite de Fibonacci est une suite d'entiers dans laquelle chaque terme est la somme des deux termes précédents.
// en d'autres termes plus concis, soit a et b les deux premiers termes de la suite, le terme suivant est a + b.
let a = 0, b = 1, nextTerm;
console.log(a);
console.log(b);
for (let i = 1; i <= 8; i++) {
    nextTerm = a + b;
    console.log(nextTerm);
    a = b;
    b = nextTerm;
}

// Exercice 9: Afficher les tables de multiplication de 1 à 5
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}

// Exercice 10: Vérifier si un nombre est premier
const number = 29;
let isPrime = true;
for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
        isPrime = false;
        break;
    }
}
console.log(isPrime ? `${number} est un nombre premier` : `${number} n'est pas un nombre premier`);