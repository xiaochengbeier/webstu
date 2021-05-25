# switch

【小城贝尔】

对比标准括号中，层层语句罗列空。

多种情况要比对，校验条件冒号睡。

如不打破关键字，定会穿透如针刺。

最后还有默认值，根据业务玩真实。

## 对比标准括号中，层层语句罗列空。
    <script>
        var weeks = 6;
        switch (weeks) { //对比标准
            case 1:
                console.log("周一。。。");
                break;
            case 2:
                console.log("周二。。。");
                break;
            case 3:
                console.log("周三。。。。");
                break;
            case 4:
                console.log("周四。。。。");
                break;
            default:
                console.log("other....");
                break;
        }
    </script>
## 多种情况要比对，校验条件冒号睡。
    case 1: 表示和括号中对比条件对比
    注意后边符号是英文冒号 并未分号
## 如不打破关键字，定会穿透如针刺。
    break; 如果没有这个关键子会导致后边的继续穿透执行
## 最后还有默认值，根据业务玩真实。
    default: 后边跟默认值 这个根据具体业务也可以不写这一句