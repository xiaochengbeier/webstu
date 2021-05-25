# bootstrap4布局之嵌套
【小城贝尔】

列中再添行属性，行分十二列再进。

值得注意列特性，默认内部间距定。

## 列中再添行属性，行分十二列再进。
    在每一个col-xx-xx中还可以在继续嵌套row 规则和直接写在container中的row一样
## 值得注意列特性，默认内部间距定。
    值得注意的是每一个 col-xx-xx 都有一个默认的padding值 15px 在设置样式的时候可能需要调整
    当然每一个row都有 -15px margin实际上是相互抵消了

     <div class="row ">
            <div class="col-md-6">
                <div class="row">
                    <div class="col-lg-5"></div>
                    <div class="col-lg-5"></div>
                </div>
            </div>
            <div class="col-md-3">2</div>
            <div class="col-md-3">3</div>
        </div>