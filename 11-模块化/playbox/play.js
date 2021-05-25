import * as map from "./map.js";
import { rander } from "./rander.js";

export function play(direction) {
    let playPositon = findPlayerPosition();
    let next = findNext(playPositon.prow, playPositon.pcol, direction);
    if (next.nextValue == map.WALL) { //如果下一个是墙
        return;
    } else if (next.nextValue == map.SPACE) { //如果下一个是空白你空间
        //交换位置
        changePosition(playPositon.prow, playPositon.pcol, next.nextRow, next.nexCol);
    } else if (next.nextValue == map.BOX) { //如果下一个是箱子
        //判断箱子后边一个是啥如果是空白才会移动
        let next2 = findNext(next.nextRow, next.nexCol, direction);
        if (next2.nextValue == map.SPACE) {
            changePosition(next.nextRow, next.nexCol, next2.nextRow, next2.nexCol);
            changePosition(playPositon.prow, playPositon.pcol, next.nextRow, next.nexCol);
        }
    }
}
//交换位置
function changePosition(row1, col1, row2, col2) {
    let temp = map.content[row1][col1];
    map.content[row1][col1] = map.content[row2][col2];
    map.content[row2][col2] = temp;

}
//找到玩家的位置
function findPlayerPosition() {
    for (let i = 0; i < map.row; i++) {
        //遍历数组列
        for (let c = 0; c < map.col; c++) {
            let value = map.content[i][c];
            if (value == map.PLAYER) {
                return { prow: i, pcol: c };
            }
        }
    }

    throw Error("没找到玩家");
}

// 找到下一个位置
function findNext(row, col, direction) {
    if (direction === "left") {
        return { nextValue: map.content[row][col - 1], nextRow: row, nexCol: col - 1 };
    } else if (direction === "right") {
        return { nextValue: map.content[row][col + 1], nextRow: row, nexCol: col + 1 };
    } else if (direction == "top") {
        return { nextValue: map.content[row - 1][col], nextRow: row - 1, nexCol: col };
    } else if (direction == "down") {
        return { nextValue: map.content[row + 1][col], nextRow: row + 1, nexCol: col };
    }
}