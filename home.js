"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var api = "https://character-database.becode.xyz/";
axios_1["default"]
    .get(api + "characters")
    .then(function (response) {
    // handle success
    var result = response.data;
    // console.log(response);
    console.log(result);
    for (var i = 0; i < result.length; i++) {
        var name_1 = result[i].name;
        var shortDescription = result[i].shortDescription;
        var image = result[i].image;
        console.log(name_1);
        console.log(shortDescription);
        var div = document.createElement("div");
        var content = document.createTextNode("Bonjour, je suis " + name_1 + " et je me d\u00E9cris comme \u00E9tant " + shortDescription);
        div.appendChild(content);
        var currentDiv = document.getElementById("div1");
        document.body.insertBefore(div, currentDiv);
    }
})["catch"](function (error) {
    // handle error
    console.log(error);
});
