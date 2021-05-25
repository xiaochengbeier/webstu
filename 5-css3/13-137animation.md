# animation
【小城贝尔】

动画艾特关键帧，运动状态用百分。

调用参数动画名，执行时间阶段赢。

贝塞曲线每段用，延迟执行按秒动。

迭代计数运行要，一直运行次数调。

执行方向有逆反，变位运行来回转。

播放状态兼容短，停止开始状态管。

前后状态模型满，全部设置字符喘。

## 动画艾特关键帧，运动状态用百分。
    使用   @keyframes 关键字设置动画容器
    动画的不同状态使用百分比来标识
    @keyframes myRun {
            0% {}
            50% {}
            70% {}
            100% {}
        }
## 调用参数动画名，执行时间阶段赢。
    当一个元素需要使用这个设置的动画的时候 
    使用动画名称调用即可
    animation-name：动画名称
    animation-duration：动画执行完毕耗时
    每个阶段的时间是根据每个阶段所占百分比来计算的
    阶段百分比 x  animation-duration = 每一个阶段的时间
## 贝塞曲线每段用，延迟执行按秒动。
    animation-timing-function：一般使用贝塞尔曲线调整动画运行速率
                              会作用到每一个阶段 并不是整个阶段
    animation-delay：延迟执行时间
## 状态过渡走几步，抛弃前后参数住。
    animation-timing-function：steps("步数","在过渡的时间内展示开始状态还是目标状态默认是 end ");
                               end：表示在过度的时候保持开始状态抛弃目标状态
                               start：表示在过渡的时候保持目标状态抛弃开始状态
## 迭代计数运行要，一直运行次数调。
    animation-iteration-count:表示动画执行的次数 默认是 1 执行一次
                              infinite 表示一直执行
    当开始动画执行完毕开始第二次动画的时候第一次设置的 delay延迟 播放就不在作用了
## 执行方向有逆反，变位运行来回转。
    animation-direction：动画执行方向  reverse 反方向执行
                                      alternate 来回往复执行
                                      alternate-reverse 反过来来回往复执行
## 播放状态兼容短，停止开始状态管。
    animation-play-state：动画播放状态 默认是 running 表示运动
                         paused 表示停止
## 前后状态模型满，全部设置字符喘。
    animation-fill-model：默认值 none 不设置动画内容之外的状态
                          forwards：设置动画结束后就保持最后的状态不变为开始状态
                          backward：表示在动画开始的时候变为第一个动画设置的状态
                          both :设置forwards 和 backwards 这两种状态


    @keyframes myRun {
            0% {
                top: 0px;
                left: 0px;
                background-color: blue;
            }
            25% {
                top: 0px;
                left: 300px;
                background-color: rgba(27, 221, 228, 0.705);
            }
            50% {
                top: 300px;
                left: 300px;
                background-color: rgb(255, 196, 0);
            }
            75% {
                top: 300px;
                left: 0px;
                background-color: rgb(204, 16, 104);
            }
            100% {
                top: 0px;
                left: 0px;
                background-color: rgb(0, 255, 64);
            }
        }
        
        .demo {
            position: absolute;
            left: 0px;
            top: 0px;
            height: 50px;
            width: 50px;
            border: 1px solid red;
            background-color: rgb(255, 0, 0);
            /* 一般使用这种符合书写方式 */
            animation: myRun 8s cubic-bezier(0.075, 0.82, 0.165, 1) 2s 3 alternate-reverse both;
        }
        
        .demo:hover {
            animation-play-state: paused;
        }
    </style>
    </head>

    <body>
        <div class="demo"></div>
    </body>