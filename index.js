function receivesAFunction(callBack){
    return callBack();
}
function callBack(){
    return "Hello, World!";
}
function returnsANamedFunction(named){
    return function namedFunction() {
        return "This is a named function";
    };
}
function returnsAnAnonymousFunction(){
    return function(){
        return "This is an anonymous function";
    }
}
