const quickSort = (arr, l, r) => {
    let len = arr.length,
        partitionIndex,
        left = typeof l === 'number' ? l : 0,
        right = typeof r === 'number' ? r : len-1;
    if (left < right) {
        partitionIndex = partition(arr, left, right);
        quickSort(arr, left, partitionIndex);
        quickSort(arr, partitionIndex+1, right);
    }
    return arr;
}
// 分区操作
const partition = (arr, left, right) => {
    let pivot = left,
        index = pivot + 1;
    for (let i = index; i <= right; i++) {
        if (arr[i] < arr[pivot]) {
            swap(arr, i, index);
            index++;
        }
    }
    swap(arr, pivot, index-1);
    return index-1;
}
// 交换数据
const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}


export default quickSort;