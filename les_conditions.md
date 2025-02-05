# Les Conditions en JavaScript

Les conditions en JavaScript permettent d'exécuter du code de manière conditionnelle en fonction de certaines valeurs ou expressions. Voici un guide complet sur les conditions en JavaScript.

## 1. La Structure `if`

La structure `if` permet d'exécuter un bloc de code si une condition est vraie.

```javascript
if (condition) {
    // code à exécuter si la condition est vraie
}
```

### Exemple

```javascript
let age = 18;

if (age >= 18) {
    console.log("Vous êtes majeur.");
}
```

## 2. La Structure `if...else`

La structure `if...else` permet d'exécuter un bloc de code si une condition est vraie, et un autre bloc de code si elle est fausse.

```javascript
if (condition) {
    // code à exécuter si la condition est vraie
} else {
    // code à exécuter si la condition est fausse
}
```

### Exemple

```javascript
let age = 16;

if (age >= 18) {
    console.log("Vous êtes majeur.");
} else {
    console.log("Vous êtes mineur.");
}
```

## 3. La Structure `if...else if...else`

La structure `if...else if...else` permet de tester plusieurs conditions.

```javascript
if (condition1) {
    // code à exécuter si condition1 est vraie
} else if (condition2) {
    // code à exécuter si condition2 est vraie
} else {
    // code à exécuter si aucune des conditions n'est vraie
}
```

### Exemple

```javascript
let note = 85;

if (note >= 90) {
    console.log("Excellent");
} else if (note >= 75) {
    console.log("Très bien");
} else if (note >= 50) {
    console.log("Bien");
} else {
    console.log("Insuffisant");
}
```

## 4. L'Opérateur Ternaire

L'opérateur ternaire est une manière concise d'écrire une condition `if...else`.

```javascript
condition ? expressionSiVrai : expressionSiFaux;
```

### Exemple

```javascript
let age = 20;
let message = age >= 18 ? "Vous êtes majeur." : "Vous êtes mineur.";
console.log(message);
```

## 5. La Structure `switch`

La structure `switch` permet de tester une variable contre plusieurs valeurs possibles.

```javascript
switch (expression) {
    case valeur1:
        // code à exécuter si expression === valeur1
        break;
    case valeur2:
        // code à exécuter si expression === valeur2
        break;
    // ...
    default:
        // code à exécuter si aucune des valeurs ne correspond
}
```

### Exemple

```javascript
let jour = 3;
let nomDuJour;

switch (jour) {
    case 1:
        nomDuJour = "Lundi";
        break;
    case 2:
        nomDuJour = "Mardi";
        break;
    case 3:
        nomDuJour = "Mercredi";
        break;
    case 4:
        nomDuJour = "Jeudi";
        break;
    case 5:
        nomDuJour = "Vendredi";
        break;
    case 6:
        nomDuJour = "Samedi";
        break;
    case 7:
        nomDuJour = "Dimanche";
        break;
    default:
        nomDuJour = "Jour invalide";
}

console.log(nomDuJour);
```

## Conclusion

Les conditions sont essentielles pour contrôler le flux d'exécution dans un programme JavaScript. En utilisant `if`, `if...else`, `if...else if...else`, l'opérateur ternaire et `switch`, vous pouvez gérer différentes situations et prendre des décisions basées sur les valeurs et les expressions.
