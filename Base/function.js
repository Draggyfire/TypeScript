function f1(x, y) {
    return x < y;
}
function f2(x, y) {
    if (!y) {
        return true;
    }
    return x < y;
}
function f3() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.log(args.length);
    for (var i = 0; i < args.length; i++)
        console.log("arguement " + i + " : " + args[i]);
}
console.log(f1("a", "b"));
console.log(f2("a"));
f3("1", "2", "3", "4", "5", "6");
var params = ["1", "2", "3", "4"];
f3.apply(void 0, params);
