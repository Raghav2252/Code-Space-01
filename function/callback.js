function callbackFunction(callback){
    callback();
}
function addTwoNumbers(){
    let a = 5;
    let b = 10;
    console.log(a + b);
}
callbackFunction(addTwoNumbers);