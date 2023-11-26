import { useState, useEffect } from 'react';
import { PlusSvg, MinusSvg } from '../assets/images/SvgIcons';

export default function IncrementDecrementBtns({ score, userName, id }) {
    const [count, setCount] = useState(score);

    const increment = () => {
        if (count <= score) {
            setCount(count + 1);
        }
    }

    const decrement = () => {
        if (count >= score) {
            setCount(count - 1);
        }
    }

    useEffect(() => {
        const storedCount = localStorage.getItem(`${userName}-${id}`);
        if (storedCount !== null) {
            setCount(parseInt(storedCount));
        }
    }, [userName, id]);

    useEffect(() => {
        localStorage.setItem(`${userName}-${id}`, count);
    }, [count, userName, id]);

    return (
        <section className="h-[100px] flex flex-col row-span-2 justify-center items-center -mt-7 gap-y-2 bg-VeryLightGray rounded-xl">
                <button 
                    className='fill-LightGrayishBlue px-1 py-2 hover:fill-GrayishBlue'
                    onClick={increment}
                    >
                    {PlusSvg}
                </button>
                <p className='text-base font-bold text-ModerateBlue'>
                    {count}
                </p>
                <button 
                    className='fill-LightGrayishBlue px-1 py-2 hover:fill-GrayishBlue'
                    onClick={decrement}>
                    {MinusSvg}
                </button>
            </section>
    )
}
