import './App.css'
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header/Header'
import MainFooter from './components/MainFooter'
import TodoList from './helpers/TodoList';

function App() {
  
  // ========== All btn ==========
  const [todoList, setInTodoList] = useState([])
  const [allClicked, setIsAllClicked] = useState(true)

  // ========== Active btn ==========
  const [activeList, setInActiveList] = useState([])
  const [isActiveClicked, setIsActiveClicked] = useState()


  useEffect(() => {
    setInActiveList(todoList.filter((todoItem) => todoItem.active === true));
  }, [todoList]);

  // ========== Completed btn ==========
  const [completedList, setInCompletedList] = useState([])
  const [isCompletedClicked, setIsCompletedClicked] = useState()

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

  return (
    <div className='wrapper'>		

			<Header
        onTodoValueChange={addTodo}
      />

      <main className='main'>

      {
        (allClicked) && 
          <TodoList todoList={todoList} setInTodoList={setInTodoList}/>
      }

      {
        (isActiveClicked) && 
          <TodoList todoList={activeList} setInTodoList={setInActiveList}/>
        }

      {
        (isCompletedClicked) &&
          <TodoList todoList={completedList} setInTodoList={setInCompletedList}/>
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
