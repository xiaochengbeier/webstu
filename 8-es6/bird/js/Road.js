let road = document.getElementsByClassName("road")[0];
let roadWith = plateWith * 2;
let roadTop = plateHeight - 116;
class Road extends Common {
    constructor(roadWith, roadHeight, speed, top, road) {
            // constructor(width, height, left, top, speedX, speedY, dom) 
            super(roadWith, roadHeight, 0, top, speed, 0, road);
        }
        //当背景图片移出游戏面板的时候 瞬间定位到 left = 0；
    changeEnd() {
        if (this.left <= -(plateWith)) {
            this.left = 0;
        }
    }
}

// let roadObj = new Road(roadWith, 114, -70, roadTop, road);
// setInterval(() => {
//     roadObj.move(2 / 1000);
// });