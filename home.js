"use strict";
exports.__esModule = true;
// import axios from 'axios';
var axios_1 = require("axios");
axios_1["default"].get('https://character-database.becode.xyz/characters')
    .then(function (response) {
    // handle success
    var result = response.data;
    var tpl = document.querySelector("#tpl-hero");
    var target = document.querySelector("#target");
    var displayHero = function (el) {
        var elt = tpl.content.cloneNode(true);
        elt.querySelector(".name").innerHTML = el.name;
        elt.querySelector(".shortDescription").innerHTML = el.shortDescription;
        elt.querySelector(".img").innerHTML = el.img;
        // elt.querySelector(".powers").innerHTML = el.abilities.join(", ");
        target.appendChild(elt);
    };
    result.forEach(displayHero);
})["catch"](function (error) {
    // handle error
    console.log(error);
});
