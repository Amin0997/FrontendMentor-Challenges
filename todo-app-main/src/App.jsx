import { useState } from 'react';
import './App.css'
import Header from './components/Header'
import TodoContainer from './helpers/TodoContainer'
import MainFooter from './helpers/MainFooter'

function App() {
  const [todoList, setInTodoList] = useState([])

  const addTodo = (newTodo) => {
    setInTodoList([...todoList, newTodo])
  };

  const deleteTodo = (id) => {
    const updatedTodoList = todoList.filter((todo, index) => index !== id - 1);
    setInTodoList(updatedTodoList);
  };

  return (
    <div className='bg-veryDarkBlue min-h-screen font-josefin flex flex-col items-center'>		

			<Header
        onTodoValueChange ={addTodo}
      />

      <main className='w-ful flex flex-col items-center -mt-14 overflow-hidden rounded-lg bg-white dark:bg-veryDarkDesaturatedBlue'>

      {todoList.map((todoValue, i) => (
        <TodoContainer 
          key={i}
          id={i + 1}
          todoValue={todoValue}
          onDelete={() => deleteTodo(i + 1)}
        />
      ))
      }

        <MainFooter />
      </main>
    </div>
  )
}

export default App
