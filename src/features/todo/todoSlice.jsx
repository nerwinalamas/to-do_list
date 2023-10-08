import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [
    {
      id: 1,
      desc: "Test 1",
      completed: true
    },
    {
      id: 2,
      desc: "Test 2",
      completed: false
    },
    {
      id: 3,
      desc: "Test 3",
      completed: true
    },
  ],
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
    }
  },
});

export const { addTodo, deleteTodo, updateTodo, isCompleteTodo } = todoSlice.actions;

export default todoSlice.reducer;