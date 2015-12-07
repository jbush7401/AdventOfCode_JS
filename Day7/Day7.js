/**
 * Created by jbush_000 on 12/7/2015.
 */
var directions = [];

window.onload = function () {
    var values = document.getElementById('values').innerHTML.split(/\r\n|\r|\n/g);
    values.forEach(function (c) {
            var rightLeft = c.split("-&gt;");
            directions.push({left: rightLeft[0].trim(), right: rightLeft[1].trim(), value:undefined})
        }
    );

    //Part 1
    var part1 = compileDirections("a");
    console.log("Part1: " + part1);

    //Part 2
    directions.forEach(function(x){
        if(x.right == "b"){
            x.left = part1.toString();
        } else{
            x.value = undefined;}
    });

    var part2 = compileDirections("a");
    console.log(part2);
};

function compileDirections(input){
    if(!isNaN(input))
    {
        return input;
    }
    var direction = directions.filter(function (a) {
        return a.right == input;
    })[0];

    console.log("Figuring out " + direction.left);
    var left = direction.left.split(" ");

    if (left.length == 1){
        if(!isNaN(left[0])){
            direction.value = left[0];
            return left[0];
        }
        else{
            return compileDirections(left[0]);
        }
    }



    if(left.length == 2){
        if(direction.value)
        {
            return direction.value;
        }
        else{
            direction.value = 65535 - compileDirections(left[1], direction);
            return direction.value;
        }
    }

    if(left.length == 3){
        if(left[1] == "AND"){
            if(direction.value)
            {
                return direction.value;
            }
            else{
                direction.value = compileDirections(left[0]) & compileDirections(left[2], direction);
                return direction.value}
        }
        if(left[1] == "OR"){
            if(direction.value)
            {
                return direction.value;
            }
            else{
                direction.value = compileDirections(left[0]) | compileDirections(left[2], direction);
                return direction.value}
        }
        if(left[1] == "LSHIFT"){
            if(direction.value)
            {
                return direction.value;
            }
            else{
                direction.value = compileDirections(left[0]) << compileDirections(left[2], direction);
                return direction.value}
        }
        if(left[1] == "RSHIFT"){
            if(direction.value)
            {
                return direction.value;
            }
            else{
                direction.value = compileDirections(left[0]) >> compileDirections(left[2], direction);
                return direction.value}
        }
    }
}