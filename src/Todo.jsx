import { useState } from "react";
import "./components/Todo.css";

export const Todo = () => {
  const [incompleteTodo, setIncompleteTodo] = useState(["todo1", "todo2"]);
  const [completeTodo, setCompleteTodo] = useState(["done1", "done2"]);
  const [todoText, setTodoText] = useState("");

  // inputテキストの取得
  const onChangeText = (event) => setTodoText(event.target.value);

  // deleteボタンの機能
  const onClickDelete = (index) => {
    // 現在のTodoリストを取得
    const deleteTodo = [...incompleteTodo];
    // 取得したTodoリストからindex番目の要素を削除
    deleteTodo.splice(index, 1);
    setIncompleteTodo(deleteTodo);
  };

  // doneボタンの機能
  const onClickDone = (index) => {
    // 現在のTodoリストを取得
    const doneTodo = [...incompleteTodo];
    // 取得したTodoリストからindex番目の要素を削除
    doneTodo.splice(index, 1);
    setIncompleteTodo(doneTodo);
    // 取得したTodoリストからindex番目の要素を取得
    const newDoneTodo = [...completeTodo, incompleteTodo[index]];
    setCompleteTodo(newDoneTodo);
  };

  // backボタンの機能
  const onClickBack = (index) => {
    // 現在のTodoリストを取得
    const backTodo = [...completeTodo];
    // 取得したTodoリストからindex番目の要素を削除
    backTodo.splice(index, 1);
    setCompleteTodo(backTodo);
    // 取得したTodoリストからindex番目の要素を取得
    const newBackTodo = [...incompleteTodo, completeTodo[index]];
    setIncompleteTodo(newBackTodo);
  };

// addボタンの機能
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
          {/* map関数の第二引数にはindexが入る */}
          {incompleteTodo.map((todo, index) => {
            return (
              <li key={todo}>
              <div className="row-list">
                <p>{todo}</p>
                <button onClick={() => onClickDone(index)}>Done</button>
                <button onClick={() =>onClickDelete(index)}>Delete</button>
              </div>
            </li>
            )
          })}

        </ul>
      </div>

      <div className="complete-area">
        <p className="title">complete</p>
        <ul>
          {completeTodo.map((todo, index) => {
            return (
              <li key={todo}>
              <div className="row-list">
                <p>{todo}</p>
                <button onClick={() => onClickBack(index)}>back</button>
              </div>
            </li>
            )}
          )}
        </ul>
      </div>
    </div>
  );
};