function f1(x: string,y: string): boolean{
    return x < y ; 
}
function f2(x: string, y?: string): boolean {
    if (!y) {
        return true;
    }
    return  x < y; 
}
function f3(...args:String[]) : void {
	console.log(args.length);
	for (let i=0; i<args.length; i++)
		console.log("arguement "+ i + " : " + args[i]);
}

console.log(f1("a","b"));
console.log(f2("a"));
f3("1","2","3","4","5","6");

let params = ["1","2","3","4"]
f3(...params)
