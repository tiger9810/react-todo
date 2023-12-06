const style = {
    backgroundColor: "#c6f3ff",
    padding: "8px",
    margin: "2px",
    borderRadius: "8px"
  }

export const IncompleteTodo = ({incompleteTodo, onClickDone, onClickDelete}) => {
    // return忘れてた
    return (
    <>
    <div style={style}>
        <p className="title">incomplete</p>
        <ul>
        {/* map関数の第二引数にはindexが入る */}
        {incompleteTodo.map((todo, index) => {
        return (
            <li key={{todo}+{index}}>
            <div className="row-list">
            <p>No.{index+1}:{todo}</p>
            <button onClick={() => onClickDone(index)}>Done</button>
            <button onClick={() =>onClickDelete(index)}>Delete</button>
            </div>
        </li>
        )
        })}

        </ul>
    </div>
    </>
    )
};
