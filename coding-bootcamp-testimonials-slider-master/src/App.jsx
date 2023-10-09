import './styles/reset.css'
import './styles/common.css'
import leftArrow from './assets/images/icon-prev.svg'
import rightArrow from './assets/images/icon-next.svg'
import Card from './components/Card/Card'
import data from '../data.json'
import { useState } from 'react'

function App() {
    
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = ()=> {
        const newIndex = currentIndex === 0 ? data.length -1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }

    const nextSlide = ()=> {
        const newIndex = currentIndex === data.length -1 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }

    return (
        <div className="wrapper flex justify-center items-center">
            
            <Card text={data[currentIndex].text} author={data[currentIndex].author} authorPost={data[currentIndex].authorPost} authorImage={data[currentIndex].authorImage}/>

            <section className='flex w-1/10 bg-white justify-between items-center rounded-3xl overflow-hidden relative top-52 left-28'>
                    <button onClick={prevSlide} className="cursor-pointer hover:bg-slate-100 p-3 w-10"><img className="h-3" src={leftArrow} alt="" /></button>
                    <button onClick={nextSlide} className="cursor-pointer hover:bg-slate-100 p-3 w-10"><img className="h-3" src={rightArrow} alt="" /></button>
            </section>

        </div>
    )
}

export default App
