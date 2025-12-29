function processData(data) {
    return data.value.toUpperCase();
}

console.log("Test 1: 正常なデータ");
const result1 = processData({ value: "hello" });
console.log("Result:", result1); // Expected: "HELLO"

console.log("Test 2: dataがnull");
const result2 = processData(null);
console.log("Result:", result2); // Expected: Error

console.log("Test 3: data.valueがnull");
const result3 = processData({ value: null });
console.log("Result:", result3); // Expected: Error