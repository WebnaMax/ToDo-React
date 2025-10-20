import { ToDoListItem } from "./ToDoListItem/ToDoListItem"
import './ToDoList.scss'
import { ToDo } from "../../models/ToDoItem"


// type FirstType = string | number
// type FirstType = 'my variable' | number

// interface Human {
//     name: string;
// }

// interface Man extends Human {
//     sex: 'man';
// }

// interface Woman extends Human {
//     sex?: 'female';
// }



export const ToDoList = (props: { todos: ToDo[], updateToDo: Function, deleteToDo: Function }) => {

    // let myVar: FirstType = 'my variable'
    // myVar = 5

    // const human1: Man = {
    //     name: 'Alex',
    //     sex: 'man',
    // }

    // const human2: Woman = {
    //     name: 'Kate',
    //     // sex: 'female',
    // }

    const checkedList = () => {
        return props.todos
            .filter((item) => !item.isDone)
            .map((item, idx) => {
                return (
                    <ToDoListItem
                        ToDoItem={item}
                        key={idx}
                        updateToDo={props.updateToDo}
                        deleteToDo={props.deleteToDo}
                    />
                )
            })
    }

    const unCheckedList = () => {
        return props.todos
            .filter((item) => item.isDone)
            .map((item, idx) => {
                return (
                    <ToDoListItem
                        ToDoItem={item}
                        key={idx}
                        updateToDo={props.updateToDo}
                        deleteToDo={props.deleteToDo}
                    />
                )
            })
    }

    return (
        <div className="todo-container">
            <ul className="todo-list failed">
                {checkedList()}
                {/* <ToDoListItem ToDoItem={todo1} /> */}
            </ul>
            <ul className="todo-list completed">
                {/* <ToDoListItem ToDoItem={todo2} /> */}

                {unCheckedList()}

                {/* <li className="todo-list-item__wrapper">
                    <span>Вторая задача</span>
                    <div className="todo-list-item__buttons">
                        <button className="btn-trash"></button>
                        <button className="btn-uncheck"></button>
                    </div>
                </li> */}
            </ul>
        </div>
    )
}