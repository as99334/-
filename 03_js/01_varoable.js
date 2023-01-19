/* 
    alt + shift + a 여러줄 주석 처리
*/
/* 
    변수
        -메모리에 데이터가 저장될 공간.
        -변수명을 통해서 데이터가 저장된 공간에 접근
        -값을 저장하고 꺼내쓰는 주머니

    변수 선언  
        -메모리 공간을 확보하고 공간에 이름을 붙인다.
        -변수 키워드와 함께 변수 이름 작성 => var, let, const(상수)
        -변수을 선언하기만 하면 undefined라는 값이 초기화 된다.
        =,를 통해서 여러개의 변수를 한번에 선언할 수 있다.

    변수의 값 할당    
        -마련된 변수 공간에 값을 저장한다.
        -값이 저장된 변수의 값을 변경할 수 있다 (재할당)
    변수 초기화
        -선언과 동시에 값을 할당한다.
*/      

//변수 초기화
var num = 10;
console.log(num);

//변수 선언 
var age;
console.log(age);

// 변수의 값 할당
age = 30;
console.log("age:",age);
age = 40;
console.log("age",age);

//변수 동시 선언
var name, adress;

// num01 ,num02를 선언하고 10,20 할당, 그 두 값을 바꾸기
var num01 =10;
var num02 =20;
var temp = num01

num01 = num02;
num02 = temp;

console.log(num01, num02);

/* 
    변수명 작성 규칙
        -문자, 숫자, _() $만 사용할 수 있다.
        -JS 키워드는 변수명으로 사용할 수 없다.
        -변수명은 숫자로 시작할 수 없다.
*/

// var num@ = 10; @는 변수명으로 사용할 수 없다.

// var var; 키워드는 변수명으로 사용할 수 없다.

// var 1um = 10; 변수명은 숫자로 시작할 수 없다.

//var user listList = []; 카멜 케이스. 띄어쓰기 부분을 대문자로 구분한다. 
//var user_list = []; 스네이크 케이스 띄어쓰기 부분_(언더바)로 구분한다.
//var UseList = []; 카멜 케이스와 동일 하지만 대문자로 시작한다. 주로 생성자의 이름에 사용된다.


/* 
    var를 쓰면 안되는 이유
        1) 뱐수 호이스팅이 일어난다.
        2) 중복 선언이 가능하다.
        3) 함수 레벨 스코프만 지원하고 블록 레벨 스코프 지원하지 않는다.
*/
console.log(a); //변수 호이스팅 발생. undefined 출력
var a = 10; // 변수 호이스팅 발생. undefiend 출력
var a = 100;
console.log(a); //var 키워드는 중복 선언을  해도 오류 발생

//let a = 0; let 키워드는 중복선언하면 오류가 발생

/* console.log (b); //호이스팅은 일어나나 TDZ로 인해 오류 발생
let b = 10; */

console.log(square(3)); //함수 호이스팅 발생 square 함수 선언문으로 작성했긴 때문에 실행도 가능하다.
function square(num){
    return num * num;
}
/* 
    기명 힘수와 익명 함수

    기명 힘수, 힘수 선언문
        -이름이 있는 함수
        - 함수 호이스팅이 일어난다
    
    익명함수 , 함수 표면식
        - 이름이 없는 함수
        - 함수 호이스팅이 일어나지 않는다.
        - JS에서 함수느 값으로 취급 한다 => 변수에 담긴다.
        - 다른 함수의 인자로 전달되는 함수 (콜백 함수)에 주로 사용한다.
*/
foo(); //foo 함수는 선언문으로 작성했기 때문에 호이스팅 발생
function foo() {
    console.log ("foo 함수 실행");
}
let bar =function () {
    console.log("bar 함수 실행");
};
bar();