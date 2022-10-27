const TodoItem = ({ todo, setRefresh }) => {

  const updateTodo = () => {
    todo.done = !todo.done

    fetch("http://localhost:3000/todos/" + todo.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(todo)
    }).then(() => {
      window.location.reload()
    });
  }

  const deleteTodo = () => {
    fetch("http://localhost:3000/todos/" + todo.id, {
      method: "DELETE",
    }).then(() => {
      window.location.reload()
    });
  }

  return (
    <li className={`${todo.done ? "checked" : ""}`}>
      <div onClick={updateTodo}>{todo.title}</div> 
      <span className="close" onClick={deleteTodo}>x</span>
    </li>
  );
};

export default TodoItem;
