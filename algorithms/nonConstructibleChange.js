const nonConstructibleChange = (coins) => {
    // special cases, for empty array and single-item array
    if (coins.length === 0) return 1;
    if (coins.length === 1) return coins[0] + 1;

    // sorting the array
    coins.sort((a, b) => a - b);
    // first minimum change would be the first position (minor value)
    let minChange = coins[0];

    // iterate through the array
    for (const coin of coins) {

        // if this coin is bigger than the saved minimum change, we can end here
        if (coin > minChange) return minChange;
        // else, sum this coin
        minChange += coin;
    }

    return minChange;
}

export default nonConstructibleChange;