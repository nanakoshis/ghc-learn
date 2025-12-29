function sumArray(arr = []) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        const n = Number(arr[i]);
        if (Number.isNaN(n)) continue;
        sum += n;
    }

    return sum;
}

console.log(sumArray());           // 0
console.log(sumArray([1, '2', 3]));// 6