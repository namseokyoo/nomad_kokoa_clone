const clockContainer = document.querySelector(".status-bar__clock");
const clock = clockContainer.querySelector("span");

function getTime(){
    const time = new Date()
    const hour = time.getHours();
    const minute = time.getMinutes();
    clock.innerText=`${hour < 10 ? `0${hour}` : hour}:${minute < 10 ? `0${minute}` : minute}`;
}


function init(){
    setInterval(getTime, 1000)
}
init();