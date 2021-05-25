class Game {
    constructor() {
        this.sky = new Sky(skyWith, skyHeight, -70, sky);
        this.road = new Road(roadWith, 114, -70, roadTop, road);
        this.pGrop = new PipeGroup();
        this.bird = new Bird(bWidth, bHeight, 200, 50, bird);
        this.timer = null;
        this.isStop = false;
        this.corse = 0;
    }

    start() {
        if (this.timer) {
            return
        }
        this.timer = setInterval(() => {
            this.isGameOver()
            this.sky.move(2 / 10);
            this.road.move(2 / 10);
            this.pGrop.pipeGroupMove();
            this.bird.move();
            this.bondEvent();
        }, 100);
    }
    isGameOver() {
        let pg = this.pGrop.PipeGroup;
        pg.forEach(ele => {
            let p1 = ele.pipePair1;
            let p2 = ele.pipePair2;

            let hit1 = this.isHit(this.bird, p1);
            let hit2 = this.isHit(this.bird, p2);

            if (hit2 || hit1) {
                this.stop();
            }
        });


    }
    stop() {
        clearInterval(this.timer);
        this.timer = null;
        this.pGrop.stop();
    }
    isHit(rec1, rec2) {
        // 横向：两个矩形的中心点的横向距离，是否小于矩形宽度之和的一半
        // 纵向：两个矩形的中心点的纵向距离，是否小于矩形高度之和的一半
        var centerX1 = rec1.left + rec1.width / 2;
        var centerY1 = rec1.top + rec1.height / 2;
        var centerX2 = rec2.left + rec2.width / 2;
        var centerY2 = rec2.top + rec2.height / 2;
        var disX = Math.abs(centerX1 - centerX2); //中心点横向距离
        var disY = Math.abs(centerY1 - centerY2); //中心点总想距离
        //计分
        console.log("计分。。。", rec1.left, rec2.left);
        if (rec1.left === rec2.left) {
            this.corse++;
            console.log(this.corse, "this.co.sllsjndl...........");
        }
        if (disX < (rec1.width + rec2.width) / 2 &&
            disY < (rec1.height + rec2.height) / 2
        ) {
            return true;
        }
        return false;
    }

    bondEvent() {
        document.onkeydown = (e) => {
            if (e.keyCode == 13) {
                this.isStop == false ? this.stop() : window.location.reload();
                this.isStop = !this.isStop;
            }
            if (e.keyCode == 32) {
                this.bird.jump();
            }
        }
    }
}

let game = new Game();
game.start();