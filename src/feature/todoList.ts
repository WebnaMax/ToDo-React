import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
// import type { RootState } from '../store'
import { ToDo } from '../models/ToDoItem'

interface TodoState {
    todos: ToDo[];
}

const initialState: TodoState = {
    todos: [],
}

export const todoSlice = createSlice({
    name: 'todoList',
    initialState,
    reducers: {
        createAction: (state, action: PayloadAction<string>) => {
            const newTodo: ToDo = {
                id: state.todos.length,
                text: action.payload,
                isDone: false,
            }
            state.todos = [...state.todos, newTodo];
            // setTodos([...todos, newTodo]);
        },
        updateAction: (state, action: PayloadAction<ToDo>) => {
            const newTodos = state.todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    todo.isDone = !todo.isDone;
                }
                return todo;
            })
            state.todos = newTodos;
        },
        deleteAction: (state, action: PayloadAction<ToDo>) => {
            const newTodos = state.todos.filter((item) => item.id !== action.payload.id);
            state.todos = newTodos;
        },
    },
})

export const { createAction, updateAction, deleteAction } = todoSlice.actions

// export const selectCount = (state: RootState) => state.counter.value

export default todoSlice.reducer