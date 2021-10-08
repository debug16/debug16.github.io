//轮播图类
class CarouselMap {
    constructor(box, map, width = 0, length = 0, count = 0, atuo = true, time = 5000, fun = () => { }) {
        this.box = box;         //轮播图盒子（包含下一页前一下等元素）
        this.map = map;         //需要移动的轮播图片
        this.width = width;     //单次轮播的单位长度
        this.length = length;   //轮播图片的个数
        this.count = count;     //当前轮播的页数
        this.fun = fun;         //回调函数
        this.time = time;       //轮播间隔时间(ms)
        this.clock;             //计时器
        this.atuo = atuo;       //是否自动轮播
    }

    //开始轮播，time开始时间 
    start(fun = this.fun) {
        if (this.atuo) {
            this.clock = setInterval(() => {
                this.reset(1);
                this.move(this.count, fun);
            }, this.time, fun)
        } else {
            this.clock = setInterval(() => {
                this.reset(1);
                this.move(this.count, fun);
                if (this.count === this.length - 1)
                    this.stop();
            }, this.time, fun)
        }

    }

    //轮播图移动
    move(count = this.count, fun = this.fun) {
        const offset = this.width * -count;          //偏移量
        this.map.css({
            transform: `translateX(${offset}px)`,
        })
        fun(this);
    }

    //停止轮播
    stop() {
        clearInterval(this.clock);
    }

    //下一页
    next() {
        if (this.count < this.length - 1) {
            this.reset(1);
            this.move(this.count, this.fun);
            this.stop();
            this.start(this.fun);
        }
    }

    //上一页
    prev() {
        if (this.count != 0) {
            this.reset(-1);
            // console.log(this.fun);
            this.move(this.count, this.fun);
            this.stop();
            this.start();
        }

    }

    //重置计数器
    reset(add = 0) {
        this.count += add;
        this.count %= this.length
    }

}

$(() => {
    //大轮播图
    {
        function callback(obj) {
            if (obj.count === obj.length - 1) {
                $(perv).removeClass('noDown');
                $(next).addClass('noDown');
            } else if (obj.count === 0) {
                $(next).removeClass('noDown');
                $(perv).addClass('noDown');
            } else {
                $(box).removeClass('noDown');
            }
            $(button).removeClass('check');
            $(button).eq(obj.count).addClass('check');
        }

        let time = 5500;       //轮播间隔时间(ms)
        let atuo = true;       //是否自动轮播
        let count = 0;
        const box = $('.map-content');                      //整个轮播图盒子（包含了上一页，下一页，点击按钮等）
        const map = $(box).find('.map');                    //需要偏移的轮播图元素
        let width = $(map).width();                         //轮播图长度
        let length = $(map).children('div').length;         //轮播图个数

        const perv = $(box).find('.jsPrev');            //上一页
        const next = $(box).find('.jsNext');            //下一页
        const button = $(box).find('.category span');   //按钮

        //定义一个大轮播图对象
        var bigMap = new CarouselMap(box, map, width, length, count, atuo, time, callback);

        //开始轮播
        bigMap.move();    //初始化
        bigMap.start(callback);

        //绑定上一页事件
        $(perv).click(function () {
            bigMap.prev();
        })

        //绑定下一页事件
        $(next).click(function () {
            bigMap.next();
        })

        //绑定按钮点击事件
        $(button).click(function (e) {
            let index = $(button).index(this);
            bigMap.count = index;
            bigMap.move();
            bigMap.stop();
            bigMap.start();
        })
    }

    //小轮播图
    {

        function getTIme() {
            let d = new Date();
            let ms = d.getTime();
            return ms;
            // console.log(ms);
        }

        function callback(obj) {
            if (obj.count === obj.length - 1) {
                $(perv).removeClass('noDown');
                $(next).addClass('noDown');
            } else if (obj.count === 0) {
                $(next).removeClass('noDown');
                $(perv).addClass('noDown');
            } else {
                $(box).find('.noDown').removeClass('noDown');
            }
        }

        let time = 5000;       //轮播间隔时间(ms)
        let atuo = true;       //是否自动轮播
        let count = 0;

        const box = $('.view');                                         //整个轮播图盒子（包含了上一页，下一页，点击按钮等）
        const map = $(box).find('.swiper-wrapper');                    //需要偏移的轮播图元素
        let margin = Number($(map).children('div').eq(1).css("marginLeft").replace(/px/, ''))   //margin值
        let width = $(map).width() + margin;                     //轮播图长度
        let length = $(map).children('div').length / 5;         //轮播个数

        const perv = $(box).find('.jsPrev');            //上一页
        const next = $(box).find('.jsNext');            //下一页

        //定义一个小轮播图对象
        var smallMap = new CarouselMap(box, map, width, length, count, atuo, time, callback);

        //开始轮播
        smallMap.move();    //初始化
        smallMap.start(callback);

        //绑定上一页事件
        $(perv).click(function () {
            smallMap.prev();
        })

        //绑定下一页事件
        $(next).click(function () {
            smallMap.next();
        })

        //使a标签不能拖动
        $(box).find('a').attr({
            "ondragstart": "return false",
            'href': "javascript:void(0)"
        });

        //小轮播图滑动
        {
            $(box).mousedown(function (event) {
                smallMap.stop();

                let x = event.pageX;//记录按下鼠标时x轴坐标
                let left = Number(smallMap.map.css('transform').substring(7).split(',')[4]);//取出当前轮播偏移值
                let x1 = 0; //用来记录鼠标实时移动的x轴坐标

                $(box).mousemove(function (event) {
                    x1 = event.pageX - x;   //计算偏移量
                    smallMap.map.css({
                        transform: `translateX(${left + x1}px)`
                    })
                });

                $(document).mouseup(function (event) {

                    //移除鼠标滑动事件
                    let maxLeft = (smallMap.length - 1) * -(smallMap.width);    //最大偏移量
                    let left = Number(smallMap.map.css('transform').substring(7).split(',')[4]);//取出偏移值

                    if (left > 0) { //判断边界
                        smallMap.move(0, callback);
                    } else if (left < maxLeft) {
                        smallMap.move(smallMap.length - 1, callback);
                    }

                    $(box).off('mousemove');   //移除鼠标滑动事件
                    $(this).off('mouseup');

                    smallMap.count = Math.ceil(-left / smallMap.width);    //向下取整
                    smallMap.count > smallMap.length - 1 ? smallMap.count = smallMap.length - 1 : '';   //防止小于0

                    smallMap.fun(smallMap)
                    smallMap.start();   //继续轮播


                })
            })

        }

    }

    //顶部警示轮播
    {
        function callback(obj) {
            if (obj.count === obj.length - 1) {
                $(perv).removeClass('noDown');
                $(next).addClass('noDown');
            } else if (obj.count === 0) {
                $(next).removeClass('noDown');
                $(perv).addClass('noDown');
            } else {
                $(box).find('.noDown').removeClass('noDown');
            }
        }

        let time = 6000;       //轮播间隔时间(ms)
        let atuo = true;       //是否自动轮播
        let count = 0;

        const box = $('.header-note');          //整个轮播图盒子（包含了上一页，下一页，点击按钮等）
        const map = $(box).find('.text');       //需要偏移的轮播图元素
        let width = $(map).width();                     //轮播图长度
        let length = $(map).children('div').length;     //轮播个数

        const perv = $(box).find('.jsPrev');            //上一页
        const next = $(box).find('.jsNext');            //下一页

        //定义一个轮播图对象
        var warnMap = new CarouselMap(box, map, width, length, count, atuo, time, callback);

        //开始轮播
        warnMap.move();    //初始化
        warnMap.start(callback);

        //绑定上一页事件
        $(perv).click(function () {
            warnMap.prev();
        })

        //绑定下一页事件
        $(next).click(function () {
            warnMap.next();
        })



    }


    //返回顶部函数
    function goTop() {
        $('body,html').animate({ scrollTop: 0 }, 500);
    }

    //固定头部 及缩放动画函数
    function fixed(flag = false) {
        if (flag) {
            header.css({ top: '-30px' });
            searchBox.addClass('layout_search');
            searchBox.find('span').hide();
            searchBox.find('input').hide();
            LogoBox.addClass('newLogo')
        } else {
            header.css({ top: '0px' });
            searchBox.removeClass('layout_search');
            searchBox.find('span').show();
            searchBox.find('input').show();
            LogoBox.removeClass('newLogo')
        }
    }

    const hight = Number($('.header-info').css('height').replace(/px/, ''));    //  超过div的高度

    //中间缩放
    const layoutHeader = $('.layout-header');           //整个头部
    const header = layoutHeader.find('.header');        //头部
    const LogoBox = header.find('.header-logo');     //中间logo部位 包含搜索等
    const logo = LogoBox.find('.logo');              //logo图
    const searchBox = LogoBox.find('.logo-right');      //搜索，购物车,登录注册

    let scroll;     //滚动条高度

    let off;    //用来表示头部的变化

    //检测滚动条高度事件
    $(window).scroll(() => {
        scroll = $(window).scrollTop();
        if (scroll > hight) {

            //头部导航缩小
            if (!off) {
                fixed(true);
                off = true;
            }

            top.css('display') === 'none' ? top.fadeIn(300) : ''; //显示返回顶部按钮
        } else {

            //头部导航还原
            if (off) {
                fixed(false);
                off = false;
            }

            top.css('display') === 'block' ? top.fadeOut(300) : '';//隐藏返回顶部按钮
        }
    })

    //检测窗口大小变化
    $(window).resize(() => {
        bigMap.width = bigMap.map.width();

        let margin = Number(smallMap.map.children('div').eq(1).css("marginLeft").replace(/px/, ''))
        smallMap.width = smallMap.map.width() + margin;

        warnMap.width = warnMap.map.width();

        bigMap.move();
        smallMap.move();
        warnMap.move();
    })

    const top = $('.back-to-top');  //回到顶部的div
    //回到顶部事件
    $(top).click(() => {
        goTop();
    })

    const Isearch = $('.I_search');  //搜索图标按钮
    //点击搜索显示input
    $(Isearch).click(function () {
        const input = $(this).siblings('input');
        input.show();
        input.focus();  //自动聚焦
    })

    const search = $('#search');    //搜索按钮
    //失去焦点
    $(search).blur(function () {
        //判断头部的状态
        if (off) {
            $(this).hide();
        }
    })

    const sale = $('.sale-btn') //优惠展开按钮
    const saleBox = sale.siblings('.sale-warp');    //优惠信息盒子
    let saleFlag = false;   //展开 收起状态记录

    //优惠展开 收起
    $(sale).click(function () {
        saleBox.stop();
        saleBox.slideToggle(200);
        if (!saleFlag) {
            $(this).find('a').text('收起优惠')
            saleFlag = true;
        } else {
            $(this).find('a').text('更多优惠')
            saleFlag = false;
        }
    })

    //检测自动登录
    {
        function getCookie(name) {
            const cookie = document.cookie;
            if (cookie.length > 1) {
                const arrCookie = cookie.split(';');
                for (let i = 0; i < arrCookie.length; i++) {
                    let start = arrCookie[i].indexOf(name + '=');   //
                    if (start > -1) {
                        start += (name.length + 1);
                        return arrCookie[i].slice(start);
                    }
                }
            }
            return '';
        }

        function getUrlArgument(name) {
            const argument = window.location.search.slice(1);
            if (argument.length > 0) {
                const arrStr = argument.split('&');
                for (let i = 0; i < arrStr.length; i++) {
                    let start = arrStr[i].indexOf(name + '=');
                    if (start > -1) {
                        start += (name.length + 1);
                        return arrStr[i].slice(start);
                    }
                }
            }
            return '';
        }

        const urlArgument = window.location.search.slice(1)

        if (urlArgument.length > 1) {
            const emailU = decodeURIComponent(getUrlArgument('Email'));
            const passWordU = decodeURIComponent(getUrlArgument('Password'));

            const email = window.atob(getCookie('email'));
            const passWord = window.atob(getCookie('passWord'));

            if (email && passWord && emailU && passWordU) {
                if (emailU === email && passWordU === passWord) {
                    const name = $('.login').find('span');
                    const userName = window.atob(getCookie('userName'));
                    name.text(userName);
                }
            }
        }
    }
})
