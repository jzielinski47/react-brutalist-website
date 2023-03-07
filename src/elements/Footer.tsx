import React from 'react'
import { Link } from 'react-router-dom';
import { CONTENT as content } from '../assets/content';

const Footer = () => {
    return (
        <footer>
            <Link to="https://github.com/jzielinski47">{content.footer.content}</Link>
        </footer>
    )
}

export default Footer