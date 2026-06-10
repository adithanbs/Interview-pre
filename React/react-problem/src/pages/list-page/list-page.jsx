import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./list-page.css";
import { addTodo } from "../../store/todoSlice";
import BoardColumn from "../../components/board-coloum/board-coloum";


const ListPage = () => {
const [newTask, setNewTask] = useState('');
const[todos, setTodos] = useState([{
  id: crypto.randomUUID(),
  title: "Task 1",
  status: "NEW"
},
{  id: crypto.randomUUID(),
  title: "Task 2",
  status: "IN_PROGRESS"
},
{

  id: crypto.randomUUID(),
  title: "Task 3",
  status: "TESTING"
},
{

  id: crypto.randomUUID(),
  title: "Task 4",
  status: "COMPLETED"
}
]);
// const dispatch = useDispatch(); 
// const state = useSelector((s) => s.todos);
  const STATUS = [
    'NEW',
    'IN_PROGRESS',
    'TESTING',
    'COMPLETED'
  ];
const handleAddTodo = () => {
  setTodos([...todos, { id: crypto.randomUUID(), title: newTask, status: 'NEW' }]);
// dispatch({type: addTodo, payload: newTask});
}
const handleMoveForward = (id) => {
  setTodos(todos.map(todo => {
    if(todo.id === id) {
      const index = STATUS.indexOf(todo.status);
      if(index< STATUS.length - 1) {
        return {...todo, status: STATUS[index + 1]};
      }
    }
    return todo;
  }));
}
const handleMoveBackward = (id) => {
  setTodos(todos.map(todo => {
    if(todo.id === id) {
      const index = STATUS.indexOf(todo.status);
      if(index > 0) {
        return {...todo, status: STATUS[index - 1]};
      }
    }
    return todo;  
  }));
}

const handleDelete = (id) => {
  setTodos(todos.filter(todo => todo.id !== id));
}

const handleDragStart = (e, status, id) => {
  e.dataTransfer.setData("task", JSON.stringify({ status, id }));
}
const handleOnDrop = (e, title) => {
  e.preventDefault();
  try {
    const data = e.dataTransfer.getData("task");
    if (!data) return;
    const taskData = JSON.parse(data);
    const { id, status } = taskData;
    if(title !== status) {
      setTodos(todos.map(todo => {
        if(todo.id === id) {
          return {...todo, status: title};
        }
        return todo;
      }));
    }
  } catch (error) {
    console.error("Error parsing drag data:", error);
  }
}
  return <>
   <h2>To Do List</h2>

  <section>

    <div>
      <input type="text" placeholder="Enter new task" onChange={(e) => setNewTask(e.target.value)} />
      <button onClick={handleAddTodo}>Add Task</button>
    </div>
    
    <div className="todo-board row">
      {STATUS.map((status) => {
        const statusTodos = todos.filter((todo) => todo.status === status);
        return (
          <BoardColumn key={status} title={status} todos={statusTodos} onMoveForward={handleMoveForward} onMoveBackward={handleMoveBackward} onDelete={handleDelete} handleDragStart={handleDragStart} handleOnDrop ={handleOnDrop}/>
        );
      })}
      
    </div>

  </section>
  </>;
}
export default ListPage;