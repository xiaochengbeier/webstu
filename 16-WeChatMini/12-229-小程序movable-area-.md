# 小程序movable-area

【小城贝尔】

移动区域设宽高，配合子项方向飘。

横竖移动限制高，也可区域外界飘。


## 移动区域设宽高，配合子项方向飘。
```xml 
     <movable-area>
        <movable-view direction="horizontal">text</movable-view>
     </movable-area>
```
    direction="horizontal" 只能水平移动
    direction="vertical"   只能纵向移动 
## 横竖移动限制高，也可区域外界飘。
    横竖移动不一定仅仅限制在movable-area 里边
    可以通过  out-of-bounds   属性的配置超出边界
```xml
    <view class="page-section-title">可超出边界</view>
      <movable-area>
        <movable-view direction="all" out-of-bounds>text</movable-view>
    </movable-area>
```