import { useDispatch, useSelector } from "react-redux";
import { Form } from "../components/form/Form"
import { ToDoList } from "../components/ToDoList/ToDoList"
import { ToDo } from "../models/ToDoItem";
import { RootState } from "../store";
import { createAction, deleteAction, updateAction } from "../feature/todoList";

export const ToDoListPage = () => {
    // const [todos, setTodos] = useState<ToDo[]>([]);

    const todoList = useSelector((state: RootState) => state.todoList.todos);
    const dispatch = useDispatch();

    const createNewToDo = (text: string) => {
        // const newTodo: ToDo = {
        //     id: todos.length,
        //     text: text,
        //     isDone: false,
        // }
        // setTodos([...todos, newTodo]);

        dispatch(createAction(text));
    }

    const updateToDo = (toDoItem: ToDo) => {
        // const newTodos = todos.map((item) => {
        //     if (item.id === toDoItem.id) {
        //         item.isDone = !item.isDone;
        //     }
        //     return item;
        // })
        // setTodos(newTodos);

        dispatch(updateAction(toDoItem));
    }

    const deleteToDo = (toDoItem: ToDo) => {
        // const newTodos = todos.filter((item) => item.id !== toDoItem.id);
        // setTodos(newTodos);

        dispatch(deleteAction(toDoItem));
    }

    return (
        <>
            <Form createNewToDo={createNewToDo} />
            <ToDoList todos={todoList} updateToDo={updateToDo} deleteToDo={deleteToDo} />
        </>
    )
}