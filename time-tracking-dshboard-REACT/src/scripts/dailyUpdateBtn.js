import dataJson from "../data.json" 

export default function dailyUpdateBtn() {

const allTotalTime = document.querySelectorAll('.total-time');
const allLastTime = document.querySelectorAll('.last-time');

for (let i = 0; i < allTotalTime.length; i++) {
    allTotalTime[i].textContent = dataJson[i].timeframes.daily.current + 'hrs';
    allLastTime[i].textContent = 'Last Day - ' + dataJson[i].timeframes.daily.previous + 'hrs';
}
}
