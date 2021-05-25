# call 和 apply
【小城贝尔】

改变this指向同，首个参数对象萌。
拨打电话按键清，申请传参数组拎。

## 改变this指向同，首个参数对象萌。
    他们的作用都是改变this的指向 第一个参数都是传入this指向的对象
## 拨打电话按键清，申请传参数组拎。
    call 方法传入参数是一个一个传入
    apply 方法传入参数必须是一个数组
      <script>
        function Method(name, age, sex) {
            this.name = name;
            this.age = age;
            this.sex = sex;
        }

        function Person(name, age, sex, school, tall) {
            //Method.call(this);
            Method.apply(this, [name, age, sex]);
            this.school = school;
            this.tall = tall;
        }
        var obj = new Person("老铁", 20, 1, "good School", "very tall");
        console.log(obj);
        //Person {name: undefined, age: undefined, sex: undefined, school: "good School", tall: "very tall"}
    </script>