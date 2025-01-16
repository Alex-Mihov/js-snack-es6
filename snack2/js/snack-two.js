// Snack2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// creazione array con gli oggetti 
let squadreCalcio = [
    { nome: "Juventus", punti: 0, falliSubiti: 0 },
    { nome: "Inter", punti: 0, falliSubiti: 0 },
    { nome: "Milan", punti: 0, falliSubiti: 0 },
    { nome: "Roma", punti: 0, falliSubiti: 0 },
    { nome: "Napoli", punti: 0, falliSubiti: 0 }
]
console.log(squadreCalcio);


// generazione numeri casuali dei punti fatti e dei falli subiti
for (let i = 0; i < squadreCalcio.length; i++) {
    squadreCalcio[i].punti = Math.floor(Math.random() * 40) + 1;
    squadreCalcio[i].falliSubiti = Math.floor(Math.random() * 40) + 1;
}
console.log(squadreCalcio);
// creazione nuovo array con solo i nomi e i falli subiti 
