import dataJson from "../data.json" 

export default function monthlyUpdateBtn() {

const allTotalTime = document.querySelectorAll('.total-time');
const allLastTime = document.querySelectorAll('.last-time');

for (let i = 0; i < allTotalTime.length; i++) {
    allTotalTime[i].textContent = dataJson[i].timeframes.monthly.current + 'hrs';
    allLastTime[i].textContent = 'Last Month - ' + dataJson[i].timeframes.monthly.previous + 'hrs';
}
}
