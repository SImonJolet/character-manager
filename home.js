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
    var template = document.querySelector("#tpl-hero");
    var target = document.querySelector("#target");
    result.forEach(function (element) {
        var displayHero = function (element) {
            var elt = template.cloneNode(true).content;
        };
    });
})["catch"](function (error) {
    // handle error
    console.log(error);
});
