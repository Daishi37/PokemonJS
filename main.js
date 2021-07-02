


function Premier(pkm1, pkm2) {
     
    let val = Math.random();
    if (val < 0.5) {
        console.log("Le tirage au sort a décidé que " + pkm1.getName() + " attaquait en premier.");
        return pkm1;
    } else { 
        console.log("Le tirage au sort a décidé que " + pkm2.getName() + " attaquait en premier.");
        return pkm2;
    }
} 

function affichagePoints(pkm) {
    console.log(pkm.getName() + " a " + pkm.getLifePoints() + " points de vie");
}



let Miaouss = new Pokemon("Miaouss", 049, 32, 7,"Normal",67,"combo-griffe",8,"jackpot",14);
let Evoli = new Pokemon("Evoli", 133, 30, 6.5, "Normal", 70, "adaptabilite", 9, "anticipation", 15);
let Pikachu = new Pokemon("Pikachu", 025, 40, 6,"Electrique", 82, "statik", 10, "paratonnerre", 12);




let premier = Premier(Pikachu, Miaouss);
let second = Pikachu;
if (premier === Pikachu ) {
    second = Miaouss;
}

console.log("##############################");

    affichagePoints(premier);
    affichagePoints(second);

console.log("##############################");


while (premier.getLifePoints() > 0 && second.getLifePoints() > 0 ) {
    let pVal = premier.attaque(second);
    let firstString = premier.getName() + " a attaqué .Il a fait " + pVal + " de dégâts. ";
    if (second.getLifePoints() < 0) {
        console.log( firstString); 
    } else {
        let sVal = second.attaque(premier);
        console.log( firstString + second.getName() + " a attaqué . Il a fait " + sVal + " de dégâts. ");
    }
    
}

let gagnant;
if (premier.getLifePoints() > 0) {
    gagnant = premier;
} else {
    gagnant = second;
}

console.log(gagnant.getName() + " a écrasé son adversaire ! Il lui restait " + gagnant.getLifePoints() + " points de vie.");
