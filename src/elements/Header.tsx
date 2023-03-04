import React from 'react'
import { motion } from 'framer-motion';

const Header = ({ title, navigation }: { title: string; navigation: any[] }) => {
    return (
        //  <motion.header animate={{ scale: 1 }} initial={{ scale: 0 }}>
        <motion.header >
            <h2>{title}</h2>
            <nav>
                {navigation.map((nav: { title: string }, i: number) => (
                    <li key={i}>
                        <h2>{nav.title}</h2>
                    </li>
                ))}
            </nav>
        </motion.header>
    )
}

export default Header