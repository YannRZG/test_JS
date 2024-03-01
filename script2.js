// Demander à l'utilisateur de saisir un nombre
let number = prompt("De quel nombre veux-tu calculer la factorielle ?");

// Convertir la chaîne de caractères saisie en nombre entier
number = parseInt(number);

// Vérifier si l'entrée est un nombre valide
if (isNaN(number)) {
    console.log("Veuillez saisir un nombre valide.");
} else {
    // Calculer la factorielle du nombre saisi
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result *= i;
    }
    // Affiche le résultat 
    console.log("Le résultat est : " + result);
}



