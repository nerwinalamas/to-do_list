import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../features/todo/todoSlice";
import TodoItem from "./TodoItem";
import { TiDelete } from "react-icons/ti";


const TodoLists = () => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todo.value);

  const handleDelete = (id) => {
    dispatch(deleteTodo({ id }));
  };

  return (
    <>
      <div className="max-h-96 h-96 overflow-auto flex flex-col gap-4 mt-3 p-2 rounded-lg">
        {todo &&
          todo.map((t) => {
            return (
              <div
                key={t.id}
                className="w-full text-lg flex items-center justify-between"
              >
                <TodoItem id={t.id} completed={t.completed} desc={t.desc} />
                <div className="flex gap-2 text-2xl text-slate-800">
                  <TiDelete onClick={() => handleDelete(t.id)} />
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default TodoLists;
