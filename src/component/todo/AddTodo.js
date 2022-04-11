const AddTodo = (props) => {
  const { todo, setTodo, setListTodo, listTodo } = props;
  const handleAddTodo = (todo) => {
    let todos = {
      id: Math.floor(Math.random() * 10000),
      title: todo,
      isComplete: false,
    };
    setListTodo([...listTodo, todos]);
    setTodo("");
  };
  return (
    <div>
      <h2 className="todo-title">What 's the plan for today?</h2>
      <div className="Task-name-container">
        <div>
          <span>Task Name</span>
          <div className="task-box">
            <input
              className="todo-input"
              placeholder="Enter your task, please..."
              value={todo}
              onChange={(event) => setTodo(event.target.value)}
            />
            <button className="add-btn btn" onClick={() => handleAddTodo(todo)}>
              {" "}
              + Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddTodo;
