const twoNumberSum = (nums, target) => {
    // define set to store already seen numbers
    const numSet = new Set();
    
    // iterate through the array
    for (let num of nums) {

        // define complement, which would be the target sum minus the actual number
        const complement = target - num;

        // we can now check if the set defined before has that complement we are looking for, if yes, just return the complement and the actual number
        if (numSet.has(complement)) return [complement, num];

        // if not, add the actual number to the set
        numSet.add(num);
    }
    
    // return empty array if no pair was found
    return []; 
}

module.exports = twoNumberSum;