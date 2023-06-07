import dataJson from "./data.json" assert { type: "json" };

const allTotalTime = document.querySelectorAll('.total-time')
const allLastTime = document.querySelectorAll('.last-time')

const dailyBtn = document.querySelector(".daily-btn")
const weeklyBtn = document.querySelector(".weekly-btn")
const monthlyBtn = document.querySelector(".monthly-btn")

dailyBtn.addEventListener('click', ()=> {
    for (let i=0;i<allTotalTime.length; i++) {
        allTotalTime[i].textContent = dataJson[i].timeframes.daily.current + 'hrs';
        allLastTime[i].textContent = 'Last Day - ' + dataJson[i].timeframes.daily.previous + 'hrs';
    }
})

weeklyBtn.addEventListener('click', ()=> {
    for (let i=0;i<allTotalTime.length; i++) {
        allTotalTime[i].textContent = dataJson[i].timeframes.weekly.current + 'hrs';
        allLastTime[i].textContent = 'Last Week - ' + dataJson[i].timeframes.weekly.previous + 'hrs';
    }
})

monthlyBtn.addEventListener('click', ()=> {
    y.current + 'hrs';
        allLastTime[i].textContent = 'Last Month - ' + dataJson[i].timeframes.monthly.previous + 'hrs';
    }
})
