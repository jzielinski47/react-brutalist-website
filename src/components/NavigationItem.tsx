import React from 'react'
import { Link } from 'react-router-dom';

const NavigationItem = ({ title, href }: { title: string; href: string; }) => {
    return (
        <li>
            <Link to={href}>
                <h2>{title}</h2>
            </Link>
        </li>
    )
}

export default NavigationItem