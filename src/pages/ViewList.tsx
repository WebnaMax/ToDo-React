import { useSelector } from "react-redux";
import { ListItem } from "../components/ListItem/ListItem"
import { ToDo } from "../models/ToDoItem"
import { RootState } from "../store";

export const ViewList = () => {
    const todoList = useSelector((state: RootState) => state.todoList.todos);

    return (
        <div className="container">
            {
                todoList.map((todo: ToDo, idx) => {
                    return <ListItem key={idx} todo={todo} />
                })
            }
        </div>
    )
}