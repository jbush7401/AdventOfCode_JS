/**
 * Created by jbush_000 on 12/5/2015.
 */
window.onload = function () {
    var values = document.getElementById('values').innerHTML.split(/\r\n|\r|\n/g);
    var CountPartOne = 0;
    var CountPartTwo = 0;
    var patternCheck = ["ab", "cd", "pq", "xy"];
    values.forEach(function (c) {
        CountPartOne += checkWordPartOne(c);
        CountPartTwo += checkWordPartTwo(c);
    });
    console.log(CountPartOne);
    console.log(CountPartTwo);

    function checkWordPartOne(c){
        var vowelCount = 0;
        var repeatedLetter;
        var letterCheck = false;
        if(containsAny(c, patternCheck)){
            return 0;
        }
        c.split("").forEach(function (x) {
            if (['a', 'e', 'i', 'o', 'u'].indexOf(x.toLowerCase()) !== -1) {
                vowelCount++;
            }
            if (x == repeatedLetter) {
                letterCheck = true;
            }
            repeatedLetter = x;
        });
        if(vowelCount >= 3 && letterCheck){
            return 1
        }
        return 0;
    }

    function checkWordPartTwo(c) {
        var patternFound =  false;
        var otherLetterFound = false;
        c.split("").forEach(function (x, i) {
            if(c[i+2] == x){
                otherLetterFound = true;
            }
            var patternCheck = x + c[i+1];
            var stringToCheck = c.substring(i + 2, c.length);
            if(containsAny(stringToCheck, [patternCheck])){
                patternFound = true;
            }
        });
        if(patternFound && otherLetterFound){
            return 1;
        }
        return 0;
    }

    function containsAny(str, substrings) {
        for (var i = 0; i != substrings.length; i++) {
            var substring = substrings[i];
            if (str.indexOf(substring) != - 1) {
                return substring;
            }
        }
        return null;
    }
};