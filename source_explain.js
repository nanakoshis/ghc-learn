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
  