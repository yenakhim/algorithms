// sorted array일 필요는 없다.
function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i]; // 일단 인덱스 0 부터 num만큼 더한 값을 maxSum으로 설정한다.
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        // 인덱스 1부터 num까지 더한 값은 인덱스 0을 빼고 인덱스 num만 더해주면 된다.
        // 그 과정을 반복하려면 i에서 num을 뺀 인덱스 값을 빼고 i 인덱스 값을 더해준다.
        // 반복을 통해 생성된 tempSum을 maxSum과 비교해 더 큰 값을 maxSum으로 설정한다.
        maxSum = Math.max(tempSum, maxSum);
    }
    return maxSum;
}

maxSubarraySum([2,6,9,2,1,8,5,6,3], 3);