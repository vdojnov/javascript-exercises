const sumAll = function(start, end) {
     let current = start;
     let ending = end;
     let result = 0;
     if (start > end) {
         current = end;
         ending = start
     }

    if (typeof start != "number" || typeof end != "number"  || start < 0) {
        return "ERROR"
    }

    while(current <=ending) {
        result += current;
        current++;
    }

    return result
}

module.exports = sumAll
