/**
 * Created by jbush_000 on 12/8/2015.
 */
window.onload = function () {
    var values = document.getElementById('values').innerHTML.split(/\r\n|\r|\n/g);
    var part1Total = 0;
    var part2Total = 0;
    values.forEach(function (c) {
        var CharsInData = 0;
        var CharsToAdd = 0;
        var IgnoreNext = 0;
        c.split("").forEach(function (letter, i) {
            if(IgnoreNext == 0){
                if(letter == '\\'){
                    if(c[i + 1] == '\\'){
                        CharsInData += 1;
                        CharsToAdd += 2;
                        IgnoreNext = 1;
                    }
                    if(c[i + 1] == '\"'){
                        CharsInData += 1;
                        CharsToAdd += 2;
                        IgnoreNext = 1;
                    }
                    if(c[i + 1] == 'x'){
                        CharsInData += 3;
                        CharsToAdd += 1;
                        IgnoreNext = 3;
                    }
                }
            } else{
                IgnoreNext--;
            }
        });
        part1Total += c.length - (c.length - CharsInData - 2);
        part2Total += CharsToAdd + 4;
        }
    );
    console.log(part1Total);
    console.log(part2Total);
};