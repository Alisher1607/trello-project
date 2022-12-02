import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addCard(state, action) {
      state.todos.push(action.payload);
    },

    addSubtask(state, action) {
      const newTodo = state.todos.find(
        (item) => item.id === action.payload.mainId
      );
      newTodo.subtask.push(action.payload);
    },

    deleteCard(state, action) {
      state.todos = state.todos.filter((card) => card.id !== action.payload);
    },

    deleteSub(state, action) {
      const deleteCard = state.todos.find(
        (item) => item.id === action.payload.mainId
      );
      deleteCard.subtask = deleteCard.subtask.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const { addCard, addSubtask, deleteCard, deleteSub } = todoSlice.actions;
export default todoSlice.reducer;
