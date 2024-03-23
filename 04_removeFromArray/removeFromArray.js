const removeFromArray = function(providedArray, ...valuesToBeRemoved) {
    let modifiedArray = providedArray.filter(function(item){
        return !valuesToBeRemoved.includes(item)
    })
    return modifiedArray;
}

// Do not edit below this line
module.exports = removeFromArray;
