import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    todos:[]
}

const TodoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        AddTodo:(state, action)=>{
            state.todos.push(action.payload);
            console.log('Action', action.payload);
        },
        DeleteTodo:(state, action)=>{
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
        },
        ClearTodos:(state, action)=>{
            state.todos = []
        }
    }
})
console.log('Action', TodoSlice);

export const {AddTodo, DeleteTodo, ClearTodos} = TodoSlice.actions;

export default TodoSlice.reducer;