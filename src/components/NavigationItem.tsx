import React from 'react'

const NavigationItem = ({ title, href }: { title: string; href: string; }) => {
    return (
        <li>

            <h2>{title}</h2>
        </li>
    )
}

export default NavigationItem