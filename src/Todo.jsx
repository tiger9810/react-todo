import { useState } from "react";
import "./components/Todo.css";

export const Todo = () => {
  const [incompleteTodo, setIncompleteTodo] = useState(["todo1", "todo2"]);
  const [completeTodo, setCompleteTodo] = useState(["done1", "done2"]);
  const [todoText, setTodoText] = useState("");

  const onChangeText = (event) => setTodoText(event.target.value);
  
  const onClickAdd = () => {
    if (todoText === "") return;
    // 未完了のTodoリスト+新しいTodoリストの配列を作成
    const newTodo = [...incompleteTodo, todoText];
    setIncompleteTodo(newTodo);
    setTodoText("");
  };
  return (
    <div className="container">
      <div className="input-area">
        <input type="text" placeholder="Todo" value={todoText} onChange={onChangeText}/>
        <button onClick={onClickAdd}>Add</button>
      </div>

      <div className="incomplete-area">
        <p className="title">incomplete</p>
        <ul>
          {incompleteTodo.map((todo) => {
            return (
              <li key={todo}>
              <div className="row-list">
                <p>{todo}</p>
                <button>Done</button>
                <button>Delete</button>
              </div>
            </li>
            )
          })}

        </ul>
      </div>

      <div className="complete-area">
        <p className="title">complete</p>
        <ul>
          {completeTodo.map((todo) => {
            return (
              <li key={todo}>
              <div className="row-list">
                <p>{todo}</p>
                <button>back</button>
              </div>
            </li>
            )}
          )}
        </ul>
      </div>
    </div>
  );
};