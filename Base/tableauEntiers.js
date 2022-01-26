var t1 = [10, 2, 55, 9, 43];
console.log("-------------FOR---------------");
for (var i = 0; i < t1.length; i++) {
    console.log("tab[" + i + "]=" + t1[i]);
}
console.log("--------------FOR IN--------------");
for (var key in t1) {
    console.log("tab[" + key + "]=" + t1[key]);
}
console.log("------------FOR OF----------------");
for (var _i = 0, t1_1 = t1; _i < t1_1.length; _i++) {
    var value = t1_1[_i];
    console.log("tab[" + t1.indexOf(value) + "]=" + value);
}
console.log("-----------FOR EACH-----------------");
t1.forEach(function (x, i) {
    console.log("tab[" + i + "]=" + x);
});
