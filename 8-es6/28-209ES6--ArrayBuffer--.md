# ArrayBuffer
【小城贝尔】
固定内存区缓冲，字节大小初始中。

截取返回新缓冲，参数截取字节中。

操作新建视图冲，视图截取参数中。

存取数据方法冲，对应大小字节中。

类型数组含缓冲，也可外传初始中。

操作类型字节冲，内存对应占位中。

##  固定内存区缓冲，字节大小初始中。
##  截取返回新缓冲，参数截取字节中。
```JS
         //设置一段固定长度的内存空间
        // 表示 内存空间为 10个字节
        let abu = new ArrayBuffer(10);
        console.log(abu);
        console.log(abu.byteLength); // 10
        //截取一段已经创建的内存空间
        let newArb = abu.slice(3, 5); //从第三个字节开始截取截取到第五位{不包括五}所以这个新的 长度为 2
        console.log(newArb.byteLength); //2
```
##  操作新建视图冲，视图截取参数中。
##  存取数据方法冲，对应大小字节中。
```js
        let abu = new ArrayBuffer(10);
        //操作这块内存大空间的第一种方法
        let dataView = new DataView(abu, 3, 4);
        //表示只是操作这个内存空间的从第3 位开始 然后往后只操作 4 位
        console.log(dataView);
        dataView.setInt8(0, 10);
        dataView.setInt8(1, 20);
        dataView.setInt8(2, 30);
        dataView.setInt8(3, 40);
        // dataView.setInt8(4, 66);Offset is outside the bounds of the DataView
        //保存到因为自己设置了只是操作 从第3 位开始 然后往后只操作 4 位

        //dataView获得数据
        console.log(dataView.getInt16(1)); //5150
        //5150 为啥是 5150 因为 一个字节只有 8位 getInt16拿16位所以拿了两个字节
        console.log(dataView.getInt16(3));
        // Offset is outside the bounds of the DataView 
        //为啥报错呢 因为 偏移三个就剩下一个字节也就是只有 8位了 获得 16位当然报错啦
        console.log(dataView.getInt16(2)); //7720  仅仅偏移了两个字节所以不会报错
```
##  类型数组含缓冲，也可外传初始中。
##  操作类型字节冲，内存对应占位中。
```js
        let abu = new ArrayBuffer(10);
        //操作这块内存大空间的第2种方法 使用类型化数组
        //可以使用两个类型化数组操作同一个内存空间
        let intArr8 = new Int8Array(abu);
        intArr8[0] = 12;
        intArr8[1] = 22;
        let intArr16 = new Int16Array(abu);
        intArr8[8] = 99;
        intArr8[9] = 88;

        console.log(abu);
        //[[Int8Array]]: Int8Array(10) [12, 22, 0, 0, 0, 0, 0, 0, 99, 88]
```