import { useDispatch } from "react-redux";
import {
  deleteTodo,
  isCompleteTodo,
  updateTodo,
} from "../features/todo/todoSlice";
import { TiDelete } from "react-icons/ti";
import { AiFillDelete } from "react-icons/ai";
import { PiNotePencilDuotone } from "react-icons/pi";
import { BsCheckLg } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

const TodoItem = ({ id, desc, completed }) => {
  const [newDescId, setNewDescId] = useState(null);
  const [newDesc, setNewDesc] = useState("");

  const dispatch = useDispatch();

  const handleToggleComplete = (id) => {
    dispatch(isCompleteTodo({ id, completed: !completed }));
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo({ id }));
  };

  const handleUpdateClick = (itemId, itemDesc) => {
    setNewDescId(itemId);
    setNewDesc(itemDesc);
  };

  const handleUpdate = (e, id, updatedDesc) => {
    e.preventDefault();
    dispatch(updateTodo({ id, desc: updatedDesc }));
    setNewDescId(null);
  };

  const handleUpdateCancel = () => {
    setNewDescId(null);
    setNewDesc("");
  };

  return (
    <>
      <div className="w-full text-lg flex items-center justify-between">
        {newDescId === id ? (
          <form
            onSubmit={(e) => handleUpdate(e, id, newDesc)}
            className="w-full flex justify-between items-center gap-1"
          >
            <input
              type="text"
              value={newDesc}
              onChange={(e) => setNewDesc(e.target.value)}
              className="w-56 md:w-64 px-1 outline-slate-800 outline-1 outline rounded-md flex-1"
            />
            <div className="flex gap-2 text-2xl font-bold text-slate-800">
              <BsCheckLg
                title="Save"
                onClick={(e) => handleUpdate(e, id, newDesc)}
                className="cursor-pointer"
              />
              <RxCross2
                title="Cancel"
                onClick={handleUpdateCancel}
                className="cursor-pointer"
              />
            </div>
          </form>
        ) : (
          <>
            <div className="flex gap-2">
              <input
                type="checkbox"
                id={`todo-${id}`}
                checked={completed}
                onChange={() => handleToggleComplete(id)}
                className="accent-slate-800"
              />
              <label
                htmlFor={`todo-${id}`}
                className={completed ? "line-through" : "no-underline"}
              >
                {desc}
              </label>
            </div>
            <div className="flex gap-2 text-2xl text-slate-800">
              <PiNotePencilDuotone
                title="Edit"
                onClick={() => handleUpdateClick(id, desc)}
                className="cursor-pointer"
              />
              <AiFillDelete
                title="Delete"
                onClick={() => handleDelete(id)}
                className="cursor-pointer"
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default TodoItem;
