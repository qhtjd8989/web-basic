let add2 = function(x, y){
    return x + y;
}
// 변수는 선언이 돼 있어야 사용할 수 있다

main();

function add(x, y){
    return x + y;
}

function main(){
    let num1 = 10;
    let num2 = 20;
   
    let result = add(num1, num2);
    console.log("결과: " + result);

    result = add2(num1, num2);
    console.log("결과2: " + result);

    result = function(x, y){return x + y;}(10, 20);
    console.log("결과3: " + result);
}



