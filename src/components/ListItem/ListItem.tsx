import { ToDo } from "../../models/ToDoItem"
import cl from './ListItem.module.scss'

export const ListItem = ({ todo }: { todo: ToDo }) => {
    return (
        <a
            href={`/list/${todo.id}`}
            target="_blank"
            rel="noreferrer"
            className={`${cl.link} ${todo.isDone ? cl.done : cl.notDone}`}
        >{todo.text}</a>
    )
}