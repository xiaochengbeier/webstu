let bird = document.getElementsByClassName("bird")[0];
let bWidth = bird.clientWidth;
let bHeight = bird.clientHeight;
class Bird extends Common {
    constructor(bWidth, bHeight, top, speed, bird) {
        // constructor(width, height, left, top, speedX, speedY, dom) 
        super(bWidth, bHeight, 150, top, 0, speed, bird);
        this.g = 1500;
        this.timer = null;
        this.maxTop = plateHeight - 114 - bHeight;
        this.minTop = 0;
        this.swingStatus = 1;
    }

    move() {
        if (this.timer) {
            return;
        }
        this.timer = setInterval(() => {
            this.speedY = this.speedY + this.g;
            super.move(1 / 1000);
            this.dom.className = `bird swing${this.swingStatus++}`;
            if (this.swingStatus >= 4) {
                this.swingStatus = 1;
            }
        }, 100);
    }
    changeEnd() {
        if (this.top >= this.maxTop) {
            this.top = this.maxTop;
        }
        if (this.top <= 0) {
            this.top = 0;
        }
    }
    jump() {
        this.speedY -= 15000;
    }
    stop() {
        clearInterval(this.timer);
    }
}
// let bird1 = new Bird(bWidth, bHeight, 200, 50, bird);
// bird1.move();
// document.onkeydown = function() {
//     bird1.jump();
// }