function selectionSort(arr){
    for (let i = 0; i < arr.length; i++){
        let min = i;
        for (let j = i + 1; j < arr.length; j++){
            if (arr[min] > arr[j]){
                min = j;
            }
        }
        if (i !== min) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}

selectionSort([56, 83, 4, 9, 15]);
//[4, 83, 56, 9, 15]
//[4, 9, 56, 83, 15]