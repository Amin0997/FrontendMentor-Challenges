import './App.css'
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header'
import TodoContainer from './helpers/TodoContainer'
import MainFooter from './helpers/MainFooter'

function App() {
  const [todoList, setInTodoList] = useState([])
  const [activeList, setInActiveList] = useState([])
  const [isActiveClicked, setIsActiveClicked] = useState()

  useEffect(() => {
    setInActiveList(todoList.filter((todoItem) => todoItem.completed === true));
  }, [todoList]);

  const addTodo = (newTodo) => {
    const todoItem = {
      id: uuidv4(),
      value: newTodo,
      completed: false,
    };
    setInTodoList([...todoList, todoItem]);
  };

  const updateTodoList = (id, state) => {
    const updatedTodoList = todoList.map((todo) =>
      todo.id === id ? { ...todo, completed: state } : todo
    );
    setInTodoList(updatedTodoList);
  };

  const deleteTodo = (id) => {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);
    setInTodoList(updatedTodoList);
  };

  return (
    <div className='bg-veryDarkBlue min-h-screen font-josefin flex flex-col items-center'>		

			<Header
        onTodoValueChange={addTodo}
      />

      <main className='w-ful flex flex-col items-center -mt-14 overflow-hidden rounded-lg bg-white dark:bg-veryDarkDesaturatedBlue'>

      {isActiveClicked 
        ?
        activeList.map((todoItem) => (
          <TodoContainer
            key={todoItem.id}
            id={todoItem.id}
            todoValue={todoItem.value}
            onDelete={() => deleteTodo(todoItem.id)}
            todoActive={(state) => updateTodoList(todoItem.id, state)}
          />
        ))
    : todoList.map((todoItem) => (
        <TodoContainer
          key={todoItem.id}
          id={todoItem.id}
          todoValue={todoItem.value}
          onDelete={() => deleteTodo(todoItem.id)}
          todoActive={(state) => updateTodoList(todoItem.id, state)}
        />
      ))}





        <MainFooter 
          todoListCounter={todoList.length}
          activeListCounter={activeList.length}
          activeBtnClicked={e => setIsActiveClicked(e)}
          CompletedBtnClicked={(e) => {e}}
          />
      </main>
    </div>
  )
}

export default App
