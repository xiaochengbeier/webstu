(function() {
    Studen.getData = function(formDom) {
            var form = $("." + formDom);
            //get data form form 
            var data = form.serializeArray();
            var datas = {};
            data.forEach(element => {
                datas[element.name] = element.value;
            });
            return datas;
        }
        //add click event to add btton
    $(".add-btn").click(function() {
        //get form object 
        // var form = $(".form-wrap").find(".add-stu-form");
        //get data form form 
        // var data = form.serializeArray();
        var datas = Studen.getData("add-stu-form");
        // data.forEach(element => {
        //     datas[element.name] = element.value;
        // });
        Studen.dataTransfer("/api/student/addStudent", datas, function(res) {
            alert(res.msg);
            $(".form-wrap").find(".add-stu-form").get(0).reset();
            window.location.hash = "student-list";

        }, function(res) {
            alert(res.msg);
        });
    });
}())