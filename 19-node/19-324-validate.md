#  validate

【小城贝尔】

对象校验属性值，异步定义同支持。

规则对象配置值，出席非空布尔持。

字符长度大小值，数据同样范围持。

时间校验间隔值，解析毫秒格式持。

自定校验方法值，返回消息通行持。

## 对象校验属性值，异步定义同支持。
   使用validate.js 校验数据对象是否符合规范  
   同步处理
   validate({}, constraints);
   异步处理
   validate.async(attributes, constraints, [options])
## 规则对象配置值，出席非空布尔持。
    validate({被校验对象}, {
        校验规则
    });
    presence: {allowEmpty: false} 表示此字段不能为空空串也不行
## 字符长度大小值，数据同样范围持。
    校验字符串长度
    length: {
          minimum: 3
          maximum: 20
        },
## 时间校验间隔值，解析毫秒格式持。
   时间校验
   datetime: {
      dateOnly: true,
      latest: moment.utc().subtract(18, 'years'),
      message: "^You need to be at least 18 years old"
    }
   由于js对时间的控制较弱所以需要
    validate.extend(validate.validators.datetime, {
        parse: function(value, options) {
            return +moment.utc(value);
        },
        format: function(value, options) {
            var format = options.dateOnly ? "YYYY-MM-DD" : "YYYY-MM-DD hh:mm:ss";
            return moment.utc(value).format(format);
        }
    });
## 自定校验方法值，返回消息通行持。
    自定义校验器
    validate.validators.myAsyncValidator = function(value) {
        return new validate.Promise(function(resolve, reject) {
            setTimeout(function() {
            if (value === "foo") resolve();
            else resolve("is not foo");
            }, 100);
        });
    };
```js
    let validate = require("validate.js");
    let moment = require("moment");
    let Class = require("./orm/model/class");
    const { resolve } = require("path");
    const { ESTALE } = require("constants");
    let  obj = {
        name:"小城贝尔",
        birth:"2020-11-11"
    }
    // 处理时间校验 parse format 方法
    validate.extend(validate.validators.datetime,{
        //解析传入的字符串 value表示对象中的 birth 
        // options 表示规则里关于birth这个字段的规则
        parse: function(value, options) {
            return +moment.utc(value);
        },
        //fromat 表示如果没有通过那么时间如何展示
        format: function(value, options) {
        var format = options.dateOnly ? "YYYY-MM-DD" : "YYYY-MM-DD hh:mm:ss";
        return moment.utc(value).format(format);
        }
    });

    let rules = {
        name:{
            //必须是字符串类型
            type: "string",
            //表示名字不能为空空串也不行
            presence:{
                allowEmpty:false
            },
            //并且字符串长度必须是在 3 - 5个之间
            length: {
                minimum: 3,
                maximum: 5
            },
        },
        birth:{
            datetime: {
                // 表示只能是日期
                dateOnly: true,
                // 表示必须是大于十八岁
                latest: moment.utc().subtract(18, 'years'),
                // 没有通过提示消息
                message: "年龄必须18岁以上 you too young too simple"
            }
        }
    };

    let result = validate.validate(obj,rules);
    console.log(result);


    // 自定义校验器
    validate.validators.classIsExits = function(value){
        // 在数据库中查询这个班级是否存在
        return new validate.Promise((resolve,rejects)=>{
            Class.findByPk(value).then(data=>{
                if(!data){
                    resolve("此班级不存在");
                }else{
                    resolve();
                }
            })
        })
    }
    let rules2 = {
        class:{
            classIsExits:true,
        }
    }
    let validateSync = validate.async({class:10},rules2);
    validateSync.then(data=>{
        console.log(data,"--异步校验结果")
    },error =>{
        console.log(error,"--异步校验结果")
    })
```