function isEven(number) {
  // 数値が整数かどうかをチェック
  if (typeof number !== 'number' || !Number.isInteger(number)) {
    throw new Error('Input must be an integer');
  }

  return number % 2 === 0;
}
