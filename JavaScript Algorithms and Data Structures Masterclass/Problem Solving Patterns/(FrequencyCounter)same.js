function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
        // frequencyCounter1에 val이 있으면 그 값에 1을 더하고 없으면 0에 1을 더한다.
    }

    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) { // 올바르게 대응되는 key를 갖고 있는지 확인
            return false;
        }
        if (frequencyCounter1[key] !== frequencyCounter2[key ** 2]) {
            // key의 값이 동일한지 확인
            return false;
        }
    }
    return true;
}

same([1,2,3,2], [9,1,4,4]);