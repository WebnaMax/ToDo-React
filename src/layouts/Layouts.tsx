import { Outlet } from "react-router-dom"
import { Header } from "../components/header/header"

export const Layouts = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}