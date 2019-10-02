"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var api = "https://character-database.becode.xyz";
document.getElementById("submitCreate").onclick = function (test) {
    test.preventDefault();
    var name = document.getElementById("nameForm").value;
    var shortDescription = document.getElementById("shortDescirptionCreate")
        .value;
    var description = document.getElementById("descriptionForm").value;
    var img = document.getElementById("file").files;
    console.log(img);
    axios_1["default"]
        .post(api + "/characters", {
        name: name,
        shortDescription: shortDescription,
        description: description
    })
        .then(function (response) {
        console.log(response);
    })["catch"](function (error) {
        console.log(error);
    });
};
