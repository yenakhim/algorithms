function charCount3(str) {
    let obj = {};
    for (let char of str) {
        if (isAlphaNumeric(char)) {
            char = char.toLowerCase();
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}

function isAlphaNumeric(char) {
    let code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) && // numeric
        !(code > 64 && code < 91) && // upper alphabet
        !(code > 96 && code < 123)) { // lower alphabet
        return false;
    }
    return true;
}