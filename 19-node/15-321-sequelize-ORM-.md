#  ORM框架sequelize

【小城贝尔】

## -------映射对象配置------
映射数据表空间，隔离操作原生颠。

安装依赖包空间，创建对象参数颠。

库名用户密码间，主机日志方言颠。
## ----映射模型--同步方法---
定义映射方法间，名称现将字符颠。

字段映射属性间，类型配置约束颠。

表名对应配置间，诞生修改字段颠。

偏执删除字段间，实际存储数据颠。

同步方法全局间，强制修改佛系颠。

配置关系方法间，关系对应绑定颠。
## -----增删改查操作---------
创建数据建设间，保存操作精细颠。

删除数据毁灭间，判断条件实例颠。

更新数据操作间，对象键值条件颠。

查询数据寻找间，部分字段属性颠。

查询所有性能间，海量数据内存颠。

查询单个参考间，条件判断主键颠。

条件判断符号间，对应封装导入颠。

分页跳过偏移间，页面容量尺寸颠。

连表查询包含间，升降排序分组颠。

统计函数大小间，数据操作封装颠。


## 映射数据表空间，隔离操作原生颠。
   sequelize是一个ORM映射框架隔离了对数据库的原生操作
   只需要操作 sequelize 就可以控制任意其支持的数据使得开发者
   无需关心不同数据库的不同操作
## 安装依赖包空间，创建对象参数颠。
   首先我们安装 sequelize 安装包当然还要安装对应的数据库驱动
   npm install --save sequelize
   安装对应的驱动包
    One of the following:
    $ npm install --save pg pg-hstore # Postgres
    $ npm install --save mysql2  我们使用的mysql安装这个即可
    $ npm install --save mariadb
    $ npm install --save sqlite3
    $ npm install --save tedious # Microsoft SQL Server
## 库名用户密码间，主机日志方言颠。
   然后创建sequelize对象配置 要连接的数据库 用户 密码
   以及一些配置 如
   {
       host:"xxx"数据库server地址
       dialect:"mysql" 方言意思是指明我们现在使用的数据库
       logging: console.log, 日志配置 默认值 会将操作的sql语句啥的打印到控制台 
                             如果是 false那么就是关闭日志功能 
   }
```js
    let Sequelize = require("sequelize");

    let sequelize = new Sequelize("orm","root","root",{
        host: 'localhost',
        dialect:'mysql',
        //日志默认值
        logging: console.log
    });
    //测试是否连接成功
    (async ()=>{
        try {
            await sequelize.authenticate();
            console.log('Connection has been established successfully.');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    })()
    exports = sequelize;
```
## 定义映射方法间，名称现将字符颠。
   通过 sequelize的 define方法配置数据映射模型
   当然还可以使用对象的方式
## 字段映射属性间，类型配置约束颠。
     type:字段类型我们需要导入sequelize的类型映射对象
     比如：
     type: DataTypes.STRING 那么这个字段映射到数据库就是字符类型
     allowNull: false 非空约束映射 
## 表名对应配置间，诞生修改字段颠。
    tableName: 'Employees' 表示自定义模型映射到数据库的表名字
    freezeTableName: true 默认表明是模型名的复数形式如果设置了true即不添加复数形式 s es ...

     createdAt: false,  表示表中会有一个列记录此行创建时间
     updatedAt: 'updateTimestamp' 示表中会有一个列记录此行修改时间 
## 偏执删除字段间，实际存储数据颠。
   paranoid: true, 表示字段 不是真正的删除而是通过一个列标识
   使用define方法详解
   let mapMode = sequelize.define("模型名字",{
       字段名字对应表的字段:{
           type:字段类型我们需要导入sequelize的类型映射对象
           比如：
           type: DataTypes.STRING 那么这个字段映射到数据库就是字符类型
           allowNull: false 非空约束映射  
       }
   },{
       模型配置
        freezeTableName: true 默认表明是模型名的复数形式如果设置了true即不添加复数形式 s es ...
        tableName: 'Employees' 表示自定义模型映射到数据库的表名字
        paranoid: true, 偏执表意思是添加一列表示是否删除了这个数据也就是说数据并不是真正删除
                        而是修改了一个标识而已
        deletedAt: 'destroyTime' 自定义表示删除字段的字段名
        createdAt: false,  表示表中会有一个列记录此行创建时间
        updatedAt: 'updateTimestamp' 示表中会有一个列记录此行修改时间 
   });
```js
    let sequelize = require("./sequelize");
    let {DataTypes} = require("sequelize");
    //创建学生表映射 define
    let Student = sequelize.define("student",{
        sno:{
            type:DataTypes.STRING,
            allowNull: false
        },
        name:{
            type:DataTypes.STRING,
            allowNull: false
        },
        sex:{
            type:DataTypes.BOOLEAN,
            allowNull: false
        },
        birth:{
            type:DataTypes.DATE,
            allowNull: false
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false
        },
        phone:{
            type:DataTypes.STRING,
            allowNull:false
        },
        address:{
            type:DataTypes.STRING,
            allowNull:false 
        }

    },{
        paranoid: true,
        freezeTableName: true
    });

    module.exports = Student;
```
## 同步方法全局间，强制修改佛系颠。
   同步方法分为全局和局部两种方式全局使用即同步sequelize 对象上的所有的模型
   使用模型对象调用即单单同步这一个对象到数据库
   同步方法的几种配置
   model.sync(); 佛系操作如果对应的表存在就不做任何操作
   User.sync({ force: true }) 强制同步如果存在表那么删除重新建表
   User.sync({ alter: true }) 对比字段的不同修改表 此操作常用
```js
    let sequelize = require("./sequelize");
    //同步数据库和模型
    sequelize.sync({alter:true});
```
## 配置关系方法间，关系对应绑定颠。
   配置表和表之间的关系
   A.hasOne(B);  表示一对一关系 a 包含一个 b
   A.belongsTo(B); 表示多对一多的一端
   A.hasMany(B);  表示一对多多的一端
   A.belongsToMany(B, { through: 'C' }) 多对多通过第三张表操作展示关系
```js
    let Class = require("./class");
    let Student = require("./student");
    //设置关系 一个学生有一个班级
    Class.hasMany(Student);
    Student.belongsTo(Class);
    //同步数据库和模型
    sequelize.sync({alter:true});
```
## 创建数据建设间，保存操作精细颠。
   通过模型向表中插入数据
    let instance =  Model.build({数据对象}) ;
    instance.save();//保存数据对象
    //此方法实际上内部还是执行了上边两个方法
    const jane = await User.create({ firstName: "Jane", lastName: "Doe" });
    //添加一个数组即批量添加数据
    const captains = await Captain.bulkCreate([
        { name: 'Jack Sparrow' },
        { name: 'Davy Jones' }
    ]);
```js
    let  Student = require("./model/student");
    let Class = require("./model/class");
    let Mock =  require("mockjs");
    //需要声明相互的关系才能插入外键数据
    require("./model/relation");
    let clazz = Mock.mock({
        "array|5":[
            {
                "cno|1-16":10,
                name:/[1-16]班/,
                birth:"@date",
            }
        ]
    }).array;
    //通过模型向数据库插入数据
    Class.bulkCreate(clazz).then(data=>{
        console.log("insert into class ===>");
        console.log(data);
    });

    let student = Mock.mock({
        "array|200":[
            {
                "sno":/^20(\d){5}/,
                name:"@cname",
                "sex|0-1":1,
                birth:"@date",
                email:"@email",
                phone:/^1[534]\d{9}/,
                address:"@province",
                "classId|1-5":1
            }
        ]
    }).array;
    Student.bulkCreate(student);
```
## 删除数据毁灭间，判断条件实例颠。
    删除数据
    await User.destroy({
        where: {
            firstName: "Jane"
        }
    });
```js
    let Student = require("./model/student");
    // 删除一条数据
    Student.destroy({
        where:{
            id:100
        }
    }).then(data=>{
        console.log(data);
    });
```
## 更新数据操作间，对象键值条件颠。
    修改数据
   await User.update({ lastName: "Doe" }, {
        where: {
            lastName: null
        }
    });
```js
    let Student = require("./model/student");
    // 修改数据
    Student.update({name:"小城贝尔"},{
        where:{
            id:66
        }
    }).then(data=>{
        console.log(data);
    });
```
## 查询数据寻找间，部分字段属性颠。
   查询数据一般都是使用 findxxx方法
   具体需要哪些字段通过属性配置
   Model.findAll({
       attributes: ['foo', 'bar']
   });
## 查询所有性能间，海量数据内存颠。
   Model.findAll 查询所有有的数据如果数据太多
   很浪费内存并且没有必要
   findAndCountAll  查询所有的符合条件的并统计一共有多少
   分页查询场景必用
```js
    let Student = require("./model/student");
    // findAndCountAll
    Student.findAndCountAll({
        where:{
            sex:1
        },
        offset: 5,
        limit: 5 
    }).then(({ count, rows })=>{
        console.log(count);
        console.log(JSON.parse(JSON.stringify(rows)))
    });
```
## 查询单个参考间，条件判断主键颠。
   Model.findOne 表示查询一个如果查询到的有多个那么 limit 0,1
   Model.findByPK 根据主键查询
```js
    //查找单条数据
    let Student = require("./model/student");
    Student.findOne({
        attributes:["id","sno","name","phone"],
        where:{
            sno:"2092798"
        }
    }).then(data=>{
        console.log(data.dataValues);
    });
    //根据主键查询数据
    Student.findByPk(100).then(data=>{
        console.log(data.dataValues);
    });
```
## 条件判断符号间，对应封装导入颠
   Operators where 条件判断操作符号映射
   对应sql语句的 各种逻辑关键字 如 and or  in > <  in  between and  等等....
   const { Op } = require("sequelize");
## 分页跳过偏移间，页面容量尺寸颠。
   分页查询  offset 对应limit 第一个参数跳过多少个
   Model.findAll({ offset: 5, limit: 5 });
```js
    let Student = require("./model/student");
    let {Op} = require("sequelize");
    // 设置查询条件查询 id 是 66 77  88 99 其中的一个
    Student.findAll({
        where:{
            //底层sql 使用 in(66 77  88 99 )
            id:[66,77,88,99]
        }
    }).then(data=>{
        console.log(JSON.parse(JSON.stringify(data)));
    });

    //查询出生日期 1999-01-01 到 2005-05-05 的同学
    Student.findAndCountAll({
        attributes:["name","birth"],
        where:{
            birth:{
                [Op.between]: [new Date("1999-01-01"), new Date("2005-05-05")],
            }
        },
        offset:0,
        limit:5
    }).then(({count,rows})=>{
        console.log(count);
        console.log(JSON.parse(JSON.stringify(rows)));
    });
```
## 连表查询包含间，升降排序分组颠。
   连表查询
     include: [{
      model: Student,
      as: 'student',
    }],
```js
    let Class = require("./model/class");
    //必须声明关系才可以查
    require("./model/relation");
    //查询1班 和它包含的学生的学生
    Class.findAll({
        include: Student,
        where:{
            id:1
        }
    }).then(data=>{
    let calzz =   JSON.parse(JSON.stringify(data));
    console.log(calzz[0]);
    });
```
    升序降序
    order: [
       ['title', 'DESC'],
    ]
    分组查询
    Model.findAll({ group: 'name' });
## 统计函数大小间，数据操作封装颠。
   统计聚合函数
   Model.count({
        where: {
            id: {
            [Op.gt]: 25
            }
        }
    });
    await User.max('age', { where: { age: { [Op.lt]: 20 } } }); // 10
    await User.min('age'); // 5
    await User.min('age', { where: { age: { [Op.gt]: 5 } } }); // 10
    await User.sum('age'); // 55