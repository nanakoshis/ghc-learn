/**
 * 数値配列の中央値を計算する関数。
 * @param {number[]} numbers - 中央値を計算する数値の配列。
 * @returns {number|null} 中央値。配列が空または配列でない場合はnullを返す。
 */
const calculateMedian = (numbers) => {
    if (!Array.isArray(numbers) || numbers.length === 0) {
      return null;
    }
  
    numbers.sort((a, b) => a - b);
  
    const middle = Math.floor(numbers.length / 2);
    if (numbers.length % 2 === 1) {
      return numbers[middle];
    }
  
    return (numbers[middle - 1] + numbers[middle]) / 2;
  };
  