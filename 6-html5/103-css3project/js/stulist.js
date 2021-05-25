(function() {
    //查询页数
    Studen.page = 1;
    //每页多少条数据
    Studen.size = 5;
    //数据总条数
    Studen.count = 0;
    //当前页的数据
    Studen.stuList = null;

    function init() {
        findData();
        search();
    }

    init();

    function findData() {
        //标识此操作为全局搜索
        Studen.isSearch = true;
        //查询到所有的数据/api/student/findAll
        Studen.dataTransfer("/api/student/findByPage", { page: Studen.page, size: Studen.size }, function(res) {
            var data = res.data;
            var findData = data.findByPage;
            //跟新全局保存的当前页对象
            Studen.stuList = findData;
            //总的数据条数
            Studen.count = data.cont;
            randerTable(findData);
        })
    }

    //rander table
    function randerTable(data) {
        var str = "";
        data.forEach(element => {
            str += `
            <tr>
            <td>${element.sNo}</td>
            <td>${element.name} </td>
            <td>${element.sex == 0?"男":"女"} </td>
            <td>${element.email} </td>
            <td>${new Date().getFullYear() -  element.birth} </td>
            <td>${element.phone} </td>
            <td>${element.address}</td>
            <td>
                <button>编辑</button>
                <button>删除</button>
            </td>
        </tr>
            `;
        });
        $(".change-page").changePage({
            nowPage: Studen.page,
            allPage: Math.ceil(Studen.count / Studen.size),
            callBack: function(res) {
                Studen.page = res;

                var sText = $(".search").find("input").val();
                if (sText != null && sText != "") {
                    $(".search").find("button").click();
                } else {
                    findData();
                }
            },
        });
        $(".show-list").find("tbody").html(str);

    }
    Studen.isSearch = false;
    Studen.lastSerch = null;
    //搜索功能
    function search() {

        var sBtn = $(".search").find("button");
        sBtn.click(function() {

            var sText = $(".search").find("input").val();
            if (sText != null && sText != "") {

                //当从全局搜索转到按照调减1搜索的时候将 page = 1；
                if (Studen.isSearch || Studen.lastSerch != sText) {
                    Studen.isSearch = false;
                    Studen.page = 1;
                }
                Studen.lastSerch = sText;
                var data = {
                    sex: -1,
                    search: sText,
                    page: Studen.page,
                    size: Studen.size
                };
                Studen.dataTransfer("/api/student/searchStudent", data, function(res) {
                    var data = res.data.searchList;
                    var findData = data;
                    var count = res.data.cont;
                    Studen.count = count;
                    randerTable(data);
                });
            } else {
                // 当条件转到全局搜索的时候page = 1；
                Studen.page = 1;
                findData();
            }
        });
    }
    // 点击非编辑区消失
    $(".modle").click(function() {
        $(".modle").slideUp();
    });
    $(".input-wrap").click(function(e) {
        e.stopPropagation();
    });
    //编辑功能
    $(".show-list").find("table").click(function(e) {
        var target = e.target;
        var tText = $(target).text();
        var index = $(target).parents("tr").index();
        if (tText == "编辑") {
            backShow(Studen.stuList[index]);
            $(".modle").css("display", "flex");
        } else if (tText == "删除") {
            //删除数据
            var dID = Studen.stuList[index];
            deleteData(dID);
        }
    });
    //删除数据
    function deleteData(deleNo) {
        var data = { sNo: deleNo.sNo };
        var confirm = window.confirm("确定删除" + (deleNo.name) + "的信息吗？");
        if (!confirm) {
            return;
        }
        Studen.dataTransfer("/api/student/delBySno", data, function(res) {
            alert(res.msg);
            init();
        });
    }
    //回显数据
    function backShow(backDate) {
        if (backDate == null) {
            return;
        }
        for (var prop in backDate) {
            var form = $(".edit-stu-form").get(0);
            if (form[prop]) {
                form[prop].value = backDate[prop];
            }
        }
    }
    //编辑后提交数据
    $(".edit-btn").click(function() {
        var data = Studen.getData("edit-stu-form");
        var confirm = window.confirm("确定修改" + (data.name) + "的信息吗？");
        if (!confirm) {
            return;
        }
        console.log(data);
        /// api / student / updateStudent
        Studen.dataTransfer("/api/student/updateStudent", data, function(res) {
            alert(res.msg);
            init();
            $(".modle").slideUp();
        }, function(res) {
            alert(res.msg);
        });
    });


}());