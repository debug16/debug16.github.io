$(() => {

    //注册登录切换模块
    {
        //登录注册切换
        const container = $('.container');  //整个内容容器
        const but = $('.overlay-penal button');
        $(but).click(function () {
            container.toggleClass('penal-right-active');
        })
    }
    //注册登录功能模块
    {
        //正则
        const userName = /^[a-zA-Z0-9_]{5,15}$/; //帐号是否合法(字母开头，允许5-16字节，允许字母数字下划线)
        const email = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/; //Email地址
        const passWord = /^[a-z0-9_-]{6,16}$/;  //密码 (长度在6~16之间，只能包含字母、数字和下划线)

        //判断注册是否合法
        function isFormat(sginUp) {
            const userNameU = sginUp.find(":text").val();     //用户名
            const emailU = sginUp.find("input[name='Email']").val();  //邮箱
            const passwordU = sginUp.find(":password").val(); //密码
            if (userNameU && emailU && passwordU) {
                return (userName.test(userNameU) && email.test(emailU) && passWord.test(passwordU));
            } else {
                return false;
            }
        }

        //登录判断函数
        function validation(sginIn) {
            const emailI = sginIn.find("input[name='Email']").val();  //邮箱
            const passWordI = sginIn.find(":password").val(); //密码

            const email = window.atob(getCookie('email'));
            const passWord = window.atob(getCookie('passWord'));
            if (email && passWord && emailI && passWordI) {
                if (emailI === email && passWordI === passWord) {
                    return true;
                }
            }
            return false;
        }

        //获取cookie
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

        const sginIn = $('form[name="sgin_in"]');   //登录
        const sginUp = $('form[name="sgin_up"]');   //注册

        const submitU = sginUp.find('button');       //注册按钮
        const submitI = sginIn.find('button');       //登录按钮

        //点击注册按钮事件
        submitU.click(function () {
            const flag = isFormat(sginUp);
            if (flag) {
                const userNameU = sginUp.find(":text").val();     //用户名
                const emailU = sginUp.find("input[name='Email']").val();  //邮箱
                const passwordU = sginUp.find(":password").val(); //密码

                // 设置cookie
                document.cookie = `userName=${window.btoa(userNameU)};path=/`;
                document.cookie = `passWord=${window.btoa(passwordU)};path=/`;
                document.cookie = `email=${window.btoa(emailU)};path=/`;
                const jump = confirm("注册成功! 是否前往登录？");
                jump ? $('.overlay-penal button')[0].click() : '';
            } else
                alert("注册失败,请检查输入格式是否正确！");
        })

        //点击登录按钮事件
        submitI.click(() => {
            const flag = validation(sginIn);
            if (flag) {
                alert("登录成功！");
                $(sginIn).submit();
            }
            else
                alert("用户名或密码错误！");
        })
        
        //绑定回车事件
        $('.container').keydown(function (event) {
            if (event.keyCode === 13) {
                const flag = $('.penal-right-active');
                if (flag.length) {
                    sginUp.find('button').click();
                } else {
                    sginIn.find('button').click();
                }
            }
        })
    }
})
