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
    var template;
    result.forEach(function (element) {
        template += "<div id=\"simon\">" + element.name + "</div>";
        document.
        ;
    });
})["catch"](function (error) {
    // handle error
    console.log(error);
});
