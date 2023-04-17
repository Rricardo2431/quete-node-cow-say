const userInfo = require("./information.js");
console.log(userInfo);

const cowsay = require("cowsay");

console.log(cowsay.say({
    text : `je m'appelle ${info.name} et j'étudie à ${info.campus}`,
    e : "oO",
    T : "U "
}));