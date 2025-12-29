function processData(data) {
    if (!data) {
        throw new Error('data is required');
    }
    if (typeof data.value !== 'string') {
        throw new Error('data.value must be a string');
    }
    return data.value.toUpperCase();
}

console.log("Test 1: 正常なデータ");
try {
    const result1 = processData({ value: "hello" });
    console.log("Result:", result1); // Expected: "HELLO"
} catch (e) {
    console.log("Error:", e.message);
}

console.log("Test 2: dataがnull");
try {
    const result2 = processData(null);
    console.log("Result:", result2);
} catch (e) {
    console.log("Error:", e.message); // Expected: Error
}

console.log("Test 3: data.valueがnull");
try {
    const result3 = processData({ value: null });
    console.log("Result:", result3);
} catch (e) {
    console.log("Error:", e.message); // Expected: Error
}