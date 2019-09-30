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
    console.log(result[1].description);
    for (var i = 0; i < result.length; i++) {
        console.log("Je suis " + result[i].name + ", je me d\u00E9cris comme \u00E9tant " + result[i].shortDescription);
    }
})["catch"](function (error) {
    // handle error
    console.log(error);
});
