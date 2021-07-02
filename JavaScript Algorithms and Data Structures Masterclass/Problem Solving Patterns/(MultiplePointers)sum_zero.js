// multiple pointers를 사용하려면 array가 sorted되어 있어야 한다.
function sumZero(arr){
    let left = 0;
    let right = arr.length - 1;
    while (left < right) { // left와 right가 같으면 자기 자신에서 자기 자신을 빼는 것이 되므로, 값이 0 된다. 우리가 찾는 값은 그게 아니니까 left와 right는 같으면 안된다.
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}

sumZero([-4,-3,-2,-1,0,1,2,3,10]);