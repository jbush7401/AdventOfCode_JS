/**
 * Created by jbush_000 on 12/2/2015.
 */
window.onload = function () {
    var values = document.getElementById('values').innerHTML;

    var totalFeet = 0;
    var ribbonNeeded = 0;
    var a = values.split(/\r\n|\r|\n/g);
    a.forEach(function (c) {
        var x = c.split("x");

        var length = parseInt(x[0]);
        var width = parseInt(x[1]);
        var height = parseInt(x[2]);
        //var smallest = parseInt(arrayMin([length*width, width*height, height*length]));

        x = x.sort(sortNumber);
        var smallest = parseInt(x[0]);

        totalFeet += 2 * length * width + 2 * width * height + 2 * height * length + smallest;
        ribbonNeeded += parseInt(x[0]) * 2 + parseInt(x[1]) * 2 + (length * width * height);
    });
    console.log(totalFeet);
    console.log(ribbonNeeded);
};

function sortNumber(a,b) {
    return a - b;
}