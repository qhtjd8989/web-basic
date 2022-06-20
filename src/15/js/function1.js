function add(x, y){
    return x + y;
}

let result = add(10, 20);

console.log(result);

// 익명함수
let result2 = function(x, y) {
    return x + y;
}

console.log(result2(10, 20));

// 익명함수2
console.log(function(x, y){
    return x + y;
}(10, 20));

// 화살표함수(자바 람다식이랑 같음) 중괄호 생략가능
let result3 = (x, y) => {
    return x + y;
}

console.log(result3(20, 30));