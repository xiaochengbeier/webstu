# canvas画贝塞尔曲线
【小城贝尔】

贝塞曲线二三次，参数点位曲线自。

传入参数目标点，中间凹凸参数简。


## 贝塞曲线二三次，参数点位曲线自。
## 传入参数目标点，中间凹凸参数简。
    // 二次贝塞尔曲线
            var con = c.getContext("2d");
            con.moveTo(0, 250);
            con.quadraticCurveTo(100, 0, 250, 250);
            con.stroke();
    // 三次贝塞尔曲线
        var con = c.getContext("2d");
        con.moveTo(0, 250);
        con.bezierCurveTo(100, 0, 250, 250, 300, 0);
        con.stroke();
