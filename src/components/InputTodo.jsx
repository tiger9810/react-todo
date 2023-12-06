const style = {
    backgroundColor: "#c6f",
    padding: "8px",
    margin: "2px",
    borderRadius: "8px"
  }

// propsで受け取るときは分割代入で受け取るとリファクタリングしやすかったりする
export const InputTodo = ({todoText, onChangeText, onClickAdd}) => {
    return (
        <>
            <div style={style}>
                <input type="text" placeholder="Todo" value={todoText} onChange={onChangeText} onSubmit={onClickAdd}/>
                <button onClick={onClickAdd}>Add</button>
            </div>
        </>
    )
};