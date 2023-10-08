import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "./features/todo/todoSlice";
import { TiDelete } from "react-icons/ti";

const App = () => {
  const [desc, setDesc] = useState("");

  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todo.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo({ id: todo[todo.length - 1].id + 1, desc }));
    setDesc("");
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo({ id }));
  };

  return (
    <>
      <div className="w-screen h-screen flex items-start justify-center">
        <div className="w-80 h-5/6 md:w-96 mt-10 p-3 flex flex-col gap-2 rounded-lg">
          <h1 className="text-3xl font-bold">To-do list</h1>
          <form onSubmit={handleSubmit} className="flex gap-1">
            <input
              type="text"
              placeholder="Add to-do"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className="w-64 h-12 md:w-80 rounded-lg px-3 outline outline-1 outline-slate-800"
              required
            />
            <button className="w-20 h-12 rounded-lg bg-slate-800 text-slate-100">
              Add
            </button>
          </form>
          <div className="max-h-96 h-96 overflow-auto flex flex-col gap-4 mt-3 p-2 rounded-lg">
            {todo &&
              todo.map((t) => {
                return (
                  <div
                    key={t.id}
                    className="w-full text-lg flex items-center justify-between"
                  >
                    <p>{t.desc}</p>
                    <div className="flex gap-2 text-2xl text-slate-800">
                      <TiDelete onClick={() => handleDelete(t.id)} />
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
