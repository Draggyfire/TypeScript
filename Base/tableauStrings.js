var t2 = ["Walid", "Cameron", "Hana"];
t2.push("Théo");
t2.unshift("Topla");
t2.sort();
t2.forEach(function (element) {
    console.log(element);
});
for (var i = 0; i < t2.length; i++) {
    console.log(t2[t2.length - 1 - i]);
}
