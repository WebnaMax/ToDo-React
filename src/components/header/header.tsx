import { NavLink } from 'react-router'
// import { HomePage } from '../../pages/HomePage'
// import { ToDoListPage } from '../../pages/ToDoListPage'
import cl from './header.module.scss'

export const Header = () => {
    const getActiveClass = ({ isActive }: { isActive: boolean }): string => {
        return isActive ? `${cl.active} ${cl.link}` : cl.link;
    }

    return (
        <header className={cl.header}>
            <div className={cl.container}>
                {/* <a href="/" className={cl.link}>Home</a>
                <a href="/todo" className={cl.link}>ToDo</a> */}
                <NavLink to="/" className={getActiveClass}>ToDo</NavLink>
                <NavLink to="/list" className={getActiveClass}>List</NavLink>
            </div>
        </header>
    )
}