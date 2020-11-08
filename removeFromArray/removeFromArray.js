const removeFromArray = function() {
    
    let loopLen = arguments.length - 1;
    let result = arguments[0];
    let searchVal;

    for (let i = loopLen;i >=1;i--) {
        searchVal= arguments[i];
        for(let j = 0; j <= result.length;j++){
            if (result[j] === searchVal) {                
                result.splice(j, 1);
                j--;                
            };
        };
    };

    console.log(result)
    return result;
    
}

module.exports = removeFromArray


console.log(removeFromArray([1, 2, 3, 4], 3))