import { Header } from "../components/header/header"
import { Form } from "../components/form/Form"
import { ToDoList } from "../components/ToDoList/ToDoList"
import { ToDo } from "../models/ToDoItem";
import { useState } from "react";
import { log } from "console";


export const ToDoListPage = () => {
    const [todos, setTodos] = useState<ToDo[]>([]);

    const createNewToDo = (text: string) => {
        const newTodo: ToDo = {
            id: todos.length,
            text: text,
            isDone: false,
        }
        setTodos([...todos, newTodo]);
    }

    const updateToDo = (toDoItem: ToDo) => {
        const newTodos = todos.map((item) => {
            if (item.id === toDoItem.id) {
                item.isDone = !item.isDone;
            }
            return item;
        })
        setTodos(newTodos);
    }

    const deleteToDo = (toDoItem: ToDo) => {
        const newTodos = todos.filter((item) => item.id !== toDoItem.id);
        setTodos(newTodos);
    }

    return (
        <>
            <Header />
            <Form createNewToDo={createNewToDo} />
            <ToDoList todos={todos} updateToDo={updateToDo} deleteToDo={deleteToDo} />
        </>
    )
}