"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var api = "https://character-database.becode.xyz";
axios_1["default"]
    .get(api + "/characters")
    .then(function (response) {
    // handle success
    var result = response.data;
    console.log(result);
    var tpl = document.querySelector("#tpl-hero");
    var target = document.querySelector("#target");
    var displayHero = function (el) {
        var elt = tpl.cloneNode(true).content;
        console.log(el.id);
        elt.querySelector(".name").innerHTML = el.name;
        elt.querySelector(".shortDescription").innerHTML = el.shortDescription;
        elt.querySelector("img").src = "data:image/png;base64," + el.image;
        elt.querySelector(".btnOpen").innerHTML = "\n      <a href=\"./characters.html?id=" + el.id + "\" target=\"_blank\"><button type=\"button\" class=\"Open\" id=\"btn\">Open</button></a>\n     ";
        elt.querySelector(".btnDelete").innerHTML = "\n      <button type=\"button\" value=" + el.id + " class=\"btnDeleteFunct\" id=\"btn\">Delete</button>";
        elt.querySelector(".btnEdit").innerHTML = "<a href=\"./edit.html?id=" + el.id + "\"><button class=\"Edit\" id=\"btn\">Edit</button></a>";
        target.appendChild(elt);
    };
    result.forEach(displayHero);
    var bts = document.querySelectorAll(".btnDeleteFunct");
    console.log(bts);
    bts.forEach(function (el) {
        el.addEventListener("click", function () {
            var id = el.value;
            console.log(id);
            if (confirm("Are you sure ?? I mean, for real ?"))
                axios_1["default"]["delete"](api + "/characters/" + id).then(function (response) {
                    document.location.reload(true);
                });
        });
    });
})["catch"](function (error) {
    // handle error
    console.log(error);
});
