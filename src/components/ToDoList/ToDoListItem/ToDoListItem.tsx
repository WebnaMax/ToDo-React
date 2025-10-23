import { ToDo } from '../../../models/ToDoItem'
import { ToDoItem, ToDoItemControl, ToDoItemControls, ToDoItemText } from './ToDoListItem.styled'

import checkIcon from '../../../assets/images/check.png';
import uncheckIcon from '../../../assets/images/uncheck.png';
import trashIcon from '../../../assets/images/trash.png';

export const ToDoListItem = (props: { ToDoItem: ToDo, updateToDo: Function, deleteToDo: Function }) => {
    return (
        <ToDoItem>
            <ToDoItemText>{props.ToDoItem.text}</ToDoItemText>
            <ToDoItemControls>
                <ToDoItemControl
                    onClick={() => props.deleteToDo(props.ToDoItem)}
                    icon={trashIcon}
                ></ToDoItemControl>
                <ToDoItemControl
                    onClick={() => props.updateToDo(props.ToDoItem)}
                    icon={props.ToDoItem.isDone ? checkIcon : uncheckIcon}
                ></ToDoItemControl>
            </ToDoItemControls>
        </ToDoItem>
    )
}