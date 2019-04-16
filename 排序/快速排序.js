function quickSort(arr) {
    if(arr.length <= 1)
        return arr;
    let flag = arr[0]; // 基准
    let left = [], right = [];
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] <= flag) 
            left.push(arr[i]);
        else
            right.push(arr[i]);
    }
    return [...quickSort(left), flag, ...quickSort(right)];
}