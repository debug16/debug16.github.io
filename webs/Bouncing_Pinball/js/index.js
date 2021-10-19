window.onload = () => {
    function createEl(elstr, className) {
        const el = document.createElement(elstr);
        el.className = className;
        document.body.appendChild(el)
        return el
    }

    function start(obj, time) {
        obj.timer = setInterval(function() {
            if (obj.left >= innerWidth - width) { //如果letf值大于等于了最右边
                obj.left = innerWidth - width;
                obj.x = false; //left该减了
            } else if (obj.left <= 0) { //如果letf值小于等于0就是在最左边了 
                obj.left = 0;
                obj.x = true; //left要该加了
            }

            if (obj.top >= innerHeight - width) { //如果top大于等于窗口高度 
                obj.top = innerHeight - width
                obj.y = false; //top该减了
            } else if (obj.top <= 0) { //如果top小于等于窗口高度 
                obj.top = 0;
                obj.y = true; //top该加了
            }

            obj.el.style.top = `${obj.top}px`
            obj.el.style.left = `${obj.left}px`

            obj.x ? obj.left += offset : obj.left -= offset;
            obj.y ? obj.top += offset : obj.top -= offset;

        }, time)

    }
    //设置元素大小
    const width = 66;
    //设置偏移量
    let offset = 3;
    //设置定时器间隔时间ms
    let time = 6;

    //暂停状态
    let stopState = false;

    //开始&暂停按钮
    const startButton = document.querySelector('button.start');
    const stopButton = document.querySelector('button.stop');

    //窗口的宽高
    let innerWidth = window.innerWidth;
    let innerHeight = window.innerHeight;

    //存放元素数据数组
    let elArr = [];

    //开始事件
    startButton.onclick = function() {
        //随机生成位置
        const left = Math.random() * (innerWidth - width);
        const top = Math.random() * (innerHeight - width);
        //创建一个div
        const el = createEl('DIV', 'round');

        //随机颜色和位置
        el.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
        el.style.left = `${left}px`;
        el.style.top = `${top}px`;
        el.style.width = `${width}px`;
        el.style.height = `${width}px`;

        //随机的方向(标识该往那个方向移动了四种情况) true (x右 y下) false (x左 y上);
        x = Math.random() > 0.5;
        y = Math.random() > 0.5;

        //单个圆的数据
        let obj = {
            x,
            y,
            el,
            top,
            left,
            timer: undefined, //定时器可用来停止
        };
        //开始走
        if (!stopState) start(obj, time)
            // start(obj, time)
            //推入数组
        elArr.push(obj);
    }

    //重置窗口大小事件
    window.onresize = function() {
        innerWidth = window.innerWidth;
        innerHeight = window.innerHeight;
    };

    //暂停
    stopButton.onclick = function() {
        if (!stopState) {
            elArr.forEach(obj => {
                if (obj.timer) {
                    clearInterval(obj.timer);
                    obj.timer = undefined;
                }

            });
            stopState = true
            this.innerText = '开始';
        } else {
            elArr.forEach(obj => {
                start(obj, time)
            })
            stopState = false;
            this.innerText = '暂停';
        }

    }
}