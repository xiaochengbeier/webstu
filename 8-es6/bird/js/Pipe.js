class Pipe extends Common {
    constructor(pipeHeight, speedx, left, top, pipe) {
        // constructor(width, height, left, top, speedX, speedY, dom) 
        super(52, pipeHeight, left, top, speedx, 0, pipe);

    }
    move(duration) {
        this.left += this.speedX * duration;
        this.top += this.speedY * duration;
        if (this.left <= 0) {
            this.dom.remove();
        }
        this.rander();
    }
}

class PipePair {
    constructor() {
        this.minHeight = 80;
        this.maxHeight = plateHeight - 114 - 150 - this.minHeight;
        let heightUp = this.getPipeHeight();
        let heightDown = plateHeight - 114 - 150 - heightUp;
        let downDivTop = heightUp + 150;
        let pipeUP = document.createElement("div");
        pipeUP.className = "pipe up-pipe";
        this.pipePair1 = new Pipe(heightUp, -30, plateWith, 0, pipeUP);


        let pipeDown = document.createElement("div");
        pipeDown.className = "pipe down-pipe";
        this.pipePair2 = new Pipe(heightDown, -30, plateWith, downDivTop, pipeDown);
        gamePlate.appendChild(pipeUP);
        gamePlate.appendChild(pipeDown);
    }

    move(duration) {
        this.pipePair1.move(duration);
        this.pipePair2.move(duration);
    }
    getPipeHeight() {
        let ht = Math.random() * (this.maxHeight - this.minHeight);
        return Math.round(ht) + this.minHeight;
    }
}

class PipeGroup {
    constructor() {
        this.PipeGroup = [];
        this.timer = null;
    }
    createPipePair() {
        if (this.timer) {
            return;
        }
        this.timer = setInterval(() => {
            this.PipeGroup.push(new PipePair());
        }, 1000 * 3);
    }

    pipeGroupMove() {
        this.createPipePair();
        for (let i = 0; i < this.PipeGroup.length; i++) {
            let gi = this.PipeGroup[i];
            gi.move(4 / 20);
            if (gi.pipePair1.left <= 0) {
                this.PipeGroup.splice(i, 1);
            }
        }
    }
    stop() {
        clearInterval(this.timer);
        this.timer = null;
    }
}
// let ps = new PipeGroup();
// setInterval(() => {
//     ps.pipeGroupMove();
// }, 100);