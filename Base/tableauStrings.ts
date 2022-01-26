const t2: string[]=["Walid","Cameron","Hana"];
t2.push("Théo");
t2.unshift("Topla");
t2.sort();
t2.forEach(element => {
    console.log(element);
});

for(let i = 0;i<t2.length;i++){
    console.log(t2[t2.length-1-i]);
}