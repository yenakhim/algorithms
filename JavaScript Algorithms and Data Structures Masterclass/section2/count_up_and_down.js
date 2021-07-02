function countUpAndDown(n) {
    // 먼저 위로 올라간다.
    for (i = 0; i <= n; i++) {
        console.log(i);
    }
    // 그 다음 아래로 내려간다.
    for (j = n-1; j >= 0; j--) {
        console.log(j);
    }
}