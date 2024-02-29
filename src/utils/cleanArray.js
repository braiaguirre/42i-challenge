const cleanArray = (input) => {
    const inputNumbers = input.match(/\d+/g);
    return inputNumbers ? inputNumbers.map(Number) : [];
}

export default cleanArray;