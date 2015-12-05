/**
 * Created by jbush_000 on 12/4/2015.
 */
window.onload = function GetTheHash() {
    var secret = "yzbqklnj", i = 1, fiveZeroesFound = 0, sixZeroesFound = 0;

    while (fiveZeroesFound == 0 || sixZeroesFound == 0) {
        i++;
        var check = CryptoJS.MD5(secret + i).toString();
        if (check.substring(0, 5) == "00000" && fiveZeroesFound == 0) {
            fiveZeroesFound = i;
        }
        if (check.substring(0, 6) == "000000") {
            sixZeroesFound = i;
        }
    }
    console.log(fiveZeroesFound + " " + sixZeroesFound);
};
