"use strict";
exports.__esModule = true;
// import axios from 'axios';
var axios_1 = require("axios");
axios_1["default"].get('https://character-database.becode.xyz/characters')
    .then(function (response) {
    // handle success
    var result = response.data;
    // console.log(response);
    console.log(result);
})["catch"](function (error) {
    // handle error
    console.log(error);
});
