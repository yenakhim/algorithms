function countDown(num){
    if (num <= 0) { // function에서 빠져나갈 수 있는 곳을 base case라고 한다.
        console.log("All Done!");
        return; // return을 적지 않으면 All Done을 출력하고 아래 코드가 계속 반복된다.
    }
    console.log(num);
    num--;
    countDown(num);
}