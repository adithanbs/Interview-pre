const BoardColumn = ({ title, todos, onMoveForward, onMoveBackward, onDelete, handleDragStart, handleOnDrop }) => {
  return (
    <div className="board-column col-3" onDragOver={(e) => e.preventDefault()} onDrop={(e) => {
      handleOnDrop(e, title);
    }}>
      <h3>{title}</h3>
      <div>
        {todos.map((todo) => (
          <><p key={todo.id} draggable onDragStart={(e) => {
      handleDragStart(e, title, todo.id);
      }}>{todo.title}</p><button onClick={() => onMoveForward(todo.id)}>⏩</button><button onClick={() => onMoveBackward(todo.id)}>⏪</button><button onClick={() => onDelete(todo.id)}>❌</button></>
        ))}
      </div> 
    </div>
  );
};

export default BoardColumn;