const repeatString = function(provivdedWord, num) {
    let word = '';
    if (num < 0){
        return 'ERROR'
    }
    for (let i = 0; i<num; i++){
        word += provivdedWord;
    }
    return word;
};

// Do not edit below this line
module.exports = repeatString;
