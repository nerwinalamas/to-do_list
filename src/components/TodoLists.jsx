import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoLists = ({ showData }) => {
  const todo = useSelector((state) => state.todo.value);

  return (
    <>
      <div className="max-h-96 h-96 overflow-auto flex flex-col gap-4 mt-3 p-2 rounded-lg scroll-smooth select-none">
        {showData.length === 0 ? (
          <p>No data found</p>
        ) : (
          showData.map((t) => {
            return (
              <TodoItem
                key={t.id}
                id={t.id}
                completed={t.completed}
                desc={t.desc}
              />
            );
          })
        )}
      </div>
    </>
  );
};

export default TodoLists;
