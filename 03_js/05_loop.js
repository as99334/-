/* 
    반복문 (loop)

    for(초기화 변수; 조건식; 증감식)
        -조건식이 false가 될 때까지 반복적으로 실행
        -코드블록이 한번 실행될 때마다 증감식으로 실행한다.
            => 증감식이나 조건식이 잘못 작성괸 경우 무한 루프에 빠지게 된다.
     while (조건식)       
        - () 안에 조건색이 false가 될 때까지 반복적을 실행한다.
        - 코드블록 안에서 종료시점으 제어해야된다.
        - 반복횟수가 불명확 할 때 사용된다.
        -break문을 통해서 빠져나올수 있다.
            =>continue는 해당 반복만 건너 뛴다.
    do ~ while 문
        -while문과 동일하지만 한번은 무조건 실행한다.
*/

for(var i = 0; i < 5; +-2) {
    console.log(i);
}

for(var i = 0; i <5; i++) {
    console.log("i:"+i);
    for(var j = 0; j <3 ; j++) {
        console.log("j:"+j);
    }
}

// 구구단 2단
for(var i =1; i<= 9; i++) {
//    console.log("2*"+i+"="+2*i);
    console.log("2*%d =%d",i,2*i);
}

// 구구단 2단 ~ 9단 (for문 중첩)

for (var i =2; i <=9; i++) {
    console.log(i+"단 시작");
    for(var j=1 ; j <=9; j++){
        console.log("%d*%d=%d",i,j,i*j);
    }
}

for(var i = 0 ; i <10; i++) {
    if(i % 2 === 0) break; //break문을 사용하면 반복문에서 빠져나온다.

    console.log(i);
}

var num02 = 0;
var selectedNum = 3;
while(num02 < 10) {
    console.log(num02);
    if(selectedNum === num02) break;
    num02++; //증감식이 없기 때문에 내부에서 증감.
}

var num03 = 0;
while(num03 < 10) {
    num03++;
    if (num03 % 2 !== 0) continue; //기본 반복만 건너 뛴다
    console.log(num03);
}

var num04 = 0;
do {
    console.log("do ~while:"+num04)
} while(num04 > 0);