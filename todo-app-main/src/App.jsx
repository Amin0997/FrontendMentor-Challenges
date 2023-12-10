import './App.css'
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header'
import TodoContainer from './helpers/TodoContainer'
import MainFooter from './helpers/MainFooter'

function App() {
  
  // ========== All btn ==========
  const [todoList, setInTodoList] = useState([])
  const [allClicked, setIsAllClicked] = useState(true)

  console.log(todoList)


  // ========== Active btn ==========
  const [activeList, setInActiveList] = useState([])
  const [isActiveClicked, setIsActiveClicked] = useState()

  const updateActiveState = (id, state) => {
    const updatedTodoList = todoList.map((todo) =>
      todo.id === id 
      ? { ...todo, active: state, completed: false } 
      : todo
    );
    setInTodoList(updatedTodoList);
  };

  useEffect(() => {
    setInActiveList(todoList.filter((todoItem) => todoItem.active === true));
  }, [todoList]);

  // ========== Completed btn ==========
  const [completedList, setInCompletedList] = useState([])
  const [isCompletedClicked, setIsCompletedClicked] = useState()

  const updateCompletedState = (id, state) => {
    const updatedTodoList = todoList.map((todo) =>
      todo.id === id 
      ? { ...todo, active: false, completed: state } 
      : todo
    );
    setInTodoList(updatedTodoList);
  };

  useEffect(() => {
    setInCompletedList(todoList.filter((todoItem) => todoItem.completed === true));
  }, [todoList]);

  // ========== Clear completed btn ========== 

  const clearCompleted = (btnState) => {
    if (btnState) {
      setInTodoList(todoList.filter((todoItem) => todoItem.completed === false));
    }
  }

  // ========== Add and delete Todo ========== 

  const addTodo = (newTodo) => {
    const todoItem = {
      id: uuidv4(),
      value: newTodo,
      active: false,
      completed: false,
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
        onTodoValueChange={addTodo}
      />

      <main className='w-ful flex flex-col items-center -mt-14 overflow-hidden rounded-lg bg-white dark:bg-veryDarkDesaturatedBlue'>

      {
        (allClicked) && todoList.map((todoItem) => (
          <TodoContainer
            key={todoItem.id}
            id={todoItem.id}
            todoValue={todoItem.value}
            todoActiveState={todoItem.active}
            todoCompletedState={todoItem.completed}
            onDelete={() => deleteTodo(todoItem.id)}
            todoActiveUpdate={(state) => updateActiveState(todoItem.id, state)}
            todoCompletedUpdate={(state) => updateCompletedState(todoItem.id, state)}
          />
        ))
      }

      {
        (isActiveClicked) && activeList.map((todoItem) => (
          <TodoContainer
            key={todoItem.id}
            id={todoItem.id}
            todoValue={todoItem.value}
            todoActiveState={todoItem.active}
            onDelete={() => deleteTodo(todoItem.id)}
            todoActiveUpdate={(state) => updateActiveState(todoItem.id, state)}
            todoCompletedUpdate={(state) => updateCompletedState(todoItem.id, state)}
          />
        ))
        }

      {
        (isCompletedClicked) && completedList.map((todoItem) => (
          <TodoContainer
            key={todoItem.id}
            id={todoItem.id}
            todoValue={todoItem.value}
            todoCompletedState={todoItem.completed}
            onDelete={() => deleteTodo(todoItem.id)}
            todoActiveUpdate={(state) => updateActiveState(todoItem.id, state)}
            todoCompletedUpdate={(state) => updateCompletedState(todoItem.id, state)}
          />
        ))
      }

        <MainFooter 
          todoListCounter={todoList.length}
          activeListCounter={activeList.length}
          completeListCounter={completedList.length}
          allBtnClicked={allBtnState => setIsAllClicked(allBtnState)}
          activeBtnClicked={activeBtnState => setIsActiveClicked(activeBtnState)}
          completedBtnClicked={completedBtnState => setIsCompletedClicked(completedBtnState)}
          clearCompletedClicked={(clearBtnState) => clearCompleted(clearBtnState)}
        />
      </main>
    </div>
  )
}

export default App
