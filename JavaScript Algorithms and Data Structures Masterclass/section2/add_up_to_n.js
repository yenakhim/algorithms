function addUpToN1(n){
    return n * (n + 1) / 2;
}

function addUpToN2(n){
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}