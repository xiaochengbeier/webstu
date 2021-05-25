# dom继承树
【小城贝尔】

公有原型继承链，节点对象根相见。

文档对象和元素，dom操作最常注。

获得 ID仅文档，头和身体属性爽。

标签类名选择器，文档元素均一气。

## 公有原型继承链，节点对象根相见。
            getElementById()            getElementsByName()
                  |                       |
                  |                       |
            |-----|Document----HTMLDocument|---------》对象document
            |
            |                       Txt 文本节点
    Node ---|-----CharacterData---|
            |                       Comment 注释节点
            |
            |----Element------HTMLElement
## 文档对象和元素，dom操作最常注。
    document对象 和 element对象 这是dom 操作中最常用的对象
## 获得 ID仅文档，头和身体属性爽。
     getElementById()  仅仅是定义在 Document 原型中 所以 Element后继对象不能使用这个方法
     对于 body 和 head 这两个元素 已经封装成属性 直接存储在 document对象中了
     使用时不用获取
## 标签类名选择器，文档元素均一气。
    getElementsByTagName()
    getElementsByClassName();
    querySelector();
    querySelectorAll();
    这些方法在Document Element 对象中都有