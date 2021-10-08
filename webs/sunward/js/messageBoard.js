$(() => {
    const inputBox = $('.inputBox');
    const userName = inputBox.find('input');
    const text = inputBox.find('textarea');

    const button = inputBox.find('button');
    const liuyan = $('.liuyan');
    let del = $(".delete");

    $(button).click(function() {
        const name = userName.val().trim();
        const neirong = text.val().trim();

        if (name !== "" && neirong !== "") {

            const date = new Date();
            const year = date.getFullYear().toString().padStart(2, '0');;
            const month = (date.getMonth() + 1).toString().padStart(2, '0');;
            const day = date.getDate().toString().padStart(2, '0');;
            const hour = date.getHours().toString().padStart(2, '0');;
            const minutes = date.getMinutes().toString().padStart(2, '0');;

            const html =
                `<div class="message">
                    <div class="headIcon"><img src="./images/headIcon.webp" alt="头像"></div>
                    <div class="contentBox">
                        <p class="userName">${name}</p>
                        <div class="content">${neirong}</div>
                    </div>
                    <div class="time">
                        <div class="delete"><span>×</span></div>
                        <span>${year}.${month}.${day} ${hour}:${minutes}</span>
                    </div>
                </div>`

            liuyan.after(html);
            del = $(".delete");

            $(del).click(function(e) {
                $(this).parents('.message').remove();
            })

        } else {
            alert('请输入用户名和内容！！')
        }
    })

    $(del).click(function(e) {
        $(this).parents('.message').remove();
    })

})