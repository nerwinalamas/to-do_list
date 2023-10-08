import { createSlice } from "@reduxjs/toolkit";

// const dummyData = [ 
//   {
//     id: 1,
//     desc: "Test 1",
//     completed: true,
//   },
//   {
//     id: 2,
//     desc: "Test 2",
//     completed: false,
//   },
//   {
//     id: 3,
//     desc: "Test 3",
//     completed: true,
//   },
// ]

const initialState = {
  // value: dummyData,
  value: []
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.value.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.value = state.value.filter((t) => t.id !== action.payload.id);
    },
    isCompleteTodo: (state, action) => {
      const index = state.value.findIndex((t) => t.id === action.payload.id);
      state.value[index].completed = action.payload.completed;
    },
    updateTodo: (state, action) => {
      state.value.map((t) => {
        if (t.id === action.payload.id) {
          t.desc = action.payload.desc;
        }
      });
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, isCompleteTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
