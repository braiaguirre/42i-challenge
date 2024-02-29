const nonConstructibleChange = (coins) => {
    if (coins.length === 0) return 1;
    if (coins.length === 1) return coins[0] + 1;

    coins.sort((a, b) => a - b);
    let minChange = coins[0];

    for (const coin of coins) {
        if (coin > minChange) return minChange;
        minChange += coin;
    }

    return minChange;
}

export default nonConstructibleChange;