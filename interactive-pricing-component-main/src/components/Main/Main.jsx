import { useState } from "react";
import './Main.scss'
import SwitchBtn from "../../helpers/SwitchBtn/SwitchBtn";

function Main() {

        const [sliderValue, setSliderValue] = useState(0);
        const [isYearlyBilling, setIsYearlyBilling] = useState(false);

        const handleSliderChange = (event) => {
            const newIndex = parseInt(event.target.value);
            setSliderValue(newIndex);
        };

        const handleBillingToggle = (isChecked) => {
            setIsYearlyBilling(isChecked);
        };

        const pageviewsOptions = [
            { pageviews: "10K", price: 8 },
            { pageviews: "50K", price: 12 },
            { pageviews: "100K", price: 16 },
            { pageviews: "500K", price: 24 },
            { pageviews: "1M", price: 36 }
        ];

        const monthPrice = pageviewsOptions[sliderValue].price;
        const yearlyPrice = monthPrice * 12;

    return (
        <main className="main w-[540px] h-[255px] bg-white rounded-t-lg p-10 flex flex-col justify-start items-center">
            <title className="flex justify-between items-center w-full">
                <p className="uppercase tracking-widest font-extrabold text-[15px] text-slate-400">{pageviewsOptions[sliderValue].pageviews} pageviews</p>
                <p className="price font-extrabold text-4xl text-blue-950">${!isYearlyBilling ? monthPrice.toFixed(2) : (yearlyPrice - yearlyPrice * 0.25).toFixed(2)} <span className="font-semibold text-base align-top opacity-40">/ {!isYearlyBilling ? 'month' : 'year'}</span></p>
            </title>

            <input
                type="range"
                className="mt-12 w-full"
                max="4"
                min="0"
                value={sliderValue}
                onChange={handleSliderChange}
            />

            <SwitchBtn onToggle={handleBillingToggle}/>

        </main>
    );
}

export default Main;
