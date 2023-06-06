"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greet_1 = require("./greet");
function displayHello(divId, name) {
    var elt = document.getElementById(divId);
    if (elt) {
        elt.innerText = (0, greet_1.sayHello)(name);
    }
    else {
        throw new Error("Cannot find an element with the specified id ".concat(divId));
    }
}
displayHello('greet', 'TypeScript');
