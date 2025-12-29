
function isEven(number) {
    // 数値が整数かどうかをチェック
    if (typeof number !== 'number' || !Number.isInteger(number)) {
        throw new Error('Input must be an integer');
    }

    // 0からその数までの全ての整数の配列を生成
    const numbersArray = [];
    for (let i = 0; i <= Math.abs(number); i++) {
        numbersArray.push(i);
    }

    // 生成した配列を利用して偶数か奇数かを判定
    let isEven = true;
    numbersArray.forEach((num, index) => {
        if (index % 2 !== 0) {
            isEven = !isEven;
        }
    });

    // 元の数値が負の場合、結果を反転
    if (number < 0) {
        isEven = !isEven;
    }

    return isEven;
}