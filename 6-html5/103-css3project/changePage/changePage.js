(function() {
    //扩展jquery自己封装一个分页插件
    $.fn.extend({
        changePage(pageMes) {
            var nowPage = pageMes.nowPage;
            var allPage = pageMes.allPage;
            // var nowPage = 6;
            // var allPage = 10;
            var This = this;
            var callBack = pageMes.callBack;
            randerPage(This);


            function randerPage(self) {
                $(self).empty();
                //创建分页包裹对象
                var pageWrap = $("<ul  class = 'chage-page-wrap'></ul>");
                //创建上一页按钮当前页必须大于1
                if (nowPage > 1) {
                    var pre = $("<li class = 'pre-page'></li>");
                    pre.text("上一页");
                    pageWrap.append(pre);

                }
                //创建第一页
                var first = $("<li>1</li>");
                if (nowPage == 1) {
                    first.addClass("change-page-active");
                }
                pageWrap.append(first);
                //创建前边省略号
                if (nowPage - 2 > 2) {
                    var pre = $("<li>...</li>");
                    pageWrap.append(pre);
                }
                //创建显示页码
                for (var i = (nowPage - 2); i <= (nowPage + 2); i++) {
                    if (i > 1 && i < allPage) {

                        var showPage = i == nowPage ? $("<li  class = 'change-page-active'>" + i + "</li>") : $("<li>" + i + "</li>");
                        pageWrap.append(showPage);

                    }
                }
                //创建后边省略号
                if (nowPage + 2 < allPage - 1) {
                    var prPot = $("<li>...</li>");
                    pageWrap.append(prPot);
                }
                //创建最后一页如果总数只有一页的话那么就不需要创建了
                if (allPage > 1) {
                    var first = $("<li>" + allPage + "</li>");
                    if (nowPage == allPage) {
                        first.addClass("change-page-active");
                    }
                    pageWrap.append(first);
                }

                //创建下一页按钮 必须比最后一页小 
                if (nowPage < allPage) {
                    var next = $("<li  class = 'next-page'></li>");

                    next.text("下一页");
                    pageWrap.append(next);
                }

                //将插件追加到调用对象上
                $(self).append(pageWrap);
                //给上一页下一页绑定事件
                $(".next-page").click(function() {
                    console.log("next-page");
                    if (nowPage < allPage) {
                        nowPage++;
                        callBack(nowPage);
                        randerPage(This);
                    }


                });
                $(".pre-page").click(function() {
                    console.log("pre-page");
                    if (nowPage > 1) {
                        nowPage--;
                        callBack(nowPage);
                        randerPage(This);

                    }

                });
                $(".chage-page-wrap").find("li").filter(function(index, ele) {
                    var clazz = $(ele).attr("class");
                    var text = $(ele).text();
                    if (clazz == null && text != "...") {
                        return ele;
                    }
                }).click(function() {
                    var content = parseInt($(this).text());
                    nowPage = content;
                    callBack(nowPage);
                    randerPage(This);
                });
            }
        },

    });

}())