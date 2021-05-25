this.onmessage = function(e) {
    let num = e.data.a;
    let sum = 0;
    for (let i = 0; i <= num; i++) {
        sum += i;
    }
    //将结果发送给主线程
    this.postMessage({ result: sum });
    //执行完毕自己关闭线程 
    this.close();
}