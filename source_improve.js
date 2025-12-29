function complexCalculation(input) {
  // 入力検証
  if (typeof input !== 'object' || input === null) {
    return "Error: Invalid input";
  }

  // 数値演算
  let total = 0;
  for (let key in input) {
    if (typeof input[key] !== 'number') {
      return "Error: Non-numeric value found";
    }
    total += input[key];
  }

  // 平均値の計算
  let average = total / Object.keys(input).length;

  // 最大値と最小値の探索
  let max = Math.max(...Object.values(input));
  let min = Math.min(...Object.values(input));

  // 結果の整形（関数名を追加）
  let result = {
    functionName: complexCalculation.name,
    sum: total,
    average: average,
    max: max,
    min: min
  };

  return JSON.stringify(result);
}

// 使用例
let input = {a: 10, b: 20, c: 30};
console.log(complexCalculation(input));