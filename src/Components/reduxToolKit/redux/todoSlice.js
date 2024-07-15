import { createSlice } from "@reduxjs/toolkit";

const initialState={
  todo:[],
  toggle:false,
}


const TodoSlice = createSlice({
  name: "todo",
  initialState,

  reducers: {
    addTodos: (state, action) => {
      state.todo.push(action.payload);
    },
    deleteTodo:(state,action)=>{


      return state.todo.filter(val=>val.id!==action.payload)

    },
    isToggle:(state,action)=>{
      state.toggle=true
    },
    updateTodo:(state,action)=>{

      
    }
,

  },
});

export const { addTodos ,deleteTodo,isToggle,updateTodo} = TodoSlice.actions;
export default TodoSlice.reducer;
