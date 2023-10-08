import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const AddTodo = () => {
    const [desc, setDesc] = useState("");

    const dispatch = useDispatch();
    const todo = useSelector((state) => state.todo.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo({ id: todo[todo.length - 1].id + 1, desc, completed: false }));
        setDesc("");
      };

  return (
    <>
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
    </>
  );
};

export default AddTodo;
