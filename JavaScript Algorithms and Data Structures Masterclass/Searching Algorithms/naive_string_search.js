function naiveSearch(long, short){
    let count = 0;
    for (let i = 0; i < long.length; i++){
        for (let j = 0; j < short.length; j++){
            if (long[i+j] !== short[j]) break;
            if (j === short.length - 1) count++; //위의 조건문에 하나도 걸리지 않고 여기까지 왔다는건 계속 같은 문자가 반복되었다는 것을 의미하므로, j가 short의 끝까지 왔는지 확인해야 한다.
        }
    }
    return count;
}

naiveSearch("lorie loled", "lol");