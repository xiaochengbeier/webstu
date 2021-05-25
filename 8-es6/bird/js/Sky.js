let gamePlate = document.getElementsByClassName("game-plate")[0];
let sky = document.getElementsByClassName("sky")[0];
let plateWith = gamePlate.offsetWidth;
let plateHeight = gamePlate.offsetHeight;
let skyWith = plateWith * 2;
let skyHeight = plateHeight;
class Sky extends Common {
    constructor(skyWith, skyHeight, speed, sky) {
            // constructor(width, height, left, top, speedX, speedY, dom) 
            super(skyWith, skyHeight, 0, 0, speed, 0, sky);
        }
        //当背景图片移出游戏面板的时候 瞬间定位到 left = 0；
    changeEnd() {
        if (this.left <= -(plateWith)) {
            this.left = 0;
        }
    }
}

// let skyObj = new Sky(skyWith, skyHeight, -70, sky);
// setInterval(() => {
//     skyObj.move(2 / 1000);
// });