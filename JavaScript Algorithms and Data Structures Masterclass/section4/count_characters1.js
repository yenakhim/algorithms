function charCount1(string) {
    // 결과값은 각 문자가 몇 번 나왔는지 담고 있는 오브젝트여야 한다.
    let result = {};
    // string이 모두 lowercase인 알파벳 또는 숫자라고 가정한다.
    // uppercase와 스페이스, 특수문자 등은 제외한다.
    for (let char of string) {
        // string의 각 문자를 루프로 돌면서, 이미 오브젝트에 있는 문자이면 이미 있는 값에 1을 더하고, 그렇지 않으면 문자를 추가하고 1을 카운팅한다.
        // result[char]가 0보다 크다는 건 해당 key에 값이 있다는 의미이다.
        if (result[char] > 0) {
            result[char]++;
        } else {
            result[char] = 1;
        }
    }
    return result;
}