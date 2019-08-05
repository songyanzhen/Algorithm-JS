/**
 * 
 * 快速排序的基本思想：通过一趟排序将待排记录分隔成独立的两部分，
 * 其中一部分记录的关键字均比另一部分的关键字小，
 * 则可分别对这两部分记录继续进行排序，以达到整个序列有序。
 */
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