function complexCalculation(input) {
    // 入力検証
    if (typeof input !== 'object' || input === null) {
        return "Error: Invalid input";
    }

    // 数値演算
    let 合計 = 0;
    for (let key in input) {
        if (typeof input[key] !== 'number') {
            return "Error: Non-numeric value found";
        }
        合計 += input[key];
    }

    // 平均値の計算
    let avarage = 合計 / Object.keys(input).length;

    // 最大値と最小値の探索
    let max = Math.max(...Object.values(input));
    let min = Math.min(...Object.values(input));

    // 結果の整形
    let result = {
        sum: 合計,
        avarage: avarage,
        max: max,
        min: min
    };

    return JSON.stringify(result);
}

// 使用例
let input = {a: 10, b: 20, c: 30};
console.log(complexCalculation(input));