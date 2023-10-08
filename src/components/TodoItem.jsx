import { useDispatch, useSelector } from "react-redux";
import { isCompleteTodo } from "../features/todo/todoSlice";

const TodoItem = ({ id, desc, completed}) => {

  const dispatch = useDispatch();

  const handleToggleComplete = (id) => {
    dispatch(isCompleteTodo({id, completed: !completed}))
  };

  return (
    <div className="flex gap-2">
      <input type="checkbox" id={`todo-${id}`} name="todo" checked={completed} onChange={() => handleToggleComplete(id)} />
      <label htmlFor={`todo-${id}`} className={completed ? "line-through" : "no-underline"} >{desc}</label>
    </div>
  );
};

export default TodoItem;
