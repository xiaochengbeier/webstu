import { rander } from "./rander.js";
import { play } from "./play.js";
import * as map from "./map.js";
rander();
document.addEventListener("keydown", e => {
    let directio = e.keyCode;
    switch (directio) {
        case 37:
            play("left");
            break;
        case 38:
            play("top");
            break;
        case 39:
            play("right");
            break;
        case 40:
            play("down");
            break;
    }
    rander();
    if (isOver()) {
        rander();
        alert("恭喜你哦...");
    };
}, false);

//判断游戏是否结束
function isOver() {
    let isOver = true;
    map.correct.forEach(ele => {
        let row = ele.row;
        let col = ele.col;
        if (map.content[row][col] != map.BOX) {
            console.log(ele);
            isOver = false;
        }
    });
    return isOver;
}