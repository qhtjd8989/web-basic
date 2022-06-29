let year = 1;

//json을 객체형태로 바꾸기 위해 사용
let studentObj = {
    name: "김준일",
    schoolName: "코리아아이티아카데미",
    hobby: ["축구", "농구", "골프"],
    info: {
        "year": year, // 같은 텍스트를 쓸때에는 앞쪽 텍스트에 ""를 붙이면 사용할 수 있다.
        group: 2,
        number: 3
    }
};

console.log(studentObj.name);

for(let i = 0; i < studentObj.hobby.length; i++){
    console.log(studentObj.hobby[i]); 
}

console.log(studentObj.info.year);

console.log("학생객체: " + studentObj);

/*
JSON 형변환
1. Object -> JSON => JSON.stringify(객체);  오브젝트(객체)를 JSON 문자열로 변환해줌.
2. JSON -> Object => JSON.parse(JSON);  JSON문자열을 오브젝트(객체)로 변환해줌

*/

let jsonData = JSON.stringify(studentObj);

console.log("JSON으로 변환: " + jsonData);

let jsonObj = JSON.parse(jsonData);

console.log(jsonObj.name);
