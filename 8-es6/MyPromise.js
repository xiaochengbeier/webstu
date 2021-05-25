class MyPronise {
    constructor(func) {
            this.PromiseStatus = "pedding";
            this.PromiseValue = "";
            this.reFun = null;
            this.rejFun = null;
            func(this.myResolve, this.myReject);
        }
        //表示触发已决状态
    myResolve = (resolve) => {
        console.log(this);
        this.PromiseValue = resolve;
        setTimeout(() => {
            this.reFun(this.PromiseValue);
        }, 1000);
    }
    myReject = (reject) => {
        this.PromiseValue = reject;
        setTimeout(() => {
            this.rejFun(this.PromiseValue);
        }, 1000);
    }
    mythen(...argus) {
        if (argus.length > 0) {
            this.reFun = argus[0];
            this.rejFun = argus[1];
        }
        return new MyPronise((resolve, reject) => {
            setTimeout(() => {
                resolve("secode");
            }, 3000);

        });
    }




}