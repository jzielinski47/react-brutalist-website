import React from 'react'
import { Link } from 'react-router-dom';
import { CONTENT as content } from '../assets/content';

const Footer = () => {
    return (
        <footer>
            <Link to="https://github.com/jzielinski47"><h2>{content.footer.content}</h2></Link>
        </footer>
    )
}

export default Footer