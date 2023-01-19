/* 
    배열 (array)
        - 여러 데이커를 순차적으로 나열할 자료 구조.
            => 배열의 각 자료를 요소 (element)라고 한다.
            => 인덱스 값으로 참조하는 형태. 인덱스 0부터 시작한다.
        - 배열의 총 크기를 배열의 길이라고 하면, 배열.leght 프로퍼티 참조 할 수 있다.
            => 일반적인 경우에는 배열의 크기와 요소의 개수가 동일하지만, 아닌 경우도 있다.
*/
let arr = [1,2,3,4];
console.log(arr[3]); //배열의 3번째 인덱스 참조
arr[4] = 5;
console.log(arr[4]);
//arr[10] = 10;
console.log(arr);

console.log(arr.length)// 배열의 길이

// 배열에 맨 앞에 데이터 추가(push) 및 제거 (pop)
arr.push(10); //배열의 마지막에 요소를 원본 배열이 변경 된다.
console.log(arr);
let popedNum = arr.pop(); //배열에 마지막 요소를 제거하고 그 값을 반환한다. 원본에 배열이 변경된다.
console.log(arr, popedNum);

//배열에 맨 앞에 데어터 추가 (unshift) 및 제거 (shift)
arr.unshift(0);
console.log(arr);
let shiftNum = arr.shift(); // 배열에 첫번째 요소를 제거하고 그 값을 반환한다. 원본 배열이 변경된다.
console.log(arr, shiftNum);


console.log("---------splice-------")
// splice : 배열에 중간요소에 제거 및 추가
let spliceNums = arr.splice(0,3,1,4); //0번재 3개 삭제. 그 값을 배열로 반환, 원본 배열이 변경된다. 세번째 인자부터는 배열에 추가 한다.
console.log(arr,spliceNums);

//slice : 배열에 중간요소를 복사
let fruits = ["ornage","apple","banana"];
let sliceNum = fruits.slice(1,3); //0부터 2전까지 복사 원본배열이 변경되지 않는다.
console.log (fruits,sliceNum);

// fruits 배열 모든 요소 출력해보기
for (let i = 0; i <3 ; i++) {
    console.log(fruits[i]);
}

// 어떤 배열이 와도 모든 요소 출력하는 함수 만들기
function printElements(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

printElements(fruits);

/* 
    배열의 고차 함수
        - 배열의 각 요소를 순화하여 요소를 인자로 받는 콜백함수를 실행한다.
    
    forEach()
        - 각 요소를 순화하며 콜뱍함수를 실행한다.
        - return 값이 없다
    fillter()
        - 각 요소를 순화하며 콜백함수를 실행하며, 특정 조건을 만족하는 요소만 새로운 배열로 모아서 반환한다.
        - 콜백함수의 return 값이 boolean(ture, false) 값이여야 한다.
*/

let userList = [
    {id:1,name:"seok", age: 31},
    {id:2,name:"minsu", age: 29},
    {id:3,name:"cheolsu", age: 38},

]; 
console.log("------forEach()------");
userList.forEach(function(user){
    console.log(user.name)
});

userList.forEach((user) => {
    console.log(user.name);
});

console.log("----filter()------");
const result = userList.filter(function (user){
    return user.age > 30;    
});
console.log(result);

const result02 = userList.map(function(user){
    return user.name;
});
console.log(result02);

// user 중에 짝수 번째 유저만 모아서 result03 담기

let result03 =  userList.filter(function(_,idx){
    return (idx + 1) % 2 === 0;
});
console.log(result03);

result03 = userList.filter((_,idx)=>(idx + 1)% 2 === 0);

console.log(result03);