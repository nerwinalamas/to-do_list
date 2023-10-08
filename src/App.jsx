import AddTodo from "./components/AddTodo";
import TodoLists from "./components/TodoLists";

const App = () => {
  return (
    <>
      <div className="w-screen h-screen flex items-start justify-center">
        <div className="w-80 h-5/6 md:w-96 mt-10 p-3 flex flex-col gap-2 rounded-lg">
          <h1 className="text-3xl font-bold">To-do list</h1>
          <AddTodo />
          <TodoLists />
        </div>
      </div>
    </>
  );
};

export default App;
