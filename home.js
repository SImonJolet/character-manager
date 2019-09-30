"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var api = "https://character-database.becode.xyz";
axios_1["default"]
    .get(api + "/characters")
    .then(function (response) {
    // handle success
    var result = response.data;
    // console.log(response);
    console.log(result);
    for (var i = 0; i < result.length; i++) {
        //boucle dans laquelle, pour chaque item de mon tableau result, je vais aller chercher des données
        var name_1 = result[i].name;
        var shortDescription = result[i].shortDescription;
        var image = result[i].image;
        //Je definis mes constantes pour chaque item
        console.log(name_1);
        console.log(shortDescription);
        var div = document.createElement("div");
        //Create a container div
        var containerh1 = document.createElement("h1");
        //Create a H1 container
        var contentName = document.createTextNode("Name: " + name_1 + " ");
        containerh1.appendChild(contentName);
        //Put the contentName in the h1 container
        div.appendChild(containerh1);
        //Connect the h1 container to the div container
        var containerh2 = document.createElement("h2");
        //Create a h2 container
        var contentDescription = document.createTextNode("What am I ? : " + shortDescription);
        containerh2.appendChild(contentDescription);
        //Put the contentDescription in the h2 container
        div.appendChild(containerh2);
        //Connect the h2 container with the div container
        var currentDiv = document.getElementById("div1");
        // ???
        document.body.insertBefore(div, currentDiv);
        // Indicate where insert the new container inthe DOM
    }
})["catch"](function (error) {
    // handle error
    console.log(error);
});
