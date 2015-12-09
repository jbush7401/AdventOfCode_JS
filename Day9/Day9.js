/**
 * Created by jbush_000 on 12/9/2015.
 */

var routes = [];
var routesPossible = [];

window.onload = function () {
    var cities = [];

    var values = document.getElementById('values').innerHTML.split(/\r\n|\r|\n/g);
    values.forEach(function (direction) {
        var nodes = direction.trim().split(" ");
        if (cities.indexOf(nodes[0]) == -1) {
            cities.push(nodes[0])
        }
        if (cities.indexOf(nodes[2]) == -1) {
            cities.push(nodes[2])
        }
        routes.push({cityA: nodes[0], cityB: nodes[2], distance: nodes[4]});
        routes.push({cityA: nodes[2], cityB: nodes[0], distance: nodes[4]});
    });
    routesPossible = permute(cities);
    getDistances();
    var shortestRoute = 0;
    var longestRoute = 0;
    routesPossible.forEach(function (c) {
        if (shortestRoute == 0 || c.distance < shortestRoute) {
            shortestRoute = c.distance;
        }
        if (longestRoute == 0 || c.distance > longestRoute) {
            longestRoute = c.distance;
        }
    });
    console.log(shortestRoute);
    console.log(longestRoute);
};

var usedRoutes = [];

function getDistances(){
    var distance = 0;
    routesPossible.forEach(function (c) {
        distance = 0;
        for(count = 0; count < c.length - 1; count++) {
            var routeNeeded = routes.filter(function (route) {
                return route.cityA == c[count] && route.cityB == c[count+1]
            })[0];
            distance += parseInt(routeNeeded.distance);
        }
        c.distance = distance;
    });
}

function permute(input) {
    var i, ch;
    for (i = 0; i < input.length; i++) {
        ch = input.splice(i, 1)[0];
        usedRoutes.push(ch);
        if (input.length == 0) {
            routesPossible.push(usedRoutes.slice());
        }
        permute(input);
        input.splice(i, 0, ch);
        usedRoutes.pop();
    }
    return routesPossible
}
