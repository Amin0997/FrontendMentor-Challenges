import { useState } from 'react';
import './SwitchBtn.scss'

function SwitchBtn({onToggle}) {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        onToggle(!isChecked);
    };
    return (
        <div className="mt-[60px] ml-24 flex items-center gap-x-4">
            <p className=' text-xs text-slate-500 opacity-90'>Monthly Billing</p>

            <div className="ckeckbox__container">
                <input 
                    type="checkbox"  
                    id="ckeckbox" 
                    checked={isChecked} 
                    onChange={handleCheckboxChange} 
                    className='ckeckbox__input hidden'/>
                <label htmlFor="ckeckbox" className="ckeckbox__toggle flex w-11 h-6 rounded-xl bg-slate-300 cursor-pointer relative items-center p-1"></label>
            </div>

            <p className=' text-xs text-slate-500 opacity-90 '>Yearly Billing</p>

            <p className='text-[10px] font-extrabold text-orange-500 bg-orange-100 rounded-lg px-2 py-0.5 -ml-1'> 25% discount</p>
        </div>
    )
}

export default SwitchBtn