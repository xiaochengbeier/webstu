let Puker = require("./puke.js");
let box = require("./box.js").box;

//创建54张牌
for (let i = 1; i <= 13; i++) {
    for (let color = 1; color <= 4; color++) {
        box.push(new Puker(i, color));
    }
}
//创建王
box.push(new Puker(14, null), new Puker(15, null));

let shuff = require("./shuffle.js");
shuff(box);

for (const iterator of box) {
    console.log(iterator.toString());
}