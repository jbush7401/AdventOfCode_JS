/**
 * Created by jbush_000 on 12/6/2015.
 */
window.onload = function () {
    var lights = [];
    for(x = 0; x <= 999; x++){
        for(y = 0; y <= 999; y++){
            lights.push({x: x, y: y, lit: false, brightness: 0})
        }
    }

    var values = document.getElementById('values').innerHTML.split(/\r\n|\r|\n/g);

    values.forEach(function (c) {
        var info = c.split(" ");
        if(info[0] == "toggle"){
            processInfo(info[1].substring(0, info[1].indexOf(',')), info[1].substring(info[1].indexOf(',')+1, info[1].length), info[3].substring(0, info[3].indexOf(',')), info[3].substring(info[3].indexOf(',')+1, info[3].length), 'toggle')
        } else if(info[0] == "turn"){
            if(info[1] == "on"){
                processInfo(info[2].substring(0, info[2].indexOf(',')), info[2].substring(info[2].indexOf(',')+1, info[2].length), info[4].substring(0, info[4].indexOf(',')), info[4].substring(info[4].indexOf(',')+1, info[4].length), 'on')
            } else {
                processInfo(info[2].substring(0, info[2].indexOf(',')), info[2].substring(info[2].indexOf(',')+1, info[2].length), info[4].substring(0, info[4].indexOf(',')), info[4].substring(info[4].indexOf(',')+1, info[4].length), 'off')
            }
        }
    });

    console.log(lights.filter(function (a) {
        return (a.lit == true)
    }).length);

    var total = 0;
    lights.forEach(function (c) {
        total += c.brightness;
    });
    console.log(total);

    function processInfo(xStart, yStart, xEnd, yEnd, instruction){
        var lightsToChange = lights.filter(function (a) {
            return(a.x >= xStart && a.x <= xEnd && a.y >= yStart && a.y <= yEnd)
        });
        lightsToChange.forEach(function(light){
            if(instruction == "toggle"){
                light.lit = !light.lit;
                light.brightness += 2;}
            if(instruction == "on"){
                light.lit = true;
                light.brightness++;
            }
            if(instruction == "off"){
                light.lit = false;
                if(light.brightness > 0){
                    light.brightness--;
                }

            }
        })
    }
};