(function() {
    function init() {
        stu();
        boundEvent();
        loadEle();
    }
    init();
    //初始化全局对象
    function stu() {
        //创建一个全局对象供其他js调用
        window.Studen = {
            dataTransfer(url, data, sucess, fail) {
                data["appkey"] = "kaivon_1574822824764";
                $.ajax({
                    url: "https://open.duyiedu.com" + url,
                    type: "get",
                    data: data,
                    dataType: "json",
                }).then(function(res) {
                    //{msg: "添加成功", status: "success"}"
                    //{msg: "该学生已经存在", status: "fail"} 
                    if (res.status == "success") {
                        typeof sucess == "function" && sucess(res);
                    } else if (res.status == "fail") {
                        typeof fail == "function" && fail(res);
                        console.log(res.msg);
                    }
                });
            }
        }
    }
    //给button绑定事件
    function boundEvent() {
        window.location.hash = "student-list";
        $(".button").click(function() {
            $(".drop-down").slideToggle();
        });
        $(window).resize(function() {
            var w = $(window).innerWidth();
            if (w >= 768) {

                $(".drop-down").css({ display: "none" });
            }
        });

        $(window).on("hashchange", { demo: 0, naem: 3 }, function(e) {
            var hash = window.location.hash;
            var nopre = hash.slice(1);
            var attrChose = `[data-id=${nopre}]`;
            //首先清除active
            $(".active").removeClass("active");
            $(".content-active").removeClass("content-active");
            $(attrChose).addClass("active");
            $(hash).addClass("content-active");
        });


        $(".student-item").click(function() {
            var data = $(this).data();
            window.location.hash = data.id;
            $(".drop-down").slideUp();
        });
    }
    // 加载其他模块
    function loadEle() {
        $("#student-list").load("./stulist/stulist.html");
        $("#student-add").load("./addstu/addstu.html");
        $("#student-echarts").load("./echarts/echarts.html");
    }
}())