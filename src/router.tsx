import { createBrowserRouter } from "react-router-dom";
import { Layouts } from "./layouts/Layouts";
import { ToDo } from "./models/ToDoItem";
import { NotFound } from "./pages/404";
import { ViewList } from "./pages/ViewList";
import { ViewListItem } from "./pages/ViewListItem";
import { ToDoListPage } from "./pages/ToDoListPage";
// import path from "path";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layouts />,
        errorElement: <NotFound />,
        children: [
            { path: '/', element: <ToDoListPage /> },
            { path: '/list/', element: <ViewList /> },
            { path: '/list/:id', element: <ViewListItem /> },
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
])