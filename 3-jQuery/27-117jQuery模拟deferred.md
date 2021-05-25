# jQuery 延迟模拟

【小城贝尔】
延迟核心三回调，组织结构数组到。

注册执行字符笑，全都加入数组妙。

返回对象多操作，核心添加执行落。

添加找到数组应，回调添加函数近。

执行机理也相同，立即执行二者重。

## 延迟核心三回调，组织结构数组到。
    延迟回调对象实现原理 核心是 用 三个回调对象
    管理 成功 失败 正在执行这三种状态
   
## 注册执行字符笑，全都加入数组妙。
   对于这三种状态 回调对象 注册函数 执行函数 使用数组组织他们之间的对应关系
## 返回对象多操作，核心添加执行落。
    延迟回调这个方法返回的是一个对象 
    这个对象其中的几个核心方法 是 对应的 失败 成功 正在执行 的添加和执行方法
## 添加找到数组应，回调添加函数近。
    添加注册方法就是 找到 对应的 那个回调对象然后 调用 回调对象的 add() 方法
## 执行机理也相同，立即执行二者重。
    执行也是一样的找到对应的回调对象然后执行
    其中会遇到闭包问题使用立即执行函数处理即可



        jQuery.myDefer = function() {
        var isContnu = true;
        var defer = {};
        //延迟核心三回调，组织结构数组到。 
        var tpl = [
                //注册执行字符笑，全都加入数组妙。
                [jQuery.myCallback("once memory"), "done", "resolve"],
                [jQuery.myCallback("once memory"), "fail", 'reject'],
                [jQuery.myCallback("memory"), "progress", "notify"]
            ]
            //返回对象多操作，核心添加执行落。
        for (var i = 0; i < tpl.length; i++) {
            //给对对象添加三个状态的函数添加方法
            (function(j) {
                defer[tpl[i][1]] = function(func) {
                    tpl[j][0].add(func);
                }
            }(i));
            //给对对象添加三个状态的函数执行方法
            (function(j) {
                defer[tpl[i][2]] = function() {
                    if (isContnu) {
                        tpl[j][0].fire.apply(window, arguments);
                        tpl[j][2].indexOf("resolve") != -1 || tpl[j][2].indexOf("reject") != -1 ? isContnu = false : "";
                    }


                }
            }(i));
        }

        return defer;
    }