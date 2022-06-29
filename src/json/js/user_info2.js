/*
    서버에서 가지고 있는 데이터
*/

// 중괄호가 열리고 닫히면 객체
let userList = [
    {
        usercode: 20220001,
        username: "junil",
        password: "1234",
        name: "김준일",
        email: "aaaa@aaaa.com",
        role: ["ROLE_ADMIN", "ROLE_USER"],
        provider: "naver"
    },
    {
        usercode: 20220002,
        username: "junil2",
        password: "1234",
        name: "김준이",
        email: "bbbb@aaaa.com",
        role: ["ROLE_ADMIN", "ROLE_USER"],
        provider: "google"
    },
    {
        usercode: 20220003,
        username: "junil3",
        password: "1234",
        name: "김준삼",
        email: "cccc@aaaa.com",
        role: ["ROLE_ADMIN", "ROLE_USER"],
        provider: "kakao"
    }
];

/*
    클라이언트
*/

const userTable = document.querySelector(".user-table-list");

const btn = document.querySelector(".user-list-load-btn");



// btn.onclick = () => {
//     let userJSON = JSON.stringify(userList);

//     let userObj = JSON.parse(userJSON);
    
//     function createTr(userData){
//         let tr = `
//             <tr>
//                 <td>${userData.usercode}</td>
//                 <td>${userData.username}</td>
//                 <td>${userData.password}</td>
//                 <td>${userData.name}</td>
//                 <td>${userData.email}</td>
//                 <td>${userData.role.join(", ")}</td>
//                 <td>${userData.provider}</td>
//             </tr>
//         `;

//         return tr;
//     }

//     function load() {
//         for(let i = 0; i < userObj.length; i++) {
//             userTable.innerHTML += (createTr(userObj[i]));
//         }
//     }
//     load();
// }

btn.onclick = () => {
    let userJSON = JSON.stringify(userList);

    let userObj = JSON.parse(userJSON);
    
    userObj.forEach(userData => {
        userTable.innerHTML += `
            <tr>
                <td>${userData.usercode}</td>
                <td>${userData.username}</td>
                <td>${userData.password}</td>
                <td>${userData.name}</td>
                <td>${userData.email}</td>
                <td>${userData.role.join(", ")}</td>
                <td>${userData.provider}</td>
            </tr>
        `;
    });
}

