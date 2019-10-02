"use strict";
exports.__esModule = true;
var url_string = window.location.href; //Page actuel
var url = new URL(url_string);
var id = url.searchParams.get("id");
console.log(id);
//axios -> info -> HTML
var axios_1 = require("axios");
var api = "https://character-database.becode.xyz";
axios_1["default"].get(api + "/characters/" + id).then(function (response) {
    var info = response.data;
    document.querySelector(".Name").innerHTML = "Mon nom est " + info.name;
    document.querySelector(".shortDescription").innerHTML =
        info.shortDescription;
    document.querySelector(".Description").innerHTML = info.description;
    (document.querySelector(".Image")).src = "data:image/png;base64," + info.image;
});
