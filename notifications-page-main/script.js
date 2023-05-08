let unreadMark = '<span class="not-readed_mark"></span>';
const unreadCounter = document.querySelector('.header__counter');
const notificationList = document.querySelectorAll(".notification__box");

function GetUnreadNum() {
    let count = 0
    for (let i = 0; i < notificationList.length; i++) {
        if (notificationList[i].innerHTML.includes(unreadMark)) {
            count++
        }
    }
    unreadCounter.innerHTML = count;
}
GetUnreadNum()

for (let i = 0; i < notificationList.length; i++) {
    notificationList[i].addEventListener('click', () => {
        notificationList[i].innerHTML = notificationList[i].innerHTML.replace(unreadMark,"");
        notificationList[i].style.backgroundColor = "#fff";
        GetUnreadNum()
    }) 
}

function MarklAllRead() {
    notificationList.forEach(element => {
        element.innerHTML = element.innerHTML.replace(unreadMark,"");
        element.style.backgroundColor = "#fff";
        GetUnreadNum()
    })
}


