import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css'
import Header from './components/Header'
import TodoContainer from './helpers/TodoContainer'
import MainFooter from './helpers/MainFooter'

function App() {
  const [todoList, setInTodoList] = useState([])

  const AddTodo = (newTodo) => {
    const todoItem = {
      id: uuidv4(),
      value: newTodo,
    };
    setInTodoList([...todoList, todoItem]);
  };


  const deleteTodo = (id) => {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);
    setInTodoList(updatedTodoList);
  };

  return (
    <div className='bg-veryDarkBlue min-h-screen font-josefin flex flex-col items-center'>		

			<Header
        onTodoValueChange ={AddTodo}
      />

      <main className='w-ful flex flex-col items-center -mt-14 overflow-hidden rounded-lg bg-white dark:bg-veryDarkDesaturatedBlue'>

      {todoList.map((todoItem) => (
        <TodoContainer 
          key={todoItem.id}
          id={todoItem.id}
          todoValue={todoItem.value}
          onDelete={() => deleteTodo(todoItem.id)}
        />
      ))
      }

        <MainFooter 
          todoListCounter={todoList.length}/>
      </main>
    </div>
  )
}

export default App
