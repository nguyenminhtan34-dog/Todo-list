// import Todo from "./Todo";
import { useState } from "react";
const ShowTodoList = (props) => {
  const {
    listTodo,
    isEmpty,
    editTodo,
    handleChangeEditTodo,
    handleEditTodo,
    handleDeleteTodo,

    // handleComplete,
  } = props;

  const [isCompleted, setIsCompleted] = useState(false);
  const handleComplete = (id) => {
    listTodo.map((item) => {
      item.id === id && setIsCompleted(!item.isComplete);
    });
  };
  return (
    <div className="task-todo">
      <h3 style={{ fontWeight: "400" }}>Task To Do</h3>
      <div className="list-todo">
        {listTodo.map((item, index) => {
          return (
            <div key={item.id} className="todo-box">
              {isEmpty === true ? (
                <div className="todo-name">
                  <span
                    style={{
                      textDecoration:
                        isCompleted === true ? "line-through" : "none",
                    }}
                  >
                    {item.title}
                  </span>
                </div>
              ) : (
                <>
                  {editTodo.id === item.id ? (
                    <div>
                      <input
                        className="input-update"
                        value={editTodo.title}
                        onChange={(event) => handleChangeEditTodo(event)}
                      />
                    </div>
                  ) : (
                    <div>{item.title}</div>
                  )}
                </>
              )}
              <div>
                <button className="btn" onClick={() => handleEditTodo(item)}>
                  <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button className="btn" onClick={() => handleComplete(item.id)}>
                  <i className="fas fa-check-circle"></i>
                </button>

                <button
                  className="btn"
                  onClick={() => handleDeleteTodo(item.id)}
                >
                  <i className="fa-solid fa-trash-can"></i>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShowTodoList;
