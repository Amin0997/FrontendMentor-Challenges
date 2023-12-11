import { checkIcon, crossIcon } from '../../assets/images/SvgIcons';
import './TodoContainer.css'

export default function TodoContainer({ 
  todoValue, 
  id, 
  onDelete, 
  todoActiveUpdate, 
  todoCompletedUpdate,
  todoActiveState,
  todoCompletedState
}) {

  return (
    <div 
      id={id} 
      className='todo__wrapper'
    >
      <section className='flex w-full'>
        <button 
          className={`todo__active-btn 
            ${(todoActiveState && !todoCompletedState) && 'bg-gradient-to-br from-[#57ddff] to-[#c058f3]'}`}
          onClick={() => {
            todoActiveUpdate(!todoActiveState);
          }}
        >
          {(todoActiveState && !todoCompletedState) && checkIcon}
        </button>
        <p 
          className={`todo__text
						${(todoCompletedState) && 'line-through opacity-50'}`}
          onClick={() => {
            todoCompletedUpdate(!todoCompletedState);
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
