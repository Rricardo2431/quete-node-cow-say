const userInfo = require("./information.js");
console.log(userInfo);

const cowsay = require("cowsay");

console.log(cowsay.say({
    text : `je m'appelle ${userInfo.name} et j'étudie à ${userInfo.campus}`,
    e : "oO",
    T : "U "
}));