import { ToDo } from '../../../models/ToDoItem'
import './ToDoListItem.scss'

export const ToDoListItem = (props: { ToDoItem: ToDo, updateToDo: Function, deleteToDo: Function }) => {
    return (
        <li className="todo-list-item__wrapper">
            <span>{props.ToDoItem.text}</span>
            <div className="todo-list-item__buttons">
                <button
                    className="btn-trash"
                    onClick={() => props.deleteToDo(props.ToDoItem)}
                ></button>
                <button
                    className={props.ToDoItem.isDone ? "btn-check" : "btn-uncheck"}
                    onClick={() => props.updateToDo(props.ToDoItem)}
                ></button>
            </div>
        </li>
    )
}