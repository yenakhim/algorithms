function collectOddValues(arr){
    let result = [];

    function helper(helperInput){
        if (helperInput.length === 0) {
            return;
        }
        if (helperInput[0] % 2 !== 0){
            result.push(helperInput[0]);
        }
        helper(helperInput.slice(1)); // 인덱스1부터 끝까지로 arr를 slice한다.
    }

    helper(arr);
    return result;
}