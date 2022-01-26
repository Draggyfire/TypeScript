function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
var MAX = 100;
function creerTableau(nbElements) {
    var tab = [];
    for (var i = 0; i < nbElements; i++) {
        var x_1 = getRandomInt(MAX);
        tab.push(x_1);
    }
    return tab;
}
console.log("==Création d'un tableau d'entiers : ");
var tab = creerTableau(10);
console.log(tab);
function rechercheClassique(tab, element) {
    for (var _i = 0, tab_1 = tab; _i < tab_1.length; _i++) {
        var x_2 = tab_1[_i];
        if (x_2 === element)
            return true;
    }
    return false;
}
function recherche(element) {
    return (element == this);
}
function trier(a, b) {
    return a - b;
}
console.log("========= Test si un élément appartient au tableau =========");
console.log(tab[7]);
console.log(rechercheClassique(tab, tab[7])); // methode classique 
console.log(tab.some(recherche, tab[7])); // utilisation de some
function estPair(element) {
    return (element % 2 == 0);
}
function estImpair(element) {
    return (element % 2 != 0);
}
console.log("========= Utilisation de some et any =========");
console.log(tab.every(estPair));
console.log(tab.some(estPair));
function plusPetitQueLeSuivant(element, index, array) {
    if (array[index + 1] == undefined)
        return true;
    return (element <= array[index + 1]);
}
console.log("========= Test tous les éléments sont triés ? avec every =========");
console.log("Avant le tri : ", tab.every(plusPetitQueLeSuivant));
tab.sort(trier);
console.log(tab);
console.log("Après le tri : ", tab.every(plusPetitQueLeSuivant));
var tab2;
tab2 = tab.filter(estImpair);
console.log(tab);
var x = 50;
tab2 = tab.filter(function (element) { return element < x; });
console.log(tab2);
tab2 = tab.map(function (element) { return element * 2; });
console.log(tab2);
console.log(tab.reduce(function (avant, element) { return avant + element; }) / tab.length);
var bulletin = [[1, 10], [2, 15], [1, 5]];
var moyenne = bulletin.reduce(function (avant, val, index, array) { return (avant); });
console.log(moyenne);
