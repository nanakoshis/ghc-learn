function sumArray(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]; // ここで文字列の加算を試みるためエラーが発生
    }

    return sum;
}

console.log(sumArray());