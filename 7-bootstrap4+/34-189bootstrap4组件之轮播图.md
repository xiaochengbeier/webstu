# bootstrap4组件之轮播图
【小城贝尔】
重量组件轮播图,初始类名传送涂。

左右切换控制器,中间小点指示济。

每页展示加字幕,效果展示超炫酷。

轮播控制属性多,是否传送看对错。

轮播时间默认五,全局设置单一虏。

鼠标移入即停止,悬停效果已雪耻。

另外效果脚本控,调用函数先选中。

还有事件几属性,事件源头分装进。

## 重量组件轮播图,初始类名传送涂。
## 左右切换控制器,中间小点指示济。
## 每页展示加字幕,效果展示超炫酷。
## 轮播控制属性多,是否传送看对错。
## 轮播时间默认五,全局设置单一虏。
## 鼠标移入即停止,悬停效果已雪耻。
## 另外效果脚本控,调用函数先选中。
## 还有事件几属性,事件源头分装进。
    <script>
            $('.carousel').carousel({
                interval: 1000
            })
            $("#start").click(function() {
                //开始轮播图
                $(".carousel").carousel('cycle');
            });
            $("#end").click(function() {
                //结束轮播图
                $(".carousel").carousel('pause')
            });
            $("#pre").click(function() {
                //前一站
                $(".carousel").carousel('prev');
            });
            $("#next").click(function() {
                //后一张
                $(".carousel").carousel('next')
            });
        </script>


        事件以及时事件上的几个属性

        $('.carousel').on('slide.bs.carousel', function(e) {
            console.log("开始走");
            console.log(
                e.direction, //移动的方向
                e.relatedTarget, //移入到视口的那个轮播元素
                e.from, // 刚才离开的那个轮播项的索引
                e.to // 移入的轮播项的索引
            );
        })
        $('.carousel').on('slid.bs.carousel', function() {
            console.log("走完啦");
        })