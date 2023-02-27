import React from 'react'

const Header = ({ title, navigation }: { title: string; navigation: any[] }) => {
    return (
        <header>
            <h2>{title}</h2>
            <nav>
                {navigation.map((nav: { title: string }, i: number) => (
                    <li key={i}>
                        <h2>{nav.title}</h2>
                    </li>
                ))}
            </nav>
        </header>
    )
}

export default Header