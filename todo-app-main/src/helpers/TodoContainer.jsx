import { useState } from 'react';
import { checkIcon, crossIcon } from '../assets/images/SvgIcons';

export default function TodoContainer({ 
  todoValue, 
  id, 
  onDelete, 
  todoActiveUpdate, 
  todoCompletedUpdate,
  todoActiveState,
  todoCompletedState
}) {
  const [isTodoActive, setTodoActive] = useState(todoActiveState);
  const [isTodoCompleted, setTodoCompleted] = useState(todoCompletedState);

  return (
    <div 
      id={id} 
      className='w-[540px] h-[65px] px-6 flex items-center justify-between border-b-[1px] border-slate-200 dark:border-slate-700'
    >
      <section className='flex w-full'>
        <button 
          className={`w-6 h-6 flex items-center justify-center ${(isTodoActive && !isTodoCompleted) && 'bg-gradient-to-br from-[#57ddff] to-[#c058f3]'} border-slate-400 border-[1px] border-solid border-opacity-20 rounded-full`}
          onClick={() => {
            setTodoActive(!isTodoActive);
            todoActiveUpdate(!isTodoActive);
          }}
        >
          {(isTodoActive && !isTodoCompleted) && checkIcon}
        </button>
        <p 
          className={`w-full mx-4 pl-2 text-[18px] font-normal tracking-tight cursor-pointer dark:text-lightGrayishBlue bg-inherit 
						${(isTodoCompleted) && 'line-through opacity-50'}`}
          onClick={() => {
            setTodoCompleted(!isTodoCompleted);
            todoCompletedUpdate(!isTodoCompleted);
          }}
        >
          {todoValue}
        </p>
      </section>

      <button 
        className='h-5 w-5'
        onClick={onDelete}
      >
        {crossIcon}
      </button>
    </div>
  );
}
