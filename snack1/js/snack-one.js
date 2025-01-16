// Snack 1
// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.


// creazione array con gli oggetti
const biciDaCorsa = [
    { nome: "Bici 1", peso: 6.8 },
    { nome: "Bici 2", peso: 7.2 },
    { nome: "Bici 3", peso: 7.1 },
    { nome: "Bici 4", peso: 6.7 },
    { nome: "Bici 5", peso: 6.9 },
    { nome: "Bici 6", peso: 7.0 },
    { nome: "Bici 7", peso: 6.8 },
    { nome: "Bici 8", peso: 7.2 },
    { nome: "Bici 9", peso: 6.8 },
    { nome: "Bici 10", peso: 6.7 }
];
console.log(biciDaCorsa);


// individuare la bici con il peso minore 
let pesoBici = biciDaCorsa.map(pesoMin => pesoMin.peso)

console.log(pesoBici);

