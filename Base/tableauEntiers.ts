let t1:number[]=[10,2,55,9,43];
console.log("-------------FOR---------------");
for(let i = 0;i<t1.length;i++){
    console.log("tab["+i+"]="+t1[i]);
}
console.log("--------------FOR IN--------------");
for (const key in t1) {
    console.log("tab["+key+"]="+t1[key]);
}
console.log("------------FOR OF----------------");

for (const value of t1) {
    console.log("tab["+t1.indexOf(value)+"]="+value);
}
console.log("-----------FOR EACH-----------------");

t1.forEach((x:number,i:number):void => {
    console.log("tab["+i+"]="+x);
});