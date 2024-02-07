import { createAction, createSlice } from "@reduxjs/toolkit";

// function todoReducer(){
//     let a = createAction("ADD_TODO")

//     console.log(a(1010));

    

// }
// export default todoReducer

const slice = createSlice({
    name:"Todos",
    initialState:{
        todos:[
            {id:1,title:"wqsdf", completed:false},
            {id:2,title:"wqdqwdqwsdf", completed:false},
            
        ]
    },
    reducers:{
        addTodo:(state,action)=> {
            let todo = {
                id:state.todos.length +1,
                title:action.payload,
                completed:false
            }
            state.todos.push(todo)
        }
    }

})
export const {addTodo} = slice.actions
console.log(addTodo());
export default slice.reducer