// Demande à l'utilisateur le nombre d'étages 
let stairs =(prompt("Salut, bienvenue dans la pyramide ! Combien d'étages veux-tu ?"));
stairs = parseInt(stairs);

if (!isNaN(stairs)) {
    // Boucle pour chaque étage
    for (let i = 1; i <= stairs; i++) {
        let step = '';
        // Ajouter des espaces à chaque ligne
        for (let j = 1; j <= stairs - i; j++) {
            step += '  ';
        }
        // Ajouter des dièses à chaque ligne
        for (let k = 1; k <= i; k++) {
            step += '#@';
        }
        // Afficher la ligne dans la console
        console.log(step);
    }
} else {
    console.log("Veuillez saisir un nombre valide.");
}


