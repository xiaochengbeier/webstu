import * as map from "./map.js";

let game = document.getElementsByClassName("game")[0];
//设置游戏面板宽高
game.style.height = map.row * 45 + "px";
game.style.width = map.col * 45 + "px";
//rander
export function rander() {
    game.innerHTML = "";
    //遍历数组行
    for (let i = 0; i < map.row; i++) {
        //遍历数组列
        for (let c = 0; c < map.col; c++) {
            //获得当前值
            let value = map.content[i][c];
            let item = document.createElement("div");
            item.className = "item";
            item.style.left = (c * 45) + "px";
            item.style.top = (i * 45) + "px";
            //如果当前值是 
            if (value === map.PLAYER) {
                //表示是玩家
                item.className += " player";
            } else if (value === map.WALL) {
                //表示墙
                item.className += " wall"
            } else if (value === map.BOX) { //表示盒子
                isCorrectPosition(i, c) ? item.className += "  current-box" : item.className += " box";
            } else if (value == map.SPACE) {
                if (isCorrectPosition(i, c)) { //正确位置的空白
                    item.className += " correct"
                } else {
                    continue; //不是正确位置的空白
                }
            }
            //将元素追加到 game中
            game.appendChild(item);
        }
    }
}

function isCorrectPosition(row, col) {
    return map.correct.find(data => data.row === row && data.col === col) != null;
}