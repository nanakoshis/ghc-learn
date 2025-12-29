function validateInput(input) {
  if (typeof input !== 'object' || input === null) {
    throw new Error("Invalid input");
  }
}

function calculateSum(input) {
  let total = 0;
  for (let key in input) {
    if (typeof input[key] !== 'number') {
      throw new Error("Non-numeric value found");
    }
    total += input[key];
  }
  return total;
}

function calculateStatistics(input) {
  const total = calculateSum(input);
  const average = total / Object.keys(input).length;
  const max = Math.max(...Object.values(input));
  const min = Math.min(...Object.values(input));

  return { sum: total, average, max, min };
}

function complexCalculation(input) {
  validateInput(input);
  const stats = calculateStatistics(input);
  
  return JSON.stringify({
    functionName: complexCalculation.name,
    ...stats
  });
}

// 使用例
let input = {a: 10, b: 20, c: 30};
console.log(complexCalculation(input));