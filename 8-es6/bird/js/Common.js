class Common {
    constructor(width, height, left, top, speedX, speedY, dom) {
        this.width = width;
        this.height = height;
        this.left = left;
        this.top = top;
        this.speedX = speedX;
        this.speedY = speedY;
        this.dom = dom;
        this.rander();
    }

    rander() {
        this.dom.style.width = this.width + "px";
        this.dom.style.height = this.height + "px";
        this.dom.style.left = this.left + "px";
        this.dom.style.top = this.top + "px";
    }
    move(duration) {
        this.left += this.speedX * duration;
        this.top += this.speedY * duration;
        if (this.changeEnd) {
            this.changeEnd();
        }
        this.rander();
    }

}