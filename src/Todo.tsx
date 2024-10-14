import { useState } from "react";
import { addTodo, toggleComplete, deleteTodo, initialState } from './redux/todoSlice.ts'
import { useAppDispatch, useAppSelector } from "./redux/hooks.ts";

const Todo = () => {
  const [text, setText] = useState("");
  const todos = useAppSelector(state => state.todos)
  const dispatch = useAppDispatch()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }
  const handleAddTodo = () => {
    if (text) {
      dispatch(addTodo(text))
    }
  }

  const handToggleComplete = (id: number) => {
    dispatch(toggleComplete(id))
  }
  const handleDeleteTodo = (id: number) => {
    dispatch(deleteTodo(id))
  }
  return <div>
    <input type="text" value={text} onChange={(e) => (handleInputChange(e))} />
    <button onClick={handleAddTodo}> Add Todo</button>
    <ul>
      {" "}
      {todos.map((todo: initialState) => (
        <li
          key={todo.id}
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
          }}
        >
          {todo.text}{" "}
          <button onClick={() => handToggleComplete(todo.id)}>
            {" "}
            {todo.completed ? "Mark Incomplete" : "Mark Complete"}{" "}
          </button>{" "}
          <button onClick={() => handleDeleteTodo(todo.id)}> Delete </button>{" "}
        </li>
      ))}{" "}
    </ul>
  </div>;
};

export default Todo;
