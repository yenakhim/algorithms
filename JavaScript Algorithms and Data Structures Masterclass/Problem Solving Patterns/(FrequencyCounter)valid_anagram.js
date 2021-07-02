function validAnagram(first, second) {
    if (first.length !== second.length) {
        return false;
    }

    const lookup = {};

    for (let i = 0; i < first.length; i++) {
        let letter = first[i];
        // 만약 letter가 존재하면 왼쪽이 실행되고 그렇지 않으면 오른쪽이 실행된다.
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    for (let i = 0; i < second.length; i++) {
        let letter = second[i];
        if (!lookup[letter]) { //letter을 찾지 못하거나 letter가 0이면 애너그램이 아니다.
            return false;
        } else {
            lookup[letter] -= 1; //일치하는 letter을 찾을때마다 값을 1씩 줄인다.
        }
    }
    return true;
}