import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import NavigationItem from '../components/NavigationItem';

const Header = ({ title, navigation }: { title: string; navigation: any[] }) => {

    return (
        //  <motion.header animate={{ scale: 1 }} initial={{ scale: 0 }}>
        <motion.header >
            <h2>{title}</h2>
            <nav>
                {navigation.map((nav: { title: string; href: string; }, i: number) => <NavigationItem key={i} title={nav.title} href={nav.href} />)}

            </nav>
        </motion.header>
    )
}

export default Header