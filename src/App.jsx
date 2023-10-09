import { useSelector } from "react-redux";
import AddTodo from "./components/AddTodo";
import TodoLists from "./components/TodoLists";
import { FiMoreHorizontal } from "react-icons/fi";
import { useState } from "react";

const App = () => {
  const [togglePost, setTogglePost] = useState(false);
  const [filterByCategory, setFilterByCategory] = useState("");
  const [isSearching, setIsSearching] = useState("");
  const [toggleSearch, setToggleSearch] = useState(false);

  const todo = useSelector((state) => state.todo.value);

  const pendingTask = () => {
    const todos = todo.filter((t) => t.completed !== true);
    return todos.length;
  };

  const completedTask = () => {
    const todos = todo.filter((t) => t.completed !== false);
    return todos.length;
  };

  const handleBtnPost = () => {
    setTogglePost((prevState) => !prevState);
  };

  const fields = ["desc"];

  const showData = todo.filter((t) => {
    if (filterByCategory === "pending") {
      return t.completed !== true;
    } else if (filterByCategory === "completed") {
      return t.completed !== false;
    } else if (isSearching) {
      return fields.some((task) =>
        t[task].toLowerCase().includes(isSearching.toLowerCase())
      );
    } else {
      return t;
    }
  });

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching ...");
  };

  return (
    <>
      <div className="w-screen h-screen flex flex-col items-center justify-center">
        <div className="w-80 h-5/6 md:w-96 mt-10 p-3 flex flex-col gap-2 rounded-lg relative">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold select-none">To-do list</h1>
            <FiMoreHorizontal
              title="Filter by category"
              className="text-2xl hover:cursor-pointer"
              onClick={handleBtnPost}
            />
          </div>
          {togglePost && (
            <>
              <div className="w-36 p-5 z-10 rounded-md bg-white absolute right-10 top-10 outline outline-1 outline-slate-800">
                <p
                  className={`${
                    filterByCategory === "pending" ||
                    filterByCategory === "completed"
                      ? "hidden"
                      : "cursor-pointer hover:underline"
                  }`}
                  onClick={() => {
                    setToggleSearch((prevState) => !prevState),
                    setTogglePost(false);
                  }}
                >
                  {toggleSearch ? "Add to-do" : "Search"}
                </p>
                <p
                  className={`${toggleSearch ? "hidden" : "cursor-pointer hover:underline"}`}
                  onClick={() => {
                    setFilterByCategory("pending"), setTogglePost(false);
                  }}
                >
                  Pending
                </p>
                <p
                  className={`${toggleSearch ? "hidden" : "cursor-pointer hover:underline"}`}
                  onClick={() => {
                    setFilterByCategory("completed"), setTogglePost(false);
                  }}
                >
                  Completed
                </p>
                <p
                  className="cursor-pointer hover:underline"
                  onClick={() => {
                    setFilterByCategory("todos"), setTogglePost(false), setToggleSearch(false);
                  }}
                >
                  All task
                </p>
              </div>
            </>
          )}

          {toggleSearch ? (
            <form onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Search..."
                value={isSearching}
                onChange={(e) => setIsSearching(e.target.value)}
                className="w-64 h-12 md:w-80 rounded-lg px-3 outline outline-1 outline-slate-800"
              />
            </form>
          ) : (
            <AddTodo />
          )}
          <TodoLists showData={showData} />
          <div className="flex flex-col gap-1 mt-5 text-sm">
            <p>Pending task: {pendingTask()}</p>
            <p>Completed task: {completedTask()}</p>
            <p>Total task: {todo.length}</p>
          </div>
        </div>
        <p className="text-slate-800 text-xs font-medium my-10">
          Developed by: Nerwin Alamas
        </p>
      </div>
    </>
  );
};

export default App;
