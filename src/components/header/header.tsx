import cl from './header.module.scss'

export const Header = () => {
    return (
        <header className={cl.header}>
            <div className={cl.container}>
                <a href="/" className={cl.link}>ToDo</a>
            </div>
        </header>
    )
}