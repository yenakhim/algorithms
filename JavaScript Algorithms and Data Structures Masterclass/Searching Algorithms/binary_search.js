function binarySearch(arr, val){ // binary search는 sorted array에서는 사용 가능
    let left = 0;
    let right = arr.length - 1;
    let middle = Math.floor((left + right) / 2);
    while (arr[middle] !== val && left <= right) { // 중간 값이 아직 우리가 찾는 값이 아니어야 비교하고, left는 right는 넘어가면 안된다.
        if (arr[middle] > val) right = middle - 1;
        else left = middle + 1;
        middle = Math.floor((left + right) / 2);
    }
    return arr[middle] === val ? middle : -1;
    // arr[middle] === val이 참이면 middle, 거짓이면 -1을 return한다.
}