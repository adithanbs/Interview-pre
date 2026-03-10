import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: []
};

const STATUS = ["NEW", "IN_PROGRESS", "TESTING", "COMPLETED"];


const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({
                id: crypto.randomUUID(),
                title: action.payload,
                status: STATUS[0]
            });
        }
    }
});
export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;