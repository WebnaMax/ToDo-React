import { Header } from "../components/header/header"
import { Form } from "../components/form/Form"
import { ToDoList } from "../components/ToDoList/ToDoList"

export const ToDoListPage = () => {
    return (
        <>
            <Header />
            <Form />
            <ToDoList />
        </>
    )
}