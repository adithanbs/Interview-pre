const BoardColumn = ({ title, todos, onMoveForward, onMoveBackward, onDelete }) => {
  return (
    <div className="board-column col-3">
      <h3>{title}</h3>
      <ul>
        {todos.map((todo) => (
          <><li key={todo.id}>{todo.title}</li><button onClick={() => onMoveForward(todo.id)}>⏩</button><button onClick={() => onMoveBackward(todo.id)}>⏪</button><button onClick={() => onDelete(todo.id)}>❌</button></>
        ))}
      </ul>
      
    </div>
  );
};

export default BoardColumn;