import dataJson from "../data.json" 

export default function weeklyUpdateBtn() {

const allTotalTime = document.querySelectorAll('.total-time');
const allLastTime = document.querySelectorAll('.last-time');

for (let i = 0; i < allTotalTime.length; i++) {
    allTotalTime[i].textContent = dataJson[i].timeframes.weekly.current + 'hrs';
    allLastTime[i].textContent = 'Last Week - ' + dataJson[i].timeframes.weekly.previous + 'hrs';
}
}
