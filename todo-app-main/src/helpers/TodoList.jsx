import TodoContainer from '../components/TodoContainer/TodoContainer'


export default function TodoList({todoList, setInTodoList}) {

	const updateCompletedState = (id, state) => {
    const updatedTodoList = todoList.map((todo) =>
      todo.id === id 
      ? { ...todo, active: false, completed: state } 
      : todo
    );
    setInTodoList(updatedTodoList);
  };

	const updateActiveState = (id, state) => {
    const updatedTodoList = todoList.map((todo) =>
      todo.id === id 
      ? { ...todo, active: state, completed: false } 
      : todo
    );
    setInTodoList(updatedTodoList);
  };

	const deleteTodo = (id) => {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);
    setInTodoList(updatedTodoList);
  };

	return (
			todoList.map((todoItem) => (
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
	)
}
