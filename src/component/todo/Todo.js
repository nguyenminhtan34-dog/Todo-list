import { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Todo.scss";
import AddTodo from "./AddTodo";
import ShowTodoList from "./ShowTodoList";

const Todo = () => {
  const initialState = JSON.parse(localStorage.getItem("listTodo")) || [];
  const [todo, setTodo] = useState("");
  const [listTodo, setListTodo] = useState(initialState);
  const [editTodo, setEditTodo] = useState({});
  let isEmpty = Object.keys(editTodo).length === 0;
  useEffect(() => {
    localStorage.setItem("listTodo", JSON.stringify(listTodo));
  }, [listTodo]);

  const handleDeleteTodo = (id) => {
    let currentList = [...listTodo];
    currentList = listTodo.filter((item) => item.id !== id);
    setListTodo(currentList);
  };
  const handleEditTodo = (todo) => {
    let isEmpty = Object.keys(editTodo).length === 0;
    if (isEmpty === false && editTodo.id === todo.id) {
      let listTodoCopy = [...listTodo];
      let objIndex = listTodoCopy.findIndex((item) => item.id === todo.id);
      listTodoCopy[objIndex].title = editTodo.title;
      setListTodo(listTodoCopy);
      setEditTodo({});
      return;
    }
    setEditTodo(todo);
  };

  const handleChangeEditTodo = (event) => {
    let editTodoCopy = { ...editTodo };
    editTodoCopy.title = event.target.value;
    setEditTodo(editTodoCopy);
  };
  return (
    <div className="todo-wrapper">
      <AddTodo
        todo={todo}
        setTodo={setTodo}
        listTodo={listTodo}
        setListTodo={setListTodo}
      />
      <ShowTodoList
        listTodo={listTodo}
        isEmpty={isEmpty}
        editTodo={editTodo}
        handleChangeEditTodo={handleChangeEditTodo}
        handleEditTodo={handleEditTodo}
        handleDeleteTodo={handleDeleteTodo}
        // handleComplete={handleComplete}
        // isCompleted={isCompleted}
      />

      {/* <div className="task-complete">
          <h3>Task Complete</h3>
        </div> */}
    </div>
  );
};
export default Todo;
