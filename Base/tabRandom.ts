function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const MAX:number = 100;  
function creerTableau (nbElements :number) : number[] {
    var tab=[];
    for(let i =0;i<nbElements;i++){
        let x = getRandomInt(MAX);
        tab.push(x)
    }
    return tab;
}
console.log ("==Création d'un tableau d'entiers : ");  
let tab = creerTableau(10); 
console.log(tab);

function rechercheClassique (tab:number[], element:number) : boolean {
    for (const x of tab) {
        if(x === element)return true;
    }
    return false;
}
  
function recherche (element) : boolean{
    return (element == this)
}
function trier(a,b): number{
    return a-b;
}
console.log("========= Test si un élément appartient au tableau ========="); 
console.log(tab[7]);
console.log(rechercheClassique(tab,tab[7])); // methode classique 
console.log(tab.some(recherche,tab[7]));   // utilisation de some

function estPair (element) : boolean{
    return (element%2==0)
} 
function estImpair(element) : boolean{
    return (element%2!=0)
}
console.log("========= Utilisation de some et any ========="); 
console.log(tab.every(estPair));
console.log(tab.some(estPair));

function plusPetitQueLeSuivant(element,index,array){
    if(array[index+1]==undefined)return true;
    return (element<=array[index+1]);
}

console.log("========= Test tous les éléments sont triés ? avec every ========="); 
console.log("Avant le tri : ", tab.every(plusPetitQueLeSuivant));

tab.sort(trier);
console.log(tab);
console.log("Après le tri : ",tab.every(plusPetitQueLeSuivant));

let tab2;
tab2=tab.filter(estImpair);
console.log(tab);

var x = 50;
tab2 = tab.filter(element => element < x);
console.log(tab2);

tab2 = tab.map((element)=>element*2);
console.log(tab2);

console.log(tab.reduce((avant,element)=>avant+element)/tab.length);

let bulletin = [[ 1, 10 ], [ 2, 15 ], [ 1, 5 ]];
let moyenne = bulletin.reduce((avant,val,index,array)=>(avant))
console.log(moyenne);
