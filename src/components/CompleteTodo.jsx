const style = {
    backgroundColor: "#c6ffe2",
    padding: "8px",
    margin: "2px",
    borderRadius: "8px"
  }

export const CompleteTodo = ({ completeTodo, onClickBack }) => {
    // return忘れてた
    return (
    <>
        <div style={style}>
        <p className="title">complete</p>
        <ul>
          {completeTodo.map((todo, index) => {
            return (
              <li key={{todo}+{index}}>
              <div className="row-list">
                <p>No.{index+1}: {todo}</p>
                <button onClick={() => onClickBack(index)}>back</button>
              </div>
            </li>
            )}
          )}
        </ul>
      </div>
    </>
    )
};