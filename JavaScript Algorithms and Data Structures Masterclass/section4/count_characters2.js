function charCount2(str) {
    let obj = {};
    for (let char of str) {
        char = char.toLowerCase();
        // char이 소문자 알파벳이나 숫자인지 확인하고 참이면 컬리 브레이시스 안을 실행한다.
        if (/[a-z0-9]/.test(char)) {
            // 좌변이 참(0보다 큰 숫자)이면 우변의 왼쪽을 실행하고, 거짓이면 우변의 오른쪽을 실행한다.
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}