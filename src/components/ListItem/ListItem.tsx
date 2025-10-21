import { ToDo } from "../../models/ToDoItem"
import cl from './ListItem.module.scss'

export const ListItem = ({ todo }: { todo: ToDo }) => {
    return (
        <a
            href={`/app/list/${todo.id}`}
            target="_blank"
            className={`${cl.link} ${todo.isDone ? cl.done : cl.notDone}`}
        >{todo.text}</a>
    )
}