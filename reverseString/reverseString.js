const reverseString = function(str) {
    let input = str;
    let strLen = input.length;
    let result = "";

    for (let i = strLen-1; i>=0; i--) {
        result += input[i];
    };
    return result;
}

module.exports = reverseString
